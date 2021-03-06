


import React, {Component} from 'react';
import {Platform, Linking,StyleSheet, Animated,Easing,Text,Button, View} from 'react-native';
import { RNCamera } from 'react-native-camera'


export default class Scan extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            moveAnim: new Animated.Value(0)
        };
  }
  render() {
    return (
        <View style={styles.container}>
               <RNCamera
                   ref={ref => {
                       this.camera = ref;
                   }}
                   style={styles.preview}
                   type={RNCamera.Constants.Type.back}
                   flashMode={RNCamera.Constants.FlashMode.on}
                   onBarCodeRead={this.onBarCodeRead}
               >
                   <View style={styles.rectangleContainer}>
                       <View style={styles.rectangle}/>
                       <Animated.View style={[
                           styles.border,
                           {transform: [{translateY: this.state.moveAnim}]}]}/>
                       <Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
                   </View>
                   </RNCamera>
           </View>
    );
  }
  componentDidMount() {
      console.log(9)
    this.startAnimation();
}

startAnimation = () => {
    this.state.moveAnim.setValue(0);
    Animated.timing(
        this.state.moveAnim,
        {
            toValue: -200,
            duration: 1500,
            easing: Easing.linear
        }
    ).start(() => this.startAnimation());
}
onBarCodeRead = (result) => {
    console.log(result)
    const { navigate } = this.props.navigation;
           const {data} = result; //只要拿到data就可以了
           //路由跳转到webView页面；
        navigate('My', {  
            url: data
        }) 
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    },
    rectangleText: {
        flex: 0,
        color: '#fff',
        marginTop: 10
    },
    border: {
        flex: 0,
        width: 200,
        height: 2,
        backgroundColor: '#00FF00',
    }
});

