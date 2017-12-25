import _ from 'lodash';
import { isLocationAction, redirect } from 'redux-first-router';

import { types, challengeMetaSelector } from './redux';
import { mapStateToPanes as backendPanesMap } from './views/backend';
import { mapStateToPanes as classicPanesMap } from './views/classic';
import { mapStateToPanes as stepPanesMap } from './views/step';
import { mapStateToPanes as projectPanesMap } from './views/project';
import { mapStateToPanes as quizPanesMap } from './views/quiz';
import { mapStateToPanes as modernPanesMap } from './views/Modern';
import { types as app } from '../../redux';
import { locationTypeSelector } from '../../Router/redux';

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
  const viewMap = {
    [backendPanesMap]: backendPanesMap,
    [classicPanesMap]: classicPanesMap,
    [stepPanesMap]: stepPanesMap,
    [projectPanesMap]: projectPanesMap,
    [quizPanesMap]: quizPanesMap,
    [modernPanesMap]: modernPanesMap
  };
  return (state, action) => {
    // if a location action has dispatched then we must update the panesmap
    if (isLocationAction(action)) {
      let finalPanesMap = {};
      // if we are on this route,
      // then we must figure out the currect view we are on
      // this depends on the type of challenge
      if (action.type === types.onRouteChallenges) {
        // location matches a panes route
        const meta = challengeMetaSelector(state);
        // if challenge data has not been fetched yet (as in the case of SSR)
        // then we will get a pojo factory
        const mapStateToPanes = viewMap[meta.viewType] || _.stubObject;
        finalPanesMap = mapStateToPanes(state);
      }
      return finalPanesMap;
    }
    // This should normally happen during SSR
    // here we are ensured that the challenge data has been fetched
    // now we can select the appropriate panes map factory
    if (
      action.type === app.fetchChallenge.complete &&
      locationTypeSelector(state) === types.onRouteChallenges
    ) {
      const meta = challengeMetaSelector(state);
      const mapStateToPanes = viewMap[meta.viewType] || _.stubObject;
      return mapStateToPanes(state);
    }
    return null;
  };
}

export { default } from './Show.jsx';
