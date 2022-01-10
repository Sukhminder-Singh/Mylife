import React, {useState} from 'react'
import { connect } from 'react-redux';
import { View, Image, Text, KeyboardAvoidingView, StatusBar, TextInput, TouchableOpacity  } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import {styles} from '../style/Style';
import Colors from '../style/Colors';
import Texts from '../constants/Texts';
import { forgot } from '../actions/index';

function ForgotPassword(props) {

    const [data, setData] = useState({
        email: ''
    })

    let dropDownAlertRef = React.useRef();

    const resetHandler = () => {
        if (data.email.length == 0 ) {
            dropDownAlertRef.alertWithType(
                'error',
                'Error',
                'Email field cannot be empty.',
            );
            return;
        }

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(data.email) === false) {
            dropDownAlertRef.alertWithType(
                'error',
                'Error',
                'Please enter valid email',
            );
        }
        
        let email = data.email
        props.forgot({email})
    }    

    const textInputChange = value => {
        if (value) {
            setData({
                ...data,
                email: value,
                check_textInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                email: value,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
        
    };


    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.StatusBar} />
            <View style={styles.imageStyle}>
                    <Image source={require("../asstes/images/Logo1.png")}  />
            </View>
            <Text style={styles.text1}>{Texts.forgot}</Text>
            <View style={styles.forgotcontainer}>
                    <View style={styles.emailcontainer}>
                        <TextInput
                            style= {styles.input}
                            placeholder={Texts.emailPlaceholder}
                            autoCapitalize="none"
                            onChangeText={(value) => textInputChange(value)}
                        />
                        <Image source={require("../asstes/images/mail-outline.png")}  />
                    </View>
                    <TouchableOpacity onPress={resetHandler} style={styles.buttonStyle}  >
                        <Text style={styles.text2}>
                            {Texts.resetText}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <Text style={styles.forgot}>
                            {Texts.createnew}
                        </Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.newAccountcontainer}>
                <Text style={styles.text3}>
                    {Texts.haveaccount}
                </Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Login')} >
                    <Text style={styles.forgot}>
                        {Texts.signintext}
                    </Text>
                </TouchableOpacity>
            </View>
            <DropdownAlert
                ref={(ref) => {
                    if (ref) {
                        dropDownAlertRef = ref;
                    }
                }}

            />
        </KeyboardAvoidingView>    
    )
}

const mapStateToProps = state => {

    return ({

        response: state.login.loginresponse
    });
}

export default connect(
    mapStateToProps,
    { forgot }
)(ForgotPassword);
