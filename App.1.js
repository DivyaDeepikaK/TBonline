import React, { Component } from 'react';
import { View } from 'react-native';
import SInfo from 'react-native-sensitive-info';
import { styles } from './App';
export default class App extends Component {
  componentWillMount() {
    SInfo.setItem("email", "divya@gmail.com", {});
  }
  componentDidMount() {
    SInfo.getItem("email", {}).then(value => {
      alert(value);
    });
  }
  render() {
    return (<View style={styles.container}>

    </View>);
  }
}
