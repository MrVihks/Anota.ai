import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native'; 

const Stack = createStackNavigator();

import Start from './src/pages/startscreen';
import Home from './src/pages/homescreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
          <Stack.Screen name="Start" component={Start} options={{
          title: 'Bem-vindo',
          headerStyle: {
            backgroundColor: '#3b82f6',
          }, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'}}/>
          <Stack.Screen name="Home" component={Home} options={{
          title: 'Inicio',
          headerStyle: {
            backgroundColor: '#3b82f6',
          }, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'}}/>
          
      </Stack.Navigator>
    </NavigationContainer>
  )
}
