


import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Button, View} from 'react-native';



export default class My extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      titleText: "hello,快收技术部",
      bodyText: 'This is not really a bird nest.'
    };
  }
  render() {
    return (
			<View style={styles.container}>
			<Button title="my1"  />
			<Button title="my2"  />
			<Text>{this.state.titleText}{'\n'}{'\n'}</Text>
			</View> 
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

