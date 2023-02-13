import React, { Component } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Layout from './Components/Layout';
import GlobalStyle from './styles/global';
import themes from './styles/themes';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';

class App extends Component {
  render() {
    const { theme } = this.state

    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (<StyledThemeProvider theme={themes[theme] || themes.dark}>
            <GlobalStyle />
            <Layout
              selectedTheme={theme}
            />
          </StyledThemeProvider>)}

        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}