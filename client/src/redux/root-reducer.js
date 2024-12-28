import { combineReducers } from 'redux';

import { reducer as flash } from '../components/Flash/redux';
import {
  ns as searchNameSpace,
  reducer as search
} from '../components/search/redux';
import {
  ns as challengeNameSpace,
  reducer as challenge
} from '../templates/Challenges/redux';
import {
  ns as curriculumMapNameSpace,
  reducer as curriculumMap
} from '../templates/Introduction/redux';
import { ns as appNameSpace } from './action-types';
import { ns as settingsNameSpace, reducer as settings } from './settings';
import { FlashApp as flashNameSpace } from './types';
import { reducer as app } from '.';

export default combineReducers({
  [appNameSpace]: app,
  [challengeNameSpace]: challenge,
  [curriculumMapNameSpace]: curriculumMap,
  [flashNameSpace]: flash,
  [searchNameSpace]: search,
  [settingsNameSpace]: settings
});
