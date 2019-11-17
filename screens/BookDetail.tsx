
import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'

export interface Book {
  publisher: string,
  description: string,
  title: string,
  price: string,
  release_date: string,
  diamond_id: string
}

type Props = {
  navigation: NavigationStackProp<Book>
}

const BookDetail: React.FC<Props> = props => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{props.navigation.getParam('title')}</Text>
      <Text style={styles.content}>{props.navigation.getParam('description')}</Text>
      <Text>Price: ${props.navigation.getParam('price')}</Text>
      <Text>Publisher: {props.navigation.getParam('publisher')}</Text>
      <Text>Release Date: {props.navigation.getParam('release_date')}</Text>
    </ScrollView>
  )
}

BookDetail.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title')
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 30
  },
  content: {
    marginBottom: 30
  },
  info: {

  }
})

export default BookDetail