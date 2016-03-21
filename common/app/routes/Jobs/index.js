export default {
  getChildRoutes: (_, cb) => {
    require.ensure(
      [
        './components/Jobs.jsx',
        './components/NewJob.jsx',
        './components/Preview.jsx',
        './components/JobTotal.jsx',
        './components/NewJobCompleted.jsx',
        './components/Show.jsx'
      ],
      require => {
        cb(null, [{
            path: '/jobs',
            component: require('./components/Jobs.jsx').default
          }, {
            path: 'jobs/new',
            component: require('./components/NewJob.jsx').default
          }, {
            path: 'jobs/new/preview',
            component: require('./components/Preview.jsx').default
          }, {
            path: 'jobs/new/check-out',
            component: require('./components/JobTotal.jsx').default
          }, {
            path: 'jobs/new/completed',
            component: require('./components/NewJobCompleted.jsx').default
          }, {
            path: 'jobs/:id',
            component: require('./components/Show.jsx').default
        }]);
      },
      'jobs'
    );
  }
};
