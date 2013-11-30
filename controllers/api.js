var async = require('async');
var geoip = require('geoip-lite');
var config = require('../config/config.json');
var FB = require('fb');
var Tumblr = require('tumblrwks');
var foursquare = require('node-foursquare')({
  secrets: {
    clientId: config.foursquare.clientId,
    clientSecret: config.foursquare.clientSecret,
    redirectUrl: config.foursquare.callbackUrl
  }
});

var User = require('../models/User');

exports.apiBrowser = function(req, res) {
  console.log(req.user);
  res.render('api', {
    title: 'API Browser',
    user: req.user
  });
};

// TODO: require foursquare auth when clicking on foursquare url
// being logged in is not enough

exports.foursquare = function(req, res) {
  async.parallel({
    trendingVenues: function(callback) {
      var geo = geoip.lookup('4.17.136.0');
      var latitude = geo.ll[0];
      var longitude = geo.ll[1];
      foursquare.Venues.getTrending(latitude, longitude, { limit: 10 }, req.user.tokens.foursquare, function(err, results) {
        callback(err, results);
      });
    },
    venueDetail: function(callback) {
      foursquare.Venues.getVenue('40a55d80f964a52020f31ee3', req.user.tokens.foursquare, function(err, results) {
        callback(err, results);
      });
    },
    userCheckins: function(callback) {
      foursquare.Users.getCheckins('self', null, req.user.tokens.foursquare, function(err, results) {
        callback(err, results);
      });
    }
  }, function(err, results) {
    if (err) {
      req.flash('info', err);
    }
    res.render('api/foursquare', {
      title: 'Foursquare API',
      message: req.flash('info'),
      user: req.user,
      trendingVenues: results.trendingVenues,
      venueDetail: results.venueDetail,
      userCheckins: results.userCheckins
    });
  });
};

exports.tumblr = function(req, res) {
  res.render('api/tumblr', {
    title: 'Tumblr API',
    user: req.user
  });
};

exports.facebook = function(req, res) {
  res.render('api/facebook', {
    title: 'Facebook API',
    user: req.user
  });
};


/**
 * GET /auth/foursquare
 * Display Foursquare authentication screen
 */
exports.foursquareAuth = function(req, res) {
  res.writeHead(303, { location: foursquare.getAuthClientRedirectUrl() });
  res.end();
};

/**
 * GET /auth/foursquare/callback
 * Called when user presses Accept on the Foursquare authentication screen
 */
exports.foursquareCallback = function(req, res) {
  foursquare.getAccessToken({ code: req.query.code }, function(err, accessToken) {
    User.findByIdAndUpdate(req.user._id, { $set: { tokens: { foursquare: accessToken } } }, null, function(err, user) {
      if (err) throw err;
      res.redirect('/api/foursquare');
    });
  });
};

