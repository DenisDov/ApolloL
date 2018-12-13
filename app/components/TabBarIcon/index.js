import React from 'react';
import { Icon } from 'expo';
import PropTypes from 'prop-types';

import Colors from '../../constants/Colors';

const TabBarIcon = ({ name, focused }) => (
  <Icon.Ionicons
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);

TabBarIcon.propTypes = {
  name: PropTypes.string,
  focused: PropTypes.bool,
};

export default TabBarIcon;
