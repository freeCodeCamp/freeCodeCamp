import { redirect } from 'redux-first-router';

import { types } from './redux';
import { panesMap as backendPanesMap } from './views/backend';
import { panesMap as classicPanesMap } from './views/classic';
import { panesMap as stepPanesMap } from './views/step';
import { panesMap as projectPanesMap } from './views/project';
import { panesMap as quizPanesMap } from './views/quiz';

export const routes = {
  [types.onRouteChallengeRoot]: {
    path: '/challenges',
    thunk: (dispatch) =>
      dispatch(redirect({ type: types.onRouteCurrentChallenge }))
  },
  [types.onRouteChallenges]: '/challenges/:block/:dashedName',
  [types.onRouteCurrentChallenge]: '/challenges/current-challenge'
};

export function createPanesMap() {
  return {
    // the route to use this panes map on
    [types.onRouteChallenges]: {
      [backendPanesMap]: backendPanesMap,
      [classicPanesMap]: classicPanesMap,
      [stepPanesMap]: stepPanesMap,
      [projectPanesMap]: projectPanesMap,
      [quizPanesMap]: quizPanesMap
    }
  };
}

export { default } from './Show.jsx';
