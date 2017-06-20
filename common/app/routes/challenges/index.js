import Show from './Show.jsx';
import { panesMap } from './views/backend';

export function createPanesMap() {
  return panesMap;
}

export default function challengesRoutes() {
  return [{
    path: 'challenges(/:dashedName)',
    component: Show,
    onEnter(nextState, replace) {
      // redirect /challenges to /map
      if (nextState.location.pathname === '/challenges') {
        replace('/map');
      }
    }
  }, {
    path: 'challenges/:block/:dashedName',
    component: Show
  }];
}
