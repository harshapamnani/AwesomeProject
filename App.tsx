import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AppNavigator from './navigation/AppNavigator';


function App() {

  return (
    <NavigationContainer>
    <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
