'use strict';

var debug = require('debug');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('../test/support/proxyTarget');

/*  This test is specifically written because of critical errors thrown while debug logging. */
describe('trace debugging does not cause the application to fail', function () {
  var proxyServer;

  before(function () {
    proxyServer = proxyTarget(8109, 1000);
  });

  after(function () {
    proxyServer.close();
  });

  beforeEach(function () {
    debug.enable('express-http-proxy');
  });

  afterEach(function () {
    debug.disable('express-http-proxy');
  });

  it('happy path', function (done) {
    debugger;
    var app = express();
    app.use(proxy('localhost:8109'));
    request(app)
      .get('/get')
      .expect(200)
      .end(done);
  });

  it('when agent is a deeply nested object', function (done) {
    var app = express();
    var HttpAgent = require('http').Agent;
    var httpAgent = new HttpAgent({ keepAlive: true, keepAliveMsecs: 60e3 });
    app.use(proxy('localhost:8109', {
      proxyReqOptDecorator: function (proxyReqOpts) {
        proxyReqOpts.agent = httpAgent;
        return proxyReqOpts;
      }
    }));
    request(app)
      .get('/get')
      .expect(200)
      .end(done);
  });
});

