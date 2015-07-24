import Jobs from './components/Jobs.jsx';

/*
 *  show: /jobs
 *  showOne: /jobs/:id
 *  edit /jobs/:id
 *  delete /jobs/:id
 *  createOne /jobs/new
 */

export default {
  path: '/jobs/(:jobId)',
  getComponents(cb) {
    setTimeout(() => {
      cb(null, Jobs);
    }, 0);
  }
};
