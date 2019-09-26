import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard";

const Routes = () => {
    return  ( 
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    )
}


export default Routes