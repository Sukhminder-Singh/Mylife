import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  Button,
  StyleSheet,
  
  Dimensions,TouchableOpacity

} from 'react-native';

import MyStatusBar from '../components/MySatusBar';
import Header from '../components/Header';
import {styles} from '../style/Style';
import Colors from '../style/Colors';

export default function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={props.navigation} headerTitle="HOME" />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableHighlight
            style = {sty.catCircle}
            underlayColor = {Colors.primaryDark}
          ><Text>TEST</Text></TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}

const sty = StyleSheet.create({
  catCircle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
});
