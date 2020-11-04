import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

const Icon = ({
  backgroundColor,
  borderColor,
  color = 'white',
  round = true,
  icon,
  iconRatio = 0.7,
  IconComponent = MaterialCommunityIcons,
  size,
}) => {
  return (
    <Box {...{ backgroundColor, borderColor, round, size }}>
      <IconComponent name={icon} size={iconRatio * size} color={color} />
    </Box>
  );
};

const Box = styled.View`
  justify-content: center;
  align-items: center;

  ${({ round, size, backgroundColor, borderColor, theme: { space } }) => ({
    backgroundColor,
    borderColor,
    borderWidth: borderColor ? 1 : 0,
    borderRadius: round ? size / 2 : space.b,
    height: size,
    width: size,
  })}
`;

export default Icon;
