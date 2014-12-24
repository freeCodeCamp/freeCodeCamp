var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');
var secrets = require('../config/secrets');
var moment = require('moment');
var Challenge = require('./../models/Challenge');

//TODO(Berks): Refactor to use module.exports = {} pattern.
/**
 * GET /login
 * Login page.
 */

exports.getLogin = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('account/login', {
    title: 'Free Code Camp Login'
  });
};

/**
 * POST /login
 * Sign in using email and password.
 */

exports.postLogin = function(req, res, next) {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/login');
  }

  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      req.flash('errors', { msg: info.message });
      return res.redirect('/login');
    }
    req.logIn(user, function(err) {
      if (err) return next(err);
      req.flash('success', { msg: 'Success! You are logged in.' });
      res.redirect(req.session.returnTo || '/');
    });
  })(req, res, next);
};

/**
 * GET /logout
 * Log out.
 */

exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

/**
 * GET /email-signup
 * Signup page.
 */

exports.getEmailSignin = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('account/email-signup', {
    title: 'Sign in to your Free Code Camp Account'
  });
};

/**
 * GET /email-signin
 * Signup page.
 */

exports.getEmailSignup = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('account/email-signin', {
    title: 'Create Your Free Code Camp Account'
  });
};

/**
 * POST /email-signup
 * Create a new local account.
 */

exports.postEmailSignup = function(req, res, next) {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password must be at least 4 characters long').len(4);
  req.assert('confirmPassword', 'Passwords do not match')
    .equals(req.body.password);

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/email-signup');
  }

  var user = new User({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ email: req.body.email }, function(err, existingUser) {
    if (err) { return next(err); }

    if (existingUser) {
      req.flash('errors', {
        msg: 'Account with that email address already exists.'
      });
      return res.redirect('/email-signup');
    }
    user.save(function(err) {
      if (err) { return next(err); }

      req.logIn(user, function(err) {
        if (err) { return next(err); }
        res.redirect('/email-signup');
      });
    });
  });
};

/**
 * GET /account
 * Profile page.
 */

exports.getAccount = function(req, res) {
  Challenge.find({}, null, { sort: { challengeNumber: 1 } }, function(err, c) {
    if (err) {
      console.error('Challenge err: ', err);
      next(err);
    }
    res.render('account/profile', {
      title: 'Manage your Free Code Camp Account',
      cc: c,
      ch: req.user.challengesHash,
      moment: moment
    });
  });
};

/**
 * POST /update-progress
 * Update profile information.
 */

exports.updateProgress = function(req, res) {
    User.findById(req.user.id, function(err, user) {
        if (err) return next(err);
        user.email = req.body.email || '';
        user.profile.name = req.body.name || '';
        user.profile.gender = req.body.gender || '';
        user.profile.location = req.body.location || '';
        user.profile.website = req.body.website || '';

        user.save(function(err) {
            if (err) return next(err);
            req.flash('success', { msg: 'Profile information updated.' });
            res.redirect('/account');
        });
    });
};

/**
 * POST /account/profile
 * Update profile information.
 */

exports.postUpdateProfile = function(req, res, next) {
  User.findById(req.user.id, function(err, user) {
    if (err) return next(err);

    req.assert('email', 'Email is required').notEmpty();
    req.assert('email', 'Please enter a valid email address.').isEmail();
    req.assert('username', 'Your username cannot be longer than 20 characters').len(1, 20);
    req.assert('username', 'Your username can only use letters, numbers or underscores').matchRegex(/^[A-z0-9_]+$/);
    var errors = req.validationErrors();
    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/account');
    }

    User.findOne({ email: req.body.email }, function(err, existingEmail) {
      if (err) {
        return next(err);
      }
      var user = req.user;
      if (existingEmail && existingEmail.email != user.email) {
        req.flash('errors', {
          msg: "An account with that email address already exists."
        });
        return res.redirect('/account');
      }
      User.findOne({ username: req.body.username }, function(err, existingUsername) {
        if (err) {
          return next(err);
        }
        var user = req.user;
        if (existingUsername && existingUsername.profile.username != user.profile.username) {
          console.log(user.profile.username)
          console.log(existingUsername.username)
          req.flash('errors', {
            msg: 'An account with that username already exists.'
          });
          return res.redirect('/account');
        }
        var user = req.user;
        user.email = req.body.email || '';
        user.profile.name = req.body.name || '';
        user.profile.username = req.body.username || '';
        user.profile.location = req.body.location || '';
        user.profile.website = req.body.website || '';

        user.save(function (err) {
          if (err) return next(err);
          req.flash('success', {msg: 'Profile information updated.'});
          res.redirect('/account');
        });
      });
    });
  });
};

/**
 * POST /account/password
 * Update current password.
 */

