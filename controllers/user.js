var mongoose = require('mongoose'),
    passport = require('passport');

// Import models

exports.account = function(req, res) {
  res.render('account', { user: req.user });
};

/**
 * GET /login
 */
exports.getLogin = function(req, res) {
  res.render('login', {
    title: 'Login',
    user: req.user,
    message: req.session.messages
  });
};

/**
 * POST /login
 */
exports.postLogin = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user) {
      req.flash('message', [info.message]);
      return res.redirect('/login');
    }
    req.logIn(user, function(err) {
      if (err) return next(err);
      return res.redirect('/');
    });
  })(req, res, next);
};

/**
 * GET /signup
 */
exports.getSignup = function(req, res) {
  res.render('signup', {
    title: 'Create Account',
    user: req.user,
    message: req.session.messages
  });
};

/**
 * POST /signup
 */
exports.postSignup = function(req, res) {

  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });

  user.save(function(err) {
    if (err) {
      if (err.code === 11000) {
        return res.send('Duplicate user detected');
      } else if (err.name === 'ValidationError') {
        return res.send(err.errors);
      }
    }
    req.logIn(user, function(err) {
      if (err) throw err;
      res.redirect('/');
    });
  });
};

/**
 * GET /admin
 */
exports.admin = function(req, res) {
  res.send('access granted admin!');
};

/**
 * GET /logout
 */
exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};