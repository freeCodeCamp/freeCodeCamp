var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    User = require('../models/User'),
    config = require('./config.json');

// TODO: Request email permission from Oauth
// TODO: if email matches, users are the same, merge accounts

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(email, password, done) {
  User.findOne({ email: email }, function(err, user) {
    if (err) return done(err);
    if (!user) { return done(null, false, { message: 'Unknown user ' + email }); }
    user.comparePassword(password, function(err, isMatch) {
      if (err) return done(err);
      if(isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid password' });
      }
    });
  });
}));

passport.use(new FacebookStrategy({
    clientID: config.facebook.clientId,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackUrl || "http://localhost:8000/auth/facebook/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOne({ facebook: profile.id }, function(err, existingUser) {

      if (err) {
        done(err);
      }

      if (existingUser) {
        return done(null, existingUser);
      }

      var user = new User({
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        provider: profile.provider
      });

      user[profile.provider] = profile.id;

      user.save(function(err) {
        if (err) console.log(err);
        done(null, user);
      });

    });

  }
));

// Simple route middleware to ensure user is authenticated.  Otherwise send to login page.
exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
};


// Check for admin middleware, this is unrelated to passport.js
// You can delete this if you use different method to check for admins or don't need admins
exports.ensureAdmin = function ensureAdmin(req, res, next) {
  return function(req, res, next) {
    console.log(req.user);
    if(req.user && req.user.admin === true)
      next();
    else
      res.send(403);
  };
};