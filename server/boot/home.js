import { defaultProfileImage } from '../../common/utils/constantStrings.json';
import supportedLanguages from '../utils/supported-languages';

const message =
  'Learn to Code and Help Nonprofits';

module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/', addDefaultImage, index);

  app.use(
    '/:lang',
    (req, res, next) => {
      req._urlLang = req.params.lang;
      next();
    },
    router
  );

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

  function index(req, res, next) {
    if (!supportedLanguages[req._urlLang]) {
      return next();
    }

    if (req.user) {
      return res.redirect(`/challenges/current-challenge`);
    }

    res.render('home', { title: message });
  }
};
