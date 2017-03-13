import Show from './Show.jsx';
import _Map from './views/map';

export function challengesRoute() {
  return {
    path: 'challenges(/:dashedName)',
    component: Show,
    onEnter(nextState, replace) {
      // redirect /challenges to /map
      if (nextState.location.pathname === '/challenges') {
        replace('/map');
      }
    }
  };
}

export function modernChallengesRoute() {
  return {
    path: 'challenges/:block/:dashedName',
    component: Show
  };
}

export function mapRoute() {
  return {
    path: 'map',
    component: _Map
  };
}
