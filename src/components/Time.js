import React from 'react'
import { Text } from 'native-base'
import { StyleSheet } from 'react-native'
import moment from 'moment'

const Time = props => {
  const { time } = props
  const timeDisplay = moment(time || moment.now()).fromNow()

  return (
    <Text note style={styles.time}>
      {timeDisplay}
    </Text>
  )
}

export default Time

const styles = StyleSheet.create({
  time: {
    marginHorizontal: 10
  }
})
