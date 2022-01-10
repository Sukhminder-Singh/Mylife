/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {useEffect} from 'react';
 import {
   View
 } from 'react-native';
 
 import { isSignedIn } from '../actions';

 export default function InitialScreen(props) {

    useEffect(() => {
        isSignedIn().then(res => {

        if(res) {
            console.log("MC")
            props.navigation.navigate("App");
        } else {
            console.log("BC")
            props.navigation.navigate("Login");
        }
        })
        .catch(err => console.log(err));
        }, []);
 
    return (
        <View></View>
    )
}