import React from 'react';
import styled from 'styled-components';

import Image from './styles/Image';
import Text from './styles/Text';

const ListCard = ({ bgImage, exp, number, logo }) => {
  return (
    <Container source={bgImage}>
      <Logo>
        <Image logo resizeMode="contain" source={logo} />
      </Logo>
      <CardDetails>
        <CardNumber>
          &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;{' '}
          <CardNumber>{number}</CardNumber>
        </CardNumber>

        <ExpBox>
          <Text title white mtp2>
            Expirty date{'  '}
          </Text>
          <Text title white mtp2>
            {exp}
          </Text>
        </ExpBox>
      </CardDetails>
    </Container>
  );
};

const Container = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  overflow: hidden;

  ${({ theme: { space, radii } }) => ({
    borderRadius: radii.s2,
    padding: space.m1,
  })}
`;

const CardNumber = styled(Text)`
  ${({ theme: { colors, size } }) => ({
    color: colors.white,
    fontSize: size.xl,
  })}
`;

const Logo = styled.View`
  width: 90px;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 18px;
  left: 20px;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const CardDetails = styled.View`
  align-items: flex-end;

  ${({ theme: { space } }) => ({
    marginTop: space.xl,
  })}
`;

const ExpBox = styled.View`
  flex-direction: row;
`;

export default ListCard;
