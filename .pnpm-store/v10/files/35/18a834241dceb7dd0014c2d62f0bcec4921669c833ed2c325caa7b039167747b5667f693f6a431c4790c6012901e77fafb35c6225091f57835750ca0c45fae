'use strict';

var express = require('express');
var request = require('supertest');
var proxy = require('../');
var http = require('http');
var assert = require('assert');

describe('when skipToNextHandlerFilter is defined', function () {

  this.timeout(10000);

  var app;
  var  slowTarget;
  var  serverReference;

  beforeEach(function () {
    app = express();
    slowTarget = express();
    slowTarget.use(function (req, res) { res.sendStatus(404); });
    serverReference = slowTarget.listen(12345);
  });

  afterEach(function () {
    serverReference.close();
  });

  var OUTCOMES = [
    { shouldSkip: true, expectedStatus: 200 },
    { shouldSkip: false, expectedStatus: 404 }
  ];

  OUTCOMES.forEach(function (outcome) {
    describe('and returns ' + outcome.shouldSkip, function () {
      it('express-http-proxy' + (outcome.shouldSkip ? ' skips ' : ' doesnt skip ') + 'to next()', function (done) {

        app.use('/proxy', proxy('http://127.0.0.1:12345', {
          skipToNextHandlerFilter: function (/*res*/) {
            return outcome.shouldSkip;
          }
        }));

        app.use(function (req, res) {
          assert(res.expressHttpProxy instanceof Object);
          assert(res.expressHttpProxy.res instanceof http.IncomingMessage);
          assert(res.expressHttpProxy.req instanceof Object);
          res.sendStatus(200);
        });

        request(app)
          .get('/proxy')
          .expect(outcome.expectedStatus)
          .end(done);
      });
    });
  });
});
