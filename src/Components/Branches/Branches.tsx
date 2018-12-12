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
        const result = await queryAllOrganizationBranches(
            getSettings().organizations
        )
        this.setState({ branches: result })
    }

    public render() {
        const branchListCards: JSX.Element[] = []

        if (this.state.features) {
            branchListCards.push(
                <Grid key="Features" item xs={12} sm={8} md={6} lg={4} xl={2}>
                    <BranchList
                        title="Features"
                        branches={this.state.branches.filter(
                            b => b.gitflow.isFeature
                        )}
                    />
                </Grid>
            )
        }
        if (this.state.releases) {
            branchListCards.push(
                <Grid key="Releases" item xs={12} sm={8} md={6} lg={4} xl={2}>
                    <BranchList
                        title="Releases"
                        branches={this.state.branches.filter(
                            b => b.gitflow.isRealease
                        )}
                    />
                </Grid>
            )
        }
        if (this.state.hotfix) {
            branchListCards.push(
                <Grid key="Hotfixes" item xs={12} sm={8} md={6} lg={4} xl={2}>
                    <BranchList
                        title="Hotfixes"
                        branches={this.state.branches.filter(
                            b => b.gitflow.isHotfix
                        )}
                    />
                </Grid>
            )
        }
        if (this.state.developments) {
            branchListCards.push(
                <Grid
                    key="Development"
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    lg={4}
                    xl={2}
                >
                    <BranchList
                        title="Development"
                        branches={this.state.branches.filter(
                            b => b.gitflow.isDevelop
                        )}
                    />
                </Grid>
            )
        }
        if (this.state.productions) {
            branchListCards.push(
                <Grid key="Production" item xs={12} sm={8} md={6} lg={4} xl={2}>
                    <BranchList
                        title="Production"
                        branches={this.state.branches.filter(
                            b => b.gitflow.isMaster
                        )}
                    />
                </Grid>
            )
        }
        if (this.state.others) {
            branchListCards.push(
                <Grid key="Other" item xs={12} sm={8} md={6} lg={4} xl={2}>
                    <BranchList
                        title="Other"
                        branches={this.state.branches.filter(
                            b =>
                                !b.gitflow.isMaster &&
                                !b.gitflow.isDevelop &&
                                !b.gitflow.isFeature &&
                                !b.gitflow.isHotfix &&
                                !b.gitflow.isRealease
                        )}
                    />
                </Grid>
            )
        }

        return (
            <div style={style.container}>
                <CreateRelease />
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
