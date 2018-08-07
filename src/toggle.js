import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggle: true};
        this.clickHandle = this.clickHandle.bind(this);
    }
    clickHandle() {
        this.setState(
            prevState => ({
                isToggle: !prevState.isToggle
            })
        )
    }
    render() {
        return (
            <button onClick = {this.clickHandle}>
                {this.state.isToggle ? 'NO' : 'OFF'}
            </button>
        )
    }
}

export default Toggle;