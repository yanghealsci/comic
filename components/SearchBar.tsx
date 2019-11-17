import React from 'react'
import { StyleSheet, TextInput, View, Image} from 'react-native'

interface Props {
  value: string,
  onChange: (value: string) => void,
  placeholder?: string
}

const SearchBar: React.FC<Props> = props => {
  return <View style={styles.container}>
    <Image source={require('../assets/search.png')} style={{width: 30, height: 30}}/>
    <TextInput
      style={styles.input}
      onChangeText={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fae379'
  },
  input: {
    marginLeft: 10,
    height: 50,
    flex: 1
  }
})

export default SearchBar