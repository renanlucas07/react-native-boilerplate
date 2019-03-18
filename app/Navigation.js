import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from "./screens/HomeScreen";

// Screens when user is logged
const AppStack = createStackNavigator({
  Home: HomeScreen
});

// Screens when user is not logged
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
},{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
  }
});

const Navigator = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default Navigator;
