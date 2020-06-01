import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoute from './auth/helper/PrivateRoute';
import AdminRoute from './auth/helper/AdminRoute';
import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path = '/' component = {Home}/>
                <Route exact path = '/signup' component = {Signup}/>
                <Route exact path = '/signin' component = {Signin}/>
                <PrivateRoute exact path = '/user/dashboard' component = {UserDashBoard}/>
                <AdminRoute exact path = '/admin/dashboard' component = {AdminDashBoard}/>
            </Switch>
        </Router>
    );
}

export default Routes;