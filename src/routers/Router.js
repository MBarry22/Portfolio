import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage'

import { NavLink } from 'react-router-dom';
import '../styles/HomePage.css'


function Routers ()  {
    return(

        <Router>
            <div className="navlinks">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="Projects">Projects</NavLink></li>
                </ul>
            </div>
            <Switch>
                <Route exact path='/'><HomePage /></Route>
                <Route exact path='/About'></Route>
                <Route exact path='/Projects'></Route>
            </Switch>
        </Router>
    )
};
export default Routers;
