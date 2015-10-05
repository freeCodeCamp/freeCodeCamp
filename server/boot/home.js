import { defaultProfileImage } from '../../common/utils/constantStrings.json';

const message =
  'Learn to Code and Build Projects for Nonprofits';

module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/', addDefaultImage, index);

  app.use(router);

  function addDefaultImage(req, res, next) {
    if (!req.user || req.user.picture) {
      return next();
    }
    req.user.picture = defaultProfileImage;
    req.user.save(function(err) {
      if (err) { return next(err); }
      next();
    });
  }

  function index(req, res) {
    if (req.user) {
      return res.redirect('/map');
    }
    res.render('home', { title: message });
  }
};
