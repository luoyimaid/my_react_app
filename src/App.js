import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 自定义组件：组件名称必须以大写字母开头
// 循环渲染
function Welcome(props) {
  return <h1>hello, {props.name}!</h1>
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),1000
    );
  }
  componentWillUnmount() {
    setInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <code>罗怡，你好！</code>
        </p>
        {/* 创建一个APP组件，多次渲染welcome组件 */}
        <div>
          <Welcome name = 'luoyi' />
          <Welcome name = 'chenhao' />
          <div>
            <h1>hello world</h1>
            <h2>it is {this.state.date.toLocaleTimeString()}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
