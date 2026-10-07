'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');

var proxyTarget = require('../test/support/proxyTarget');
var proxyRouteFn = [{
  method: 'get',
  path: '/cookieTest',
  fn: function (req, res) {
    Object.keys(req.cookies).forEach(function (key) {
      res.cookie(key, req.cookies[key]);
    });
    res.sendStatus(200);
  }
}];

describe('proxies cookie', function () {
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

  it('set cookie', function (done) {
    request(app)
      .get('/cookieTest')
      .set('Cookie', 'myApp-token=12345667')
      .end(function (err, res) {
        var cookiesMatch = res.headers['set-cookie'].filter(function (item) {
          return item.match(/myApp-token=12345667/);
        });
        assert(cookiesMatch);
        done(err);
      });
  });
});
