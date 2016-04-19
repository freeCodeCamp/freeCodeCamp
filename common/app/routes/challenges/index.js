import Challenges from './components/Challenges.jsx';

export default {
  path: 'challenges(/:dashedName)',
  component: Challenges,
  onEnter(nextState, replace) {
    // redirect /challenges to /map
    if (nextState.location.pathname === '/challenges') {
      replace('/map');
    }
  }
};
