'use strict';

var express = require('express');
var request = require('supertest');
var proxy = require('../');
var startProxyTarget = require('./support/proxyTarget');
var expect = require('chai').expect;

describe('uses remote path', function () {

  this.timeout(10000);

  var app = express();
  var proxyRoutes = ['/somePath/', '/somePath/longer/path', '/somePath/long/path/with/many/tokens'];
  var proxyKeyPath = '/somePath';
  var server;

  afterEach(function () {
    server.close();
  });

  proxyRoutes.forEach(function (path) {
    it('uses path component from inbound request', function (done) {

      var modifiedPath = path.replace(new RegExp(proxyKeyPath), '');

      var proxyRouteFn = {
        method: 'get',
        path: modifiedPath,
        fn: function (req, res) {
          res.json({ path: path, modifiedPath: modifiedPath });
        }
      };

      server = startProxyTarget(8309, 1000, [proxyRouteFn]);

      app.use('/somePath/', proxy('http://localhost:8309'));

      request(app)
        .get(path)
        .expect(200)
        .end(function (err, response) {
          if (err) {
            return done(err);
          }
          expect(response.path === path);
          expect(response.modifiedPath === path);
          done();
        });
    });

  });
});


describe('host can be a dynamic function', function () {

  this.timeout(10000);

  var app = express();
  var firstProxyApp = express();
  var secondProxyApp = express();
  var firstPort = 10031;
  var secondPort = 10032;

  app.use('/proxy/:port', proxy(function (req) {
    return 'localhost:' + req.params.port;
  }, {
    memoizeHost: false
  }));

  firstProxyApp.use('/', function (req, res) {
    res.sendStatus(204);
  });
  firstProxyApp.listen(firstPort);

  secondProxyApp.use('/', function (req, res) {
    res.sendStatus(200);
  });
  secondProxyApp.listen(secondPort);

  it('can proxy with session value', function (done) {
    request(app)
      .get('/proxy/' + firstPort)
      .expect(204)
      .end(function (err) {
        if (err) {
          return done(err);
        }
        request(app)
          .get('/proxy/' + secondPort)
          .expect(200, done);
      });
  });
});
