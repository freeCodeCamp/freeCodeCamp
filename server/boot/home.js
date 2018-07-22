import { homeLocation } from '../../config/env';

module.exports = function bootHome(app) {

  app.get('/', (req, res) => res.redirect(homeLocation));

};
