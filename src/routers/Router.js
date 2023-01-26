import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage'
import Contact from '../components/Contact'


import { NavLink } from 'react-router-dom';
import '../styles/HomePage.css'


function Routers ()  {
    return(

        <Router>
            <div className="navlinks">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="projects">Projects</NavLink></li>
                    
                </ul>
            </div>
            <Switch>
                <Route exact path='/'><HomePage /></Route>
                <Route path='/about'></Route>
                <Route path='/contact'><Contact /></Route>
                <Route path='/projects'></Route>
            </Switch>
        </Router>
    )
};
export default Routers;
