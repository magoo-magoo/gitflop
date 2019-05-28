import React, { ChangeEvent } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Fab, MenuItem, FormControl } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import {
    createBranch,
    queryOrganizationRepository,
    queryAllOrganizationBranches,
} from '../../github/github'
import { getSettings } from '../../configuration/configuration'
import { Branch, Repository } from '../../github/branch'

interface State {
    newBranchName: string
    selectedOrganization: string
    availableRepositories: Repository[]
    availableBranches: Branch[]
    selectedRepositoryName: string
    open: boolean
    selectedBaseBranch: string
}

type Props = {
    onCreated: () => Promise<void>
}

export default class CreateRelease extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            open: false,
            newBranchName: 'release/NEW_VERSION',
            availableRepositories: [],
            availableBranches: [],
            selectedOrganization: '',
            selectedRepositoryName: '',
            selectedBaseBranch: '',
        }
    }
    handleClickOpen = () => {
        this.setState({ open: true })
    }

    async componentDidMount() {
        this.setState({ selectedOrganization: getSettings().organizations[0] })
        await this.updateAvailableRepositories(getSettings().organizations[0])
    }

    handleClose = () => {
        this.setState({ open: false })
    }
    handleOrganizationChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedOrganization: e.target.value })
        await this.updateAvailableRepositories(e.target.value)
    }
    handleRepositoryChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        const repositoryName = e.target.value
        this.setState({ selectedRepositoryName: repositoryName })
        const branches = await queryAllOrganizationBranches([
            this.state.selectedOrganization,
        ])
        const repoBranches = branches.filter(
            b => b.repository.name === repositoryName
        )
        this.setState({
            availableBranches: repoBranches,
            selectedBaseBranch: '',
        })
    }
    handleBaseBranchChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        this.setState({ selectedBaseBranch: e.target.value })
    }

    private updateAvailableRepositories = async (org: string) => {
        const availableRepositories = await queryOrganizationRepository(org)
        this.setState({
            availableRepositories,
            selectedBaseBranch: '',
            selectedRepositoryName: '',
        })
    }

    render() {
        const { onCreated } = this.props
        return (
            <div>
                <Fab
                    color="primary"
                    variant="extended"
                    aria-label="Create release"
                    onClick={this.handleClickOpen}
                >
                    <AddIcon />
                    Create release
                </Fab>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Create next release
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Create next release. May be a release or hotfix
                            branch. Choose your organization, repository and
                            branch name.
                        </DialogContentText>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                label="organization"
                                select={true}
                                value={this.state.selectedOrganization}
                                onChange={this.handleOrganizationChange}
                                inputProps={{
                                    name: 'organization',
                                    id: 'organization',
                                }}
                                fullWidth={true}
                            >
                                {getSettings().organizations.map((org, i) => (
                                    <MenuItem key={i} value={org}>
                                        {org}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                label="repository"
                                fullWidth={true}
                                select
                                value={this.state.selectedRepositoryName}
                                onChange={this.handleRepositoryChange}
                                inputProps={{
                                    name: 'repository',
                                    id: 'repository',
                                }}
                            >
                                {this.state.availableRepositories.map(
                                    (repo, i) => (
                                        <MenuItem key={i} value={repo.name}>
                                            {repo.name}
                                        </MenuItem>
                                    )
                                )}
                            </TextField>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <TextField
                                label="baseBranch"
                                fullWidth={true}
                                select
                                value={this.state.selectedBaseBranch}
                                onChange={this.handleBaseBranchChange}
                                inputProps={{
                                    name: 'baseBranch',
                                    id: 'baseBranch',
                                }}
                            >
                                {this.state.availableBranches.map(
                                    (branchName, i) => (
                                        <MenuItem
                                            key={i}
                                            value={branchName.name}
                                        >
                                            {branchName.name}
                                        </MenuItem>
                                    )
                                )}
                            </TextField>
                        </FormControl>
                        <br />
                        <br />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="branchName"
                            label="Branch name"
                            type="text"
                            fullWidth
                            value={this.state.newBranchName}
                            onChange={e =>
                                this.setState({ newBranchName: e.target.value })
                            }
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            onClick={async () => {
                                if (
                                    this.state.newBranchName &&
                                    this.state.selectedBaseBranch
                                ) {
                                    debugger;
                                    await createBranch(
                                        this.state.newBranchName,
                                        this.state.availableBranches.find(
                                            b =>
                                                b.name ===
                                                this.state.selectedBaseBranch
                                        )
                                    )
                                    await onCreated()
                                    this.handleClose()
                                }
                            }}
                            color="primary"
                        >
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
