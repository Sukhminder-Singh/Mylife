import React, {Fragment, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
  Alert,
  Picker,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FlatHeader, Group} from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
// import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from 'react-navigation-drawer';
import {connect} from 'react-redux';
import {setLoader} from '../actions';
// import { withNavigationFocus, useNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AppDrawerNavigator from './AppDrawerNavigator';
const {width, height} = Dimensions.get('window');
import MyStatusBar from './MySatusBar';
import Colors from '../style/Colors';

function Header(props, navigation) {
  _onBackIconPress = () => {
    if (props.backScreen && props.backScreen != '') {
      props.navigation.navigate(props.backScreen);
    } else {
      if (props.headerTitle == 'HOME') {
        BackHandler.exitApp();
      } else {
        props.navigation.goBack();
      }
    }
    return true;
  };

  // const {goBack} = props.navigation;
  const leftIcon =
    props.headerTitle == 'HOME' ? (
      <Icon name="bars" size={24} color="#FFF" />
    ) : (
      <Icon name="arrow-left" size={20} color="#FFF" />
    );

  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      {/* <MyStatusBar backgroundColor={Colors.primary} barStyle="light-content" /> */}
      {/* <MyStatusBar /> */}
      <FlatHeader
        leftIcon={<View style={{height: 30}}>{leftIcon}</View>}
        leftIconHandler={() => {
          props.headerTitle == 'HOME'
            ? props.navigation.openDrawer()
            : _onBackIconPress();
        }}
        centerContent={
          <View style={{width: width * 0.6, alignContent: 'center'}}>
            <Text
              style={{color: Colors.white, fontSize: 16, fontWeight: 'bold'}}>
              {props.headerTitle}
            </Text>
          </View>
        }
        style={{backgroundColor: Colors.primary}}
        rightIcon={<View />}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  profileClickImage: {
    backgroundColor: '#200d71',
    width: 40,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#200d71',
    marginLeft: 18,
  },
  picker: {
    borderWidth: 1,
    height: 45,
    borderColor: '#FFF',
    borderRadius: 5,
    paddingBottom: 15,
  },
  pickerText: {
    color: '#FFF',
    paddingBottom: 15,
  },
  inputBoxD: {
    width: width * 0.75,
    borderColor: Colors.inputBorder,
    borderWidth: 1,
    height: 45,
    paddingLeft: 0,
    fontSize: 15,
    color: Colors.inputBoxD,
    backgroundColor: Colors.white,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default Header;

// const HeaderScreen = withNavigationFocus(Header);
// const mapStateToProps = state => {
//   return ({
//     isLoading: state.profile.isLoading,
//     // dashboardResponse: state.profile.dashboardResponse,
// 	// 	expiryResponse: state.category.expiryResponse,
// 	// 	profileResponse: state.profile.profileResponse,
// 	// 	switchResponse: state.profile.switchResponse
//   });
// }

// export default connect(
//     mapStateToProps,
//     { setLoader }
// )(HeaderScreen);
