import Show from './components/Show.jsx';
import Map from './components/map/Map.jsx';

export const challenges = {
  path: 'challenges(/:dashedName)',
  component: Show,
  onEnter(nextState, replace) {
    // redirect /challenges to /map
    if (nextState.location.pathname === '/challenges') {
      replace('/map');
    }
  }
};

export const modernChallenges = {
  path: 'challenges/:block/:dashedName',
  component: Show
};

export const map = {
  path: 'map',
  component: Map
};
