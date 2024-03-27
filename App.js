import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Transaction from './Components/Transaction'
import Summary from './Components/Summary';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransactionContainer } from './Components/TransactionContainer'; // Import the context

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TransactionContainer>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transactions" component={Transaction} />
          <Tab.Screen name="Summary" component={Summary} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionContainer>
  );
}