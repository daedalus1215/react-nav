import React, { Component } from 'react';

import './../styles.css';

import Nav from './Nav/Nav';
import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/About/About';

const BrowserRouter = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
// const Link = require('react-router-dom').Link;


export default class App extends Component {
    render() {
        return (
            <div id="app-container">
                <BrowserRouter>
                    <div>
                        <Nav />
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/contact" exact component={Contact}></Route>
                        <Route path="/about" component={About}></Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}