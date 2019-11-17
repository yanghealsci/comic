import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export interface Props {
  text: string,
  id: string,
  style?: object,
  onPress?: (id: string) => void
  
}

const Item: React.FC<Props> = props => {
  const {text, onPress, id} = props
  return <View style={[styles.container, props.style]}>
    <Text style={styles.content} onPress={event => onPress(id)}>{text}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  content: {
    height: 60,
    lineHeight: 60,
    paddingHorizontal: 10
  }
})

export default Item