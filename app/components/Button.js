import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import Text from './styles/Text';

const Button = ({ bgColor, icon, color, title, onPress }) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <Wrapper {...{ bgColor }}>
        {icon && <Fontisto style={{ marginRight: 8 }} name={icon} size={15} color={color} />}
        <Title {...{ color }}>{title}</Title>
      </Wrapper>
    </TouchableOpacity>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ bgColor, theme: { space, radii } }) => ({
    backgroundColor: bgColor ? bgColor : 'transparent',
    padding: space.s2,
    borderRadius: radii.s2,
  })}
`;

const Title = styled(Text)`
  ${({ color, theme: { colors } }) => ({
    color: color ? color : colors.text,
  })}
`;

export default Button;
