import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
  superBlocks: []
};

export default handleActions(
  {
    [types.fetchChallengesCompleted]: (state, { payload = [] }) => ({
      ...state,
      superBlocks: payload
    })
  },
  initialState
);
