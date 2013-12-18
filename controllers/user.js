var mongoose = require('mongoose'),
    passport = require('passport'),
    _ = require('underscore');

// Import models
var User = require('../models/User');

/**
 * GET /account
 */
exports.getAccount = function(req, res) {
  res.render('account', {
    title: 'Account Management',
    user: req.user,
    success: req.flash('success'),
    error: req.flash('error')
  });
};

/**
 * POST /account#profile
 */
exports.postAccountProfileTab = function(req, res) {
  User.findById(req.user.id, function(err, user) {
    user.profile.name = req.body.name || '';
    user.profile.email = req.body.email || '';
    user.profile.gender = req.body.gender || '';
    user.profile.location = req.body.location || '';
    user.profile.website = req.body.website || '';

    user.save(function(err) {
      req.flash('success', 'Profile information updated');
      res.redirect('/account');
    });
  });
};

/**
 * POST /account#settings
 */
exports.postAccountSettingsTab = function(req, res) {

  if (!req.body.password || !req.body.confirm.password) {
    req.flash('error', 'Passwords cannot be blank');
    return res.redirect('/account');
  }

  if (req.body.password !== req.body.confirmPassword) {
    req.flash('error', 'Passwords do not match');
    return res.redirect('/account');
  }

  User.findById(req.user.id, function(err, user) {
    user.password = req.body.password;
    user.save(function(err) {
      req.flash('success', 'Password has been changed');
      res.redirect('/account');
    });
  });
};

/**
 * POST /account/delete
 */
exports.postDeleteAccount = function(req, res) {
  User.remove({ _id: req.user.id }, function(err) {
    req.logout();
    res.redirect('/');
  });
};

/**
 * GET /login
 */
exports.getLogin = function(req, res) {
  if (req.user) return res.redirect('back');
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
  if (req.user) return res.redirect('back');

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

  console.log(req.body.tos);
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

  user.save(function(err) {
    // TODO: Simplify
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
      res.redirect('/');
    });
  });
};

/**
 * POST /signup/available
 * Checks if current username is available
 */
exports.postAvailability = function(req, res) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (user) {
      // unavailable
      // has-error
      return;
    } else {
      // username is available
      // has-success
      return;
    }
  });
};


/**
 * GET /account/unlink/:provider
 */
exports.getOauthUnlink = function(req, res) {
  var provider = req.params.provider;
  User.findById(req.user.id, function(err, user) {
    user[provider] = undefined;
    user.tokens = _.reject(user.tokens, function(token) { return token.kind === 'google'; });
    user.save(function(err) {
      res.redirect('/account#settings');
    });
  });
};

/**
 * GET /logout
 */
exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};