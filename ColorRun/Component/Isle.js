import React from 'react'
import {Animated, Image } from 'react-native';


class Isle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {toValue: 1}
        ).start();
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