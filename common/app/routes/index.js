<<<<<<< 40b37dc8dfd925c4c92547367e717ab807e4b097
import { modernChallenges, map, challenges } from './challenges';
=======
import Jobs from './Jobs';
import Hikes from './Hikes';
import Campsites from './Campsites';
>>>>>>> add campsite database and map
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
