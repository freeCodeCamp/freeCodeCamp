import Jobs from './Jobs';
import Hikes from './Hikes';
import NotFound from '../components/NotFound/index.jsx';

export default {
  path: '/',
  childRoutes: [
    Jobs,
    Hikes,
    {
      path: '*',
      component: NotFound
    }
  ]
};
