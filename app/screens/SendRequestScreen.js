import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styled from 'styled-components';

import { NumberPad } from '../components';
import Image from '../components/styles/Image';
import SafeAreaView from '../components/styles/SafeAreaView';
import Text from '../components/styles/Text';
import { images } from '../config';
import { colors } from '../config';

const SendRequestScreen = () => {
  const [amount, setAmount] = useState('');

  const pressKey = (item) => {
    setAmount((prev) => (item !== 'back' ? prev + item : prev.slice(0, prev.length - 1)));
  };

  const outputdollars = (currentAmount) => {
    try {
      if (parseFloat(currentAmount) === isNaN) {
        if (currentAmount === '.') return '0.00';
        return currentAmount;
      }

      let number = Math.round(currentAmount * 100) / 100;
      let output = number.toString();
      let posDecimal = output.indexOf('.');
      if (posDecimal < 0) {
        posDecimal = output.length;
        output += '.';
      }
      if (output.length <= posDecimal + 2) output += '0';

      return output.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } catch (e) {
      return '0.00';
    }
  };

  return (
    <SafeAreaView>
      <Text title1 center white mtp2>
        Send
      </Text>

      <Amount>
        <Text heading white>
          ${outputdollars(amount)}
        </Text>
        <Text body>Choose amount to send</Text>
      </Amount>

      <User>
        <Image profile source={images[0]} />
        <UserInfo>
          <Text title2 white>
            Rokia
          </Text>
          <Text body>Patreon</Text>
        </UserInfo>
        <MaterialIcons name="edit" size={16} color={colors.white} />
      </User>

      <Send onPress={(amount) => console.log(amount)}>
        <Text title2 white>
          Send ${outputdollars(amount)} to Rokia
        </Text>
      </Send>

      <NumberPad onPress={pressKey} />

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const Amount = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    marginTop: space.xl,
  })}
`;

const User = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginVertical: space.m2,
    marginHorizontal: space.m1,
  })}
`;

const UserInfo = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    marginLeft: space.m1,
  })}
`;

const Send = styled.TouchableOpacity`
  align-items: center;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.blue,
    borderRadius: radii.m1,
    margin: space.m1,
    paddingVertical: space.m1,
    paddingHorizontal: space.l2,
  })}
`;

export default SendRequestScreen;
