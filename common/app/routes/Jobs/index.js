import Jobs from './components/Jobs.jsx';
import Show from './components/Show.jsx';

/*
 *  index: /jobs list jobs
 *  show: /jobs/:id show one job
 *  create /jobs/new create a new job
 */

export default {
  path: 'jobs',
  childRoutes: [{
    path: 'jobs',
    component: Jobs
  }, {
    path: 'jobs/:id',
    component: Show
  }]
};
