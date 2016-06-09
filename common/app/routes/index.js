import Jobs from './Jobs';
import Hikes from './Hikes';
import { modernChallenges, map, challenges } from './challenges';
import NotFound from '../components/NotFound/index.jsx';

export default {
  path: '/',
  childRoutes: [
    Jobs,
    Hikes,
    challenges,
    modernChallenges,
    map,
    {
      path: '*',
      component: NotFound
    }
  ]
};
