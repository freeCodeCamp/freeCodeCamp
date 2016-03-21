import Jobs from './Jobs';
import Hikes from './Hikes';
import challenges from './challenges';
import map from './map';
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
