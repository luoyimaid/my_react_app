import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Toggle from './toggle';

const element = (
    <div>
        <App />
        <Toggle />
    </div>
)
ReactDOM.render(element, document.getElementById('root'));

registerServiceWorker();
