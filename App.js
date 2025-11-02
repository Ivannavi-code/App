import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './src/screens/auth/LoginScreen';
import HomeScreen from './src/screens/dashboard/HomeScreen';
import InventoryScreen from './src/screens/inventory/InventoryScreen';
import SalesScreen from './src/screens/sales/SalesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Mecanic Manager' }} />
        <Stack.Screen name="Inventory" component={InventoryScreen} options={{ title: 'Inventario' }} />
        <Stack.Screen name="Sales" component={SalesScreen} options={{ title: 'Ventas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
