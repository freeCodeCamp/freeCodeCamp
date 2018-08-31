import {
  createAction,
  createTypes
} from 'berkeleys-redux-utils';

import ns from '../ns.json';
import handleActions from 'berkeleys-redux-utils/lib/handle-actions';

export const types = createTypes([
  'onRouteProfile',
  'userFound'
], 'profile');

export const onRouteProfile = createAction(types.onRouteProfile);
export const userFound = createAction(types.userFound);
const initialState = {
  isUserFound: null
};

export const userFoundSelector = state => state[ns].isUserFound;

export default handleActions(() => (
  {
    [types.userFound]: (state, { payload }) => ({
      ...state,
      isUserFound: payload
    })
  }),
  initialState,
  ns
);
