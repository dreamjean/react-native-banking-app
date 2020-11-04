import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styled from 'styled-components';

import { Avatar, ListPurchase, Separator, TextInput } from '../components';
import SafeAreaView from '../components/styles/SafeAreaView';
import Text from '../components/styles/Text';
import { colors } from '../config';
import purchases from '../data/purchases';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getData = () => {
    let purchasesData = purchases;
    if (searchQuery)
      purchasesData = purchases.filter(
        (item) =>
          item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.store.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return purchasesData;
  };

  return (
    <SafeAreaView>
      <Avatar title="Welcome," subTitle="Rokia" />
      <Text heading center white>
        $9,184.17
      </Text>
      <Description center>Current Balance</Description>

      <Chart>
        <LineChart
          data={{
            labels: ['May', 'June', 'July', 'Aug', 'Sept', 'Oct'],
            datasets: [
              {
                data: [
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                ],
              },
            ],
          }}
          width={width}
          height={width * 0.45}
          yAxisLabel="$"
          yAxisSuffix="k"
          chartConfig={{
            backgroundGradientFrom: colors.dark,
            backgroundGradientTo: colors.dark,
            color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
            labelColor: () => `rgba(255, 255, 255, 0.35)`,
            strokeWidth: 3,
          }}
          withVerticalLines={false}
          withHorizontalLines={false}
          bezier
        />
      </Chart>

      <Purchases
        ListHeaderComponent={
          <>
            <PcsHeader>
              <Text>Last Purchases</Text>
              <MaterialIcons name="sort" size={24} color={colors.blue} />
            </PcsHeader>

            <TextInput
              allowFontScaling={false}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              icon="search1"
              onChangeText={(searchQuery) => setSearchQuery(searchQuery)}
              placeholder="Search"
              value={searchQuery}
            />
          </>
        }
        data={getData()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListPurchase
            title={item.product}
            subTitle={item.store}
            address={item.address}
            price={item.price}
          />
        )}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const Description = styled(Text)`
  ${({ theme: { colors, space } }) => ({
    color: colors.text2,
    marginTop: space.s1,
  })}
`;

const Chart = styled.View`
  ${({ theme: { space } }) => ({
    marginVertical: space.m2,
  })}
`;

const Purchases = styled.FlatList`
  flex: 1;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.grey2,
    padding: space.m1,
  })}
`;

const PcsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default HomeScreen;
