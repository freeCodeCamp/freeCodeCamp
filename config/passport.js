var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var OAuthStrategy = require('passport-oauth').OAuthStrategy;
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GitHubStrategy = require('passport-github').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');
var secrets = require('./secrets');
var _ = require('underscore');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
  User.findOne({ email: email }, function(err, user) {
    if (!user) return done(null, false, { message: 'Email ' + email + ' not found'});
    user.comparePassword(password, function(err, isMatch) {
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid email or password.' });
      }
    });
  });
}));

/**
 * Sign in with Facebook.
 *
 * Possible authentication states:
 *
 * 1. User is logged in.
 *   a. Already signed in with Facebook before. (MERGE ACCOUNTS, EXISTING ACCOUNT HAS PRECEDENCE)
 *   b. First time signing in with Facebook. (ADD FACEBOOK ID TO EXISTING USER)
 * 2. User is not logged in.
 *   a. Already signed with Facebook before. (LOGIN)
 *   b. First time signing in with Facebook. (CREATE ACCOUNT)
 */

passport.use(new FacebookStrategy(secrets.facebook, function (req, accessToken, refreshToken, profile, done) {
  if (req.user) {
    User.findOne({ $or: [{ facebook: profile.id }, { email: profile.email }] }, function(err, existingUser) {
      if (existingUser) {
        console.log(existingUser.facebook)
        console.log(req.user.facebook)
        console.log(existingUser.google)
        console.log(req.user.google)
        existingUser.facebook = existingUser.facebook || req.user.facebook;
        existingUser.google = existingUser.google || req.user.google;
        existingUser.github = existingUser.github || req.user.github;
        existingUser.twitter = existingUser.twitter || req.user.twitter;
        existingUser.email = existingUser.email || req.user.email;
        existingUser.password = existingUser.password || req.user.password;
        existingUser.profile = existingUser.profile || req.user.profile;
        existingUser.tokens = _.union(existingUser.tokens, req.user.tokens);
        existingUser.save(function(err) {
          User.remove({ _id: req.user.id }, function(err) {
            req.flash('info', { msg: 'Your accounts have been merged' });
            return done(err, existingUser);
          });
        });
      } else {
        User.findById(req.user.id, function(err, user) {
          user.facebook = profile.id;
          user.tokens.push({ kind: 'facebook', accessToken: accessToken });
          user.profile.name = user.profile.name || profile.displayName;
          user.profile.gender = user.profile.gender || profile._json.gender;
          user.profile.picture = user.profile.picture || 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
          user.save(function(err) {
            done(err, user);
          });
        });
      }
    });
  } else {
    User.findOne({ facebook: profile.id }, function(err, existingUser) {
      console.log(profile)
      if (existingUser) return done(null, existingUser);
      var user = new User();
      user.email = profile._json.email;
      user.facebook = profile.id;
      user.tokens.push({ kind: 'facebook', accessToken: accessToken });
      user.profile.name = profile.displayName;
      user.profile.gender = profile._json.gender;
      user.profile.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
      user.save(function(err) {
        done(err, user);
      });
    });
  }
}));

/**
 * Sign in with GitHub.
 *
 * Possible authentication states:
 *
 * 1. User is logged in.
 *   a. Already signed in with GitHub before. (MERGE ACCOUNTS, EXISTING ACCOUNT HAS PRECEDENCE)
 *   b. First time signing in with GitHub. (ADD GITHUB ID TO EXISTING USER)
 * 2. User is not logged in.
 *   a. Already signed with GitHub before. (LOGIN)
 *   b. First time signing in with GitHub. (CREATE ACCOUNT)
 */

