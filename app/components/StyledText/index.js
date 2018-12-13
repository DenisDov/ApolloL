import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const P = ({ children, style, ...props }) => (
  <Text {...props} style={[style, { fontFamily: 'Lato' }]} />
);

P.propTypes = {
  style: PropTypes.string,
};

// eslint-disable-next-line
export { P };
