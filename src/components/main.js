import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Admin from './admin/admin'
import User from './user/user'
import Sidebar from './Sidebar/Sidebar'

const Main = () => {
    return (
        <div style={{fontFamily: 'Josefin Sans, sans-serif'}}>  
            <Sidebar />
            <Switch>
                <Route exact path="/user" component={User} />
                <Route exact path="/admin" component={Admin} />
                <Redirect from='/' to='/user'/>
            </Switch>
        </div>
    );
}

export default Main;