import { combineReducers } from "redux";

import login from './login';
// import profile from './profile';

export default combineReducers({
    login: login,
    // profile: profile
});