import React from 'react';
import styled from 'styled-components';

const PinDot = ({ pin }) => {
  return <Wrapper>{pin && <Dot />}</Wrapper>;
};

const Wrapper = styled.View`
  width: 16px;
  height: 16px;
  border-width: 1px;
  justify-content: center;
  align-items: center;

  ${({ theme: { colors, radii, space } }) => ({
    borderRadius: radii.s2,
    borderColor: colors.blue,
    marginHorizontal: space.m1,
  })}
`;
const Dot = styled.View`
  width: 8px;
  height: 8px;

  ${({ theme: { colors, radii } }) => ({
    borderRadius: radii.s1,
    backgroundColor: colors.blue,
  })}
`;

export default PinDot;
