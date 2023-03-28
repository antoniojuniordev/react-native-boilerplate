import React, { useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import useFetch from './core/hooks/useFetch'

function App() {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  async function getUser() {
    const resp = await useFetch({ method: 'get', url: 'https://60c4a8e9ec8ef800175e04c2.mockapi.io/user' })
    console.log(resp)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white
          }}
        />
        <Text>oiii</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
