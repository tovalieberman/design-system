/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Placeholder.css';

/**
 * Placeholder component
 */
export default class Placeholder extends Component {
static propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

static defaultProps = {
  width: 150,
  height: 150,
  alt: 'Photo alt text',
};

render() {
  const { width, height, alt } = this.props;
  return (
    <img className="root" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width={width} height={height} alt={alt} />
  );
}
}
