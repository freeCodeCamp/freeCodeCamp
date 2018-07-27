import { homeLocation } from '../../config/env';

module.exports = function bootHome(app) {

  const router = app.loopback.Router();

  router.get('/', (req, res) => res.redirect(homeLocation));

  app.use(router);

};
