import { combineReducers } from 'redux';

import { reducer as app } from './';
import { reducer as flash } from '../components/Flash/redux';
import { reducer as settings } from './settings';

export default combineReducers({
  app,
  flash,
  settings
});
