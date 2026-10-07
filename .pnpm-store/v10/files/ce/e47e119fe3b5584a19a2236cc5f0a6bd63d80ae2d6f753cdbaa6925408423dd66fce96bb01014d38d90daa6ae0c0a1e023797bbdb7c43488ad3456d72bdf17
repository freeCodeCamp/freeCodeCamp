'use strict';

var express = require('express');
var request = require('supertest');
var proxy = require('../');

describe('host can be a dynamic function', function () {

  this.timeout(10000);

  var app = express();
  describe('and memoization can be disabled', function () {
    var firstProxyApp = express();
    var secondProxyApp = express();
    // TODO: This seems like a bug factory.  We will have intermittent port conflicts, yeah?

    function randomNumberInPortRange() {
      return Math.floor(Math.random() * 48000) + 1024;
    }
    var firstPort = randomNumberInPortRange();
    var secondPort = randomNumberInPortRange();

    var hostFn = function (req) {
      return 'localhost:' + req.params.port;
    };

    app.use('/proxy/:port', proxy(hostFn, { memoizeHost: false }));

    firstProxyApp
      .get('/', function (req, res) { res.sendStatus(204); })
      .listen(firstPort);

    secondProxyApp
      .get('/', function (req, res) { res.sendStatus(200); })
      .listen(secondPort);

    it('when not memoized, host resolves to a second value on the seecond call', function (done) {
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
});

describe('host can be an ip address', function () {
  it('with a port', function (done) {
    var app = express();
    app.use('/proxy/', proxy('127.0.0.1:3020'));

    var targetApp = express();
    targetApp
      .get('/', function (req, res) { res.sendStatus(211); })
      .listen(3020);


    request(app)
      .get('/proxy/')
      .expect(211)
      .end(done);
  });
});

