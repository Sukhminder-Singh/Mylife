import {GET_PROFILE, UPDATE_PROFILE} from '../actions/types';

const INITIAL_STATE = {
  response: [],
  profileResponse: [],
};

export default (state = INITIAL_STATE, action) => {
   
  switch (action.type) {
    case GET_PROFILE:
      return {...state, profileResponse: action.payload, isLoading: false};
    case UPDATE_PROFILE:
      return {...state, response: action.payload, isLoading: false};

    default:
      return state;
  }
};
