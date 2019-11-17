
import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, SafeAreaView, ScrollView, Text, Alert } from 'react-native'
import ItemList, {Props as ItemListData} from '../components/ItemList'
import SearchBar from '../components/SearchBar'
import { queryBookByTitle } from '../api'
import { Book } from './BookDetail'

interface Props {
  navigation
}

const SearchScreen: React.FC<Props> = props => {
  const minSearchLen = 3
  const previewLen = 3
  const [searchText, setSearchText] = useState('')
  const [results, setResults] = useState<Book[]>([])
  const [typing, setTyping] = useState(false)
  const [timer, setTimer] = useState(null)
  const [loading, setLoading] = useState(false)

  const showResult = searchText.length >= minSearchLen

  useEffect(() => {
    setTyping(true)

    if (searchText && showResult) {
      setLoading(true)
      queryBookByTitle(searchText)
        .then(data => {
          setResults(data || [])
          setLoading(false)
        })
    } else {
      setResults([])
    }

    clearTimeout(timer)
    setTimer(setTimeout(() => {
      setTyping(false)
    }, 500)) 
  }, [searchText])

  let content: React.Component

  if (!searchText) {
    content = <Text style={styles.instruction}>
                {'Start typing to search for a comic'}
              </Text>
  } else if (loading) {
    content = <Text>{'Loading....'}</Text>
  } else if (results.length === 0 && showResult && searchText ) {
    content = <Text>{'No result'}</Text>
  } else {
    content = <ItemList
      data={(typing
        ? results.slice(0, previewLen)
        : results).map(d => ({ text: d.title, id: d.diamond_id }))}
      onItemPress={(id) => {
        const book = results.find(d => d.diamond_id === id)
        book && props.navigation.navigate('BookDetail', book)
      }}
    />
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.root}>
        <SearchBar
          onChange={setSearchText}
          value={searchText}
          placeholder={'Enter book title'}
        />
        {content}
      </ScrollView>
    </SafeAreaView>
  )
}

SearchScreen.navigationOptions = {
  title: 'Search'
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  root: {
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  instruction: {
    fontSize: 40,
    marginTop: 40,
    paddingHorizontal: 40,
    textAlign: 'center'
  }
})

export default SearchScreen