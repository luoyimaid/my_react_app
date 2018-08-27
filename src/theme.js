import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

function ToolBar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            change theme
        </ThemedButton>
    )
}

class Theme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
        }
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    toggleTheme() {
        this.setState(state => ({
            theme: state.theme === themes.dark ? themes.light : themes.dark
        }));
        console.log('cccccccc');
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ToolBar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                {/* <section>
                    <ThemedButton />
                </section> */}
            </div>
        )
    }
}
export default Theme;