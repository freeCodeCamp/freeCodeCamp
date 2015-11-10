import Jobs from './components/Jobs.jsx';
import NewJob from './components/NewJob.jsx';
import Show from './components/Show.jsx';
import Preview from './components/Preview.jsx';
import GoToPayPal from './components/GoToPayPal.jsx';
import NewJobCompleted from './components/NewJobCompleted.jsx';

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
    path: 'jobs/new/preview',
    component: Preview
  }, {
    path: 'jobs/new/check-out',
    component: GoToPayPal
  }, {
    path: 'jobs/new/completed',
    component: NewJobCompleted
  }, {
    path: 'jobs/:id',
    component: Show
  }]
};
