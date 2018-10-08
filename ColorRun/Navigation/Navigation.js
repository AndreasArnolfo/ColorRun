import { createStackNavigator } from 'react-navigation'
import Connection from "../Component/Connection";


const AppStackNavigator = createStackNavigator({
    Connection: {
        screen: Connection,
        navigationOptions: {
            header: null
        }
    }
})


export default AppStackNavigator