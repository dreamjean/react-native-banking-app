import { Feather } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../config';
import Text from './styles/Text';

const menu = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];

const NumberPad = ({ pin, onPress }) => {
  const getMenu = () => {
    let initialMenu = menu;
    if (pin) initialMenu = menu.filter((item) => item !== '.');
    return initialMenu;
  };

  return (
    <Wrapper>
      {getMenu().map((num, index) => (
        <Box key={index} onPress={() => onPress(num)}>
          <Text title1>{num}</Text>
        </Box>
      ))}
      <Box onPress={() => onPress('back')}>
        <Feather name="delete" size={24} color={colors.text} />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-grow: 0;

  ${({ theme: { space } }) => ({
    paddingRight: space.l2,
    marginRight: space.m1,
  })}
`;

const Box = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-width: 1px;

  ${({ theme: { colors, radii, space } }) => ({
    borderRadius: radii.l1,
    borderColor: colors.lightBlue4,
    marginHorizontal: space.m2,
    marginVertical: space.s1,
  })}
`;

export default NumberPad;
