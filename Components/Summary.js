import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionsContext } from './TransactionContainer'; // Import the context

const Summary = () => {
  const { transactionsData } = useContext(TransactionsContext); // Use the context to get transactionsData

  if (!transactionsData || !Array.isArray(transactionsData)) {
    return <Text style={styles.text}>No transactions data available.</Text>;
  }

  // Calculate summary data
  const totalTransactions = transactionsData.length;
  const highestTransaction = Math.max(...transactionsData.map((t) => parseFloat(t.amount.replace('$', ''))));
  const lowestTransaction = Math.min(...transactionsData.map((t) => parseFloat(t.amount.replace('$', ''))));
  const totalAmount = transactionsData.reduce((acc, curr) => acc + parseFloat(curr.amount.replace('$', '')), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total number of transactions: {totalTransactions}</Text>
      <Text style={styles.text}>Highest transaction: ${highestTransaction}</Text>
      <Text style={styles.text}>Lowest transaction: ${lowestTransaction}</Text>
      <Text style={styles.text}>Total amount: ${totalAmount.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Summary;
