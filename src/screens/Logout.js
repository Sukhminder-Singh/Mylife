import React from 'react';
import {View, Text, TouchableOpacity,SafeAreaView} from 'react-native';
import {styles} from '../style/Style';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Logout() {
  const logouthandler = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key').then(() => {
        props.navigation.navigate('Login');
      });
    } catch (exception) {
      return false;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={logouthandler}>
        <Text style={styles.forgot}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
