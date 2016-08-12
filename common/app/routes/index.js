import {
  modernChallengesRoute,
  mapRoute,
  challengesRoute
} from './challenges';
import NotFound from '../components/NotFound/index.jsx';
import { addLang } from '../utils/lang';
import settingsRoute from './settings';

export default function createChildRoute(deps) {
  return {
    path: '/:lang',
    indexRoute: {
      onEnter(nextState, replace) {
        const { lang } = nextState.params;
        const { pathname } = nextState.location;
        replace(addLang(pathname, lang));
      }
    },
    childRoutes: [
      challengesRoute(deps),
      modernChallengesRoute(deps),
      mapRoute(deps),
      settingsRoute(deps),
      {
        path: '*',
        component: NotFound
      }
    ]
  };
}
