import { isLocationAction } from 'redux-first-router';
import {
  addNS,
  createAction,
  createTypes
} from 'berkeleys-redux-utils';

import ns from '../ns.json';

export const types = createTypes([
  'toggleUserFlag',
  'onRouteProfile'
], 'profile');


export const onRouteProfile = createAction(types.onRouteProfile);
export const toggleUserFlag = createAction(types.toggleUserFlag);

const defaultState = {};

// const getNS = state => state[ns];

export default addNS(
  ns,
  function profileRouteReducer(state = defaultState, action) {
    if (isLocationAction(action)) {
      // const { type } = action;
    }
    return state;
  }
);
