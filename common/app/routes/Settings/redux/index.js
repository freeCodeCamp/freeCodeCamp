import {
  createAction,
  createAsyncTypes,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';
import _ from 'lodash';

import ns from '../ns.json';
import { utils } from '../../../Flash/redux';
import updateUserEpic from './update-user-epic';
import dangerZoneEpic from './danger-zone-epic';

export const epics = [
  dangerZoneEpic,
  updateUserEpic
];

export const types = createTypes([
  'toggleUserFlag',
  createAsyncTypes('updateMyEmail'),
  'updateFlag',
  'updateMyLang',
  createAsyncTypes('deleteAccount'),
  createAsyncTypes('resetProgress'),
  'onRouteSettings',
  'onRouteUpdateEmail'
], 'settings');

export const onRouteSettings = createAction(types.onRouteSettings);
export const onRouteUpdateEmail = createAction(types.onRouteUpdateEmail);
export const toggleUserFlag = createAction(types.toggleUserFlag);
export const updateMyEmail = createAction(types.updateMyEmail.start);
export const updateMyEmailComplete = createAction(
  types.updateMyEmail.complete,
  null,
  utils.createFlashMetaAction
);

export const updateMyEmailError = createAction(
  types.updateMyEmail.error,
  null,
  utils.createFlashMetaAction
);

export const updateFlag = createAction(types.updateFlag);

export const resetProgress = createAction(types.resetProgress.start);
export const resetProgressComplete = createAction(types.resetProgress.complete);
export const resetProgressError = createAction(
  types.resetProgress.error,
  _.identity
);

export const deleteAccount = createAction(types.deleteAccount.start);
export const deleteAccountComplete = createAction(types.deleteAccount.complete);
export const deleteAccountError = createAction(
  types.deleteAccount.error,
  _.identity
);

const defaultState = {};

const getNS = state => state[ns];
export const settingsSelector = state => getNS(state);

export default handleActions(() => ({}), defaultState,
  ns
);
