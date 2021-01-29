import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const Loading = props => (
  <View style={{ ...styles.activityIndicator, ...props.style }}>
    <ActivityIndicator animating={props.isLoading} color='#00000' />
    <Text style={styles.loadingText} children='Loading...' />
  </View>
)

const styles = StyleSheet.create({
  activityIndicator: {
    display: 'flex',
    alignItems: 'center'
  },
  loadingText: {
    marginTop: 10
  }
})

export default Loading
