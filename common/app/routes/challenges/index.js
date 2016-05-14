import Show from './components/Show.jsx';
import ShowMap from './components/map/Show.jsx';

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

export const map = {
  path: 'map',
  component: ShowMap
};
