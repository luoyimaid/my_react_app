import React, { Component } from 'react';

// 状态提升
function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>水烧开了</p>;
    } else {
        return <p>水还没有烧开</p>;
    }  
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
// 状态分享是通过将state数据提升至离需要这些数据的组件最近的父组件来完成的。这就是所谓的状态提升
class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        // this.state = {temperature:''};
        this.HandleChange = this.HandleChange.bind(this);
    }
    HandleChange(event) {
        // this.setState({
        //     temperature: event.target.value
        // })
        this.props.onTemperatureChange(event.target.value);
    }
    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input type='text' value={temperature} onChange={this.HandleChange} />
                {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
            </fieldset>
        )
    }
}

class Caculator extends Component {
    constructor(props) {
        super(props);
        this.state = {temperature:'',scale:'c'};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }
    
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }
    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput 
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput 
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        )
    }
}

export default Caculator;