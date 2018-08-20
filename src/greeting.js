import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'; // ES6

// react运算符操作
function UserGreeting(props) {
    return <p> welcome back! </p>
}

function GuestGreeting(props) {
    return <p> please sign up! </p>
}

function LoginButton(props) {
    return <button onClick = {props.onClick}> login</button>
}
// {this.props.name}
function LogoutButton(props) {
    return <button onClick = {props.onclick}> logout  </button>
}

function Greeting(props) {
    const isLoggleIn = props.isLoggleIn;
    if(isLoggleIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggleIn: false};
        this.HandleLoginClick = this.HandleLoginClick.bind(this);
        this.HandleLogoutClick = this.HandleLogoutClick.bind(this);
    }
    HandleLoginClick() {
        this.setState({
            isLoggleIn: true
        })
    }
    HandleLogoutClick() {
        this.setState({
            isLoggleIn: false
        })
    }
    render() {
        const isLoggleIn = this.state.isLoggleIn;
        let button = null;
        isLoggleIn ? (
            button = <LogoutButton onClick = {this.HandleLogoutClick} />
         ) : (
            button = <LoginButton onClick = {this.HandleLoginClick} />
         )
        return (
            <div>
                <Greeting isLoggleIn = {isLoggleIn} />
                {button}
            </div>
        );
    }
}
// LoginControl.propTypes = {
//     name: PropTypes.string
// }
export default LoginControl;