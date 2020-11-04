import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components';

import { Button, IconButton } from '../components';
import SafeAreaView from '../components/styles/SafeAreaView';
import Text from '../components/styles/Text';
import { colors } from '../config';

const TouchScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text heading center mtp2>
        mybank
      </Text>

      <Touch onLongPress={() => navigation.navigate('Tabs')}>
        <Circle>
          <Circle color={colors.lightBlue2}>
            <Circle color={colors.lightBlue3}>
              <IconButton
                backgroundColor={colors.blue}
                icon="fingerprint"
                IconComponent={MaterialIcons}
                iconRatio={0.8}
                size={70}
                onPress={() => navigation.navigate('Tabs')}
              />
            </Circle>
          </Circle>
        </Circle>
      </Touch>

      <Text title1 center white>
        Touch ID sensor for access to{'\n'} your mybank account
      </Text>
      <Text center mtp1>
        Please very your identity{'\n'}useing Touch ID
      </Text>

      <Wrapper>
        <Button
          color={colors.violet}
          icon="locked"
          title="Enter Access PIN"
          onPress={() => navigation.navigate('Pin')}
        />
      </Wrapper>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const Touch = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.View`
  border-radius: 999px;

  ${({ color, theme: { colors, space } }) => ({
    backgroundColor: color ? color : colors.lightBlue1,
    padding: space.l2,
  })}
`;

const Wrapper = styled.View`
  ${({ theme: { space } }) => ({
    marginTop: space.s1,
    paddingVertical: space.m1,
  })}
`;

export default TouchScreen;
