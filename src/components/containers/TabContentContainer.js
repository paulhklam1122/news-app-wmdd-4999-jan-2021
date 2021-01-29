import React, { Component } from 'react'
import { Alert, Share } from 'react-native'
import { getArticles } from '../../service/api'
import TabContent from '../Tabs/TabContent'

class TabContentContainer extends Component {
  state = {
    articleData: {},
    articles: [],
    isLoading: true,
    modalVisible: false,
    source: this.props.source || 'bbc-news'
  }

  // Lifecycle Methods

  componentDidMount() {
    const { source } = this.state
    this.fetchNews(source)
  }

  // API Call Functions
  fetchNews = async source => {
    getArticles(source).then(
      articles => {
        this.setState({
          articles: articles,
          isLoading: false
        })
      },
      error => {
        Alert.alert('Error', `Something went wrong! ${error}`)
      }
    )
  }

  // Handler Functions

  handleArticlePress = ({ title, url }) => {
    this.setState({
      modalVisible: true,
      articleData: {
        title,
        url
      }
    })
  }

  handleArticleModalClose = () => {
    this.setState({
      modalVisible: false,
      articleData: {}
    })
  }

  handleArticleShare = (title, url) => {
    message = `${title}\n\nRead More @${url}\n\nShared via RN News App`

    return Share.share(
      {
        title,
        message,
        url: message
      },
      {
        dialogTitle: `Share ${title}`
      }
    )
  }

  render() {
    const { articleData, articles, isLoading, modalVisible } = this.state
    return (
      <TabContent
        articleData={articleData}
        articles={articles}
        isLoading={isLoading}
        onArticlePress={this.handleArticlePress}
        onArticleModalClose={this.handleArticleModalClose}
        onArticleShare={this.handleArticleShare}
        modalVisible={modalVisible}
      />
    )
  }
}

export default TabContentContainer
