'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');

var proxyTarget = require('../test/support/proxyTarget');
var proxyRouteFn = [{
  method: 'get',
  path: '/test',
  fn: function (req, res) {
    res.send(req.url);
  }
}];

describe('proxies query parameters', function () {
  this.timeout(10000);

  var app;
  var proxyServer;

  beforeEach(function () {
    proxyServer = proxyTarget(12346, 100, proxyRouteFn);
    app = express();
    app.use(proxy('localhost:12346'));
  });

  afterEach(function () {
    proxyServer.close();
  });

  it('repeats query params to proxy server', function (done) {
    request(app)
      .get('/test?a=1&b=2&c=3')
      .end(function (err, res) {
        assert.equal(res.text, '/test?a=1&b=2&c=3');
        done(err);
      });
  });
});
