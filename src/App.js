import React, { Component } from 'react'
import Mainrouter from './router/MainRouter'

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <Mainrouter></Mainrouter>
            </div>
        )
    }
}
