import {
  combineActions,
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
import newUsernameEpic from './new-username-epic.js';

export const epics = [
  dangerZoneEpic,
  newUsernameEpic,
  updateUserEpic
];

export const types = createTypes([
  'toggleUserFlag',
  createAsyncTypes('updateMyEmail'),
  'updateFlag',
  'updateMyLang',
  'updateNewUsernameValidity',
  createAsyncTypes('validateUsername'),

  createAsyncTypes('deleteAccount'),
  createAsyncTypes('resetProgress'),

  'onRouteSettings',
  'onRouteUpdateEmail'
], 'settings');

export const updateNewUsernameValidity = createAction(
  types.updateNewUsernameValidity
);
export const validateUsername = createAction(types.validateUsername.start);
export const validateUsernameError = createAction(
  types.validateUsername.error,
  _.identity
);

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

const initialState = {
  isValidUsername: false,
  validating: false
};

const getNS = state => state[ns];
export const settingsSelector = state => getNS(state);

export default handleActions(() => (
  {
    [types.updateNewUsernameValidity]: (state, { payload }) => ({
      ...state,
      isValidUsername: payload,
      validating: false
    }),
    [types.validateUsername.start]: state => ({
      ...state,
      isValidUsername: false,
      validating: true
    }),
    [types.validateUsername.error]: state => ({ ...state, validating: false })
  }
  ), initialState,
  ns
);
