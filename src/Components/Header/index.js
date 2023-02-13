import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';
export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, onToggleTheme }) => (<Container>
          <h1>JStack's Blog</h1>
          <button
            type='button'
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? '🌞' : '🌚'}
          </button>
        </Container>)}
      </ThemeContext.Consumer>
    );
  }
}
