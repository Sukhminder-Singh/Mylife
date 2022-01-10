import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    FORGOT_PASSWORD,
    SET_LOADER
} from '../actions/types';

const INITIAL_STATE = {
    response: [],
    loginresponse: [],
    forgotResponse:[],
    isLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, loginresponse: action.payload, token: action.token }
        case LOGIN_FAIL: 
            return {...state, loginresponse: action.payload, token: action.token}
        case FORGOT_PASSWORD:
            return { ...state, forgotResponse: action.payload, isLoading: false };    
        case SET_LOADER:
            return { ...state, isLoading: action.payload };    
        default: 
            return state;
            
    }
};