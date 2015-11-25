import News from './components/News.jsx';
/*
 *  index: /news hot news
 *  show: /news/:title show article
 *  create: /news/new
 */

export default {
  childRoutes: [{
    path: '/news',
    component: News
  }]
};
