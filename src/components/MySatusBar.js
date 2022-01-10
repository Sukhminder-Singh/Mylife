import React, {useEffect} from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Platform,
	StatusBar,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Colors from '../style/Colors';

export default function MyStatusBar(props)  {


	// useEffect = (() => {
	// 	Icon.loadFont();
	// })

  
	return (
    	<View style={[styles.statusBar, { backgroundColor:Colors.bgColor }]}>
    	    <StatusBar translucent={false} backgroundColor={Colors.bgColor} barStyle="dark-content" />
    	</View>
    )
  
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 24 : STATUSBAR_HEIGHT;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : APPBAR_HEIGHT;

const styles = StyleSheet.create({

  statusBar: {
		...ifIphoneX({
        height: STATUSBAR_HEIGHT+20
    }, {
        height: STATUSBAR_HEIGHT
    }),
		borderBottomColor: Colors.primary,
		borderBottomWidth: 1
  },
  appBar: {
    backgroundColor:Colors.primary,
    height: APPBAR_HEIGHT,
  }

});
