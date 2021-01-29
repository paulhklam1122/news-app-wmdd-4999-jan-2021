import React from 'react'
import {
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  View,
  Text,
  Button
} from 'native-base'

import { StyleSheet } from 'react-native'
import Time from './Time'

const Article = props => {
  const { article, onPress } = props
  const { description, publishedAt, title, url, urlToImage } = article

  return (
    <ListItem thumbnail key={title}>
      <Left>
        <Thumbnail square source={{ uri: urlToImage }} />
      </Left>
      <Body>
        <Text numberOfLines={2}>{title}</Text>
        <Text note numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.textContainer}>
          <Text note>{article.source.name}</Text>
          <Time time={publishedAt} />
        </View>
      </Body>
      <Right>
        <Button transparent onPress={() => onPress({ title, url })}>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  )
}

export default Article

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 0
  }
})
