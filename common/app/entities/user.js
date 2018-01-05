import _ from 'lodash';
import {
  createAction,
  createTypes,
  createAsyncTypes,
  handleActions
} from 'berkeleys-redux-utils';

import { types as challenges } from '../routes/Challenges/redux';
import updateUserEpic from './update-user-epic';

export const epics = [
  updateUserEpic
];

export const types = createTypes([
  'editUserFlag',
  'toggleUserFlag',
  'updatePortfolio',
  createAsyncTypes('updateUserBackend')
], 'user');

export const editUserFlag = createAction(
  types.editUserFlag,
  (flag, username, value) => ({ flag, username, value })
);
export const toggleUserFlag = createAction(
  types.toggleUserFlag,
  (flag, username) => ({ username, flag })
);
export const updatePortfolio = createAction(
  types.updatePortfolio,
  (flag, username, value) => ({ flag, username, value })
);
export const updateUserBackend = createAction(types.updateUserBackend.start);
export const updateUserBackendError = createAction(
  types.updateUserBackend.error,
  ({ result }) => result,
  _.identity
);
export const updateUserBackendComplete = createAction(
  types.updateUserBackend.complete,
  ({ result }) => result,
  _.identity
);

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
      [types.updatePortfolio]: (
        state,
        { payload: { flag, value, username }}
      ) => ({
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            portfolio: {
              ...state.user[username].portfolio,
              [flag]: value
            }
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
