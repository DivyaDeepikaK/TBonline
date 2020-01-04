import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  export default class Props extends Component {
    render() {
      return (
        <View style={styles.container}>
            <Text style={{color:'red'}}>{this.props.x+" "+this.props.y}</Text>
            </View>
      );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
});