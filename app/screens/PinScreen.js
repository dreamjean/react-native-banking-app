import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button, NumberPad, PinDot } from '../components';
import SafeAreaView from '../components/styles/SafeAreaView';
import Text from '../components/styles/Text';
import { colors } from '../config';

const PinScreen = ({ navigation }) => {
  const [pins, setPins] = useState([]);
  const totalPins = 6;

  const pressKey = (item) => {
    if (item !== 'back' && pins.length < totalPins) setPins((prev) => [...prev, item]);
    if (item === 'back' && pins.length !== 0)
      setPins(pins.filter((_, index) => index !== pins.length - 1));
  };

  useEffect(() => {
    if (pins.length === totalPins) navigation.navigate('Tabs');
  }, [pins]);

  return (
    <SafeAreaView>
      <Text heading center mtp2>
        mybank
      </Text>
      <Text title2 center white mtp2>
        Enter your PIN code.
      </Text>

      <AccessPin>
        {Array.from({ length: totalPins }).map((_, index) => (
          <PinDot key={index} pin={pins[index]} />
        ))}
      </AccessPin>

      <Text center>Forgot PIN?</Text>

      <Wrapper>
        <Button
          color={colors.violet}
          icon="locked"
          title="Use Touch ID"
          onPress={() => navigation.navigate('Touch')}
        />
      </Wrapper>

      <NumberPad pin onPress={pressKey} />

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const AccessPin = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginVertical: space.l2,
  })}
`;

const Wrapper = styled.View`
  ${({ theme: { space } }) => ({
    marginTop: space.m1,
    marginBottom: space.l2,
  })}
`;

export default PinScreen;
