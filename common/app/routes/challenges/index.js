import Show from './components/Show.jsx';
import ShowMap from './components/map/Map.jsx';

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
    component: ShowMap
  };
}
