import Jobs from './Jobs';
import Hikes from './Hikes';
import Challenges from './challenges';
import NotFound from '../components/NotFound/index.jsx';

export default {
  path: '/',
  childRoutes: [
    Jobs,
    Hikes,
    Challenges,
    {
      path: '*',
      component: NotFound
    }
  ]
};
