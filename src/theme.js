import React, { Component } from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

function ToolBar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            change theme
        </ThemedButton>
    )
}

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
        }
    }
    
}