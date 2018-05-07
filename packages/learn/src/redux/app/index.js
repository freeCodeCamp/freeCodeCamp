import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../utils/stateManagment';

const ns = 'app';

export const epics = [];

export const types = createTypes(
  ['fetchUser', 'fetchUserComplete', 'fetchUserError', 'updateUserSignedIn'],
  ns
);

const initialState = {
  isSignedIn: false,
  user: {}
};

export const fetchUser = createAction(types.fetchUser);
export const fetchUserComplete = createAction(types.fetchUserComplete);
export const fecthUserError = createAction(types.fetchUserError);

export const updateUserSignedIn = createAction(types.updateUserSignedIn);

export const isSignedInSelector = state => state[ns].isSignedIn;
export const userSelector = state => state[ns].user;

export const reducer = handleActions(
  {
    [types.fetchUserComplete]: (state, { payload }) => ({
      ...state,
      user: payload
    }),
    [types.updateUserSignedIn]: (state, { payload }) => ({
      ...state,
      isSignedIn: payload
    })
  },
  initialState
);
