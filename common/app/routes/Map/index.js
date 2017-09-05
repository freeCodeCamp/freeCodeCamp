import { redirect } from 'redux-first-router';

import { types as map } from '../../Map/redux';
import { types as challenges } from '../Challenges/redux';

export const routes = {
  [map.routeOnMap]: {
    type: map.routeOnMap,
    path: 'map',
    thunk: dispatch => dispatch(
      redirect({ type: challenges.routeOnCurrentChallenge })
    )
  }
};
