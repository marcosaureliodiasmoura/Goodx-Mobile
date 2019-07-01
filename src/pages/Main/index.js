import React, { Component } from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

class Main extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.backgroundWrapper}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              hitSlop={{
                top: 5,
                bottom: 5,
                left: 10,
                right: 10,
              }}
              onPress={() => {}}
            >
              <Icon name="menu" size={24} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.teamTitle}>Goodx</Text>
            <TouchableOpacity
              hitSlop={{
                top: 5,
                bottom: 5,
                left: 10,
                right: 10,
              }}
              onPress={() => {}}
            >
              <Icon name="account-circle" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

// mapStateToProps and Connect Here.

export default Main;
