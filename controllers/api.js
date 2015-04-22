var secrets = require('../config/secrets');
var User = require('../models/User');
var querystring = require('querystring');
var validator = require('validator');
var async = require('async');
var cheerio = require('cheerio');
var request = require('request');
var graph = require('fbgraph');
var Github = require('github-api');
var Twit = require('twit');
var Linkedin = require('node-linkedin')(secrets.linkedin.clientID, secrets.linkedin.clientSecret, secrets.linkedin.callbackURL);
var Y = require('yui/yql');
var _ = require('lodash');
var http = require('http');

/*
exports.getTwitterTimeline = function(req, res, next) { 
  var basic = secrets.twitter.consumerKey + ":" + secrets.twitter.consumerSecret;
  var basic64 = new Buffer(basic).toString('base64');
  console.log(basic64);

  var opts = {
    hostname: 'api.twitter.com',
    path: '/oauth2/token',
    method: 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization' : 'Basic '+basic64
>>>>>>> Stashed changes
    },
    grant_type: 'client_credentials'
  };

  http.request(opts, function(response) {
    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    });
    response.on('end', function() {
      console.log(data);
      //res.end();
    });
  });

  var T = new Twit({
    consumer_key: secrets.twitter.consumerKey,
    consumer_secret: secrets.twitter.consumerSecret,
    access_token: secrets.twitter.access_token,
    access_token_secret: secrets.twitter.token_secret
  });
  //var tokens = T.getAuth();
  //console.log(tokens);

<<<<<<< Updated upstream


  T.get('search/tweets', {q: 'nodejs since:2015-01-01', count: 10}, function(err, reply) {
    if (err) return next(err);
    return res.json(reply.statuses);
  });

};

/*