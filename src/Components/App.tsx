import * as React from 'react'
import { Component } from 'react'
import './App.css'
import { getSettings } from '../configuration/configuration'
import Branches from './Branches/Branches'
import SearchAppBar from './SearchAppBar'
import { Router } from '@reach/router'
import { Settings } from './Settings'

class App extends Component {

    componentDidCatch(e: any) {
        console.log(e)
    }

    render() {
        return (
            <div className="App">
                <SearchAppBar />
                <Router>
                    <Settings
                        path={process.env.PUBLIC_URL + '/configuration'}
                        settings={getSettings()}
                    />
                    <Branches path={process.env.PUBLIC_URL + '/'} />
                </Router>
            </div>
        )
    }
}

export default App
