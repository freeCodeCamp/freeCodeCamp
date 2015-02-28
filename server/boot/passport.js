require('dotenv').load();
var app = require('../server');

module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/auth/account', function (req, res, next) {
    res.render('learn-to-code', {
      user: req.user,
      url: req.url
    });
  });

  router.get('/link/account', function (req, res, next) {
    res.render('learn-to-code', {
      user: req.user,
      url: req.url
    });
  });

  router.get('/local', function (req, res, next){
    res.render('learn-to-code', {
      user: req.user,
      url: req.url
    });
  });

  router.get('/signup', function (req, res, next){
    res.render('learn-to-code', {
      user: req.user,
      url: req.url
    });
  });

  router.post('/signup', function (req, res, next) {

    var User = app.models.user;

    var newUser = {};
    newUser.email = req.body.email.toLowerCase();
    newUser.username = req.body.username.trim();
    newUser.password = req.body.password;

    User.create(newUser, function (err, user) {
      if (err) {
        req.flash('error', err.message);
        return res.redirect('back');
      } else {
        // Passport exposes a login() function on req (also aliased as logIn())
        // that can be used to establish a login session. This function is
        // primarily used when users sign up, during which req.login() can
        // be invoked to log in the newly registered user.
        req.login(user, function (err) {
          if (err) {
            req.flash('error', err.message);
            return res.redirect('back');
          }
          return res.redirect('/auth/account');
        });
      }
    });
  });


  router.get('/link', function (req, res, next){
    res.render('learn-to-code', {
      user: req.user,
      url: req.url
    });
  });

  router.get('/auth/logout', function (req, res, next) {
    req.logout();
    res.redirect('/');
  });


  app.use(router);
};
