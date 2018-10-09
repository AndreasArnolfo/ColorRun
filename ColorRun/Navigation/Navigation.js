import { createStackNavigator } from 'react-navigation'
import Connection from "../Component/Connection";
import LoadingPage from "../Component/LoadingPage"
import Home from '../Component/Home'

const AppStackNavigator = createStackNavigator({
    Connection: {
        screen: Connection,
        navigationOptions: {
            header: null
        }
    },
    LoadingPage: {
        screen: LoadingPage,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
})


export default AppStackNavigator