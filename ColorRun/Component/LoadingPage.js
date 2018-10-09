import React from 'react'
import { TouchableOpacity, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native'


class LoadingPage extends React.Component {
    render() {

        return (
            <ImageBackground onPress={() => {
            }} source={require('../assets/images/Background.png')} style={styles.main_container}>
                <ActivityIndicator size={'large'} color={'white'}/>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default LoadingPage