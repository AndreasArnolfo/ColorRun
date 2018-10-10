import React from 'react'
import {Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native'
import LoadingPage from "./LoadingPage";
import Isle from "./Isle";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timePassed: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setTimePassed();
        }, 100);
    }

    setTimePassed() {
        this.setState({timePassed: true});
    }


    render() {

        if (!this.state.timePassed) {
            return <LoadingPage/>;
        }
        else {
            return (
                <ImageBackground source={require('../assets/images/Background.png')} style={styles.main_container}>
                    <View style={styles.isle}>
                        <Isle/>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("Dev")}}>
                            <Image source={require('../assets/images/Dev.png')}/>
                            <Image source={require('../assets/images/Dev1.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("Design")}}>
                            <Image source={require('../assets/images/Design.png')}/>
                            <Image source={require('../assets/images/Design1.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("Market")}}>
                            <Image source={require('../assets/images/Market.png')}/>
                            <Image source={require('../assets/images/Market1.png')}/>
                        </TouchableOpacity>
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

        icon: {
            position: 'absolute',
            top: '25%',
            left: '15%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 0,

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

export default Home