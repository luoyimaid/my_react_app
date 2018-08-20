// web组件
// Web组件 使用 “class” 而非 “className”
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import React from 'react';

class helloMessage extends Component {

    render() {
        return (
            <div>
                hello, <x-search>{this.props.name}</x-search>
            </div>
        )
    }
}

const proto = Object.create(HTMLElement.prototype, {
    attachedCallback: {
        value: function() {
            const mountPoint = document.createElement('span');
            this.createShadowRoot().appendChild(mountPoint);

            // const name = this.getAttribute('name');
            const name = 'name';
            const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
            ReactDOM.render(<a href={url}>{name}</a>,mountPoint);
        }
    }
});
document.registerElement('x-search',{prototype: proto});

export default helloMessage;