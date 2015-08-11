var defaultProfileImage =
  require('../../common/utils/constantStrings.json').defaultProfileImage;
var message =
  'Learn to Code JavaScript and get a Coding Job by Helping Nonprofits';

module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/', index);

  app.use(router);

  function index(req, res, next) {
    if (req.user)
      if (!req.user.picture) {
        req.user.picture = defaultProfileImage;

        req.user.save(function (err) {
          if (err) {
            return next(err);
          }
          res.render('get-started', {title: message});
        });
      } else {
      res.render('resources/get-started', {title: message});
    } else {
      res.render('home', { title: message });
    }
  }
};
