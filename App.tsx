import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './screens/Search'
import BookDetail from './screens/BookDetail'

const MainNavigator = createStackNavigator({
  Search: { screen: SearchScreen },
  BookDetail: { screen: BookDetail }
})

const App = createAppContainer(MainNavigator)

export default App


