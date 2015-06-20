export default {
  path: '/',
  getRoutes(cb) {
    require.ensure([], require => {
      cb(null, [
        // require('./Bonfires'),
        require('./Jobs')
      ]);
    });
  }
};
