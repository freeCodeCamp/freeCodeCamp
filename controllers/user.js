var mongoose = require('mongoose'),
    passport = require('passport'),
    _ = require('underscore');

// Import models
var User = require('../models/User');

exports.getAccount = function(req, res) {
  res.render('account', {
    title: 'Account Management',
    user: req.user,
    messages: req.flash('messages')
  });
};

exports.postAccountProfile = function(req, res) {
  console.log(req.body.gender);
  User.findById(req.user.id, function(err, user) {
    user.profile.name = req.body.name || '';
    user.profile.email = req.body.email || '';
    user.profile.gender = req.body.gender || '';
    user.profile.location = req.body.location || '';
    user.profile.website = req.body.website || '';

    user.save(function(err) {
      res.redirect('/account');
    });
  });
};

// todo: change to change postPassword
exports.postAccountSettings = function(req, res) {
  console.log('okay!!');
   // TODO: change url on tab change in account.jade
  // Check if password matches confirm password

  if (req.body.password !== req.body.confirmPassword) {
    req.flash('messages', 'Passwords do not match');
    return res.redirect('/account');
  }

  User.findById(req.user.id, function(err, user) {
    user.password = req.body.password;
    user.save(function(err) {
      console.log('Password has been changed.');
      //TODO: change messages to success/errors
      req.flash('messages', 'Password has been successfully changed!');
      res.redirect('/account');
    });
  });



  // TODO: add new field "Existing password"
  // TODO: validate if all passwords are matching
  //TODO: change user's password
};

exports.deleteAccount = function(req, res) {
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
 * GET /account/unlink/:provider
 */
exports.getOauthUnlink = function(req, res) {
  console.log('unlinking oauth2');
  var provider = req.params.provider;
  User.findById(req.user.id, function(err, user) {
    delete user[provider];
    user.tokens = _.reject(x.tokens, function(tok) { return tok.kind === 'google'; });
    user.save(function(err) {
      console.log('Successfully unlinked:', provider);
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