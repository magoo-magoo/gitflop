export interface Organisation {
    name: string
    login: string
    url: string
    avatarUrl: string
}

export interface Repository {
    name: string
    url: string
    org: Organisation
}

export interface Branch {
    repository: Repository
    name: string
    lastMessage: string
    lastCommitHash: string
    lastCommitShortHash: string
    commitUrl: string
    pushedDate: string
    version: string | null
    feature: string | null
    gitflow: GitFlow
}

export interface GitFlow {
    isRealease: boolean
    isHotfix: boolean
    isMaster: boolean
    isFeature: boolean
    isDevelop: boolean
}
