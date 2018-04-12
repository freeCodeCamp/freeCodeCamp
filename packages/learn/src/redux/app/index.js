import { createAction, handleActions } from 'redux-actions';

import { createTypes } from '../../../utils/stateManagment';
import signInEpic from './sign-in-epic';

const ns = 'app';

export const epics = [signInEpic];

export const types = createTypes(
  [
    'fetchUser',
    'fetchUserComplete',
    'fetchUserError',
    'signIn',
    'signInComplete',
    'signInError'
  ],
  ns
);

const initialState = {
  user: {}
};

export const signIn = createAction(types.signIn);
export const signInComplete = createAction(types.signInComplete);
export const signInError = createAction(types.signInError);

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
