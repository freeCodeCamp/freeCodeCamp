var _ = require('lodash'),
    async = require('async'),
    crypto = require('crypto'),
    nodemailer = require('nodemailer'),
    passport = require('passport'),
    secrets = require('../../config/secrets'),
    moment = require('moment'),
    debug = require('debug')('freecc:cntr:user');

module.exports = function(app) {
  var router = app.loopback.Router();
  var User = app.models.user;
  var UserIdentity = app.models.userIdentity;

  router.get('/signin', getSignin);
  router.get('/login', function(req, res) { res.redirect(301, '/signin'); });
  router.post('/signin', postSignin);
  router.get('/signout', signout);
  router.get('/logout', function(req, res) { res.redirect(301, '/signout'); });
  router.get('/forgot', getForgot);
  router.post('/forgot', postForgot);
  router.get('/reset/:token', getReset);
  router.post('/reset/:token', postReset);
  router.get('/email-signup', getEmailSignup);
  router.get('/email-signin', getEmailSignin);
  router.post('/email-signup', postEmailSignup);
  router.post('/email-signin', postSignin);
  router.get('/account', getAccount);
  router.post('/account/profile', postUpdateProfile);
  router.post('/account/password', postUpdatePassword);
  router.post('/account/delete', postDeleteAccount);
  router.get('/account/unlink/:provider', getOauthUnlink);
  router.get('/:username', returnUser);
  router.get('/api/checkUniqueUsername/:username', checkUniqueUsername);
  router.get('/api/checkExistingUsername/:username', checkExistingUsername);
  router.get('/api/checkUniqueEmail/:email', checkUniqueEmail);
  router.get('/account/api', getAccountAngular);
  // router.post('/update-progress', passport.isAuthenticated, updateProgress);

  function getSignin(req, res) {
    if (req.user) { return res.redirect('/'); }
    res.render('account/signin', {
      title: 'Free Code Camp Login'
    });
  }

  /**
   * POST /signin
   * Sign in using email and password.
   */

  function postSignin(req, res, next) {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('password', 'Password cannot be blank').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/signin');
    }

    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) {
        req.flash('errors', { msg: info.message });
        return res.redirect('/signin');
      }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        req.flash('success', { msg: 'Success! You are logged in.' });
        res.redirect(req.session.returnTo || '/');
      });
    })(req, res, next);
  }

  function signout(req, res) {
    req.logout();
    res.redirect('/');
  }

  function getEmailSignin(req, res) {
    if (req.user) { return res.redirect('/'); }
    res.render('account/email-signin', {
      title: 'Sign in to your Free Code Camp Account'
    });
  }

  function getEmailSignup(req, res) {
    if (req.user) { return res.redirect('/'); }
    res.render('account/email-signup', {
      title: 'Create Your Free Code Camp Account'
    });
  }

  function postEmailSignup(req, res, next) {
    var errors = req.validationErrors();

    if (errors) {
      req.flash('errors', errors);
      debug(errors);
      return res.redirect('/email-signup');
    }

    var user = new User({
      email: req.body.email.trim(),
      password: req.body.password,
      profile: {
        username: req.body.username.trim()
      }
    });

    var userQuery = {
      where: { 'email': req.body.email },
      limit: 1
    };
    User.find(
      userQuery,
      function(err, users) {
        if (err) { return next(err); }

        if (users && users.length > 0) {
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
            'Feel free to email us at this address if you',
            'have any questions about Free Code Camp.\n',
            'And if you have a moment, check out our blog:',
            'blog.freecodecamp.com.\n',
            'Good luck with the challenges!\n\n',
            '- the Volunteer Camp Counselor Team'
          ].join('')
        };
        transporter.sendMail(mailOptions, function(err) {
          if (err) { return err; }
        });
      }
    );
  }

  /**
   * For Calendar display
   */

  function getAccount(req, res) {
      res.render('account/account', {
        title: 'Manage your Free Code Camp Account'
      });
  }

  function getAccountAngular(req, res) {
    res.json({
      user: req.user
    });
  }

  function checkUniqueUsername(req, res, next) {
    User.count(
      { 'profile.username': req.params.username.toLowerCase() },
      function(err, data) {
        if (err) { return next(err); }
        if (data === 1) {
          return res.send(true);
        }
        return res.send(false);
      }
    );
  }

  function checkExistingUsername(req, res, next) {
    User.count(
      { 'profile.username': req.params.username.toLowerCase() },
      function (err, data) {
        if (err) { return next(err); }
        if (data === 1) {
          return res.send(true);
        }
        return res.send(false);
      }
    );
  }

  function checkUniqueEmail(req, res, next) {
    User.count(
      {'email': decodeURIComponent(req.params.email).toLowerCase()},
      function (err, data) {
        if (err) { return next(err); }
        if (data === 1) {
          return res.send(true);
        }
        return res.send(false);
      }
    );
  }

  function returnUser(req, res, next) {
    debug('username', req.params.username);
    User.find(
      { where: { 'username': req.params.username.toLowerCase() } },
      function(err, users) {
      if (err) {
        debug('Username err: ', err);
        next(err);
      }
      if (users[0]) {
        var user = users[0];
        debug('user object from mongo', user);
        var data = {};
        var progressTimestamps = user.progressTimestamps;
        var portfolio = user.portfolio || {};
        var profile = user.profile || {};
        // dummy data to experiment with visualizations
        progressTimestamps = [1417117319, 1384091493, 1367893914, 1411547157, 1366875140, 1382614404, 1374973026, 1363495510, 1372229313, 1389795294, 1393820136, 1395425437, 1383366211, 1402063449, 1368384561, 1413460738, 1390013511, 1408510076, 1395530419, 1391588683, 1410480320, 1360219531, 1367248635, 1408531181, 1374214772, 1424038529, 1387468139, 1381934158, 1409278748, 1390696161, 1415933043, 1389573689, 1395703336, 1401223291, 1375539279, 1371229698, 1371990948, 1422236826, 1363017438, 1359619855, 1364850739, 1401982108, 1381270295, 1420063854, 1406540493, 1409122251, 1360775035, 1367712723, 1395305605, 1382037418, 1378402477, 1377563090, 1398930836, 1417371909, 1377417393, 1423763002, 1357511908, 1377375961, 1388374304, 1406416407, 1399463258, 1422593990, 1383434425, 1420200570, 1379435518, 1414512582, 1416263148, 1398635260, 1381815565, 1369178539, 1378414973, 1394409827, 1398463526, 1379564971, 1385849279, 1392899666, 1367053659, 1417730793, 1400112915, 1379923357, 1417768487, 1415779985, 1416150640, 1399820237, 1370498715, 1374800622, 1363924512, 1402497668, 1400146327, 1362456746, 1394935898, 1414980963, 1413942775, 1367606840, 1387144705, 1407906392, 1417213587, 1422640891, 1414033139, 1365323522, 1424661148];
        for (var i = 0; i < progressTimestamps.length; i++) {
          data[progressTimestamps[i].toString()] = 1;
        }

        debug('Username is', user.username);
        res.render('account/show', {
          title: 'Camper: ',
          username: user.username,
          name: user.name,
          location: profile.location,
          githubProfile: user.githubProfile,
          linkedinProfile: user.linkedinProfile,
          codepenProfile: user.codepenProfile,
          twitterHandle: user.twitterHandle,
          bio: user.bio,
          picture: user.profiles[0].profile.photos[0].value,
          progressTimestamps: user.progressTimestamps,
          points: user.progressTimestamps,
          website1Link: user.website1Link,
          website1Title: user.website1Title,
          website1Image: user.website1Image,
          website2Link: user.website2Link,
          website2Title: user.website2Title,
          website2Image: user.website2Image,
          website3Link: user.website3Link,
          website3Title: user.website3Title,
          website3Image: user.website3Image,
          calender: data,
          moment: moment
        });
      } else {
        req.flash('errors', {
          msg: '404: We could not find a page with that URL. ' +
            'Please double check the link.'
        });
        return res.redirect('/');
      }
    });
  }


  /**
   * POST /update-progress
   * Update profile information.
   */

  function updateProgress(req, res, next) {
    User.findById(req.user.id, function(err, user) {
      if (err) { return next(err); }
      user.email = req.body.email || '';
      user.name = req.body.name || '';
      user.gender = req.body.gender || '';
      user.location = req.body.location || '';
      //TODO is this vestigial?
      //user.profile.website = req.body.website || '';

      user.save(function(err) {
        if (err) { return next(err); }
        req.flash('success', { msg: 'Profile information updated.' });
        res.redirect('/account');
      });
    });
  }

  /**
   * POST /account/profile
   * Update profile information.
   */

  function postUpdateProfile(req, res, next) {
    User.findById(req.user.id, function(err, user) {
      if (err) { return next(err); }
      var errors = req.validationErrors();
      if (errors) {
        req.flash('errors', errors);
        return res.redirect('/account');
      }

      user.email = req.body.email.trim() || '';
      user.name = req.body.name.trim() || '';
      user.username = req.body.username.trim() || '';
      user.location = req.body.location.trim() || '';
      user.githubProfile = req.body.githubProfile.trim() || '';
      user.linkedinProfile = req.body.linkedinProfile.trim() || '';
      user.codepenProfile = req.body.codepenProfile.trim() || '';
      user.twitterHandle = req.body.twitterHandle.trim() || '';
      user.bio = req.body.bio.trim() || '';
      user.picture = req.body.picture.trim() || '';
      user.website1Title = req.body.website1Title.trim() || '';
      user.website1Link = req.body.website1Link.trim() || '';
      user.website1Image = req.body.website1Image.trim() || '';
      user.website2Title = req.body.website2Title.trim() || '';
      user.website2Link = req.body.website2Link.trim() || '';
      user.website2Image = req.body.website2Image.trim() || '';
      user.website3Title = req.body.website3Title.trim() || '';
      user.website3Link = req.body.website3Link.trim() || '';
      user.website3Image = req.body.website3Image.trim() || '';


      user.save(function (err) {
        if (err) { return next(err); }
        req.flash('success', {msg: 'Profile information updated.'});
        res.redirect('/account');
      });
    });

  }

  /**
   * POST /account/password
   * Update current password.
   */

  function postUpdatePassword(req, res, next) {
    req.assert('password', 'Password must be at least 4 characters long')
      .len(4);
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
  }

  /**
   * POST /account/delete
   * Delete user account.
   */

  function postDeleteAccount(req, res, next) {
    UserIdentity.remove({where: { userId: req.user._id}}, function(err) {
      if (err) {
        return next(err);
      }
        User.remove({ where: { id: req.user._id } }, function(err) {
          if (err) { return next(err); }
          req.logout();
          req.flash('info', { msg: 'Your account has been deleted.' });
          res.redirect('/');
        });
    });

  }

  /**
   * GET /account/unlink/:provider
   * Unlink OAuth provider.
   */

  function getOauthUnlink(req, res, next) {
    var provider = req.params.provider;
    User.findById(req.user.id, function(err, user) {
      if (err) { return next(err); }

      user[provider] = null;
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
  }

  /**
   * GET /reset/:token
   * Reset Password page.
   */

  function getReset(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/');
    }
    var userQuery = {
      where: {
        'resetPasswordToken': req.params.token,
        'resetPasswordExpires': { gt: Date.now() }
      }
    };
    User.find(userQuery, function(err, user) {
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
  }

  /**
   * POST /reset/:token
   * Process the reset password request.
   */

  function postReset(req, res, next) {
    var errors = req.validationErrors();

    if (errors) {
      req.flash('errors', errors);
      return res.redirect('back');
    }

    var userQuery = {
      where: {
        'resetPasswordToken': req.params.token,
        'resetPasswordExpires': { gt: Date.now() }
      },
      limit: 1
    };

    async.waterfall([
      function(done) {
        User.find(userQuery, function(err, user) {
            if (err) { return next(err); }
            if (!user) {
              req.flash('errors', {
                msg: 'Password reset token is invalid or has expired.'
              });
              return res.redirect('back');
            }

            user.password = req.body.password;
            user.resetPasswordToken = null;
            user.resetPasswordExpires = null;

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
  }

  /**
   * GET /forgot
   * Forgot Password page.
   */

  function getForgot(req, res) {
    if (req.isAuthenticated()) {
      return res.redirect('/');
    }
    res.render('account/forgot', {
      title: 'Forgot Password'
    });
  }

  /**
   * POST /forgot
   * Create a random token, then the send user an email with a reset link.
   */

  function postForgot(req, res, next) {
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
        User.find({ where: { 'email': req.body.email.toLowerCase() } }, function(err, user) {
          if (err) { return done(err); }
          if (!user) {
            req.flash('errors', {
              msg: 'No account with that email address exists.'
            });
            return res.redirect('/forgot');
          }

          user.resetPasswordToken = token;
          user.resetPasswordExpires = moment().add(1, 'h').unix();

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
  }
  app.use(router);
};
