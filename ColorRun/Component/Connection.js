import React from 'react';
import { TouchableOpacity, TextInput, StyleSheet, Text, ImageBackground, Linking, Script, style} from 'react-native';
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAdT7pTn1Y6KG0vdQk8f8Dknvn5pziRUv0",
    authDomain: "colorrun-37668.firebaseapp.com",
    databaseURL: "https://colorrun-37668.firebaseio.com",
    projectId: "colorrun-37668",
    storageBucket: "colorrun-37668.appspot.com",
    messagingSenderId: "915473821110"
};


firebase.initializeApp(firebaseConfig);

import { Container, Content, Header, Form, Input, Button, Label, Item } from 'native-base';

class Connection extends React.Component {

    constructor(props){
        super(props)
        this.state = ({
            email: '',
            password: ''
        })
    }

    

    loginUser = (email, password) =>{
        try{
            if(this.state.password.length<6)
            {
                alert("entre un mot de passe de 6 caracteres enculer")
                return;
            }
            firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
        }
        catch(error){
            console.log(error.toString())
        }
    }

    signUpUser = (email, password) =>{
        try{
            if(this.state.password.length<6)
            {
                alert("entre un mot de passe de 6 caracteres enculer")
                return;
            }
            firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
        }
        catch(error){
            console.log(error.toString())
        }
    }



    render() {
        return (
            <ImageBackground  source={require('../assets/images/Connexion.png')} style={styles.main_container}>
            
                <Container style={styles.form_input}>
                    <Form>
                        <Item style={ styles.textInputName}>
                            <Label>Email :</Label>
                            <Input
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={( email ) => this.setState ({ email })}
                            />
                        </Item>

                        <Item style={styles.textInputMdp}>
                            <Label>Password :</Label>
                            <Input
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={( password ) => this.setState ({ password })}
                            />
                        </Item>

                    </Form>
                    <TouchableOpacity style={styles.buttonStart} onPress={() => {this.loginUser(this.state.email, this.state.password)}}>
                        <Text style={styles.Text}>A l'aventure !</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRegister} onPress={() => {this.signUpUser(this.state.email, this.state.password)}}>
                        <Text style={styles.Text}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonFacebook} onPress={() => {}}>
                        <Text style={styles.Text}>Connexion facebook</Text>
                    </TouchableOpacity>

                    <Text style={{color: 'black'}}
                      onPress={() => Linking.openURL('https://play.google.com/about/play-terms.html')}>
                    Conditions d'utilisations
                    </Text>
                </Container>



                
                
            </ImageBackground>
        )

    }
}

const styles = StyleSheet.create(
    {
        form_input: {
            width: 0,
            height: 20,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 200,
        },

        textInputName: {
            width: 280,
            height: 40,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: 90,
            borderRadius: 10,
        },

        textInputMdp: {
            width: 280,
            height: 40,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: 10,
            borderRadius: 10,
        },

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

        buttonRegister: {
            width: 180,
            height: 40,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            borderRadius: 5,
        },
        buttonStart: {
            width: 180,
            height: 40,
            backgroundColor: '#1FA14F',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -350,
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