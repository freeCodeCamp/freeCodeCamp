var config = require('../config/config');
var User = require('../models/User');
var async = require('async');
var cheerio = require('cheerio');
var request = require('request');
var _ = require('underscore');
var geoip = require('geoip-lite');
var graph = require('fbgraph');
var LastFmNode = require('lastfm').LastFmNode;
var tumblr = require('tumblr.js');
var foursquare = require('node-foursquare')({ secrets: config.foursquare });
var Github = require('github-api');

/**
 * GET /api
 * List of API examples
 */
exports.getApi = function(req, res) {
  res.render('api', {
    title: 'API Browser',
    user: req.user
  });
};

/**
 * GET /api/foursquare
 * Foursquare API example
 */
exports.getFoursquare = function(req, res) {
  var foursquareToken = _.findWhere(req.user.tokens, { kind: 'foursquare' });
  async.parallel({
    trendingVenues: function(callback) {
      var geo = geoip.lookup('4.17.136.0');
      var lat = geo.ll[0];
      var lon = geo.ll[1];
      foursquare.Venues.getTrending(lat, lon, { limit: 50 }, foursquareToken.token, function(err, results) {
        callback(err, results);
      });
    },
    venueDetail: function(callback) {
      foursquare.Venues.getVenue('49da74aef964a5208b5e1fe3', foursquareToken.token, function(err, results) {
        callback(err, results);
      });
    },
    userCheckins: function(callback) {
      foursquare.Users.getCheckins('self', null, foursquareToken.token, function(err, results) {
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
 * Tumblr API example
 */
exports.getTumblr = function(req, res) {
  var tumblrToken = _.findWhere(req.user.tokens, { kind: 'tumblr' });
  var client = tumblr.createClient({
    consumer_key: config.tumblr.consumerKey,
    consumer_secret: config.tumblr.consumerSecret,
    token: tumblrToken.token,
    token_secret: tumblrToken.tokenSecret
  });
  client.posts('goddess-of-imaginary-light.tumblr.com', { type: 'photo' }, function(err, data) {
    res.render('api/tumblr', {
      title: 'Tumblr API',
      blog: data.blog,
      photoset: data.posts[0].photos,
      user: req.user
    });
  });
};

/**
 * GET /api/facebook
 * Facebook API example
 */
exports.getFacebook = function(req, res) {
  var facebookToken = _.findWhere(req.user.tokens, { kind: 'facebook' });
  graph.setAccessToken(facebookToken.token);
  async.parallel({
    getMe: function(done) {
      graph.get(req.user.facebook, function(err, me) {
        done(err, me);
      });
    },
    getMyFriends: function(done) {
      graph.get(req.user.facebook + '/friends', function(err, friends) {
        done(err, friends.data);
      });
    }
  },
  function(err, results) {
    res.render('api/facebook', {
      title: 'Facebook API',
      me: results.getMe,
      friends: results.getMyFriends,
      user: req.user
    });
  });
};

/**
 * GET /api/scraping
 * Web scraping example using Cheerio library
 */
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

exports.getGithub = function(req, res) {
  var githubToken = _.findWhere(req.user.tokens, { kind: 'github' });
  // TODO: Fix rate limit on passport-github token
  var github = new Github({ token: githubToken.token });
  var repo = github.getRepo('sahat', 'requirejs-library');
  repo.show(function(err, repo) {
    res.render('api/github', {
      title: 'GitHub API',
      repo: repo,
      user: req.user
    });
  });

};

/**
 * GET /api/twilio
 */
exports.getTwilio = function(req, res) {

};

/**
 * GET /api/aviary
 */
exports.getAviary = function(req, res) {
  res.render('api/aviary', {
    title: 'Aviary API'
  });
};

/**
 * GET /api/etsy
 *  Etsy API example
 */
exports.getEtsy = function(req, res) {

};

/**
 * GET /api/nyt
 * New York Times API example
 */
exports.getNewYorkTimes = function(req, res) {

};

/**
 * GET /api/lastfm
 * Last.fm API example
 */
exports.getLastfm = function(req, res) {
  var lastfm = new LastFmNode({
    api_key: 'apikey',    // sign-up for a key at http://www.last.fm/api
    secret: 'secret',
    useragent: 'appname/vX.X MyApp' // optional. defaults to lastfm-node.
  });
};

/**
 * GET /api/twitter
 * Twiter API example
 */
exports.getTwitter = function(req, res) {

};

