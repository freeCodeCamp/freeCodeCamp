var config = require('../config/config.json');

// API PROVIDERS SETUP
var foursquare = require('node-foursquare')({
  secrets: {
    clientId: config.foursquare.clientId,
    clientSecret: config.foursquare.clientSecret,
    redirectUrl: config.foursquare.callbackUrl
  }
});

exports.apiBrowser = function(req, res) {
  res.render('api');
};

exports.foursquare = function(req, res) {
  res.render('api/foursquare', {
    title: 'Foursquare API'
  });
};

exports.foursquareCallback = function(req, res) {
  foursquare.getAccessToken({
    code: req.query.code
  },
  function(err, accessToken) {
    if (err) {
      res.send('An error was thrown: ' + err.message);
    }
    else {
      // Save the accessToken and redirect.
    }
  });
});