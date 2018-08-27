import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Toggle from './toggle';
// import Greeting from './greeting';
import LoginControl from './greeting';
import SubmitName from './submit';
import Caculator from './caculator';
import Dialog from './dialog';
import HelloMessage from './webComponents';
import Theme from './theme';
import Html2Canvas from './html2canvas'

const element = (
    <div>
        <Theme />
        <App />
        <HelloMessage />
        <Toggle />
        <LoginControl />
        <SubmitName />
        <Caculator />
        <Dialog />
        <Html2Canvas />
    </div>
)
ReactDOM.render(element, document.getElementById('root'));

registerServiceWorker();
