var _ = require('lodash'),
    async = require('async'),
    crypto = require('crypto'),
    nodemailer = require('nodemailer'),
    passport = require('passport'),
    User = require('../models/User'),
    secrets = require('../config/secrets'),
    moment = require('moment'),
    Challenge = require('./../models/Challenge'),
    debug = require('debug')('freecc:cntr:challenges');

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
      challenges: c,
      ch: req.user.challengesHash,
      moment: moment,
      user: req.user
    });
  });
};

/**
 * GET /users/:username
 * Public Profile page.
 */

exports.returnUser = function(req, res, next) {
  User.find({'profile.username': req.params.username}, function(err, user) {
    if (err) { debug('Username err: ', err); next(err); }
    if (user[0]) {
      var user = user[0];
      Challenge.find({}, null, {sort: {challengeNumber: 1}}, function (err, c) {
        res.render('account/show', {
          title: 'Code Camper: ',
          username: user.profile.username,
          name: user.profile.name,
          location: user.profile.location,
          coderbyteProfile: user.profile.linkedinProfile,
          githubProfile: user.profile.githubProfile,
          linkedinProfile: user.profile.linkedinProfile,
          codepenProfile: user.codepenProfile,
          twitterHandle: user.twitterHandle,
          website1: user.portfolio.website1Link,
          website1Title: user.portfolio.website1Title,
          website1Image: user.portfolio.website1Image,
          website2: user.portfolio.website2Link,
          website2Title: user.portfolio.website2Title,
          website2Image: user.portfolio.website2Image,
          website3: user.portfolio.website3Link,
          website3Title: user.portfolio.website3Title,
          website3Image: user.portfolio.website3Image,
          picture: user.profile.picture,
          challenges: c,
          ch: user.challengesHash,
          moment: moment
        });
      });
    } else {
      req.flash('errors', {
        msg: "We couldn't find a Code Camper with that username."
      });
      return res.redirect('/');
    }
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
    req.assert('githubProfile', 'Please enter a valid URL (www.example.com)').matchRegex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/);
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
        user.profile.githubProfile = req.body.githubProfile || '';
        user.profile.coderbyteProfile = req.body.coderbyteProfile || '';
        user.profile.linkedinProfile = req.body.linkedinProfile || '';
        user.profile.codepenProfile = req.body.codepenProfile || '';
        user.profile.twitterHandle = req.body.twitterHandle || '';
        user.portfolio.website1Title = req.body.website1Title || '';
        user.portfolio.website1Link = req.body.website1Link || '';
        user.portfolio.website1Image = req.body.website1Image || '';
        user.portfolio.website2Title = req.body.website2Title || '';
        user.portfolio.website2Link = req.body.website2Link || '';
        user.portfolio.website2Image = req.body.website2Image || '';
        user.portfolio.website3Title = req.body.website3Title || '';
        user.portfolio.website3Link = req.body.website3Link || '';
        user.portfolio.website3Image = req.body.website3Image || '';


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
