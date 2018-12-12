import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles/colorManipulator'
import {
    withStyles,
    Theme,
    StyledComponentProps,
    StyleRules,
} from '@material-ui/core/styles'
import SettingsIcon from '@material-ui/icons/Settings'
import ExitIcon from '@material-ui/icons/ExitToApp'
import SearchIcon from '@material-ui/icons/Search'
import { Link, redirectTo, navigate } from '@reach/router'
import { setConfig } from '../configuration/configuration'
import { Button } from '@material-ui/core'

const styles = (theme: Theme): StyleRules => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
})

const SearchAppBar = (props: StyledComponentProps) => {
    const { classes } = props
    if (!classes) {
        return <></>
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        className={classes.title}
                        variant="h6"
                        color="inherit"
                        noWrap
                        onClick={() => navigate(process.env.PUBLIC_URL + '/')}
                    >
                        Git Flop
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    <IconButton
                        color="inherit"
                        aria-label="settings"
                        onClick={() =>
                            navigate(process.env.PUBLIC_URL + '/configuration')
                        }
                    >
                        <SettingsIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="settings"
                        onClick={() => {
                            setConfig({
                                githubToken: (null as unknown) as string,
                            })
                            location.reload()
                        }}
                    >
                        <ExitIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

SearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SearchAppBar)
