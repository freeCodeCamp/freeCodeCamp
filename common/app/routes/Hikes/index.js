import Hikes from './components/Hikes.jsx';
import Hike from './components/Hike.jsx';

export default {
  path: 'videos',
  component: Hikes,
  childRoutes: [{
    path: ':dashedName',
    component: Hike
  }]
};
