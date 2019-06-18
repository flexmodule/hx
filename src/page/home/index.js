


import React, {Component} from 'react';
import {Platform,SectionList, ActivityIndicator,StyleSheet, Text,Button, View} from 'react-native';
import {getgoodslist} from "../../api/index.js"
import i18n from "../../utils/switchlanguage.js"
import DeviceInfo from 'react-native-device-info';
import * as RNLocalize from "react-native-localize";

export default class Home extends React.Component {
  static navigationOptions = {
    title: '汇享旅行',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

	constructor(props) {
    super(props);
    this.state = {
      titleText: "helle,快收信息科技",
      bodyText: 'This is not really a bird nest.',
      isLoading:true
		};
	}
	componentDidMount=()=>{
    console.log(DeviceInfo.getVersion())
    console.log(i18n.t("home"))
    console.log(Platform)
    console.log(RNLocalize.getLocales());
		this.getGoodsList()
	}
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
			<View style={styles.container}>
      <View style={styles.scanview}>
      <Text style={styles.scantext} onPress={this.toscan}>{i18n.t("scan")}</Text>
      </View>
      
      <View style={{ backgroundColor: "blue",width:200,height:30}}>
      <Text>123</Text>
      </View>
			<Button title="to my"  onPress={() => this.props.navigation.navigate('My',{
              itemId: 86,
							otherParam: 'anything you want here',
			})}/>
      
			<Button title="hello,kuaishou"  />
			<Text style={styles.button}>{this.state.titleText}{'\n'}{'\n'}</Text>
      <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
			</View> 
    );
  }
  toscan=()=>{
    const { navigate } = this.props.navigation;
    navigate('Scan', {
      itemId: 86,
      otherParam: 'anything you want here',
    }) 
  }
	getGoodsList() {
		getgoodslist().then((res)=>{
      console.log(res)
      this.setState({
        isLoading: false
      }, function(){

      });
		})
	}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  scanview: {
    width:"100%",
    height:40,
    flexDirection: 'row',
    justifyContent:"center",
  },
  scantext: {
    width:100,
    height:"100%",
    fontSize:24,
    lineHeight:40,
    color:"#999",
    borderRadius:10,
    textAlign:"center",
    backgroundColor:"#eee",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  button: {
    width:200,
    height:70,
    backgroundColor:'red'
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

