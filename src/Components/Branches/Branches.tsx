import React from 'react'
import { Branch } from '../../github/branch'
import { queryAllOrganizationBranches } from '../../github/github'
import { BranchList } from './BranchList'
import { Grid, FormGroup, FormControlLabel, Switch } from '@material-ui/core'
import { RouteComponentProps } from '@reach/router'
import { getSettings } from '../../configuration/configuration'
import CreateRelease from './CreateRelease'

const style = {
    container: {
        padding: 16,
    },
}

type col =
    | boolean
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 'auto'
    | undefined
const xs = (nbElements: number, coef: number) => {
    return Math.round(
        72 / (nbElements % 2 === 0 ? nbElements + 1 : nbElements - 1) / coef
    ) as col
}

interface State {
    branches: Branch[]
    releases: boolean
    productions: boolean
    features: boolean
    developments: boolean
    others: boolean
    hotfix: boolean
}
export class Branches extends React.Component<RouteComponentProps, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            branches: [],
            releases: true,
            features: true,
            productions: true,
            developments: true,
            others: true,
            hotfix: true,
        }
    }
    public async componentDidMount() {
        await this.reload()
    }
    private reload = async () => {
        const branches = await queryAllOrganizationBranches(
            getSettings().organizations
        )
        this.setState({ branches: [...branches] })
    }

    public render() {
        let branchListCards: JSX.Element[] = []
        const columns: { key: string; branches: Branch[] }[] = []

        if (this.state.features) {
            columns.push({
                key: 'Features',
                branches: this.state.branches.filter(b => b.gitflow.isFeature),
            })
        }
        if (this.state.releases) {
            columns.push({
                key: 'Releases',
                branches: this.state.branches.filter(b => b.gitflow.isRealease),
            })
        }
        if (this.state.hotfix) {
            columns.push({
                key: 'Hotfixes',
                branches: this.state.branches.filter(b => b.gitflow.isHotfix),
            })
        }
        if (this.state.developments) {
            columns.push({
                key: 'Development',
                branches: this.state.branches.filter(b => b.gitflow.isDevelop),
            })
        }
        if (this.state.productions) {
            columns.push({
                key: 'Production',
                branches: this.state.branches.filter(b => b.gitflow.isMaster),
            })
        }
        if (this.state.others) {
            columns.push({
                key: 'Other',
                branches: this.state.branches.filter(
                    b =>
                        !b.gitflow.isMaster &&
                        !b.gitflow.isDevelop &&
                        !b.gitflow.isFeature &&
                        !b.gitflow.isHotfix &&
                        !b.gitflow.isRealease
                ),
            })
        }

        const nbColumns = columns.length

        branchListCards = columns.map(x => (
            <Grid
                key={x.key}
                item
                xs={xs(nbColumns, 1)}
                sm={xs(nbColumns, 2)}
                md={xs(nbColumns, 3)}
                lg={xs(nbColumns, 4)}
                xl={xs(nbColumns, 6)}
            >
                <BranchList title={x.key} branches={x.branches} />
            </Grid>
        ))

        return (
            <div style={style.container}>
                <CreateRelease onCreated={this.reload} />
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.features}
                                onChange={() => {
                                    this.setState({
                                        features: !this.state.features,
                                    })
                                }}
                                value="checkedA"
                            />
                        }
                        label="Features"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.releases}
                                onChange={() => {
                                    this.setState({
                                        releases: !this.state.releases,
                                    })
                                }}
                                value="checkedA"
                            />
                        }
                        label="Releases"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.hotfix}
                                onChange={() => {
                                    this.setState({
                                        hotfix: !this.state.hotfix,
                                    })
                                }}
                                value="checkedA"
                            />
                        }
                        label="Hotfixes"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.developments}
                                onChange={() => {
                                    this.setState({
                                        developments: !this.state.developments,
                                    })
                                }}
                                value="checkedA"
                            />
                        }
                        label="Developments"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.productions}
                                onChange={() => {
                                    this.setState({
                                        productions: !this.state.productions,
                                    })
                                }}
                                value="checkedA"
                            />
                        }
                        label="Production"
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.others}
                                onChange={() => {
                                    this.setState({
                                        others: !this.state.others,
                                    })
                                }}
                                value="checkedA"
                            />
                        }
                        label="Others"
                    />
                </FormGroup>
                <Grid container direction="row" spacing={32}>
                    {branchListCards}
                </Grid>
            </div>
        )
    }
}

export default Branches
