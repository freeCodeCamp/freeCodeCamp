var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    GitHubStrategy = require('passport-github').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    User = require('../models/User'),
    config = require('./config.json');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({ username: username }, function(err, user) {
    if (err) return done(err);
    if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
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

// FACEBOOK OAUTH2 LOGIN
passport.use(new FacebookStrategy({
    clientID: config.facebook.clientId,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackUrl || "http://localhost:8000/auth/facebook/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOne({ facebook: profile.id }, function(err, existingUser) {
      if (err) done(err);

      if (existingUser) return done(null, existingUser);

      var user = new User({
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        provider: profile.provider,
        email: profile._json.email
      });

      user[profile.provider] = profile.id;

      user.save(function(err) {
        if (err) console.log(err);
        done(null, user);
      });
    });
  }
));

// GITHUB OAUTH2 LOGIN
passport.use(new GitHubStrategy({
    clientID: config.github.clientId,
    clientSecret: config.github.clientSecret,
    callbackURL: config.github.callbackUrl
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ github: profile.id }, function(err, existingUser) {
      if (err) done(err);
      if (existingUser) return done(null, existingUser);
      console.log(profile);
      var user = new User({
        username: profile.username,
        displayName: profile.displayName,
        email: profile.emails[0].value,
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

// TWITTER OAUTH2 LOGIN
passport.use(new TwitterStrategy({
    consumerKey: config.twitter.clientId,
    consumerSecret: config.twitter.clientSecret,
    callbackURL: '/auth/twitter/callback'
  },
  function(token, tokenSecret, profile, done) {
    User.findOne({ twitter: profile.id }, function(err, existingUser) {
      if (err) done(err);
      if (existingUser) return done(null, existingUser);
      console.log(profile);
      var user = new User({
        username: profile.username,
        displayName: profile.displayName,
        photo: profile.photos[0].value,
        provider: profile.provider,
      });
      user[profile.provider] = profile.id;
      user.save(function(err) {
        if (err) console.log(err);
        done(null, user);
      });
    });
  }
));

// GOOGLE OAUTH2 LOGIN
passport.use(new GoogleStrategy({
    clientID: config.google.clientId,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackUrl
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ google: profile.id }, function(err, existingUser) {
      if (err) done(err);

      if (existingUser) {
        return done(null, existingUser);
      }
      console.log(profile);
      var user = new User({
        google: profile.id
      });
      user.tokens.google = accessToken;
      user.profile.name = profile.displayName;
      user.profile.email = profile._json.email;
      user.profile.gender = profile._json.gender;
      user.profile.picture = profile._json.picture;

      user.save(function(err) {
        done(err, user);
      });
    });
  }
));

// Simple route middleware to ensure user is authenticated.  Otherwise send to login page.
exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
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
