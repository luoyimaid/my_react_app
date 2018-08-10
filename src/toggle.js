import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// react列表&keys
function ListItem(props) {
    return <li>{props.value * 2}</li>
}

function MapList(props) {
    const numbers = props.numbers;
    // const list = [1,2,3,4,5];
    const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} />);
    return (
        <ul>
            {listItems}
        </ul>
    );
}

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
        let numbers = [1,2,3,4,5];
        return (
            <div>
                <button onClick = {this.clickHandle}>
                    {this.state.isToggle ? 'NO' : 'OFF'}
                </button>
                <MapList numbers={numbers}/>
            </div> 
        )
    }
}

export default Toggle;