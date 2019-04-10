import React, {Component} from 'react';
// import './home.css';

export default class Home extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = 'tomato';
    }


    render() {
        return <div>
                <h1>My App</h1>
                <p>Home page.</p>
            </div>
    }
}