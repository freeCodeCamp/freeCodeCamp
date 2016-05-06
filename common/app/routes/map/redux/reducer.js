import { handleActions } from 'redux-actions';

import types from './types';

const initialState = { filter: '' };
export default handleActions(
  {
    [types.updateFilter]: (state, { payload = ''}) => ({
      ...state,
      filter: payload
    }),
    [types.clearFilter]: (state) => ({
      ...state,
      filter: ''
    })
  },
  initialState
);
