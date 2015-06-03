var message =
  'Learn to Code JavaScript and get a Coding Job by Helping Nonprofits';

module.exports = function(app) {
  var router = app.Router();
  router.get('/', index);

  function index(req, res, next) {
    if (req.user && !req.user.profile.picture) {
      req.user.profile.picture =
        'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png';

      req.user.save(function(err) {
        if (err) { return next(err); }
        res.render('home', { title: message });
      });
    } else {
      res.render('home', { title: message });
    }
  }
};
