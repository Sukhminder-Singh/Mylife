import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Colors from "./Colors";
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    forgot: {
        color: '#FF6700',
        marginLeft: 'auto',
        marginRight: 'auto',
        textDecorationLine: 'underline',
        marginTop: 10,
        fontSize: 15
    },
    buttonStyle: {
        backgroundColor: '#E1600C',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '90%'
    },
    emailcontainer: {
        backgroundColor: Colors.white,
        height: '18%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingEnd: 13,
        padding: 5,
    },
    logincontainer: {
        padding: '4%',
        height: '38%',
        width: '90%',
        borderWidth: 0.5,
        backgroundColor: Colors.contaier,
        borderColor: Colors.white,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop: '8%'
    },
    forgotcontainer: {
        padding: '4%',
        height: '30%',
        width: '90%',
        borderWidth: 0.5,
        backgroundColor: Colors.contaier,
        borderColor: Colors.white,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop: '8%'
    },
    splashContainer: {
        backgroundColor: Colors.bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        height: height
    },
    container: {
        backgroundColor: Colors.bgColor,
        alignItems: 'center',
        height: height
    },
    imageStyle: {
        marginTop: '10%'
    },
    text1: {
        color: Colors.white,
        fontSize: 30,
        marginTop: '2%'
    },
    text2: {
        color: Colors.white,
        fontSize: 20,
        fontWeight:'bold',
    },
    text3: {
        color: Colors.white,
        fontSize: 16
    },
    newAccountcontainer: {
        marginTop: '5%'
    }
    // line: {
    //     height: '0.1%',
    //     width: '100%',
    //     backgroundColor: Colors.white
    // }
});