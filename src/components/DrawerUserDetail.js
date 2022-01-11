import React, {useEffect, useState} from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Platform,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {setLoader, getUserData} from '../actions';

const {height, width} = Dimensions.get('window');
import Colors from '../style/Colors';

const DrawerUserDetail = props => {
  const [name, setname] = useState('');

  useEffect(() => {
    _getUserData();
  },[]);

  const _getUserData = () => {
    props.getUserData().then(result => {
       console.log(props.profileResponse.name)
      setname(props.profileResponse.name);
    });
  };


  return (
    <View style={styles.profileClick}>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          paddingVertical: 15,
          paddingHorizontal: 5,
        }}>
        <Text numberOfLines={2} style={styles.profileName}>
          {name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileClick: {
    flex: 1,
    backgroundColor: Colors.primary,
     
  },
  profileName: {
    fontSize: 20,
    fontWeight:'500',
    color: Colors.white,
  },
});

const mapStateToProps = state => {
  return {
    isLoading: state.profile.isLoading,
    profileResponse: state.profile.profileResponse,
  };
};

export default connect(mapStateToProps, {setLoader, getUserData})(
  DrawerUserDetail,
);
