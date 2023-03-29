import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Tela1 from '../screens/tela1'
import Tela2 from '../screens/tela2'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela2">
        <Stack.Screen
          name='Tela1'
          component={Tela1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Tela2'
          component={Tela2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
