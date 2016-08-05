import { modernChallenges, map, challenges } from './challenges';
import Campsites from './Campsites';
import NotFound from '../components/NotFound/index.jsx';
import { addLang } from '../utils/lang';
import settings from './settings';

export default {
  path: '/:lang',
  indexRoute: {
    onEnter(nextState, replace) {
      const { lang } = nextState.params;
      const { pathname } = nextState.location;
      replace(addLang(pathname, lang));
    }
  },
  childRoutes: [
    Campsites,
    challenges,
    modernChallenges,
    map,
    settings,
    {
      path: '*',
      component: NotFound
    }
  ]
};
