interface RefTarget {
    commitUrl: string
    abbreviatedOid: string
    oid: string
    id: string
    __typename: string
    message: string
    pushedDate: string
    treeUrl: string
}
interface RefNode {
    name: string
    id: string
    prefix: string
    target: RefTarget
    __typename: string
}
interface repoNode {
    name: string
    url: string
    refs: {
        nodes: RefNode[]
        __typename: string
    }
    __typename: string
}

interface Organization {
    name: string
    url: string
    avatarUrl: string
    repositories: {
        nodes: repoNode[]
    }
}

export interface QueryAllBranchesResponse {
    organization: Organization
}
