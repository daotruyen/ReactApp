/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from './Component/Home';
import DetailMusic from './Component/DetailMusic'
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailMusic}/>
      </Stack.Navigator>
    </NavigationContainer>
      
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
