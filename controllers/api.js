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
  res.render('api', {
    title: 'API Browser',
    user: req.user
  });
};


exports.foursquare = function(req, res) {

  foursquare.Venues.getTrending(40.7,-74, { limit: 10 }, req.user.tokens.foursquare, function(err, results) {
    console.log(results);
    res.render('api/foursquare', {
      title: 'Foursquare API',
      user: req.user,
      results: results
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

