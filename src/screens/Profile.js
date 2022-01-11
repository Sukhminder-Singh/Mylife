import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import Header from '../components/Header';
import {connect} from 'react-redux';
import {setLoader, getUserData, updateProfile} from '../actions';

import {styles} from '../style/Style';
import Colors from '../style/Colors';
const {height, width} = Dimensions.get('window');
import DatePicker from 'react-native-datepicker';

function Profile(props) {
  const [data, setData] = useState({
    email: '',
    name: '',
    mobile_number: '',
    dob: '',
    gender: '',
  });

  var today = new Date();
  const date =
    today.getFullYear() +
    '/' +
    parseInt(today.getMonth() + 1) +
    '/' +
    today.getDate();

  useEffect(() => {
    _getUserData();
  }, []);

  const validate = () => {
    const {name, email, mobile_number, dob} = data;

    if (name == '' || email == '' || mobile_number == '' || dob == '') {
      console.log('field is required');
      return;
    }
    props.updateProfile({name, email, mobile_number, dob}).then(result => {
      if (props.response.success) {
        console.log('sukhminder');
        Alert.alert("Profile is updaed Successfully")
      } else {
        Alert.alert("Error")
      }
    });
  };

  const _getUserData = () => {
    props.getUserData().then(result => {
      setData({
        name: props.profileResponse.name,
        email: props.profileResponse.email,
        mobile_number: props.profileResponse.mobile_number,
        dob: props.profileResponse.dob,
      });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={props.navigation} headerTitle="Profile" />
      <View style={{height: height, backgroundColor: Colors.bgColor}}>
        <View contentContainerStyle={{flexGrow: 1}}>
          <ScrollView
            keyboardShouldPersistTaps={'always'}
            contentContainerStyle={{paddingBottom: 100}}>
            <View style={styles1.formInner}>
              <View style={styles1.inputInner}>
                <Text style={styles1.formLabel}>Name:</Text>
                <TextInput
                  style={[styles1.inputBox]}
                  placeholder="Name"
                  placeholderTextColor={Colors.placeholderTextColor}
                  value={data.name}
                  onChangeText={name => setData({...data, name: name})}
                />
              </View>
              {/*  */}
              <View style={styles1.inputInner}>
                <Text style={styles1.formLabel}>Email:</Text>
                <TextInput
                  style={[styles1.inputBox]}
                  placeholder="Email"
                  placeholderTextColor={Colors.placeholderTextColor}
                  value={data.email}
                  onChangeText={name => setData({...data, email: name})}
                />
              </View>
              {/*  */}
              <View style={styles1.inputInner}>
                <Text style={styles1.formLabel}>Mobile Number:</Text>
                <TextInput
                  style={[styles1.inputBox]}
                  placeholder="Mobile number"
                  placeholderTextColor={Colors.placeholderTextColor}
                  value={data.mobile_number}
                  onChangeText={name => setData({...data, mobile_number: name})}
                />
              </View>
              {/*  */}
              <View style={styles1.inputInner}>
                <Text style={styles1.formLabel}>Date of Birth:</Text>
                <DatePicker
                  style={{width: width * 0.8}}
                  date={data.dob}
                  mode="date"
                  placeholder="YYYY-MM-DD"
                  format="YYYY-MM-DD"
                  maxDate={date}
                  confirmBtnText="Select"
                  cancelBtnText="Cancel"
                  customStyles={{
                    btnTextConfirm: {
                      color: '#0f7cf8',
                    },
                    dateIcon: {
                      ...Platform.select({
                        android: {
                          width: 1,
                          height: 0,
                        },
                        ios: {
                          width: 1,
                          height: 0,
                        },
                      }),
                    },
                    dateInput: {
                      alignItems: 'flex-start',
                      color: Colors.white,
                      backgroundColor: Colors.white,
                      borderColor: '#cccccc',
                      borderWidth: 1,
                      height: 45,
                      paddingHorizontal: 16,
                      marginLeft: 10,
                    },
                    dateText: {
                      fontSize: Platform.OS === 'android' ? 14 : 12,
                      color: Colors.inputBorder,
                    },
                    placeholderText: {
                      fontSize: Platform.OS === 'android' ? 14 : 14,
                      color: Colors.placeholderTextColor,
                    },
                  }}
                  onDateChange={dob => {
                    setData({...data, dob: dob});
                  }}
                />
              </View>
              {/*  */}
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 35,
                }}>
                <TouchableOpacity
                  onPress={validate}
                  style={{
                    backgroundColor: '#E1600C',
                    height: '42%',
                    width: '82%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.text2}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles1 = StyleSheet.create({
  formLabel: {
    width: width * 0.75,
    color: Colors.white,
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingBottom: 5,
  },
  formInner: {
    backgroundColor: Colors.darkBgColor,
    alignSelf: 'center',
    width: width * 0.9,
    marginTop: 20,
    borderWidth: 0.25,
    borderColor: Colors.whiteBorder,
    paddingVertical: 5,
    paddingBottom: 30,
  },
  inputBox: {
    width: width * 0.75,
    borderColor: Colors.inputBorder,
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 16,
    fontSize: 15,
    color: Colors.inputBorder,
    backgroundColor: Colors.white,
  },
  inputBoxD: {
    width: width * 0.75,
    borderColor: Colors.inputBorder,
    borderWidth: 1,
    height: 45,
    paddingLeft: 0,
    fontSize: 15,
    color: Colors.inputBoxD,
    backgroundColor: Colors.white,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  inputInner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  inputInnerB: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  orderInner: {
    backgroundColor: Colors.white,
    paddingVertical: 5,
    marginVertical: 8,
    borderRadius: 8,
    width: width * 0.94,
  },
  headingTitle: {
    color: '#000',
    fontWeight: '600',
    alignSelf: 'center',
  },
  headingInner1: {
    backgroundColor: '#fafafa',
    width: '100%',
    height: 35,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  innerBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '8%',
    alignSelf: 'center',
  },
  loginBtn: {
    width: width * 0.75,
    height: 45,
    borderWidth: 2,
    borderColor: Colors.appColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  btn: {
    height: 30,
    width: width * 0.2,
    borderRadius: 4,
    borderColor: '#757575',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextL: {
    color: Colors.white,
    fontSize: 12,
  },
  categoryTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 18,
  },
  error: {
    borderColor: 'red',
  },
});

const mapStateToProps = state => {
  return {
    isLoading: state.profile.isLoading,
    response: state.profile.response,
    profileResponse: state.profile.profileResponse,
  };
};

export default connect(mapStateToProps, {
  setLoader,
  getUserData,
  updateProfile,
})(Profile);