exports.postUpdatePassword = function(req, res, next) {
  req.assert('password', 'Password must be at least 4 characters long').len(4);
  req.assert('confirmPassword', 'Passwords do not match')
    .equals(req.body.password);

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/account');
  }

  User.findById(req.user.id, function(err, user) {
    if (err) { return next(err); }

    user.password = req.body.password;

    user.save(function(err) {
      if (err) { return next(err); }

      req.flash('success', { msg: 'Password has been changed.' });
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
    if (err) { return next(err); }
    req.logout();
    req.flash('info', { msg: 'Your account has been deleted.' });
    res.redirect('/');
  });
};

/**
 * GET /account/unlink/:provider
 * Unlink OAuth provider.
 */

exports.getOauthUnlink = function(req, res, next) {
  var provider = req.params.provider;
  User.findById(req.user.id, function(err, user) {
    if (err) { return next(err); }

    user[provider] = undefined;
    user.tokens =
      _.reject(user.tokens, function(token) {
      return token.kind === provider;
    });

    user.save(function(err) {
      if (err) { return next(err); }
      req.flash('info', { msg: provider + ' account has been unlinked.' });
      res.redirect('/account');
    });
  });
};

/**
 * GET /reset/:token
 * Reset Password page.
 */

exports.getReset = function(req, res) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  User
    .findOne({ resetPasswordToken: req.params.token })
    .where('resetPasswordExpires').gt(Date.now())
    .exec(function(err, user) {
      if (err) { return next(err); }
      if (!user) {
        req.flash('errors', {
          msg: 'Password reset token is invalid or has expired.'
        });
        return res.redirect('/forgot');
      }
      res.render('account/reset', {
        title: 'Password Reset'
      });
    });
};

/**
 * POST /reset/:token
 * Process the reset password request.
 */

exports.postReset = function(req, res, next) {
  req.assert('password', 'Password must be at least 4 characters long.').len(4);
  req.assert('confirm', 'Passwords must match.').equals(req.body.password);

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('back');
  }

  async.waterfall([
    function(done) {
      User
        .findOne({ resetPasswordToken: req.params.token })
        .where('resetPasswordExpires').gt(Date.now())
        .exec(function(err, user) {
          if (err) { return next(err); }
          if (!user) {
            req.flash('errors', {
              msg: 'Password reset token is invalid or has expired.'
            });
            return res.redirect('back');
          }

          user.password = req.body.password;
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;

          user.save(function(err) {
            if (err) { return done(err); }
            req.logIn(user, function(err) {
              done(err, user);
            });
          });
        });
    },
    function(user, done) {
      var transporter = nodemailer.createTransport({
        service: 'Mandrill',
        auth: {
          user: secrets.mandrill.user,
          pass: secrets.mandrill.password
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'Team@freecodecamp.com',
        subject: 'Your Free Code Camp password has been changed',
        text: [
          'Hello,\n\n',
          'This email is confirming that you requested to',
          'reset your password for your Free Code Camp account.',
          'This is your email:',
          user.email,
          '\n'
        ].join(' ')
      };
      transporter.sendMail(mailOptions, function(err) {
        if (err) { return done(err); }
        req.flash('success', {
          msg: 'Success! Your password has been changed.'
        });
        done();
      });
    }
  ], function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
};

/**
 * GET /forgot
 * Forgot Password page.
 */

exports.getForgot = function(req, res) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.render('account/forgot', {
    title: 'Forgot Password'
  });
};

/**
 * POST /forgot
 * Create a random token, then the send user an email with a reset link.
 */

exports.postForgot = function(req, res, next) {
  req.assert('email', 'Please enter a valid email address.').isEmail();

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/forgot');
  }

  async.waterfall([
    function(done) {
      crypto.randomBytes(16, function(err, buf) {
        if (err) { return done(err); }
        var token = buf.toString('hex');
        done(null, token);
      });
    },
    function(token, done) {
      User.findOne({
        email: req.body.email.toLowerCase()
      }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          req.flash('errors', {
            msg: 'No account with that email address exists.'
          });
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          if (err) { return done(err); }
          done(null, token, user);
        });
      });
    },
    function(token, user, done) {
      var transporter = nodemailer.createTransport({
        service: 'Mandrill',
        auth: {
          user: secrets.mandrill.user,
          pass: secrets.mandrill.password
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'Team@freecodecamp.com',
        subject: 'Reset your Free Code Camp password',
        text: [
          'You are receiving this email because you (or someone else)',
          'requested we reset your Free Code Camp account\'s password.\n\n',
          'Please click on the following link, or paste this into your',
          'browser to complete the process:\n\n',
          'http://',
          req.headers.host,
          '/reset/',
          token,
          '\n\n',
          'If you did not request this, please ignore this email and',
          'your password will remain unchanged.\n'
        ].join(' ')
      };
      transporter.sendMail(mailOptions, function(err) {
        if (err) { return done(err); }
        req.flash('info', {
          msg: 'An e-mail has been sent to ' +
            user.email +
            ' with further instructions.'
        });
        done(null, 'done');
      });
    }
  ], function(err) {
    if (err) { return next(err); }
    res.redirect('/forgot');
  });
};
