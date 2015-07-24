// import Jobs from './Jobs';
import Hikes from './Hikes';

export default {
  path: '/',
  getChildRoutes(locationState, cb) {
    setTimeout(() => {
      cb(null, [
        // Jobs,
        Hikes
      ]);
    }, 0);
  }
};
