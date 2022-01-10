import { createSwitchNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import {
    LoginScreen,
    SplashScreen,
    HomeScreen,
    ForgotPassword
} from './screens';
import AppDrawerNavigator from './components/AppDrawerNavigator';

const commonStack = {
    Home: {
        screen: HomeScreen,
        
    }
};
const authStack = {
    Splash: {
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false
          }
      },
    Login: {
      screen: LoginScreen,
      navigationOptions:{
        headerShown: false
      }
    },
    
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions:{
        headerShown: false
      }
    }
};
const AppStackAuth = createStackNavigator(authStack)

const AppCommon = createStackNavigator(commonStack)

// Create switch navigator
const AppSwitchNavigator = createSwitchNavigator({

    InitialScreen: {
        screen: SplashScreen
    },
    Auth: AppStackAuth,
    App: AppDrawerNavigator,
    // Drawer: AppDrawerNavigator,
  }, {
    initialRouteName: 'InitialScreen',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  });
const Router = createAppContainer(AppSwitchNavigator);

export default Router;

