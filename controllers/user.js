var _ = require('lodash'),
  async = require('async'),
  crypto = require('crypto'),
  nodemailer = require('nodemailer'),
  passport = require('passport'),
  User = require('../models/User'),
  secrets = require('../config/secrets'),
  moment = require('moment'),
  Challenge = require('./../models/Challenge'),
  debug = require('debug')('freecc:cntr:challenges'),
  resources = require('./resources');



/**
 * GET /signin
 * Siginin page.
 */

exports.getSignin = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('account/signin', {
    title: 'Free Code Camp Login'
  });
};

/**
 * POST /signin
 * Sign in using email and password.
 */

exports.postSignin = function(req, res, next) {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/signin');
  }

  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      req.flash('errors', { msg: info.message });
      return res.redirect('/signin');
    }
    req.logIn(user, function(err) {
      if (err) return next(err);
      req.flash('success', { msg: 'Success! You are logged in.' });
      res.redirect(req.session.returnTo || '/');
    });
  })(req, res, next);
};

/**
 * GET /signout
 * Log out.
 */

exports.signout = function(req, res) {
  req.logout();
  res.redirect('/');
};

/**
 * GET /email-signup
 * Signup page.
 */

exports.getEmailSignin = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('account/email-signin', {
    title: 'Sign in to your Free Code Camp Account'
  });
};

/**
 * GET /signin
 * Signup page.
 */

exports.getEmailSignup = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('account/email-signup', {
    title: 'Create Your Free Code Camp Account'
  });
};

/**
 * POST /email-signup
 * Create a new local account.
 */

