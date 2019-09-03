import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Profile from '../components/profile';
import UpdateProfile from '../components/UpdateProfile';
/*import Footer from '../components/footer';*/


const Approuter = () => (
    <BrowserRouter>
        <Switch>
            <Route path = "/" component = {Profile} exact = {true}/>
            <Route path = "/profile/update" component = {UpdateProfile}/>
        </Switch>
    </BrowserRouter>
);

export default Approuter;