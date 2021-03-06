import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

class ThemeWrapper extends PureComponent {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}

ThemeWrapper.propTypes = {
  children: PropTypes.node,
};

export default ThemeWrapper;
