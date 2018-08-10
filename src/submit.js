import React, { Component } from 'react';
// react表单状态
class SubmitName extends Component {
    constructor (props) {
        super(props);
        this.state = {value: ''};
        this.Onchange = this.Onchange.bind(this);
        this.Handlesubmit = this.Handlesubmit.bind(this);
    }
    Onchange(event) {
        this.setState({
            value: event.target.value
        })
    }
    Handlesubmit(event) {
        alert('A name was submitted: '+ this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.Handlesubmit}>
                <label>
                    Name:
                    <input type='text' value={this.state.value} onChange={this.Onchange} />
                </label>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default SubmitName;