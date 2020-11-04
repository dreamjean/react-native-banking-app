import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

import { colors } from '../config';

const SwipeAction = ({ backgroundColor, icon, onPress }) => {
  return (
    <RectButton onPress={onPress}>
      <Wrapper {...{ backgroundColor }}>
        <MaterialCommunityIcons name={icon} size={50} color={colors.white} />
      </Wrapper>
    </RectButton>
  );
};

const Wrapper = styled.View`
  flex: 1;
  width: 100px;
  align-items: center;
  justify-content: center;

  ${({ backgroundColor }) => ({
    backgroundColor,
  })}
`;

export default SwipeAction;
