import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Toggle from './toggle';
// import Greeting from './greeting';
import LoginControl from './greeting'
import SubmitName from './submit'

const element = (
    <div>
        <App />
        <Toggle />
        <LoginControl />
        <SubmitName />
    </div>
)
ReactDOM.render(element, document.getElementById('root'));

registerServiceWorker();
