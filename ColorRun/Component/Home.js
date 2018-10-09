import React from 'react'
import {ImageBackground, StyleSheet} from 'react-native'
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
        }, 4000);
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
                    <Isle/>
                </ImageBackground>
            )
        }
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Home