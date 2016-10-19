/**
 * User Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

// Set initial state
const initialState = [];

export default function sideMenuReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_REPLACE':
      return action.data;
      
    default:
      return state
  }
}
