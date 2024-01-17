import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import PhotoSreen from './screens/PhotoSreen';
import ObsScreen from './screens/ObsScreen';
import SignalScreen from './screens/SignalScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
      
    <NavigationContainer>
    <Stack.Navigator initialRouteName="profil" headerMode="false">
      <Stack.Screen name="profil" component={HomeScreen} />
      <Stack.Screen name="message" component={MessageScreen} />
      <Stack.Screen name="bloquer" component={ObsScreen} />
      <Stack.Screen name="photo" component={PhotoSreen} />
      <Stack.Screen name="signaler" component={SignalScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
