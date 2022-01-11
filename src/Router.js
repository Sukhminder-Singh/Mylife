import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {LoginScreen, SplashScreen, HomeScreen, ForgotPassword} from './screens';
import PassportHome from './screens/Passport/PassportHome';
import AppDrawerNavigator from './components/AppDrawerNavigator';

const commonStack = {
  PassportHome: {
    screen: PassportHome,
    navigationOptions: {
      headerShown: false,
    },
  },
};
const authStack = {
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerShown: false,
    },
  },
};
const AppStackAuth = createStackNavigator(authStack);

const AppCommon = createStackNavigator(commonStack);

// Create switch navigator
const AppSwitchNavigator = createSwitchNavigator(
  {
    InitialScreen: {
      screen: SplashScreen,
    },
    Auth: AppStackAuth,
    App: AppCommon,
    Drawer: AppDrawerNavigator,
  },
  {
    initialRouteName: 'InitialScreen',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);
const Router = createAppContainer(AppSwitchNavigator);

export default Router;
