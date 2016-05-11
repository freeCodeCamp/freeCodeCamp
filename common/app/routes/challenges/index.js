import Challenges from './components/Challenges.jsx';
import ShowMap from './components/map/Show.jsx';

export const challenges = {
  path: 'challenges(/:dashedName)',
  component: Challenges,
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
