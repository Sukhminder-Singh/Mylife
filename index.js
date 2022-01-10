/**
 * @format
 */

 import React from 'react';
 import {AppRegistry} from 'react-native';
 import { Provider } from 'react-redux';
 import { createStore, applyMiddleware, compose } from 'redux';
 import reduxThunk from 'redux-thunk';
 import reducers from './src/reducers';

 import App from './App';
 import {name as appName} from './app.json';
 
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
  
 const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
  )


 AppRegistry.registerComponent(appName, () => Root);
 
