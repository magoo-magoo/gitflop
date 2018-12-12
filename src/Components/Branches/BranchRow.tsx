import React from 'react'
import { Branch } from '../../github/branch'
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Divider,
    ExpansionPanelActions,
    Button,
    Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const classes = {
    root: {
        width: '100%',
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    link: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}

interface Props {
    branch: Branch
}

const BranchRow: React.FC<Props> = ({ branch }) => {
    return (
        <div style={classes.root}>
            <ExpansionPanel defaultExpanded={false}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <div style={classes.column}>
                        <Typography>{branch.repository.name}</Typography>
                    </div>
                    <div style={classes.column}>
                        <Typography>{branch.name}</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={classes.details}>
                    <div style={classes.column}>
                        <Typography>
                            commit hash: {branch.lastCommitShortHash}
                        </Typography>
                    </div>
                    <div style={classes.column}>
                        <Typography>{branch.lastMessage}</Typography>
                    </div>
                    <div style={classes.column}>
                        <Typography variant="caption">
                            More info
                            <br />
                            <a
                                href={branch.repository.url}
                                style={classes.link}
                            >
                                Go to Github
                            </a>
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
                <Divider />
                {/* <ExpansionPanelActions>
                    <Button size="small">Cancel</Button>
                    <Button size="small" color="primary">
                        Save
                    </Button>
                </ExpansionPanelActions> */}
            </ExpansionPanel>
        </div>
    )
}

export default BranchRow
