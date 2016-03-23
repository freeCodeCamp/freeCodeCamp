import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
  superBlocks: [],
  filter: ''
};

export default handleActions(
  {
    [types.fetchChallengesCompleted]: (state, { payload = [] }) => ({
      ...state,
      superBlocks: payload
    }),
    [types.updateFilter]: (state, { payload = ''}) => ({
      ...state,
      filter: payload
    })
  },
  initialState
);
