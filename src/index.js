import React from 'react';
import ReactDOM from 'react-dom';
import Index from './html2canvas';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Toggle from './toggle';
// import Greeting from './greeting';
import LoginControl from './greeting';
import SubmitName from './submit';
import Caculator from './caculator';
import Dialog from './dialog';
// import HelloMessage from './webComponents';
import Theme from './theme';

class Import extends React.Component {
    render() {
        return (
            <Index>
                <Theme />
                    <App />
                    {/* <HelloMessage /> */}
                    <Toggle />
                    <LoginControl />
                    <SubmitName />
                    <Caculator />
                    <Dialog />
                    <div className="company-name-short">罗怡</div>
                    <div className="company-name-full">百家号</div>
                    <div className="company-connection">
                    <div className="company-phone">
                        <div className="inline-block company-phone-text">电话：</div>
                        <div className="inline-block company-phone-number">*保密*</div>
                    </div>
                    <div>
                        <div className="inline-block company-webmail-text">邮箱：</div>
                        <div className="inline-block company-webmail-number">luoyi06@baidu.com</div>
                    </div>
                    </div>
            </Index>
        )
    }
}
ReactDOM.render(<Import />, document.getElementById('root'));

registerServiceWorker();
