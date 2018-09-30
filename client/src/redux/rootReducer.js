import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import { reducer as app } from './';
import { reducer as flash } from '../components/Flash/redux';
import { reducer as settings } from './settings';
import { reducer as curriculumMap } from '../components/Map/redux';
import { reducer as challenge } from '../templates/Challenges/redux';

export default combineReducers({
  app,
  challenge,
  curriculumMap,
  flash,
  form: formReducer,
  settings
});
