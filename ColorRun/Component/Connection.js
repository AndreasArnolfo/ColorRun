import React from 'react'
import { TouchableOpacity, TextInput, StyleSheet, Text, ImageBackground, Linking} from 'react-native'

class Connection extends React.Component {
    render() {
        return (
            <ImageBackground  source={require('../assets/images/Connexion.png')} style={styles.main_container}>
            <TextInput style={styles.textInputName} placeholder={"Nom d'utilisateur"}/>
            <TextInput style={styles.textInputMdp} placeholder={"Mot de passe"} secureTextEntry={true}/>
                <TouchableOpacity style={styles.buttonStart} onPress={() => {}}>
                    <Text style={styles.Text}>A l'aventure !</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFacebook} onPress={() => {}}>
                    <Text style={styles.Text}>Connexion facebook</Text>
                </TouchableOpacity>
                <Text style={{color: 'black'}}
                      onPress={() => Linking.openURL('https://play.google.com/about/play-terms.html')}>
                    Conditions d'utilisations
                </Text>
            </ImageBackground>
        )

    }
}

const styles = StyleSheet.create(
    {
        main_container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },

        userMention: {
            color: 'black',
            marginTop: 0
        },

        Text: {

            fontSize: 20,
            flexWrap: 'wrap',
            color: 'white'
        },

        textInputName: {
            width: 180,
            height: 40,
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            flexWrap: 'wrap',
            borderWidth: 1,
            marginTop: 90,
        },

        textInputMdp: {
            width: 180,
            height: 40,
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            flexWrap: 'wrap',
            borderWidth: 1,
            marginTop: 15,
        },

        buttonStart: {
            width: 180,
            height: 40,
            backgroundColor: '#1FA14F',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            borderRadius: 5,
        },

        buttonFacebook: {
            width: 200,
            height: 40,
            backgroundColor: '#4267B2',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
        },

    },


)

export default Connection