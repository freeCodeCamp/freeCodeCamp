import { isLocationAction } from 'redux-first-router';
import { combineReducers } from 'berkeleys-redux-utils';


import challengeReducer from './Challenges/redux';
import profileReducer from './Profile/redux';
import settingsReducer from './Settings/redux';
import { routes as challengeRoutes } from './Challenges';
import { routes as profileRoutes } from './Profile';
import { routes as settingsRoutes } from './Settings';

const ns = 'mainRouter';

export const mainRouteSelector = state => state[ns];

export function mainRouter(state = 'NotFound', action) {
  if (!isLocationAction(action)) {
    return state;
  }
  const { type } = action;
  if (challengeRoutes[type]) {
    return 'challenges';
  }
  if (settingsRoutes[type]) {
    return 'settings';
  }
  if (profileRoutes[type]) {
    return 'profile';
  }
  return '';
}

mainRouter.toString = () => ns;

export default combineReducers(
  challengeReducer,
  profileReducer,
  settingsReducer,
  mainRouter
);
