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
    require.ensure([], require => {
      cb(null, [
        require('./components/Jobs.jsx')
      ]);
    });
  }
};
