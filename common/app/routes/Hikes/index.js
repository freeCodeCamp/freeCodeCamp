import Hikes from './components/Hikes.jsx';
import Hike from './components/Hike.jsx';

/*
 * show video /hikes/someVideo
 * show question /hikes/someVideo/question1
 */

export default {
  path: 'hikes',
  component: Hikes,
  childRoutes: [{
    path: ':dashedName',
    component: Hike
  }]
};
