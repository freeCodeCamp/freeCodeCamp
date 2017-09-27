import { redirect } from 'redux-first-router';

import { types as map } from '../../Map/redux';
import { onRouteCurrentChallenge } from '../Challenges/redux';

export const routes = {
  [map.onRouteMap]: {
    type: map.onRouteMap,
    path: '/map',
    thunk: dispatch => dispatch(redirect(onRouteCurrentChallenge()))
  }
};
