import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage'

import { NavLink } from 'react-router-dom';



function Routers ()  {
    return(

        <Router>
            <ul class="navlinks">
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
            <Switch>
                <Route exact path='/'><HomePage /></Route>
            </Switch>
        </Router>
    )
};
export default Routers;
