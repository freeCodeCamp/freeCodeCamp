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

  createAsyncTypes('updateUserBackend'),

  'updateUserCurrentChallenge',

  'addPortfolioItem',
  'deletePortfolio',
  'updatePortfolio'
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
export const deletePortfolio = createAction(types.deletePortfolio);
export const updatePortfolio = createAction(
  types.updatePortfolio,
  (username, id, field, value) => ({ username, id, field, value })
);

export const updateUserCurrentChallenge = createAction(
  types.updateUserCurrentChallenge
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

export function emptyPortfolio() {
  return {
  id: `portfolio${Date.now()}`,
  title: '',
  description: '',
  url: '',
  image: ''
  };
}

function byMatchingId(id) {
  return x => x.id === id;
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
      [types.deletePortfolio]: (state, { payload: { id, username } }) => {
        const index = state.user[username].portfolio
          .findIndex(byMatchingId(id));
        return {
          ...state,
          user: {
            ...state.user,
            [username]: {
              ...state.user[username],
              portfolio: [
                ...state.user[username].portfolio.slice(0, index),
                ...state.user[username].portfolio.slice(index + 1)
              ]
            }
          }
        };
      },
      [types.updatePortfolio]: (
        state,
        { payload: { id, field, value, username }}
      ) => {
        const index = state.user[username].portfolio
          .findIndex(byMatchingId(id));
        return {
          ...state,
          user: {
            ...state.user,
            [username]: {
              ...state.user[username],
              portfolio: [
                ...state.user[username].portfolio.slice(0, index),
                {
                  ...state.user[username].portfolio[index],
                  [field]: value
                },
                ...state.user[username].portfolio.slice(index + 1)
              ]
            }
          }
        };
      },
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
