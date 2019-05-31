


import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Button, View} from 'react-native';
import {getgoodslist} from "../../api/index.js"


export default class Home extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      titleText: "helle,快收信息科技",
      bodyText: 'This is not really a bird nest.'
		};
	}
	componentDidMount=()=>{
		console.log(this)
		this.getGoodsList()
	}
  render() {
    return (
			<View style={styles.container}>
			<Button title="to my"  onPress={() => this.props.navigation.navigate('My',{
              itemId: 86,
							otherParam: 'anything you want here',
			})}/>
			<Button title="hello,kuaishou"  />
			<Text>{this.state.titleText}{'\n'}{'\n'}</Text>
			</View> 
    );
	}
	getGoodsList() {
		getgoodslist().then((res)=>{
			console.log(res)
		})
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

