import { combineReducers } from 'redux';

import { reducer as flash } from '../components/Flash/redux';
import {
  reducer as search,
  ns as searchNameSpace
} from '../components/search/redux';
import {
  reducer as challenge,
  ns as challengeNameSpace
} from '../templates/Challenges/redux';
import {
  reducer as curriculumMap,
  ns as curriculumMapNameSpace
} from '../templates/Introduction/redux';
import { reducer as settings, ns as settingsNameSpace } from './settings';
import { FlashApp as flashNameSpace } from './types';
import { reducer as app, MainApp as appNameSpace } from './';

export default combineReducers({
  [appNameSpace]: app,
  [challengeNameSpace]: challenge,
  [curriculumMapNameSpace]: curriculumMap,
  [flashNameSpace]: flash,
  [searchNameSpace]: search,
  [settingsNameSpace]: settings
});
