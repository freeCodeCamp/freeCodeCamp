import { modernChallenges, map, challenges } from './challenges';
import NotFound from '../components/NotFound/index.jsx';

export default {
  path: '/',
  childRoutes: [
    challenges,
    modernChallenges,
    map,
    {
      path: '*',
      component: NotFound
    }
  ]
};
