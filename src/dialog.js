import React, { Component } from 'react';

// 组合&继承
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}
function Dialog(props) {
    return (
        <FancyBorder color='blue'>
            <h1 className='dialog-title'>
                {props.title}
            </h1>
            <p className='dialog-message'>
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}
// function WelcomeDialog() {
//     return (
//         <Dialog title='welcome!'
//             message='Thank you for visiting our spacecraft!' />
//     )
// }

class SignupDialog extends Component {
    constructor (props) {
        super(props);
        this.state = {login: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleChange(e) {
        this.setState({
            login: e.target.value
        })
    }
    handleSignup() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
    render () {
        return (
            <Dialog
                title='welcome!'
                message='Thank you for visiting our spacecraft!'>
                <input value={this.state.login}
                    onChange={this.handleChange} />

                <button onClick={this.handleSignup}>
                    Sign Me Up!
                </button>
            </Dialog>
        )
    }
}

export default SignupDialog;