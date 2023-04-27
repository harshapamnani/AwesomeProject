import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DisplayScreen from '../screens/DisplayScreen';


const AppNavigator = () => {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>

      <Stack.Screen name='HomeScreen' component={HomeScreen}
        // options={{ headerShown: false }}
      />

      <Stack.Screen name='DisplayScreen' component={DisplayScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator;

