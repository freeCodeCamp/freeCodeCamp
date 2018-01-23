import { isLocationAction } from 'redux-first-router';
import {
  addNS,
  createAction,
  createTypes
} from 'berkeleys-redux-utils';

import ns from '../ns.json';

export const types = createTypes([
  'onRouteProfile'
], 'profile');


export const onRouteProfile = createAction(types.onRouteProfile);

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
