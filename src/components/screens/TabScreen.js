import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Body,
  Container,
  Header,
  Left,
  Right,
  Tabs,
  Title,
  Tab
} from 'native-base'
import TabContentContainer from '../containers/TabContentContainer'

const TabScreen = () => (
  <Container>
    <Header style={styles.header} hasTabs>
      <Left />
      <Body>
        <Title style={styles.title}>News App</Title>
      </Body>
      <Right />
    </Header>
    <Tabs tabBarUnderlineStyle={styles.tabs}>
      <Tab
        heading='BBC'
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        textStyle={styles.tabText}
        activeTextStyle={styles.tabText}
      >
        <TabContentContainer source={'bbc-news'} />
      </Tab>
      <Tab
        heading='CBC'
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        textStyle={styles.tabText}
        activeTextStyle={styles.tabText}
      >
        <TabContentContainer source={'cbc-news'} />
      </Tab>
      <Tab
        heading='TechCrunch'
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        textStyle={styles.tabText}
        activeTextStyle={styles.tabText}
      >
        <TabContentContainer source={'techcrunch'} />
      </Tab>
    </Tabs>
  </Container>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3dabd3'
  },
  tabs: {
    backgroundColor: 'white'
  },
  title: {
    color: 'white'
  },
  tabStyle: {
    backgroundColor: '#3dabd3'
  },
  activeTabStyle: {
    backgroundColor: '#3dabd3'
  },
  tabText: {
    color: 'white'
  }
})

export default TabScreen