passport.use(new GitHubStrategy(secrets.github, function(req, accessToken, refreshToken, profile, done) {
  if (req.user) {
    User.findOne({ $or: [{ github: profile.id }, { email: profile.email }] }, function(err, existingUser) {
      if (existingUser) {
        existingUser.facebook = existingUser.facebook || req.user.facebook;
        existingUser.google = existingUser.google || req.user.google;
        existingUser.github = existingUser.github || req.user.github;
        existingUser.twitter = existingUser.twitter || req.user.twitter;
        existingUser.email = existingUser.email || req.user.email;
        existingUser.password = existingUser.password || req.user.password;
        existingUser.profile = existingUser.profile || req.user.profile;
        existingUser.tokens = _.union(existingUser.tokens, req.user.tokens);
        existingUser.save(function(err) {
          User.remove({ _id: req.user.id }, function(err) {
            req.flash('info', { msg: 'Your accounts have been merged' });
            return done(err, existingUser);
          });
        });
      } else {
        User.findById(req.user.id, function(err, user) {
          user.github = profile.id;
          user.tokens.push({ kind: 'github', accessToken: accessToken });
          user.profile.name = user.profile.name || profile.displayName;
          user.profile.picture = user.profile.picture || profile._json.avatar_url;
          user.profile.location = user.profile.location || profile._json.location;
          user.profile.website = user.profile.website || profile._json.blog;
          user.save(function(err) {
            done(err, user);
          });
        });
      }
    });
  } else {
    User.findOne({ github: profile.id }, function(err, existingUser) {
      if (existingUser) return done(null, existingUser);
      var user = new User();
      user.email = profile._json.email;
      user.github = profile.id;
      user.tokens.push({ kind: 'github', accessToken: accessToken });
      user.profile.name = profile.displayName;
      user.profile.picture = profile._json.avatar_url;
      user.profile.location = profile._json.location;
      user.profile.website = profile._json.blog;
      user.save(function(err) {
        done(err, user);
      });
    });
  }
}));

/**
 * Sign in with Twitter.
 *
 * Possible authentication states:
 *
 * 1. User is logged in.
 *   a. Already signed in with Twitter before. (MERGE ACCOUNTS, EXISTING ACCOUNT HAS PRECEDENCE)
 *   b. First time signing in with Twitter. (ADD TWITTER ID TO EXISTING USER)
 * 2. User is not logged in.
 *   a. Already signed with Twitter before. (LOGIN)
 *   b. First time signing in with Twitter. (CREATE ACCOUNT)
 */

passport.use(new TwitterStrategy(secrets.twitter, function(req, accessToken, tokenSecret, profile, done) {
  if (req.user) {
    User.findOne({ twitter: profile.id }, function(err, existingUser) {
      if (existingUser) {
        existingUser.facebook = existingUser.facebook || req.user.facebook;
        existingUser.google = existingUser.google || req.user.google;
        existingUser.twitter = existingUser.twitter || req.user.twitter;
        existingUser.github = existingUser.github || req.user.github;
        existingUser.email = req.user.email;
        existingUser.password = existingUser.password || req.user.password;
        existingUser.profile = existingUser.profile || req.user.profile;
        existingUser.tokens = _.union(existingUser.tokens, req.user.tokens);
        existingUser.save(function(err) {
          console.log(existingUser);
          console.log(req.user.google)
          User.remove({ _id: req.user.id }, function(err) {
            req.flash('info', { msg: 'Your accounts have been merged' });
            return done(err, existingUser);
          });
        });
      } else {
        User.findById(req.user.id, function(err, user) {
          user.twitter = profile.id;
          user.tokens.push({ kind: 'twitter', accessToken: accessToken, tokenSecret: tokenSecret });
          user.profile.name = user.profile.name || profile.displayName;
          user.profile.location = user.profile.location || profile._json.location;
          user.profile.picture = user.profile.picture || profile._json.profile_image_url;
          user.save(function(err) {
            done(err, user);
          });
        });
      }
    });

  } else {
    User.findOne({ twitter: profile.id }, function(err, existingUser) {
      if (existingUser) return done(null, existingUser);
      var user = new User();
      user.email = profile.displayName;
      user.twitter = profile.id;
      user.tokens.push({ kind: 'twitter', accessToken: accessToken, tokenSecret: tokenSecret });
      user.profile.name = profile.displayName;
      user.profile.location = profile._json.location;
      user.profile.picture = profile._json.profile_image_url;
      user.save(function(err) {
        done(err, user);
      });
    });
  }
}));

