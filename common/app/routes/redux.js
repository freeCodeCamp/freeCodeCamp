import { isLocationAction } from 'redux-first-router';
import { combineReducers } from 'berkeleys-redux-utils';

import profileReducer from './Profile/redux';
import settingsReducer from './Settings/redux';
import { routes as profileRoutes } from './Profile';
import { routes as settingsRoutes } from './Settings';

const ns = 'mainRouter';

export const mainRouteSelector = state => state[ns];

export function mainRouter(state = 'NotFound', action) {
  if (!isLocationAction(action)) {
    return state;
  }
  const { type } = action;
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
  profileReducer,
  settingsReducer,
  mainRouter
);
