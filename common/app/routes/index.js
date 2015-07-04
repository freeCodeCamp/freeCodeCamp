import jobRoute from './Jobs';
import mobileRoute from './Mobile';

export default {
  path: '/',
  getChildRoutes(locationState, cb) {
    setTimeout(() => {
      cb(null, [
        // require('./Bonfires'),
        jobRoute,
        mobileRoute
      ]);
    }, 0);
  }
};
