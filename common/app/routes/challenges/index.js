import { redirect } from 'redux-first-router';

import { types } from './redux';
import { panesMap as backendPanesMap } from './views/backend';
import { panesMap as classicPanesMap } from './views/classic';
import { panesMap as stepPanesMap } from './views/step';
import { panesMap as projectPanesMap } from './views/project';
import { panesMap as quizPanesMap } from './views/quiz';

export const routes = {
  [types.routeOnChallengeRoot]: {
    path: '/challenges',
    thunk: (dispatch) => {
      return dispatch(redirect({ type: types.routeOnCurrentChallenge }));
    }
  },
  [types.routeOnChallenges]: '/challenges/:block/:dashedName',
  [types.routeOnCurrentChallenge]: '/challenges/current-challenge'
};

export function createPanesMap() {
  return {
    ...backendPanesMap,
    ...classicPanesMap,
    ...stepPanesMap,
    ...projectPanesMap,
    ...quizPanesMap
  };
}
