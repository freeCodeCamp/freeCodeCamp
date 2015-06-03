var passport = require('passport'),
    passportConf = require('../../config/passport');

module.exports = function(app) {
  var router = app.Router();
  var passportOptions = {
    successRedirect: '/',
    failureRedirect: '/login'
  };

  router.all('/account', passportConf.isAuthenticated);

  router.get('/auth/twitter', passport.authenticate('twitter'));

  router.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter', {
      successRedirect: '/',
      failureRedirect: '/login'
    })
  );

  router.get(
    '/auth/linkedin',
    passport.authenticate('linkedin', {
      state: 'SOME STATE'
    })
  );

  router.get(
    '/auth/linkedin/callback',
    passport.authenticate('linkedin', passportOptions)
  );

  router.get(
    '/auth/facebook',
    passport.authenticate('facebook', {scope: ['email', 'user_location']})
  );

  router.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', passportOptions), function (req, res) {
      res.redirect(req.session.returnTo || '/');
    }
  );

  router.get('/auth/github', passport.authenticate('github'));

  router.get(
    '/auth/github/callback',
    passport.authenticate('github', passportOptions), function (req, res) {
      res.redirect(req.session.returnTo || '/');
    }
  );

  router.get(
    '/auth/google',
    passport.authenticate('google', {scope: 'profile email'})
  );

  router.get(
    '/auth/google/callback',
    passport.authenticate('google', passportOptions), function (req, res) {
      res.redirect(req.session.returnTo || '/');
    }
  );
};
