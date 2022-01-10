import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_LOADER
} from './types';
import { API_PATHS } from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = ({email, password}) => async dispatch => {
     console.log("this function called");
    try{
        const instance =axios.create();
        const response = await instance.post(API_PATHS.LOGIN_API, {
            email: email,
            password: password
        });
        
        if (response.data.success) {
            console.log("i am in")
            AsyncStorage.setItem('access token', response.data.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data, token: response.data.data.token});
        }else {
            console.log("i am out")
            console.log(response);
            dispatch({ type: LOGIN_FAIL, payload: response.data, token: ''});
        }
    }catch (e) {
        dispatch ({ type: LOGIN_FAIL, payload: e});
    }
};
export const forgot = ({email}) => async dispatch => {
    console.log("Reached forgot fun")
    //const token = await AsyncStorage.getItem('access_token');
    try {
        const instance = axios.create();
        const response = await instance.post(API_PATHS.FORGOT_PASSWORD, {
          email: email
        });
        console.log("FORGOT RESPONSE",response);
        dispatch({ type: FORGOT_PASSWORD, payload: response.data });
  
    } catch (e) {
        dispatch({ type: FORGOT_PASSWORD, payload: e });
        setLoader(false);
    }
  }
  // export const isSignedIn = async () => {
  //   const token = await AsyncStorage.getItem('@storage_Key');
  //   if (token) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  export const setLoader = loader => dispatch => {
    dispatch({ type: SET_LOADER, payload: loader });
};