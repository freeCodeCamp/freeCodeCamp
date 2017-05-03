import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
  superBlock: {},
  block: {},
  challenge: {},
  user: {},
  youtube: {}
};

const blocksReducer = handleActions(
  {
    [types.updateBlock]: (state, { payload }) => ({
      ...state,
      block: payload
    }),
    [types.updateSuperBlock]: (state, { payload }) => ({
      ...state,
      superBlock: payload
    })
  }, initialState
  );

const youtubeReducer = handleActions(
  {
    [types.updateYoutube]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  }, initialState.youtube
  );

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
    [types.updateMyCurrentChallenge]:
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

export default function entitiesReducer(state, action) {
  const newState = metaReducer(state, action);
  const user = userReducer(newState.user, action);
  const youtube = youtubeReducer(newState.youtube, action);
  const blocks = blocksReducer(newState, action);
  if (newState.user !== user) {
    return { ...newState, user };
  }
  if (
    newState.block !== blocks.block ||
    newState.superBlock !== blocks.superBlock
  ) {
    return { ...newState, ...blocks };
  }
  if (newState.youtube !== youtube) {
    return { ...newState, youtube };
  }
  return newState;
}
