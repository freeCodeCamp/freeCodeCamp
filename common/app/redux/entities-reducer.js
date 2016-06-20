import { updateUserPoints } from './types';

const initialState = {
  superBlock: {},
  block: {},
  challenge: {},
  user: {}
};

export default function entities(state = initialState, action) {
  const { type, payload: { username, points } = {} } = action;
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
