var mongoose = require('mongoose'),
    passport = require('passport'),
    _ = require('underscore');

// Import models
var User = require('../models/User');

exports.account = function(req, res) {
  res.render('account', {
    title: 'Account Management',
    user: req.user,
    messages: req.flash('messages')
  });
};

/**
 * GET /login
 */
exports.getLogin = function(req, res) {
  if (req.user) {
    return res.redirect('back');
  }

  res.render('login', {
    title: 'Login',
    user: req.user,
    messages: req.flash('messages')
  });
};

/**
 * POST /login
 */
exports.postLogin = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      req.flash('messages', info.message);
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
  if (req.user) {
    return res.redirect('back');
  }

  res.render('signup', {
    title: 'Create Account',
    user: req.user,
    messages: req.flash('messages')
  });
};

/**
 * POST /signup
 */
exports.postSignup = function(req, res) {

  if (req.body.password !== req.body.confirmPassword) {
    req.flash('messages', 'Passwords do not match');
    return res.redirect('/signup');
  }

  var user = new User({
    username: req.body.email,
    password: req.body.password
  });

  user.save(function(err) {
    if (err) {
      if (err.name === 'ValidationError') {
        req.flash('messages', _.map(err.errors, function(value, key) { return value.message; }));
      }
      if (err.code === 11000) {
        req.flash('messages', 'User already exists');
      }
      return res.redirect('/signup');
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
exports.getAdmin = function(req, res) {
  res.send('access granted admin!');
};

/**
 * GET /logout
 */
exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};