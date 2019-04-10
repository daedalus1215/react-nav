import React, {Component} from 'react';
// import './home.css';

export default class About extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = 'goldenrod';
    }


    render() {
        return <div>
                <h1>About</h1>
                <p>This is the About page</p>
            </div>
    }
}