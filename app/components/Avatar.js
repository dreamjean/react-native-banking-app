import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';

import { images } from '../config';
import { colors } from '../config';
import Image from './styles/Image';
import Text from './styles/Text';

const Avatar = ({ title, subTitle }) => {
  return (
    <Container>
      <Image avatar source={images[0]} />
      <Wrapper>
        <Text title2 white>
          {title}
        </Text>
        <Text>{subTitle}</Text>
      </Wrapper>
      <MaterialCommunityIcons name="incognito" color={colors.blue} size={30} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginHorizontal: space.m1,
    marginBottom: space.l2,
    marginTop: space.m2,
  })}
`;
const Wrapper = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    paddingLeft: space.m1,
  })};
`;

export default Avatar;
