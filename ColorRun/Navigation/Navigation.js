import {createStackNavigator} from 'react-navigation'
import Connection from "../Component/Connection";
import LoadingPage from "../Component/LoadingPage"
import Home from '../Component/Home'
import Dev from "../Component/Dev";
import Design from "../Component/Design";
import Market from "../Component/Market";

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
    },

    Dev: {
        screen: Dev,
        navigationOptions: {
            header: null
        }
    },

    Design: {
        screen: Design,
        navigationOptions: {
            header: null
        }
    },

    Market: {
        screen: Market,
        navigationOptions: {
            header: null
        }
    },

});


export default AppStackNavigator