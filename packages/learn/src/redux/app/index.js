import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../utils/stateManagment';

const ns = 'app';

export const types = createTypes(
  ['fetchUser', 'fetchUserComplete', 'fetchUserError'],
  ns
);

const initialState = {
  user: {}
};

export const fetchUser = createAction(types.fetchUser);
export const fetchUserComplete = createAction(types.fetchUserComplete);
export const fecthUserError = createAction(types.fetchUserError);

export const reducer = handleActions(
  {
    [types.fetchUserComplete]: (state, { payload }) => ({
      ...state,
      user: payload
    })
  },
  initialState
);
