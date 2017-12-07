import _ from 'lodash';
import {
  composeReducers,
  createAction,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';

import { types as challenges } from '../routes/Challenges/redux';

export const ns = 'entities';
export const getNS = state => state[ns];
export const entitiesSelector = getNS;
export const types = createTypes([
  'updateTheme',
  'updateUserFlag',
  'updateUserEmail',
  'updateUserLang',
  'updateUserCurrentChallenge'
], ns);

// updateUserFlag(username: String, flag: String) => Action
export const updateUserFlag = createAction(
  types.updateUserFlag,
  (username, flag) => ({ username, flag })
);
// updateUserEmail(username: String, email: String) => Action
export const updateUserEmail = createAction(
  types.updateUserEmail,
  (username, email) => ({ username, email })
);
// updateUserLang(username: String, lang: String) => Action
export const updateUserLang = createAction(
  types.updateUserLang,
  (username, lang) => ({ username, languageTag: lang })
);

export const updateUserCurrentChallenge = createAction(
  types.updateUserCurrentChallenge
);

// entity meta creators
const getEntityAction = _.property('meta.entitiesAction');
export const updateThemeMetacreator = (username, theme) => ({
  entitiesAction: {
    type: types.updateTheme,
    payload: {
      username,
      theme: !theme || theme === 'default' ? 'night' : 'default'
    }
  }
});

const defaultState = {
  superBlock: {},
  block: {},
  challenge: {},
  user: {}
};

export const challengeMapSelector = state => getNS(state).challenge || {};
export function makeBlockSelector(block) {
  return state => {
    const blockMap = getNS(state).block || {};
    return blockMap[block] || {};
  };
}
export function makeSuperBlockSelector(name) {
  return state => {
    const superBlock = getNS(state).superBlock || {};
    return superBlock[name] || {};
  };
}

export const isChallengeLoaded = (state, { dashedName }) =>
  !!challengeMapSelector(state)[dashedName];

export default composeReducers(
  ns,
  function metaReducer(state = defaultState, action) {
    if (action.meta && action.meta.entities) {
      return {
        ...state,
        ...action.meta.entities
      };
    }
    return state;
  },
  function(state = defaultState, action) {
    if (getEntityAction(action)) {
      const { payload: { username, theme } } = getEntityAction(action);
      return {
        ...state,
        user: {
          ...state.user,
          [username]: {
            ...state.user[username],
            theme
          }
        }
      };
    }
    return state;
  },
  handleActions(
    () => ({
      [
        challenges.submitChallenge.complete
      ]: (state, { payload: { username, points, challengeInfo } }) => ({
        ...state,
        [username]: {
          ...state[username],
          points,
          challengeMap: {
            ...state[username].challengeMap,
            [challengeInfo.id]: challengeInfo
          }
        }
      }),
      [types.updateUserFlag]: (state, { payload: { username, flag } }) => ({
        ...state,
        [username]: {
          ...state[username],
          [flag]: !state[username][flag]
        }
      }),
      [types.updateUserEmail]: (state, { payload: { username, email } }) => ({
        ...state,
        [username]: {
          ...state[username],
          email
        }
      }),
      [types.updateUserLang]:
      (
        state,
        {
          payload: { username, languageTag }
        }
      ) => ({
        ...state,
        [username]: {
          ...state[username],
          languageTag
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
        [username]: {
          ...state[username],
          currentChallengeId
        }
      })
    }),
    defaultState
  )
);
