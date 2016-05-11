import Jobs from './Jobs';
import Hikes from './Hikes';
import { map, challenges } from './challenges';
import NotFound from '../components/NotFound/index.jsx';

export default {
  path: '/',
  childRoutes: [
    Jobs,
    Hikes,
    challenges,
    map,
    {
      path: '*',
      component: NotFound
    }
  ]
};
