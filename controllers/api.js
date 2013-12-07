var config = require('../config/config');
var User = require('../models/User');
var async = require('async');
var cheerio = require('cheerio');
var request = require('request');
var _ = require('underscore');
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
  var token = _.findWhere(req.user.tokens, { kind: 'foursquare' });

  if (!token) {
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
      foursquare.Venues.getTrending(lat, lon, { limit: 50 }, token.token, function(err, results) {
        callback(err, results);
      });
    },
    venueDetail: function(callback) {
      foursquare.Venues.getVenue('49da74aef964a5208b5e1fe3', token.token, function(err, results) {
        callback(err, results);
      });
    },
    userCheckins: function(callback) {
      foursquare.Users.getCheckins('self', null, token.token, function(err, results) {
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
  var token = _.findWhere(req.user.tokens, { kind: 'tumblr' });
  // TODO: MIDDLEWARE
  if (!token) {
    return res.render('api/unauthorized', {
      title: 'Tumblr API',
      provider: 'Tumblr',
      user: req.user
    });
  }

  var client = tumblr.createClient({
    consumer_key: config.tumblr.consumerKey,
    consumer_secret: config.tumblr.consumerSecret,
    token: token.token,
    token_secret: token.tokenSecret
  });

  client.blogInfo('sahat.tumblr.com', function(err, data) {
    res.render('api/tumblr', {
      title: 'Tumblr API',
      blog: data.blog.title,
      user: req.user
    });
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

exports.getScraping = function(req, res) {
  request.get('https://news.ycombinator.com/', function(error, request, body) {
    var $ = cheerio.load(body);
    var links = [];
    $('.title').find('a').slice(0,30).each(function(i, elem) {
      links.push($(elem));
    });
    res.render('api/scraping', {
      title: 'Web Scraping',
      links: links,
      user: req.user
    });
  });
};