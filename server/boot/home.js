import supportedLanguages from '../../common/utils/supported-languages';

const message =
  'Learn to Code and Help Nonprofits';

function placeholderImage(name) {
  return `https://identicon.org?t=${name}&s=256`;
}

module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/', addDefaultImage, index);
  app.use(
    '/:lang',
    (req, res, next) => {
      // add url language to request for all routers
      req._urlLang = req.params.lang;
      next();
    },
    router
  );

  app.use(router);

  function addDefaultImage(req, res, next) {
    const { user } = req;
    if (!user || user.picture) {
      return next();
    }
    return user.update$({ picture: placeholderImage(user.username) })
      .subscribe(
        () => next(),
        next
      );
  }

  function index(req, res, next) {
    if (!supportedLanguages[req._urlLang]) {
      return next();
    }

    if (req.user) {
      return res.redirect('/challenges/current-challenge');
    }

    return res.render('home', { title: message });
  }
};
