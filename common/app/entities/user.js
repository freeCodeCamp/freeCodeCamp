import _ from 'lodash';
import uuid from 'uuid/v4';
import {
  createAction,
  createTypes,
  createAsyncTypes,
  handleActions
} from 'berkeleys-redux-utils';

import { types as challenges } from '../routes/Challenges/redux';

export const types = createTypes([
  'editUserFlag',
  'toggleUserFlag',
  createAsyncTypes('claimCert'),
  createAsyncTypes('updateUserBackend'),
  'updateUserCurrentChallenge',
  'addPortfolioItem'
], 'user');

export const editUserFlag = createAction(
  types.editUserFlag,
  (username, flag, value) => ({ flag, username, value })
);
export const toggleUserFlag = createAction(
  types.toggleUserFlag,
  (username, flag) => ({ username, flag })
);

export const addPortfolioItem = createAction(types.addPortfolioItem);

export const claimCert = createAction(types.claimCert.start);
export const claimCertComplete = createAction(
  types.claimCert.complete,
  ({ result }) => result,
  _.identity
);
export const claimCertError = createAction(
  types.claimCert.error,
  _.identity
);

export const updateUserBackend = createAction(types.updateUserBackend.start);
export const updateUserBackendError = createAction(
  types.updateUserBackend.error,
  _.identity
);
export const updateUserBackendComplete = createAction(
  types.updateUserBackend.complete,
  ({ result }) => result,
  _.identity
);

export const updateUserCurrentChallenge = createAction(
  types.updateUserCurrentChallenge
);

export function emptyPortfolio() {
  return {
  id: uuid(),
  title: '',
  description: '',
  url: '',
  image: ''
  };
}

export function userReducer(initialState) {
  return handleActions(
    () => ({
      [challenges.submitChallenge.complete]: (
        state,
        { payload: { username, points, challengeInfo } }
      ) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            points,
            challengeMap: {
              ...state.user[username].challengeMap,
              [challengeInfo.id]: challengeInfo
            }
          }
        }
      }),
      [types.toggleUserFlag]: (state, { payload: { username, flag } }) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            [flag]: !state.user[username][flag]
          }
        }
      }),
      [types.editUserFlag]: (
        state,
        { payload: { username, flag, value } }
      ) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            [flag]: value
          }
        }
      }),
      [types.addPortfolioItem]: (state, { payload: username }) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            portfolio: [
              ...state.user[username].portfolio,
              emptyPortfolio()
            ]
          }
        }
      }),
      [types.updateUserCurrentChallenge]:
      (
        state,
        {
          payload: { username, currentChallengeId }
        }
      ) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            currentChallengeId
          }
        }
      })
    }),
    initialState
  );
}
