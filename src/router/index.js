import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../page/home"
import My from "../page/my"
const AppNavigator = createStackNavigator({ 
	Home: { screen: HomeScreen  },
	My: { screen: My  },
 }); 
export default createAppContainer(AppNavigator);