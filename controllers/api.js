var config = require('../config/config');
var User = require('../models/User');
var querystring = require('querystring');
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
  var query = querystring.stringify({ 'api-key': config.nyt.key, 'list-name': 'young-adult' });
  var url = 'http://api.nytimes.com/svc/books/v2/lists?' + query;
  request.get(url, function(error, request, body) {
    var bestSellers = JSON.parse(body);
    res.render('api/nyt', {
      title: 'New York Times API',
      books: bestSellers.results
    });
  });
};

/**
 * GET /api/lastfm
 * Last.fm API example
 */
exports.getLastfm = function(req, res) {
  var lastfm = new LastFmNode({
    api_key: '1f3e35019e98124cc8f75f8ae99df25f',
    secret: '4ae76d10d76cf680cebf4f0c8dea1aa4'
  });

  async.parallel({
    artistInfo: function(done) {
      lastfm.request("artist.getInfo", {
        artist: 'Epica',
        handlers: {
          success: function(data) {
            done(null, data);
          },
          error: function(error) {
            done(error);
          }
        }
      });
    },
    artistTopAlbums: function(done) {
      lastfm.request("artist.getTopAlbums", {
        artist: 'Epica',
        handlers: {
          success: function(data) {
            var albums = [];
            _.each(data.topalbums.album, function(album) {
              albums.push(album.image.slice(-1)[0]['#text']);
            });
            done(null, albums.slice(0,4));
          },
          error: function(error) {
            done(error);
          }
        }
      });
    }
  },
  function(err, results) {
    if (err) return res.send(err);
    var artist = {
      name: results.artistInfo.artist.name,
      image: results.artistInfo.artist.image.slice(-1)[0]['#text'],
      tags: results.artistInfo.artist.tags.tag,
      bio: results.artistInfo.artist.bio.summary,
      stats: results.artistInfo.artist.stats,
      similar: results.artistInfo.artist.similar.artist,
      topAlbums: results.artistTopAlbums
    };
    res.render('api/lastfm', {
      title: 'Last.fm API',
      artist: artist
    });
  });
};

/**
 * GET /api/twitter
 * Twiter API example
 */
exports.getTwitter = function(req, res) {

};