exports.postEmailSignup = function(req, res, next) {
  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/email-signup');
  }

  var possibleUserData = req.body;

  if (possibleUserData.password.length < 8) {
    req.flash('errors', {
      msg: 'Your password is too short'
    });
    return res.redirect('email-signup');
  }

  if (possibleUserData.username.length < 5 || possibleUserData.length > 20) {
    req.flash('errors', {
      msg: 'Your username must be between 5 and 20 characters'
    });
    return res.redirect('email-signup');
  }


  var user = new User({
    email: req.body.email.trim(),
    password: req.body.password,
    profile : {
      username: req.body.username.trim(),
      picture: 'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png'
    }
  });

  User.findOne({ email: req.body.email }, function(err, existingEmail) {
    if (err) {
      return next(err);
    }

    if (existingEmail) {
      req.flash('errors', {
        msg: 'Account with that email address already exists.'
      });
      return res.redirect('/email-signup');
    }
    User.findOne({'profile.username': req.body.username }, function(err, existingUsername) {
      if (err) {
        return next(err);
      }
      if (existingUsername) {
        req.flash('errors', {
          msg: 'Account with that username already exists.'
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
        subject: 'Welcome to Free Code Camp!',
        text: [
          'Greetings from San Francisco!\n\n',
          'Thank you for joining our community.\n',
          'Feel free to email us at this address if you have any questions about Free Code Camp.\n',
          "And if you have a moment, check out our blog: blog.freecodecamp.com.\n",
          'Good luck with the challenges!\n\n',
          '- the Volunteer Camp Counselor Team'
        ].join('')
      };
      transporter.sendMail(mailOptions, function(err) {
        if (err) { return err; }
      });
    });
  });
};

/**
 * For Calendar display
 */

exports.getStreak = function(req, res) {
  var completedStreak = req.user.challengesHash;

}

/**
 * GET /account
 * Profile page.
 */

exports.getAccount = function(req, res) {
  res.render('account/account', {
    title: 'Manage your Free Code Camp Account'
  });
};

/**
 * Angular API Call
 */

exports.getAccountAngular = function(req, res) {
  res.json({
    user: req.user
  });
};

/**
 * Unique username check API Call
 */

exports.checkUniqueUsername = function(req, res) {
  User.count({'profile.username': req.params.username.toLowerCase()}, function (err, data) {
    if (data == 1) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  });
};

/**
 * Existing username check
 */
exports.checkExistingUsername = function(req, res) {
  User.count({'profile.username': req.params.username.toLowerCase()}, function (err, data) {
    if (data === 1) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  });
};

/**
 * Unique email check API Call
 */

exports.checkUniqueEmail = function(req, res) {
  User.count({'email': decodeURIComponent(req.params.email).toLowerCase()}, function (err, data) {
    if (data === 1) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  });
};


/**
 * GET /campers/:username
 * Public Profile page.
 */

exports.returnUser = function(req, res, next) {
  User.find({'profile.username': req.params.username.toLowerCase()}, function(err, user) {
    if (err) { debug('Username err: ', err); next(err); }
    if (user[0]) {
      var user = user[0];

      var data = {};
      var progressTimestamps = user.progressTimestamps;
      for (var i = 0; i < progressTimestamps.length; i++) {
        data[progressTimestamps[i].toString()] = 1;
      }

      res.render('account/show', {
        title: 'Camper ' + user.profile.username + '\'s portfolio',
        username: user.profile.username,
        name: user.profile.name,
        location: user.profile.location,
        githubProfile: user.profile.githubProfile,
        linkedinProfile: user.profile.linkedinProfile,
        codepenProfile: user.profile.codepenProfile,
        twitterHandle: user.profile.twitterHandle,
        bio: user.profile.bio,
        picture: user.profile.picture,
        progressTimestamps: user.progressTimestamps,
        points: user.progressTimestamps.length,
        website1Link: user.portfolio.website1Link,
        website1Title: user.portfolio.website1Title,
        website1Image: user.portfolio.website1Image,
        website2Link: user.portfolio.website2Link,
        website2Title: user.portfolio.website2Title,
        website2Image: user.portfolio.website2Image,
        website3Link: user.portfolio.website3Link,
        website3Title: user.portfolio.website3Title,
        website3Image: user.portfolio.website3Image,
        challenges: user.completedCoursewares,
        ch: user.challengesHash,
        calender: data,
        moment: moment
      });

    } else {
      req.flash('errors', {
        msg: "404: We couldn't find a page with that url. Please double check the link."
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
      User.findOne({ 'profile.username': req.body.username }, function(err, existingUsername) {
        if (err) {
          return next(err);
        }
        var user = req.user;
        if (existingUsername && existingUsername.profile.username !== user.profile.username) {
          req.flash('errors', {
            msg: 'An account with that username already exists.'
          });
          return res.redirect('/account');
        }
        user.email = req.body.email.trim() || '';
        user.profile.name = req.body.name.trim() || '';
        user.profile.username = req.body.username.trim() || '';
        user.profile.location = req.body.location.trim() || '';
        user.profile.githubProfile = req.body.githubProfile.trim() || '';
        user.profile.linkedinProfile = req.body.linkedinProfile.trim() || '';
        user.profile.codepenProfile = req.body.codepenProfile.trim() || '';
        user.profile.twitterHandle = req.body.twitterHandle.trim() || '';
        user.profile.bio = req.body.bio.trim() || '';
        user.profile.picture = req.body.picture.trim() || 'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png';
        user.portfolio.website1Title = req.body.website1Title.trim() || '';
        user.portfolio.website1Link = req.body.website1Link.trim() || '';
        user.portfolio.website1Image = req.body.website1Image.trim() || '';
        user.portfolio.website2Title = req.body.website2Title.trim() || '';
        user.portfolio.website2Link = req.body.website2Link.trim() || '';
        user.portfolio.website2Image = req.body.website2Image.trim() || '';
        user.portfolio.website3Title = req.body.website3Title.trim() || '';
        user.portfolio.website3Link = req.body.website3Link.trim() || '';
        user.portfolio.website3Image = req.body.website3Image.trim() || '';


        user.save(function (err) {
          if (err) {
            return next(err);
          }
          resources.updateUserStoryPictures(
            user._id.toString(),
            user.profile.picture,
            user.profile.username,
            function(err) {
              if (err) { return next(err); }
              req.flash('success', {
                msg: 'Profile information updated.'
              });
              res.redirect('/account');
            }
          );
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
        title: 'Password Reset',
        token: req.params.token
      });
    });
};

/**
 * POST /reset/:token
 * Process the reset password request.
 */

exports.postReset = function(req, res, next) {
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
          'You are receiving this email because you (or someone else)\n',
          'requested we reset your Free Code Camp account\'s password.\n\n',
          'Please click on the following link, or paste this into your\n',
          'browser to complete the process:\n\n',
          'http://',
          req.headers.host,
          '/reset/',
          token,
          '\n\n',
          'If you did not request this, please ignore this email and\n',
          'your password will remain unchanged.\n'
        ].join('')
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
