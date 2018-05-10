import { defaultProfileImage } from '../../common/utils/constantStrings.json';

const message =
  'Learn to Code and Help Nonprofits';

module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/', addDefaultImage, index);
  app.use(router);

  function addDefaultImage(req, res, next) {
    if (!req.user || req.user.picture) {
      return next();
    }
    return req.user.update$({ picture: defaultProfileImage })
      .subscribe(
        () => next(),
        next
      );
  }

  function index(req, res) {

    return res.render('home', { title: message });
  }
};
