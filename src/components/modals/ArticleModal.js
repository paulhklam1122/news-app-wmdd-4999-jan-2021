import React from 'react'
import { Dimensions, Modal, View } from 'react-native'
import { WebView } from 'react-native-webview'
import { EvilIcons } from '@expo/vector-icons'
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Right,
  Title
} from 'native-base'

const webViewHeight = Dimensions.get('window').height - 56

const ArticleModal = props => {
  const { articleData, modalVisible, onArticleShare, onClose } = props
  const { title, url } = articleData

  return (
    <View>
      <Modal animationType='slide' transparent visible={modalVisible}>
        <Container style={{ backgroundColor: '#fff' }}>
          <Header>
            <Left>
              <EvilIcons
                backgroundColor='transparent'
                color='black'
                name='close'
                onPress={onClose}
                size={30}
              />
            </Left>
            <Body>
              <Title children={title} style={{ color: 'black' }} />
            </Body>
            <Right>
              <EvilIcons
                backgroundColor='transparent'
                color='black'
                name='share-apple'
                onPress={() => onArticleShare(title, url)}
                size={30}
              />
            </Right>
          </Header>
          <Content contentContainerStyle={{ height: webViewHeight }}>
            <WebView
              source={{ uri: url }}
              style={{ flex: 1 }}
              startInLoadingState
              scalesPageToFit
            />
          </Content>
        </Container>
      </Modal>
    </View>
  )
}

export default ArticleModal
