import { createStackNavigator, createAppContainer } from "react-navigation";
import {Easing,Animated} from 'react-native';
import HomeScreen from "../page/home"
import My from "../page/my"
import Scan from "../page/scan"
const AppNavigator = createStackNavigator({ 
	Home: { screen: HomeScreen  },
	My: { screen: My  },
	Scan: { screen: Scan  },
 },{
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
	transitionConfig: () => ({
		transitionSpec: {
			duration: 200,
			easing: Easing.out(Easing.poly(4)),
			timing: Animated.timing
		},
		screenInterpolator: sceneProps => {
			const {layout, position, scene} = sceneProps;
			const {index} = scene;
			const Width = layout.initWidth;
			//沿X轴平移
			const translateX = position.interpolate({
				inputRange: [index - 1, index, index + 1],
				outputRange: [Width, 0, -(Width - 10)],
			});
			//透明度
			const opacity = position.interpolate({
				inputRange: [index - 1, index - 0.99, index],
				outputRange: [0, 1, 1],
			});
			return {opacity, transform: [{translateX}]};
		}
	})
 }); 
export default createAppContainer(AppNavigator);