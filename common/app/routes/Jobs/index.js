import Jobs from './components/Jobs.jsx';
import NewJob from './components/NewJob.jsx';
import Show from './components/Show.jsx';

/*
 *  index: /jobs list jobs
 *  show: /jobs/:id show one job
 *  create /jobs/new create a new job
 */

export default {
  childRoutes: [{
    path: '/jobs',
    component: Jobs
  }, {
    path: 'jobs/new',
    component: NewJob
  }, {
    path: 'jobs/:id',
    component: Show
  }]
};
