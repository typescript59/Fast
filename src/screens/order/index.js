import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import { Actions as NavigationActions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient'

import styles from './style.js';

class Order extends Component {
    render() {
        return (
            <View>
                <Text>
                    Order SCREEN
                </Text>
            </View>
        );
    }
}

export default Order;