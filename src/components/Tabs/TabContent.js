import React from 'react'
import { Container, List } from 'native-base'
import { StyleSheet } from 'react-native'
import Article from '../Article'
import Loading from '../Loading'
import ArticleModal from '../modals/ArticleModal'

const TabContent = props => {
  const {
    articleData,
    articles,
    isLoading,
    modalVisible,
    onArticleModalClose,
    onArticlePress,
    onArticleShare
  } = props
  const renderLoadingState = () => <Loading isLoading={isLoading} />

  const renderArticles = () => (
    <List
      dataArray={articles}
      renderRow={article => {
        return <Article article={article} onPress={onArticlePress} />
      }}
      keyExtractor={(article, index) => index.toString()}
    />
  )

  const renderContent = () =>
    isLoading ? renderLoadingState() : renderArticles()

  return (
    <Container>
      {renderContent()}
      <ArticleModal
        articleData={articleData}
        modalVisible={modalVisible}
        onClose={onArticleModalClose}
        onArticleShare={onArticleShare}
      />
    </Container>
  )
}

export default TabContent
