import React, { Component } from 'react';

import './nav.css';

const BrowserRouter = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Link = require('react-router-dom').Link;


export default class Nav extends Component {
    render() {
        return (
           <nav>
               <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
               </ul>
           </nav>
        );
    }
}