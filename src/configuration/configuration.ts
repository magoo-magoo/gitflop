const fromStorage = () => {
    const value = localStorage.getItem('relator-app-config')
    if (!value) {
        return {}
    }
    return JSON.parse(value)
}

export interface Configuration {
    githubToken: string
    githubApiGraphQl: string
    githubApiUrl: string
    organizations: string[]
}

let defaultConfig: Configuration = {
    githubToken: 'INSERT_YOUR_GITHUB_TOKEN',
    githubApiGraphQl: 'https://api.github.com/graphql',
    githubApiUrl: 'https://api.github.com',
    organizations: ['eflon'],
    ...fromStorage(),
}

export const getSettings = () => defaultConfig
export const setConfig = (value: Partial<Configuration>) => {
    defaultConfig = { ...defaultConfig, ...value }
    localStorage.setItem('relator-app-config', JSON.stringify(defaultConfig))
}
