import React from 'react'
import {
    setConfig,
    Configuration,
} from '../configuration/configuration'
import { TextField, Typography, Button } from '@material-ui/core'
import { RouteComponentProps } from '@reach/router'

export const style = {
    settings: {
        width: '100%',
    },
}

interface State {
    settingsValue: string
}
interface Props {
    settings: Configuration
}

export class Settings extends React.Component<
    RouteComponentProps & Props,
    State
> {
    constructor(props: RouteComponentProps & Props) {
        super(props)
        this.state = {
            settingsValue: JSON.stringify(props.settings),
        }
    }
    render() {
        const { settings } = this.props
        return (
            <>
                <Typography variant="h4">Settings</Typography>
                <TextField
                    id="outlined-multiline-static"
                    label="Settings"
                    multiline
                    rowsMax="20"
                    defaultValue={JSON.stringify(settings, null, 4)}
                    margin="normal"
                    variant="standard"
                    style={style.settings}
                    onChange={e =>
                        this.setState({ settingsValue: e.target.value })
                    }
                />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        setConfig(JSON.parse(this.state.settingsValue))
                        location.href = '/'
                    }}
                >
                    Save
                </Button>
            </>
        )
    }
}
