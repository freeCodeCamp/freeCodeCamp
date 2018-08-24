import { combineReducers } from 'redux';

import { reducer as app } from './';
import { reducer as flash } from '../components/Flash/redux';

export default combineReducers({
  app,
  flash
});
