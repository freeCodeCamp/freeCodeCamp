import jobs from './Jobs';
import hikes from './Hikes';
import news from './News';
import NotFound from '../components/NotFound/index.jsx';

export default {
  path: '/',
  childRoutes: [
    jobs,
    hikes,
    news,
    {
      path: '*',
      component: NotFound
    }
  ]
};
