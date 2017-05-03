import Show from './Show.jsx';

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
