import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as app, ns as appNameSpace } from './';
import {
  reducer as flash,
  ns as flashNameSpace
} from '../components/Flash/redux';
import { reducer as settings, ns as settingsNameSpace } from './settings';
import {
  reducer as curriculumMap,
  ns as curriculumMapNameSpace
} from '../components/Map/redux';
import {
  reducer as challenge,
  ns as challengeNameSpace
} from '../templates/Challenges/redux';
import { reducer as news, ns as newsNameSpace } from '../templates/News/redux';

export default combineReducers({
  [appNameSpace]: app,
  [challengeNameSpace]: challenge,
  [curriculumMapNameSpace]: curriculumMap,
  [flashNameSpace]: flash,
  form: formReducer,
  [newsNameSpace]: news,
  [settingsNameSpace]: settings
});