/**
 * Sign in with Google.
 *
 * Possible authentication states:
 *
 * 1. User is logged in.
 *   a. Already signed in with Google before. (MERGE ACCOUNTS, EXISTING ACCOUNT HAS PRECEDENCE)
 *   b. First time signing in with Google. (ADD GOOGLE ID TO EXISTING USER)
 * 2. User is not logged in.
 *   a. Already signed with GitHub before. (LOGIN)
 *   b. First time signing in with Google. (CREATE ACCOUNT)
 */

passport.use(new GoogleStrategy(secrets.google, function(req, accessToken, refreshToken, profile, done) {
  if (req.user) {
    User.findOne({ $or: [{ google: profile.id }, { email: profile.email }] }, function(err, existingUser) {
      if (existingUser) {
        req.flash('errors', { msg: 'There is already a Google account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
        done(err);
      } else {
        User.findById(req.user.id, function(err, user) {
          user.google = profile.id;
          user.tokens.push({ kind: 'google', accessToken: accessToken });
          user.profile.name = user.profile.name || profile.displayName;
          user.profile.gender = user.profile.gender || profile._json.gender;
          user.profile.picture = user.profile.picture || profile._json.picture;
          user.save(function(err) {
            req.flash('info', { msg: 'Google account has been linked.' });
            done(err, user);
          });
        });
      }
    });
  } else {
    User.findOne({ google: profile.id }, function(err, existingUser) {
      if (existingUser) return done(null, existingUser);
      var user = new User();
      user.email = profile._json.email;
      user.google = profile.id;
      user.tokens.push({ kind: 'google', accessToken: accessToken });
      user.profile.name = profile.displayName;
      user.profile.gender = profile._json.gender;
      user.profile.picture = profile._json.picture;
      user.save(function(err) {
        done(err, user);
      });
    });
  }
}));

passport.use('tumblr', new OAuthStrategy({
    requestTokenURL: 'http://www.tumblr.com/oauth/request_token',
    accessTokenURL: 'http://www.tumblr.com/oauth/access_token',
    userAuthorizationURL: 'http://www.tumblr.com/oauth/authorize',
    consumerKey: secrets.tumblr.consumerKey,
    consumerSecret: secrets.tumblr.consumerSecret,
    callbackURL: secrets.tumblr.callbackURL,
    passReqToCallback: true
  },
  function (req, token, tokenSecret, profile, done) {
    User.findById(req.user._id, function(err, user) {
      user.tokens.push({ kind: 'tumblr', accessToken: token, tokenSecret: tokenSecret });
      user.save(function(err) {
        done(err, user);
      });
    });
  }
));

passport.use('foursquare', new OAuth2Strategy({
    authorizationURL: 'https://foursquare.com/oauth2/authorize',
    tokenURL: 'https://foursquare.com/oauth2/access_token',
    clientID: secrets.foursquare.clientId,
    clientSecret: secrets.foursquare.clientSecret,
    callbackURL: secrets.foursquare.redirectUrl,
    passReqToCallback: true
  },
  function (req, accessToken, refreshToken, profile, done) {
    User.findById(req.user._id, function(err, user) {
      user.tokens.push({ kind: 'foursquare', accessToken: accessToken });
      user.save(function(err) {
        done(err, user);
      });
    });
  }
));

exports.isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};

exports.isAuthorized = function(req, res, next) {
  var provider = req.path.split('/').slice(-1)[0];
  if (_.findWhere(req.user.tokens, { kind: provider })) next();
  else res.redirect('/auth/' + provider);
};
