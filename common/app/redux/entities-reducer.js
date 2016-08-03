import types from './types';

const { updateUserPoints, updateCompletedChallenges } = types;
const initialState = {
  superBlock: {},
  block: {},
  challenge: {},
  user: {}
};

// future refactor(berks): Several of the actions here are just updating props
// on the main user. These can be refactors into one response for all actions
export default function entities(state = initialState, action) {
  const {
    type,
    payload: { email, username, points, flag, languageTag } = {}
  } = action;
  if (type === updateCompletedChallenges) {
    const username = action.payload;
    const completedChallengeMap = state.user[username].challengeMap || {};
    return {
      ...state,
      challenge: Object.keys(state.challenge)
        .reduce((map, key) => {
          const challenge = state.challenge[key];
          map[key] = {
            ...challenge,
            isCompleted: !!completedChallengeMap[challenge.id]
          };
          return map;
        }, {})
    };
  }
  if (action.meta && action.meta.entities) {
    return {
      ...state,
      ...action.meta.entities
    };
  }
  if (type === updateUserPoints) {
    return {
      ...state,
      user: {
        ...state.user,
        [username]: {
          ...state.user[username],
          points
        }
      }
    };
  }
  if (action.type === types.updateUserFlag) {
    return {
      ...state,
      user: {
        ...state.user,
        [username]: {
          ...state.user[username],
          [flag]: !state.user[username][flag]
        }
      }
    };
  }
  if (action.type === types.updateUserEmail) {
    return {
      ...state,
      user: {
        ...state.user,
        [username]: {
          ...state.user[username],
          email
        }
      }
    };
  }
  if (action.type === types.updateUserLang) {
    return {
      ...state,
      user: {
        ...state.user,
        [username]: {
          ...state.user[username],
          languageTag
        }
      }
    };
  }

  if (action.type === types.updateMyCurrentChallenge) {
    return {
      ...state,
      user: {
        ...state.user,
        [username]: {
          ...state.user[username],
          currentChallengeId: action.payload.currentChallengeId
        }
      }
    };
  }
  return state;
}
