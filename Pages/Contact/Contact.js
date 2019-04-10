import React, {Component} from 'react';
// import './home.css';

export default class Contact extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = 'papayawhip';
    }


    render() {
        return <div>
                <h1>Contact</h1>
                <p>If you need assistance call your admin</p>
            </div>
    }
}