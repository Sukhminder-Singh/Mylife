//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import Colors from '../../style/Colors';

// create a component
const PassportHome = props => {
  return (
    <SafeAreaView>
      <View style={{flex: 1,backgroundColor: 'red'}}>
          <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default PassportHome;
