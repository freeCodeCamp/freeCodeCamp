var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var OAuthStrategy = require('passport-oauth').OAuthStrategy;
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GitHubStrategy = require('passport-github').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');
var config = require('./config');

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
    if (!user) return done(null, false, { message: 'No match found for user: ' + username });
    user.comparePassword(password, function(err, isMatch) {
      if(isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Your username or password is incorrect' });
      }
    });
  });
}));

passport.use(new FacebookStrategy(config.facebook, function (accessToken, refreshToken, profile, done) {
  User.findOne({ facebook: profile.id }, function(err, existingUser) {
    if (existingUser) return done(null, existingUser);
    var user = new User();
    user.facebook = profile.id;
    user.tokens.push({ kind: 'facebook', token: accessToken });
    user.profile.name = profile.displayName;
    user.profile.email = profile._json.email;
    user.profile.gender = profile._json.gender;
    user.profile.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=normal';
    user.save(function(err) {
      done(err, user);
    });
  });
}));

passport.use(new GitHubStrategy(config.github, function(accessToken, refreshToken, profile, done) {
  User.findOne({ github: profile.id }, function(err, existingUser) {
    if (existingUser) return done(null, existingUser);
    var user = new User();
    user.github = profile.id;
    user.tokens.push({ kind: 'github', token: accessToken });
    user.profile.name = profile.displayName;
    user.profile.email = profile._json.email;
    user.profile.picture = profile._json.avatar_url;
    user.profile.location = profile._json.location;
    user.profile.website = profile._json.blog;
    user.save(function(err) {
      done(err, user);
    });
  });
}));

passport.use(new TwitterStrategy(config.twitter, function(accessToken, tokenSecret, profile, done) {
  User.findOne({ twitter: profile.id }, function(err, existingUser) {
    if (existingUser) return done(null, existingUser);
    var user = new User();
    user.twitter = profile.id;
    user.tokens.push({ kind: 'twitter', token: accessToken });
    user.profile.name = profile.displayName;
    user.profile.location = profile._json.location;
    user.profile.picture = profile._json.profile_image_url;
    user.save(function(err) {
      done(err, user);
    });
  });
}));

passport.use(new GoogleStrategy(config.google, function(accessToken, refreshToken, profile, done) {
  User.findOne({ google: profile.id }, function(err, existingUser) {
    if (existingUser) return done(null, existingUser);
    var user = new User();
    user.google = profile.id;
    user.tokens.push({ kind: 'google', token: accessToken });
    user.profile.name = profile.displayName;
    user.profile.email = profile._json.email;
    user.profile.gender = profile._json.gender;
    user.profile.picture = profile._json.picture;
    user.save(function(err) {
      done(err, user);
    });
  });
}));

passport.use('tumblr', new OAuthStrategy({
    requestTokenURL: 'http://www.tumblr.com/oauth/request_token',
    accessTokenURL: 'http://www.tumblr.com/oauth/access_token',
    userAuthorizationURL: 'http://www.tumblr.com/oauth/authorize',
    consumerKey: config.tumblr.consumerKey,
    consumerSecret: config.tumblr.consumerSecret,
    callbackURL: config.tumblr.callbackURL,
    passReqToCallback: true
  },
  function (req, token, tokenSecret, profile, done) {
    User.findById(req.user._id, function(err, user) {
      user.tokens.push({ kind: 'tumblr', token: token, tokenSecret: tokenSecret });
      user.save(function(err) {
        done(err, user);
      });
    });
  }
));

passport.use('foursquare', new OAuth2Strategy({
    authorizationURL: 'https://foursquare.com/oauth2/authorize',
    tokenURL: 'https://foursquare.com/oauth2/access_token',
    clientID: config.foursquare.clientId,
    clientSecret: config.foursquare.clientSecret,
    callbackURL: config.foursquare.redirectUrl,
    passReqToCallback: true
  },
  function (req, accessToken, refreshToken, profile, done) {
    User.findById(req.user._id, function(err, user) {
      user.tokens.push({ kind: 'foursquare', token: accessToken });
      user.save(function(err) {
        done(err, user);
      });
    });
  }
));

exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};