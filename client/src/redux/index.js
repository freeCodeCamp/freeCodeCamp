import { createAction, handleActions } from 'redux-actions';
import { uniqBy } from 'lodash';

import { createTypes, createAsyncTypes } from '../utils/createTypes';
import { createFetchUserSaga } from './fetch-user-saga';
import { createAcceptTermsSaga } from './accept-terms-saga';
import { createAppMountSaga } from './app-mount-saga';
import { createReportUserSaga } from './report-user-saga';
import { createShowCertSaga } from './show-cert-saga';
import { createNightModeSaga } from './night-mode-saga';

import hardGoToEpic from './hard-go-to-epic';
import failedUpdatesEpic from './failed-updates-epic';
import updateCompleteEpic from './update-complete-epic';

import { types as settingsTypes } from './settings';

/** ***********************************/
const challengeReduxTypes = {};
/** ***********************************/

const ns = 'app';

const defaultFetchState = {
  pending: true,
  complete: false,
  errored: false,
  error: null
};

const initialState = {
  appUsername: '',
  completionCount: 0,
  showCert: {},
  showCertFetchState: {
    ...defaultFetchState
  },
  user: {},
  userFetchState: {
    ...defaultFetchState
  },
  userProfileFetchState: {
    ...defaultFetchState
  },
  showDonationModal: false,
  isOnline: true
};

export const types = createTypes(
  [
    'appMount',
    'closeDonationModal',
    'hardGoTo',
    'openDonationModal',
    'onlineStatusChange',
    'updateComplete',
    'updateFailed',
    ...createAsyncTypes('fetchUser'),
    ...createAsyncTypes('fetchProfileForUser'),
    ...createAsyncTypes('acceptTerms'),
    ...createAsyncTypes('showCert'),
    ...createAsyncTypes('reportUser')
  ],
  ns
);

export const epics = [hardGoToEpic, failedUpdatesEpic, updateCompleteEpic];

export const sagas = [
  ...createAcceptTermsSaga(types),
  ...createAppMountSaga(types),
  ...createFetchUserSaga(types),
  ...createShowCertSaga(types),
  ...createReportUserSaga(types),
  ...createNightModeSaga({ ...types, ...settingsTypes })
];

export const appMount = createAction(types.appMount);

export const closeDonationModal = createAction(types.closeDonationModal);
export const openDonationModal = createAction(types.openDonationModal);

export const onlineStatusChange = createAction(types.onlineStatusChange);

// `hardGoTo` is used to hit the API server directly
// without going through /internal
// used for things like /signin and /signout
export const hardGoTo = createAction(types.hardGoTo);

export const updateComplete = createAction(types.updateComplete);
export const updateFailed = createAction(types.updateFailed);

export const acceptTerms = createAction(types.acceptTerms);
export const acceptTermsComplete = createAction(types.acceptTermsComplete);
export const acceptTermsError = createAction(types.acceptTermsError);

export const fetchUser = createAction(types.fetchUser);
export const fetchUserComplete = createAction(types.fetchUserComplete);
export const fetchUserError = createAction(types.fetchUserError);

export const fetchProfileForUser = createAction(types.fetchProfileForUser);
export const fetchProfileForUserComplete = createAction(
  types.fetchProfileForUserComplete
);
export const fetchProfileForUserError = createAction(
  types.fetchProfileForUserError
);

export const reportUser = createAction(types.reportUser);
export const reportUserComplete = createAction(types.reportUserComplete);
export const reportUserError = createAction(types.reportUserError);

export const showCert = createAction(types.showCert);
export const showCertComplete = createAction(types.showCertComplete);
export const showCertError = createAction(types.showCertError);

export const completedChallengesSelector = state =>
  userSelector(state).completedChallenges || [];
export const completionCountSelector = state => state[ns].completionCount;
export const currentChallengeIdSelector = state =>
  userSelector(state).currentChallengeId || '';

export const isOnlineSelector = state => state[ns].isOnline;
export const isSignedInSelector = state => !!state[ns].appUsername;
export const isDonationModalOpenSelector = state => state[ns].showDonationModal;

export const signInLoadingSelector = state =>
  userFetchStateSelector(state).pending;
export const showCertSelector = state => state[ns].showCert;
export const showCertFetchStateSelector = state => state[ns].showCertFetchState;

export const showDonationSelector = state => {
  const completedChallenges = completedChallengesSelector(state);
  const completionCount = completionCountSelector(state);
  const currentCompletedLength = completedChallenges.length;
  // the user has not completed 9 challenges in total yet
  if (currentCompletedLength < 9) {
    return false;
  }
  // this will mean we are on the 10th submission in total for the user
  if (completedChallenges.length === 9) {
    return true;
  }
  // this will mean we are on the 3rd submission for this browser session
  if (completionCount === 2) {
    return true;
  }
  return false;
};
export const userByNameSelector = username => state => {
  const { user } = state[ns];
  return username in user ? user[username] : {};
};
export const userFetchStateSelector = state => state[ns].userFetchState;
export const userProfileFetchStateSelector = state =>
  state[ns].userProfileFetchState;
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
    [types.fetchProfileForUser]: state => ({
      ...state,
      userProfileFetchState: { ...defaultFetchState }
    }),
    [types.fetchUserComplete]: (state, { payload: { user, username } }) => ({
      ...state,
      user: {
        ...state.user,
        [username]: { ...user, sessionUser: true }
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
    [types.fetchProfileForUserComplete]: (
      state,
      { payload: { user, username } }
    ) => {
      const previousUserObject =
        username in state.user ? state.user[username] : {};
      return {
        ...state,
        user: {
          ...state.user,
          [username]: { ...previousUserObject, ...user }
        },
        userProfileFetchState: {
          pending: false,
          complete: true,
          errored: false,
          error: null
        }
      };
    },
    [types.fetchProfileForUserError]: (state, { payload }) => ({
      ...state,
      userFetchState: {
        pending: false,
        complete: false,
        errored: true,
        error: payload
      }
    }),
    [types.onlineStatusChange]: (state, { payload: isOnline }) => ({
      ...state,
      isOnline
    }),
    [types.openDonationModal]: state => ({
      ...state,
      showDonationModal: true
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
    [challengeReduxTypes.submitComplete]: (state, { payload: { id } }) => {
      const { appUsername } = state;
      return {
        ...state,
        completionCount: state.completionCount + 1,
        user: {
          ...state.user,
          [appUsername]: {
            ...state.user[appUsername],
            completedChallenges: uniqBy(
              [...state.user[appUsername].completedChallenges, { id }],
              'id'
            )
          }
        }
      };
    },
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
