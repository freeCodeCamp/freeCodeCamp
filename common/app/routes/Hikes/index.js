export default {
  path: 'videos',
  getComponent(_, cb) {
    require.ensure(
      [ './components/Hikes.jsx' ],
      require => {
        cb(null, require('./components/Hikes.jsx').default);
      },
      'hikes'
    );
  },
  getChildRoutes(_, cb) {
    require.ensure(
      [ './components/Hike.jsx' ],
      require => {
        cb(null, [{
          path: ':dashedName',
          component: require('./components/Hike.jsx').default
        }]);
      },
      'hikes'
    );
  }
};
