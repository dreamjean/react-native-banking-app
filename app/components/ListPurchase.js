import React from 'react';
import styled from 'styled-components';

import Text from './styles/Text';

const ListPurchase = ({ title, subTitle, address, price }) => {
  return (
    <Container>
      <Info>
        <Text title2 white>
          {title}
        </Text>
        <Text body white numberOfLines={1}>
          {subTitle}
        </Text>
        <Text caption>{address}</Text>
      </Info>
      <Text title2 white>
        {price}
      </Text>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme: { space } }) => ({
    padding: space.s1,
  })}
`;

const Info = styled.View`
  width: 80%;
`;

export default ListPurchase;
