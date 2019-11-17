const host = 'https://api.shortboxed.com/'
const apiPrefix = '/comics/v1'
import {Alert} from 'react-native'

export async function queryBookByTitle (title: string) {
  try {
    const resp = await fetch(`${host}/${apiPrefix}/query?release_date=2019-11-20&title=${title}`)
    const respObj = await resp.json()
    return respObj && respObj.comics
    console.log(respObj)
  } catch (error) {
    Alert.alert(error)
    // TODO: error handler
  }
}