import React from 'react';
import { Provider, connect } from 'react-redux';
import { AppRegistry } from 'react-native';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import Navigator from './app/Navigation';
import { name as appName } from './app.json';
import storeConfig from './app/store/storeConfig';

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

const store = storeConfig(middleware);

const AppNavigator = createReduxContainer(Navigator);

const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(AppNavigator);

const AppWithRedux = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithRedux);
