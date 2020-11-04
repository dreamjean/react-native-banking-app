import React from 'react';
import styled from 'styled-components';

const Separator = () => {
  return <Wrapper />;
};

const Wrapper = styled.View`
  height: 1px;
  width: 100%;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.lightBlue3,
    marginVertical: space.s2,
  })}
`;

export default Separator;
