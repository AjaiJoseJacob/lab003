import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TransactionsContext } from './TransactionContainer'; // Import the context

const TransactionList = ({ navigation }) => {
  const { transactionsData } = useContext(TransactionsContext); // Use the context to get transactionsData

  return (
    <View>
      <FlatList
        data={transactionsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
            <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
              <Text>{item.name}</Text>
              <Text>{item.amount}</Text>
              <Text>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TransactionList;

