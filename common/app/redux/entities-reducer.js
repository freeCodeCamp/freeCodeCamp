import types from './types';

const { updateUserPoints, updateCompletedChallenges } = types;
const initialState = {
  superBlock: {},
  block: {},
  challenge: {},
  user: {}
};

export default function entities(state = initialState, action) {
  const { type, payload: { username, points } = {} } = action;
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
  if (action.meta && action.meta.entities) {
    return {
      ...state,
      ...action.meta.entities
    };
  }
  return state;
}
