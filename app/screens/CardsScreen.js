import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styled from 'styled-components';

import { ListCard, Separator, SwipeAction } from '../components';
import SafeAreaView from '../components/styles/SafeAreaView';
import Text from '../components/styles/Text';
import { colors } from '../config';
import initialCards from '../data/myCards';

const CardsScreen = () => {
  const [cards, setCards] = useState(initialCards);
  const [refs] = useState([]);

  const handleDelete = (card) => {
    setCards(initialCards.filter((c) => c.number !== card.number));
  };

  const handleUpdate = (card, index) => {
    refs[index].close();
    const cards = initialCards.filter((c) => c.number !== card.number);
    setCards([card, ...cards]);
  };

  return (
    <SafeAreaView>
      <Text title1 white center mtp1 mbt2>
        My Cards
      </Text>

      <Cards
        data={cards}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item, index }) => (
          <Swipeable
            ref={(ref) => (refs[index] = ref)}
            renderRightActions={() => (
              <>
                <SwipeAction
                  backgroundColor={colors.danger}
                  icon="trash-can-outline"
                  onPress={() => handleDelete(item)}
                />
                <SwipeAction
                  backgroundColor={colors.blue}
                  icon="arrow-collapse-up"
                  onPress={() => handleUpdate(item, index)}
                />
              </>
            )}
          >
            <ListCard
              bgImage={item.background}
              logo={item.logo}
              exp={item.exp}
              number={item.number}
            />
          </Swipeable>
        )}
      />

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const Cards = styled.FlatList`
  flex: 1;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.m1,
  })}
`;

export default CardsScreen;
