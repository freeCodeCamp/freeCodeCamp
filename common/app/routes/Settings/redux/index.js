import { isLocationAction } from 'redux-first-router';
import {
  composeReducers,
  createAction,
  createAsyncTypes,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';
import { identity } from 'lodash';

import certificateEpic from './certificate-epic';
import dangerZoneEpic from './danger-zone-epic';
import userUpdateEpic from './update-user-epic';
import newUsernameEpic from './new-username-epic';
import ns from '../ns.json';
import { utils } from '../../../Flash/redux';

export const epics = [
  certificateEpic,
  dangerZoneEpic,
  newUsernameEpic,
  userUpdateEpic
];

const createActionWithFlash = type => createAction(
  type,
  null,
  utils.createFlashMetaAction
);

export const types = createTypes([
  createAsyncTypes('claimCert'),
  createAsyncTypes('updateMyEmail'),
  createAsyncTypes('updateUserBackend'),
  createAsyncTypes('deletePortfolio'),
  createAsyncTypes('updateMyPortfolio'),
  'updateNewUsernameValidity',
  createAsyncTypes('validateUsername'),
  createAsyncTypes('refetchCompletedChallenges'),
  createAsyncTypes('deleteAccount'),
  createAsyncTypes('resetProgress'),

  'onRouteSettings',
  'onRouteUpdateEmail'
], 'settings');


export const onRouteSettings = createAction(types.onRouteSettings);
export const onRouteUpdateEmail = createAction(types.onRouteUpdateEmail);

export const claimCert = createAction(types.claimCert.start);
export const claimCertComplete = createAction(
  types.claimCert.complete,
  ({ result }) => result,
  identity
);
export const claimCertError = createAction(
  types.claimCert.error,
  identity
);

export const updateUserBackend = createAction(types.updateUserBackend.start);
export const updateUserBackendComplete = createActionWithFlash(
  types.updateUserBackend.complete
);
export const updateUserBackendError = createActionWithFlash(
  types.updateUserBackend.error
);

export const updateMyEmail = createAction(types.updateMyEmail.start);
export const updateMyEmailComplete = createActionWithFlash(
  types.updateMyEmail.complete
);
export const updateMyEmailError = createActionWithFlash(
  types.updateMyEmail.error
);

export const updateMyPortfolio = createAction(types.updateMyPortfolio.start);
export const updateMyPortfolioComplete = createAction(
  types.updateMyPortfolio.complete
);
export const updateMyPortfolioError = createAction(
  types.updateMyPortfolio.error
);
export const deletePortfolio = createAction(types.deletePortfolio.start);
export const deletePortfolioError = createAction(types.deletePortfolio.error);

export const resetProgress = createAction(types.resetProgress.start);
export const resetProgressComplete = createAction(types.resetProgress.complete);
export const resetProgressError = createAction(
  types.resetProgress.error,
  identity
);

export const deleteAccount = createAction(types.deleteAccount.start);
export const deleteAccountComplete = createAction(types.deleteAccount.complete);
export const deleteAccountError = createAction(
  types.deleteAccount.error,
  identity
);

export const updateNewUsernameValidity = createAction(
  types.updateNewUsernameValidity
);

export const refetchCompletedChallenges = createAction(
  types.refetchCompletedChallenges.start
);

export const validateUsername = createAction(types.validateUsername.start);
export const validateUsernameError = createAction(
  types.validateUsername.error,
  identity
);

const defaultState = {
  showUpdateEmailView: false,
  isValidUsername: false,
  validating: false
};

const getNS = state => state[ns];

export function settingsSelector(state) {
  return getNS(state);
}

export const showUpdateEmailViewSelector =
  state => getNS(state).showUpdateEmailView;

export default composeReducers(
  ns,
  function settingsRouteReducer(state = defaultState, action) {
    if (isLocationAction(action)) {
      const { type } = action;
      if (type === types.onRouteUpdateEmail) {
        return {
          ...state,
          showUpdateEmailView: true
        };
      }
      if (state.showUpdateEmailView) {
        return {
          ...state,
          showUpdateEmailView: false
        };
      }
    }
    return state;
  },
  handleActions(() => ({
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
  }),
  defaultState
)
);
