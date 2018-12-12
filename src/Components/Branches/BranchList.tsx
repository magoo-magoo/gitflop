import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import BranchRow from './BranchRow'
import { Branch } from '../../github/branch'

interface Props {
    branches: Branch[]
    title: string
}

export class BranchList extends React.Component<Props> {
    render() {
        const { branches, title } = this.props
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Typography variant="h6">{title}</Typography>
                        {branches.length === 0 ? (
                            <Typography>No branch</Typography>
                        ) : (
                            branches.map((branch, i) => (
                                <BranchRow branch={branch} key={i} />
                            ))
                        )}
                        {}
                    </Grid>
                </Grid>
            </div>
        )
    }
} 
