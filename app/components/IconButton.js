import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import Icon from './Icon';

const IconButton = ({ onPress, ...rest }) => {
  return (
    <RectButton {...{ onPress }}>
      <Icon {...rest} />
    </RectButton>
  );
};

export default IconButton;
