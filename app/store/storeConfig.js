import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import userReducer from './reducers/user';
import Navigator from '../Navigation';

const navReducer = createNavigationReducer(Navigator);

const reducers = combineReducers({
  user: userReducer,
  nav: navReducer
});

const storeConfig = (middleware) => {
  return createStore(
    reducers,
    applyMiddleware(middleware, thunk, logger)
  );
}

export default storeConfig;
