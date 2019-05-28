import ApolloClient, { gql, ApolloQueryResult } from 'apollo-boost'
import { getSettings } from '../configuration/configuration'
import { Branch, Repository } from './branch'
import { QueryAllBranchesResponse } from './model'

let githubClient: ApolloClient<{}> | null = null

const createGithubClient = (token: string, uri: string) => {
    githubClient = new ApolloClient({
        uri,
        headers: {
            Authorization: `token ${token}`,
        },
    })
    githubClient.defaultOptions.query = {
        fetchPolicy: "no-cache"
    };
    return githubClient
}

export const getGithubClient = (token: string) =>
    githubClient !== null
        ? githubClient
        : createGithubClient(token, getSettings().githubApiGraphQl)

const match = (
    str: string,
    matcher: { [Symbol.match](string: string): RegExpMatchArray | null }
) => {
    const matchArray = str.match(matcher)
    if (matchArray && matchArray.length === 1) {
        return true
    }
    return false
}

const mapResponseToBranches = async (
    response: Promise<ApolloQueryResult<QueryAllBranchesResponse>>
) => {
    const result = new Array<Branch>()

    const responseData = await response
    responseData.data.organization.repositories.nodes.forEach(repo => {
        repo.refs.nodes.forEach(ref => {
            result.push({
                name: ref.name,
                lastCommitHash: ref.target.oid,
                lastMessage: ref.target.message,
                lastCommitShortHash: ref.target.abbreviatedOid,
                commitUrl: ref.target.commitUrl,
                pushedDate: ref.target.pushedDate,
                version: null,
                feature: null,
                gitflow: {
                    isFeature: match(ref.name, /feature\//),
                    isMaster: match(ref.name, /master/),
                    isHotfix: match(ref.name, /hotfix\//),
                    isRealease: match(ref.name, /release\//),
                    isDevelop: match(ref.name, /develop/),
                },
                repository: {
                    name: repo.name,
                    url: repo.url,
                    org: {
                        name: responseData.data.organization.name,
                        url: responseData.data.organization.url,
                        avatarUrl: responseData.data.organization.avatarUrl,
                        login: responseData.data.organization.login,
                    },
                },
            })
        })
    })

    return result
}

export const queryAllOrganizationBranches = async (orgs: string[]) => {
    if (!orgs || orgs.length === 0) {
        return []
    }
    let result = new Array<Branch>()

    for (let i = 0; i < orgs.length; i++) {
        const org = orgs[i]
        const branches = await queryOrganizationBranches(org)
        result = result.concat(branches)
    }

    return result
}

const organizationQuery = (organizationLogin: string) =>
    getGithubClient(getSettings().githubToken).query<QueryAllBranchesResponse>({
        query: gql`
{
organization(login: "${organizationLogin}") {
  name
  login
  url
  avatarUrl
  repositories(first: 100) {
    nodes {
      name
      url
      refs(first: 100, refPrefix: "refs/heads/") {
        nodes {
          name
          id
          prefix
          target {
            commitUrl
            abbreviatedOid
            oid
            id
            __typename
            ... on Commit {
              message
              pushedDate
              treeUrl
            }
          }
        }
      }
    }
  }
}
}  
`
    })

const queryOrganizationBranches = (organizationLogin: string) =>
    mapResponseToBranches(organizationQuery(organizationLogin))

export const createBranch = async (
    newBrancheName: string,
    baseBranch: Branch | undefined
) => {
    if (!baseBranch) {
        return
    }
    const result = await fetch(
        `${getSettings().githubApiUrl}/repos/${
            baseBranch.repository.org.login
        }/${baseBranch.repository.name}/git/refs`,
        {
            method: 'POST',
            body: JSON.stringify({
                ref: `refs/heads/${newBrancheName}`,
                sha: baseBranch.lastCommitHash,
            }),
            headers: { Authorization: `token ${getSettings().githubToken}` },
        }
    )
    console.log('createBranch', result)
}

const mapResponseToRepository = async (
    response: Promise<ApolloQueryResult<QueryAllBranchesResponse>>
) => {
    const result = new Array<Repository>()
    const responseData = await response
    responseData.data.organization.repositories.nodes.forEach(repo => {
        result.push({
            name: repo.name,
            url: repo.url,
            org: {
                name: responseData.data.organization.name,
                url: responseData.data.organization.url,
                avatarUrl: responseData.data.organization.avatarUrl,
                login: responseData.data.organization.login,
            },
        })
    })

    return result
}

export const queryOrganizationRepository = (organizationLogin: string) =>
    mapResponseToRepository(
        getGithubClient(getSettings().githubToken).query({
            query: gql`
{
    organization(login: "${organizationLogin}") {
      repositories(first: 100) {
        nodes {
          name
          url
        }
      }
    }
  }  
`,
        })
    )
