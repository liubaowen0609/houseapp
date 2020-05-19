import React, { Component } from 'react'
import { HashRouter, Switch, Route} from 'react-router-dom'
import Login from '../pages/login/Login'
import Reg from '../pages/reg/Reg'
import Nav from '../pages/nav/Nav'
import City from '../pages/city/City'
import Choose from '../pages/choose/Choose'
import Error404 from '../pages/error/error404'

export default class MainRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {/* <Route path='/' exact component={Nav}></Route> */}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/reg' component={Reg}></Route>
                    <Route path='/' exact component={Nav}></Route>
                    <Route path='/city' component={City}></Route>
                    <Route path='/choose' component={Choose}></Route>
                    <Route component={Error404}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
