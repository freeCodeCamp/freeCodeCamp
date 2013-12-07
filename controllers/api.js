var config = require('../config/config');
var User = require('../models/User');
var async = require('async');
var geoip = require('geoip-lite');
var FB = require('fb');
var tumblr = require('tumblr.js');
var foursquare = require('node-foursquare')({ secrets: config.foursquare });


/**
 * GET /api
 */
exports.getApi = function(req, res) {
  res.render('api', {
    title: 'API Browser',
    user: req.user
  });
};

/**
 * GET /api/foursquare
 */
exports.getFoursquare = function(req, res) {
  if (!req.user.tokens.foursquare) {
    return res.render('api/unauthorized', {
      title: 'Foursquare API',
      provider: 'Foursquare',
      user: req.user
    });
  }

  async.parallel({
    trendingVenues: function(callback) {
      var geo = geoip.lookup('4.17.136.0');
      var lat = geo.ll[0];
      var lon = geo.ll[1];
      foursquare.Venues.getTrending(lat, lon, { limit: 50 }, req.user.tokens.foursquare, function(err, results) {
        callback(err, results);
      });
    },
    venueDetail: function(callback) {
      foursquare.Venues.getVenue('49da74aef964a5208b5e1fe3', req.user.tokens.foursquare, function(err, results) {
        callback(err, results);
      });
    },
    userCheckins: function(callback) {
      console.log('I AM RUNNING');
      foursquare.Users.getCheckins('self', null, req.user.tokens.foursquare, function(err, results) {
        callback(err, results);
      });
    }
  },
  function(err, results) {
    res.render('api/foursquare', {
      title: 'Foursquare API',
      user: req.user,
      trendingVenues: results.trendingVenues,
      venueDetail: results.venueDetail,
      userCheckins: results.userCheckins
    });
  });
};

/**
 * GET /api/tumblr
 */
exports.getTumblr = function(req, res) {
  if (!req.user.tokens.tumblr) {
    return res.render('api/unauthorized', {
      title: 'Tumblr API',
      provider: 'Tumblr',
      user: req.user
    });
  }

  res.render('api/tumblr', {
    title: 'Tumblr API',
    user: req.user
  });
};




/**
 * GET /api/facebook
 */
exports.getFacebook = function(req, res) {
  res.render('api/facebook', {
    title: 'Facebook API',
    user: req.user
  });
};


/**
 * GET /auth/foursquare
 * Shows the foursquare authentication dialog
 */
exports.foursquareAuth = function(req, res) {
  res.writeHead(303, { location: foursquare.getAuthClientRedirectUrl() });
  res.end();
};

/**
 * GET /auth/foursquare/callback
 */
exports.foursquareCallback = function(req, res) {
  foursquare.getAccessToken({ code: req.query.code }, function(err, accessToken) {
    User.findByIdAndUpdate(req.user._id, { $set: { tokens: { foursquare: accessToken } } }, null, function(err, user) {
      if (err) throw err;
      res.redirect('/api/foursquare');
    });
  });
};
