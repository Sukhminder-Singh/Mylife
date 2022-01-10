import React, {useState, useEffect}  from 'react'
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text,StatusBar,Image, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import DropdownAlert from 'react-native-dropdownalert';
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Texts from '../constants/Texts'
import { styles } from '../style/Style'
import { loginUser } from '../actions';
import MyStatusBar from '../components/MySatusBar';


function LoginScreen(props) {
    console.log("LoginScreen")
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const storeData = async (value) => {
        // console.log("VALUE", value);
        try {
          await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
          console.log(e)
        }
      }

    //   useEffect (() => {
    //     getData();
    //   },[]);

    //   const getData = async (value) => {
    //     try {
    //       const value = await AsyncStorage.getItem('@storage_Key', value)
    //       if(value !== null) {
    //         props.navigation.navigate('Home');
    //       }
    //     } catch(e) {
    //       props.navigation.navigate('Login')
    //     }
    //   }

    let dropDownAlertRef = React.useRef();

    const loginHandler = async () => {
        if (data.email.length == 0 || data.password.length == 0) {
            dropDownAlertRef.alertWithType(
                'error',
                'Error',
                'Username or password field cannot be empty.',
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

        if (data.password.trim().length < 8) {
            dropDownAlertRef.alertWithType(
                'error',
                'Error',
                'Please enter 8 character password',
            );

            return;
        }
        let email = data.email
        let password = data.password
        props.loginUser({ email, password })
            .then(result => {
                 
                if (props.response.success) {
                    dropDownAlertRef.alertWithType(
                        'success',
                        'Success',
                        props.response.message,
                    );
                    // /console.log("asdasd",props.response)
                    storeData(props.response.data.token)
                    props.navigation.navigate("App");
                } 
                else {
                    dropDownAlertRef.alertWithType(
                        'error',
                        'Error',
                        props.response.message,
                    );
                }
            })
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
        console.log("email", value);
    };

    const textPasswordChange = value => {
        if (value) {
            setData({
                ...data,
                password: value,
                check_textInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                password: value,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
        console.log("passsword", value);
    };

    


    return (
        <KeyboardAvoidingView style={styles.container}>
            <MyStatusBar />
            <StatusBar barStyle="light-content" backgroundColor={Colors.StatusBar} />
                {/* <View style={styles.line} /> */}
                <View style={styles.imageStyle}>
                    <Image source={require("../asstes/images/Logo1.png")}  />
                </View>
                <Text style={styles.text1}>
                    {Texts.letsgo}
                </Text>
                <View style={styles.logincontainer}>
                    <View style={styles.emailcontainer}>
                        <TextInput
                            style= {styles.input}
                            placeholder={Texts.emailPlaceholder}
                            autoCapitalize="none"
                            onChangeText={(value) => textInputChange(value)}
                        />
                        <Image source={require("../asstes/images/mail-outline.png")}  />
                    </View>
                    <View style={styles.emailcontainer}>
                        <TextInput
                            style= {styles.input}
                            placeholder={Texts.passwordPlaceholder}
                            secureTextEntry
                            onChangeText={(value) => textPasswordChange(value)}
                        />
                        <Image source={require("../asstes/images/eye-off-outline.png")}  />
                    </View>
                    <TouchableOpacity onPress={loginHandler} style={styles.buttonStyle}  >
                        <Text style={styles.text2}>
                            {Texts.loginText}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>  props.navigation.navigate('ForgotPassword')} >
                        <Text style={styles.forgot}>
                            {Texts.forgot}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.newAccountcontainer}>
                    <Text style={styles.text3}>
                        {Texts.newAccount}
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.forgot}>
                            {Texts.createnew}
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
    { loginUser }
)(LoginScreen);