import { createAction, handleActions } from 'redux-actions';

import { createTypes, createAsyncTypes } from '../utils/createTypes';
import { createFetchUserSaga } from './fetch-user-saga';
import { createAcceptTermsSaga } from './accept-terms-saga';
import { createAppMountSaga } from './app-mount-saga';
import { createReportUserSaga } from './report-user-saga';
import { createShowCertSaga } from './show-cert-saga';
import { createNightModeSaga } from './night-mode-saga';

import { types as settingsTypes } from './settings';

const ns = 'app';

const defaultFetchState = {
  pending: true,
  complete: false,
  errored: false,
  error: null
};

const initialState = {
  appUsername: '',
  showCert: {},
  showCertFetchState: {
    ...defaultFetchState
  },
  user: {},
  userFetchState: {
    ...defaultFetchState
  }
};

const types = createTypes(
  [
    'appMount',
    ...createAsyncTypes('fetchUser'),
    ...createAsyncTypes('acceptTerms'),
    ...createAsyncTypes('showCert'),
    ...createAsyncTypes('reportUser')
  ],
  ns
);

export const sagas = [
  ...createAcceptTermsSaga(types),
  ...createAppMountSaga(types),
  ...createFetchUserSaga(types),
  ...createShowCertSaga(types),
  ...createReportUserSaga(types),
  ...createNightModeSaga({ ...types, ...settingsTypes })
];

export const appMount = createAction(types.appMount);

export const acceptTerms = createAction(types.acceptTerms);
export const acceptTermsComplete = createAction(types.acceptTermsComplete);
export const acceptTermsError = createAction(types.acceptTermsError);

export const fetchUser = createAction(types.fetchUser);
export const fetchUserComplete = createAction(types.fetchUserComplete);
export const fetchUserError = createAction(types.fetchUserError);

export const reportUser = createAction(types.reportUser);
export const reportUserComplete = createAction(types.reportUserComplete);
export const reportUserError = createAction(types.reportUserError);

export const showCert = createAction(types.showCert);
export const showCertComplete = createAction(types.showCertComplete);
export const showCertError = createAction(types.showCertError);

export const isSignedInSelector = state => !!Object.keys(state[ns].user).length;

export const signInLoadingSelector = state =>
  userFetchStateSelector(state).pending;

export const showCertSelector = state => state[ns].showCert;
export const showCertFetchStateSelector = state => state[ns].showCertFetchState;

export const userByNameSelector = username => state => {
  const { user } = state[ns];
  return username in user ? user[username] : {};
};
export const userFetchStateSelector = state => state[ns].userFetchState;
export const usernameSelector = state => state[ns].appUsername;
export const userSelector = state => {
  const username = usernameSelector(state);

  return state[ns].user[username] || {};
};

function spreadThePayloadOnUser(state, payload) {
  return {
    ...state,
    user: {
      ...state.user,
      [state.appUsername]: {
        ...state.user[state.appUsername],
        ...payload
      }
    }
  };
}

export const reducer = handleActions(
  {
    [types.fetchUser]: state => ({
      ...state,
      userFetchState: { ...defaultFetchState }
    }),
    [types.fetchUserComplete]: (state, { payload: { user, username } }) => ({
      ...state,
      user: {
        ...state.user,
        [username]: user
      },
      appUsername: username,
      userFetchState: {
        pending: false,
        complete: true,
        errored: false,
        error: null
      }
    }),
    [types.fetchUserError]: (state, { payload }) => ({
      ...state,
      userFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [types.showCert]: state => ({
      ...state,
      showCert: {},
      showCertFetchState: { ...defaultFetchState }
    }),
    [types.showCertComplete]: (state, { payload }) => ({
      ...state,
      showCert: payload,
      showCertFetchState: {
        pending: false,
        complete: true,
        errored: false,
        error: null
      }
    }),
    [types.showCertError]: (state, { payload }) => ({
      ...state,
      showCert: {},
      showCertFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [settingsTypes.submitNewUsernameComplete]: (state, { payload }) =>
      payload
        ? {
            ...state,
            user: {
              ...state.user,
              [state.appUsername]: {
                ...state.user[state.appUsername],
                username: payload
              }
            }
          }
        : state,
    [settingsTypes.submitNewAboutComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateMyEmailComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.updateUserFlagComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state,
    [settingsTypes.verifyCertComplete]: (state, { payload }) =>
      payload ? spreadThePayloadOnUser(state, payload) : state
  },
  initialState
);
