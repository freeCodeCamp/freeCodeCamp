var geoip = require('geoip-lite');

var config = require('../config/config.json');

var User = require('../models/User');

// API PROVIDERS SETUP
var foursquare = require('node-foursquare')({
  secrets: {
    clientId: config.foursquare.clientId,
    clientSecret: config.foursquare.clientSecret,
    redirectUrl: config.foursquare.callbackUrl
  }
});

var foursquareAccessToken = 'MY_FOURSQUARE_ACCESS_TOKEN';


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
  var geo = geoip.lookup('4.17.136.0' || req.connection.remoteAddress);

  foursquare.Venues.getTrending(geo.ll[0], geo.ll[1], { limit: 5 }, req.user.tokens.foursquare, function(err, results) {
    res.render('api/foursquare', {
      title: 'Foursquare API',
      user: req.user,
      venues: results.venues
    });

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
    if (err) throw err;
    User.findByIdAndUpdate(req.user._id, { $set: { tokens: { foursquare: accessToken } } }, null, function(err, user) {
      if (err) throw err;
      res.redirect('/api/foursquare');
    });
  });
};

