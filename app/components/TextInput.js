import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../config';

const TextInput = ({ icon, ...rest }) => {
  return (
    <Wrapper>
      {icon && <AntDesign name={icon} size={18} color={colors.blue} />}
      <Input {...rest} placeholderTextColor={colors.text2} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.grey3,
    borderRadius: radii.s1,
    marginVertical: space.m2,
    padding: space.s2,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, size, space, getFont } }) => ({
    color: colors.title,
    fontSize: size.m1,
    fontFamily: getFont(2),
    paddingHorizontal: space.m1,
  })}
`;

export default TextInput;
