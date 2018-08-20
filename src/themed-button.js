import React, { Component } from 'react';

import {themeContext} from './theme-context';

function themeButton(props) {
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    <button
                        {...props}
                        style={{backgroundColor: theme.background}}
                    />
                }
            }
        </ThemeContext.Consumer>
    )
}
export default themeButton;