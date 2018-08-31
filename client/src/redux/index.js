import { createAction, handleActions } from 'redux-actions';

import { createTypes, createAsyncTypes } from '../utils/createTypes';
import { createFetchUserSaga } from './fetch-user-saga';
import { createAcceptTermsSaga } from './accept-terms-saga';
import { createAppMountSaga } from './app-mount-saga';
import { createUpdateMyEmailSaga } from './update-email-saga';

const ns = 'app';

const initialState = {
  appUsername: '',
  fetchState: {
    pending: true,
    complete: false,
    errored: false,
    error: null
  },
  user: {}
};

const types = createTypes(
  [
    'appMount',
    ...createAsyncTypes('fetchUser'),
    ...createAsyncTypes('acceptTerms'),
    ...createAsyncTypes('updateMyEmail')
  ],
  ns
);

export const sagas = [
  ...createAcceptTermsSaga(types),
  ...createAppMountSaga(types),
  ...createFetchUserSaga(types),
  ...createUpdateMyEmailSaga(types)
];

export const appMount = createAction(types.appMount);

export const acceptTerms = createAction(types.acceptTerms);
export const acceptTermsComplete = createAction(types.acceptTermsComplete);
export const acceptTermsError = createAction(types.acceptTermsError);

export const fetchUser = createAction(types.fetchUser);
export const fetchUserComplete = createAction(types.fetchUserComplete);
export const fetchUserError = createAction(types.fetchUserError);

export const updateMyEmail = createAction(types.updateMyEmail);
export const updateMyEmailComplete = createAction(types.updateMyEmailComplete);
export const updateMyEmailError = createAction(types.updateMyEmailError);

export const isSignedInSelector = state => !!Object.keys(state[ns].user).length;
export const userFetchStateSelector = state => state[ns].fetchState;
export const usernameSelector = state => state[ns].appUsername;
export const userSelector = state => state[ns].user;

export const reducer = handleActions(
  {
    [types.fetchUser]: state => ({
      ...state,
      fetchState: {
        pending: true,
        complete: false,
        errored: false,
        error: null
      }
    }),
    [types.fetchUserComplete]: (state, { payload: { user, username } }) => ({
      ...state,
      user,
      appUsername: username,
      fetchState: {
        pending: false,
        complete: true,
        errored: false,
        error: null
      }
    }),
    [types.fetchUserError]: (state, { payload }) => ({
      ...state,
      fetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    })
  },
  initialState
);
