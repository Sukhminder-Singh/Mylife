import React, { useEffect } from 'react'
import { View, Text, Image, SafeAreaView, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../style/Style'


export default function SplashScreen(props) {

    useEffect(() => {
        setTimeout(() => {

            getData()
        }, 4000);
    }, []);



    const getData = async () => {
        try {

            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            if (jsonValue) {
                props.navigation.navigate('Home')
            } else {
                props.navigation.navigate('Login')
            }

        } catch (e) {
            console.log(e);
        }
    }


    return (
        <View style={styles.splashContainer}>
            <StatusBar barStyle="light-content" />
            <View >
                <Image source={require("../asstes/images/Logo.png")} />
            </View>
        </View>
    )
}
