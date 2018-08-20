import React, { Component } from 'react';

export const themes = {
    light: {
        foreground: 'ffffff',
        background: '222222'
    },
    dark: {
        foreground: '000000',
        background: 'eeeeee'
    }
};

export const themeContext = React.createContext(
    themes.dark
);