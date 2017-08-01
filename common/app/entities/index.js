import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';

export const ns = 'entities';
export const getNS = state => state[ns];
export const entitiesSelector = getNS;
export const types = createTypes([
  'updateUserPoints',
  'updateUserFlag',
  'updateUserEmail',
  'updateUserLang',
  'updateUserChallenge',
  'updateUserCurrentChallenge'
], ns);

// updateUserPoints(username: String, points: Number) => Action
export const updateUserPoints = createAction(
  types.updateUserPoints,
  (username, points) => ({ username, points })
);
// updateUserFlag(username: String, flag: String) => Action
export const updateUserFlag = createAction(
  types.updateUserFlag,
  (username, flag) => ({ username, flag })
);
// updateUserEmail(username: String, email: String) => Action
export const updateUserEmail = createAction(
  types.updateUserFlag,
  (username, email) => ({ username, email })
);
// updateUserLang(username: String, lang: String) => Action
export const updateUserLang = createAction(
  types.updateUserLang,
  (username, lang) => ({ username, languageTag: lang })
);

// updateUserChallenge(
//   username: String,
//   challengeInfo: Object
// ) => Action
export const updateUserChallenge = createAction(
  types.updateUserChallenge,
  (username, challengeInfo) => ({ username, challengeInfo })
);

export const updateUserCurrentChallenge = createAction(
  types.updateUserCurrentChallenge
);


const initialState = {
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

export default function createReducer() {
  const userReducer = handleActions(
    {
      [types.updateUserPoints]: (state, { payload: { username, points } }) => ({
        ...state,
        [username]: {
          ...state[username],
          points
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
      }),
      [types.updateUserChallenge]:
      (
        state,
        {
          payload: { username, challengeInfo }
        }
      ) => ({
        ...state,
        [username]: {
          ...state[username],
          challengeMap: {
            ...state[username].challengeMap,
            [challengeInfo.id]: challengeInfo
          }
        }
      })
    },
    initialState.user
  );

  function metaReducer(state = initialState, action) {
    if (action.meta && action.meta.entities) {
      return {
        ...state,
        ...action.meta.entities
      };
    }
    return state;
  }

  function entitiesReducer(state, action) {
    const newState = metaReducer(state, action);
    const user = userReducer(newState.user, action);
    if (newState.user !== user) {
      return { ...newState, user };
    }
    return newState;
  }

  entitiesReducer.toString = () => ns;
  return entitiesReducer;
}
