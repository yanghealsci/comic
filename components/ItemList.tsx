import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Item, {Props as ItemData} from './Item'

export interface Props {
  data: ItemData[],
  onItemPress?: (id: string) => void
}

const ItemList: React.FC<Props> = props => {
  return (
    <FlatList
      data={props.data}
      renderItem={({item}) => <Item {...item} onPress={props.onItemPress}/>}
      keyExtractor={(_, index) => `${index}`}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default ItemList