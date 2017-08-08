import Show from './Show.jsx';
import { panesMap as backendPanesMap } from './views/backend';
import { panesMap as classicPanesMap } from './views/classic';
import { panesMap as stepPanesMap } from './views/step';
import { panesMap as projectPanesMap } from './views/project';
import { panesMap as quizPanesMap } from './views/quiz';

export function createPanesMap() {
  return {
    ...backendPanesMap,
    ...classicPanesMap,
    ...stepPanesMap,
    ...projectPanesMap,
    ...quizPanesMap
  };
}

export default function challengesRoutes() {
  return [{
    path: 'challenges(/:dashedName)',
    component: Show,
    onEnter(nextState, replace) {
      // redirect /challenges to /map
      if (nextState.location.pathname === '/challenges') {
        replace('/challenges/current-challenge');
      }
    }
  }, {
    path: 'challenges/:block/:dashedName',
    component: Show
  }];
}
