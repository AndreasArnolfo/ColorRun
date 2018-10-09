import React from 'react'
import {Animated, Image, Easing} from 'react-native';

class Isle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0), // init opacity 0
        };
    }

    componentDidMount() {
        Animated.timing(
            // Uses easing functions
            this.state.fadeAnim, // The value to drive
            {toValue: 1} // Configuration
        ).start(); // Don't forget start!
    }

    render() {
        return (
            <Animated.View
                style={{opacity: this.state.fadeAnim}}>
                <Image source={require('../assets/images/Isle.png')}/>

                {this.props.children}
            </Animated.View>
        );
    }
}

export default Isle