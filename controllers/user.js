var mongoose = require('mongoose');
var passport = require('passport');
var _ = require('underscore');

// Import models
var User = require('../models/User');

/**
 * GET /account
 * User account page.
 */
exports.getAccount = function(req, res) {
  res.render('account/profile', {
    title: 'Account Management',
    success: req.flash('success'),
    error: req.flash('error')
  });
};

/**
 * POST /account/profile
 * Update profile information.
 */
exports.postUpdateProfile = function(req, res, next) {
  User.findById(req.user.id, function(err, user) {
    if (err) return next(err);

    user.profile.name = req.body.name || '';
    user.profile.email = req.body.email || '';
    user.profile.gender = req.body.gender || '';
    user.profile.location = req.body.location || '';
    user.profile.website = req.body.website || '';

    user.save(function(err) {
      if (err) return next(err);
      req.flash('success', { success: 'Profile information updated' });
      res.redirect('/account');
    });
  });
};

/**
 * POST /account/password
 * Update current password.
 */
exports.postUpdatePassword = function(req, res, next) {

  // TODO: Use Virtuals (mongoose)
  if (!req.body.password || !req.body.confirm.password) {
    req.flash('error', 'Passwords cannot be blank');
    return res.redirect('/account');
  }

  if (req.body.password !== req.body.confirmPassword) {
    req.flash('error', 'Passwords do not match');
    return res.redirect('/account');
  }

  User.findById(req.user.id, function(err, user) {
    if (err) return next(err);
    user.password = req.body.password;
    user.save(function(err) {
      if (err) return next(err);
      req.flash('success', 'Password has been changed');
      res.redirect('/account');
    });
  });
};

/**
 * POST /account/delete
 * Delete user account.
 */
exports.postDeleteAccount = function(req, res, next) {
  User.remove({ _id: req.user.id }, function(err) {
    if (err) return next(err);
    req.logout();
    res.redirect('/');
  });
};

/**
 * GET /login
 * User login page
 */
exports.getLogin = function(req, res) {
  if (req.user) return res.redirect('back');
  res.render('account/login', {
    title: 'Login',
    messages: req.flash('messages')
  });
};

/**
 * POST /login
 * Log in with provided credentials (non-oauth)
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
 * User signup page
 */
exports.getSignup = function(req, res) {
  if (req.user) return res.redirect('back');
  res.render('account/signup', {
    title: 'Create Account',
    messages: req.flash('messages')
  });
};

/**
 * POST /signup
 * Create a new user (non-oauth)
 */
exports.postSignup = function(req, res, next) {
  // TODO: add mongoose validation on ToS (virtual?)
  // TODO: Mongoose virtual, move logic to model

  if (req.body.password !== req.body.confirmPassword) {
    req.flash('messages', 'Passwords do not match');
    return res.redirect('/signup');
  }

  if (!req.body.tos) {
    req.flash('messages', 'You must agree to terms and conditions');
    return res.redirect('/signup');
  }

  var user = new User({
    username: req.body.username,
    password: req.body.password
  });

  // TODO: simplify
  user.save(function(err) {
    if (err) {
      if (err.name === 'ValidationError') {
        // TODO: make more explicit
        req.flash('messages', _.map(err.errors, function(value, key) { return value.message; }));
      }
      if (err.code === 11000) {
        req.flash('messages', 'User already exists');
      }
      return res.redirect('/signup');
    }

    req.logIn(user, function(err) {
      if (err) return next(err);
      res.redirect('/');
    });
  });
};

/**
 * GET /account/unlink/:provider
 * Unlink an oauth provider from the current user
 */
exports.getOauthUnlink = function(req, res, next) {
  var provider = req.params.provider;
  User.findById(req.user.id, function(err, user) {
    if (err) return next(err);

    user[provider] = undefined;
    user.tokens = _.reject(user.tokens, function(token) { return token.kind === 'google'; });

    user.save(function(err) {
      if (err) return next(err);
      res.redirect('/account#settings');
    });
  });
};

/**
 * GET /logout
 * Log out
 */
exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};
