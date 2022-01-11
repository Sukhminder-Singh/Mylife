import React, {Fragment} from 'react';
import {SafeAreaView, View, Text,Platform,Dimensions} from 'react-native';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
  DrawerItems,
} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../style/Colors';
import {
  HomeScreen,
  LinkAccount,
  UpcomingExpiryDtaes,
  Archives,
  Settings,
  StaticScreens,
  Logout,
  ContactUs,
  Profile
} from '../screens';
import DrawerUserDetail from './DrawerUserDetail'

const { height, width } = Dimensions.get('window');

const CustomDrawerContentComponent = props => (
  <SafeAreaView style={{flex: 1, backgroundColor: Colors.darkBgColor}}>
    <View
      style={{
        backgroundColor: Colors.appColor,
        height: '6.5%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
       
      <DrawerUserDetail {...props} />
    </View>

    <DrawerNavigatorItems
      {...props}
      
       
    />
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: () => <Icon name="home" color="#fff" size={20} />,
      },
    },
    
    LinkAccount: {
      screen: LinkAccount,
      navigationOptions: {
        drawerLabel: 'Link Account',
        drawerIcon: () => <Icon name="link" color="#fff" size={20} />,
      },
    },
    UpcomingExpiryDtaes: {
      screen: UpcomingExpiryDtaes,
      navigationOptions: {
        drawerLabel: 'Upcommming Expiry Dates',
        drawerIcon: () => <Icon name="clock-o" color="#fff" size={20} />,
      },
    },
    Archives: {
      screen: Archives,
      navigationOptions: {
        drawerLabel: 'Archives',
        drawerIcon: () => <Icon name="archive" color="#fff" size={20} />,
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        drawerLabel: 'Setting',
        drawerIcon: () => <Icon name="cog" color="#fff" size={20} />,
      },
    },
    ContactUs: {
      screen: ContactUs,
      navigationOptions: {
        drawerLabel: 'Contact Us',
        drawerIcon: () => <Icon name="envelope" color="#fff" size={20} />,
      },
    },
    StaticScreens: {
      screen: StaticScreens,
      navigationOptions: {
        drawerLabel: 'Static Screen',
        drawerIcon: () => <Icon name="home" color="#fff" size={20} />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        drawerLabel: 'Update Profile',
        drawerIcon: () => <Icon name="edit" color="#fff" size={20} />,
      },
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        drawerLabel: 'Logout',
        drawerIcon: () => <Icon name="sign-out" color="#fff" size={20} />,
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: '#fff',
      tintColor: Colors.bgColor,
      activeBackgroundColor: Colors.bgColor,
      inactiveTintColor: '#fff',
      inactiveBackgroundColor: Colors.darkBgColor,
    },
    contentComponent: CustomDrawerContentComponent,
  },
);

export default AppDrawerNavigator;
