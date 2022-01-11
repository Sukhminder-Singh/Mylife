import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MyStatusBar from '../components/MySatusBar';
import Header from '../components/Header';
import {styles} from '../style/Style';
import Colors from '../style/Colors';

export default function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={props.navigation} headerTitle="HOME" />
      <View style={{marginTop:20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          {/* first circle in 1 row */}
          <TouchableHighlight
            style={sty.catCircle}
            underlayColor={Colors.primary}
            onPress={() => props.navigation.navigate('PassportHome')}>
            <Text style={sty.categoryTitle}>My Passport</Text>
          </TouchableHighlight>
          {/* second circle in 1 row */}
          <TouchableHighlight
            style={[sty.catCircle, {marginLeft: 15}]}
            underlayColor={Colors.primary}
            onPress={() => console.log('Home item preesed')}>
            <Text style={sty.categoryTitle}>My id's</Text>
          </TouchableHighlight>
        </View>
        {/* Second Row */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            marginTop: 10,
          }}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', right: 45}}>
            <TouchableHighlight
              style={sty.catCircle}
              underlayColor={Colors.primaryDark}>
              <Text style={sty.categoryTitle}>My Vehicle</Text>
            </TouchableHighlight>
          </View>
          {/* 2 data of 2 row */}

          <View
            style={{justifyContent: 'center', alignItems: 'center', left: 50}}>
            <TouchableHighlight
              style={[sty.catCircle, {marginLeft: 15}]}
              underlayColor={Colors.primaryDark}>
              <Text style={sty.categoryTitle}>My People</Text>
            </TouchableHighlight>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', right: 35}}>
            <TouchableHighlight
              style={sty.catCircle}
              underlayColor={Colors.primaryDark}>
              <Text style={sty.categoryTitle}>My insurance</Text>
            </TouchableHighlight>
          </View>
          {/*  */}
          <View
            style={{justifyContent: 'center', alignItems: 'center', left: 30}}>
            <TouchableHighlight
              style={[sty.catCircle, {marginLeft: 15}]}
              underlayColor={Colors.primaryDark}>
              <Text style={sty.categoryTitle}>My Health</Text>
            </TouchableHighlight>
          </View>
        </View>
        {/* last circle */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -25,
          }}>
          <TouchableHighlight
            style={sty.catCircle}
            underlayColor={Colors.primaryDark}
             >
            <Text style={sty.categoryTitle}>
             Other
            </Text>
          </TouchableHighlight>
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
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  categoryTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 14,
    color: Colors.white,
  },
});
