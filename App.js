import React from 'react'
import { StyleSheet, View } from 'react-native'
import TabScreen from './src/components/screens/TabScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <TabScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
