import React from 'react'
import { TouchableOpacity, StyleSheet, ImageBackground, View, Image } from 'react-native'
import Isle from "./Isle";


class Market extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../assets/images/Background.png')} style={styles.main_container}>
                <View style={styles.isle}>
                    <Isle/>
                </View>
                <View style={styles.man}>
                    <Image source={require('../assets/images/Fony.png')}/>
                </View>
                <View style={styles.dial}>
                    <Image source={require('../assets/images/Fony.png')}/>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/Dial.png')}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )

    }
}

const styles = StyleSheet.create({
        main_container: {
            flex: 1,
        },
        isle: {
            position: 'absolute',
            bottom: '43%',
            left: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 150,
        },

        man: {
            position: 'absolute',
            top: '25%',
            left: '40%',
            alignItems: 'center',

        },
        dial: {
            position: 'relative',
            top: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 100,

        }
    }
)

export default Market