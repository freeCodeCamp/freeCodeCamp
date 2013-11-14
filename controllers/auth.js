var passport =  require('passport'),
    User = require('../models/User'),
    crypto = require('crypto'),
    LocalStrategy = require('passport-local').Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    GoogleStrategy = require('passport-google').Strategy,
    LinkedInStrategy = require('passport-linkedin').Strategy,
    userRoles = require('../../client/js/routingConfig').userRoles;


function findByUsername(username, callback) {
  User.findOne({ username: username }, function(err, user) {
    if (user) callback(err, user);
  });
}

function findOrCreateOauthUser(provider, providerId, callback) {
  User.findOne({ $where: provider + '===' + providerId }, function(err, user) {
    if (user) return user;
    user = {
      username: provider + '_user',
      role: userRoles.user,
      provider: provider
    };
    user[provider] = providerId;
    user.save(function(err) {
      callback(err, user);
    });
  });
}

function findAll(callback) {
  User.find(function(err, users) {
    callback(err, users);
  });
}

function findById(id, callback) {
  User.findById(id, function(err, user) {
    if (user) callback(err, user);
  });
}


module.exports = {

  register: function(req, res, next) {
    findByUsername(req.body.username, function(err, user) {
      if (user) return res.send(403, 'User already exists');

      user = new User({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
      });

      user.save(function(err) {
        req.logIn(user, function(err) {
          if (err) next(err);
          else res.send(200, { role: user.role, username: user.username });
        });
      });

    });
  },

  login: function(req, res, next) {
    passport.authenticate('local', function(err, user) {
      if (err) return next(err);
      if (!user) return res.send(400);
      req.logIn(user, function(err) {
        if (err) return next(err);
        if (req.body.rememberme) req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 7;
        res.json(200, { role: user.role, username: user.username });
      });
    })(req, res, next);
  },

  logout: function(req, res) {
    req.logout();
    res.send(200);
  },








  localStrategy: new LocalStrategy(function(username, password, done) {
    findByUsername(username, function(err, user) {
      if (!user) {
        done(null, false, { message: 'Username does not exist' });
      } else if (user.password !== password) {
        done(null, false, { message: 'Incorrect password' });
      } else {
        return done(null, user);
      }
    });
  }),

  twitterStrategy: function() {
    if (!process.env.TWITTER_CONSUMER_KEY) throw new Error('A Twitter Consumer Key is required if you want to enable login via Twitter.');
    if (!process.env.TWITTER_CONSUMER_SECRET) throw new Error('A Twitter Consumer Secret is required if you want to enable login via Twitter.');

    return new TwitterStrategy({
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: process.env.TWITTER_CALLBACK_URL || 'http://localhost:8000/auth/twitter/callback'
    },
    function(token, tokenSecret, profile, done) {
      findOrCreateOauthUser(profile.provider, profile.id, function(err, user) {
        done(err, user);
      });
    });
  },

  facebookStrategy: function() {
    if (!process.env.FACEBOOK_APP_ID) throw new Error('A Facebook App ID is required if you want to enable login via Facebook.');
    if (!process.env.FACEBOOK_APP_SECRET) throw new Error('A Facebook App Secret is required if you want to enable login via Facebook.');

    return new FacebookStrategy({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL || "http://localhost:8000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      findOrCreateOauthUser(profile.provider, profile.id, function(err, user) {
        done(err, user);
      });
    });
  },

  googleStrategy: function() {

    return new GoogleStrategy({
      returnURL: process.env.GOOGLE_RETURN_URL || "http://localhost:8000/auth/google/return",
      realm: process.env.GOOGLE_REALM || "http://localhost:8000/"
    },
    function(identifier, profile, done) {
      findOrCreateOauthUser('google', identifier, function(err, user) {
        done(err, user);
      });
    });
  },

  linkedInStrategy: function() {
    if (!process.env.LINKED_IN_KEY) throw new Error('A LinkedIn App Key is required if you want to enable login via LinkedIn.');
    if (!process.env.LINKED_IN_SECRET) throw new Error('A LinkedIn App Secret is required if you want to enable login via LinkedIn.');

    return new LinkedInStrategy({
      consumerKey: process.env.LINKED_IN_KEY,
      consumerSecret: process.env.LINKED_IN_SECRET,
      callbackURL: process.env.LINKED_IN_CALLBACK_URL || "http://localhost:8000/auth/linkedin/callback"
    },
    function(token, tokenSecret, profile, done) {
      findOrCreateOauthUser('linkedin', profile.id, function(err, user) {
        done(err, user);
      });
    });
  },

  serializeUser: function(user, done) {
    done(null, user.id);
  },

  deserializeUser: function(id, done) {
    findById(id, function(err, user) {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }

};