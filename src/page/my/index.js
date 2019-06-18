


import React, {Component} from 'react';
import {Platform, DatePickerAndroid,ActivityIndicator,StyleSheet, Text,Button, View} from 'react-native';



export default class My extends React.Component {
  static navigationOptions = {
    title: 'my', 
  };
	constructor(props) {
    super(props);
    this.state = {
      titleText: "hello,快收技术部",
      bodyText: 'This is not really a bird nest.',
      language:"123"
    };
  }
  render() {
    return (
			<View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
			<Button title="my1"  onPress={this.selectdate}/>
			<Button title="my2"  />
			<Text>123</Text>
			</View> 
    );
  }
  async selectdate() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // 要设置默认值为今天的话，使用`new Date()`即可。
        // 下面显示的会是2020年5月25日。月份是从0开始算的。
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
        console.log(year, month, day)
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
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

