


import React from 'react';
import { View, Text } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View>
      <Text>Name: {transaction.name}</Text>
      <Text>Place: {transaction.place}</Text>
      <Text>Amount: {transaction.amount}</Text>
      <Text>Date: {transaction.date}</Text>
    </View>
  );
};

export default TransactionDetailScreen;
