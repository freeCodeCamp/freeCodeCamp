import { combineReducers } from 'berkeleys-redux-utils';

import challengeReducer from './Challenges/redux';
import settingsReducer from './Settings/redux';

export default combineReducers(
  challengeReducer,
  settingsReducer
);
