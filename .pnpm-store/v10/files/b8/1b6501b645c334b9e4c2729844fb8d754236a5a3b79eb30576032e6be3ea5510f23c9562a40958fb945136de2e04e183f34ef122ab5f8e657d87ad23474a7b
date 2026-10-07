'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');

var proxyTarget = require('../test/support/proxyTarget');
var proxyRouteFn = [{
  method: 'get',
  path: '/hostHdrTest',
  fn: function (req, res) {
    res.send(req.headers.host);
  }
}];

describe('preserves host header only when requested', function () {

  this.timeout(10000);

  var app;
  var proxyServer;

  describe('when preserveHostHdr is true', function () {
    before(function () {
      proxyServer = proxyTarget(12346, 100, proxyRouteFn);
      app = express();
      app.use(proxy('localhost:12346', {
        preserveHostHdr: true
      }));
    });

    after(function () {
      proxyServer.close();
    });

    it('host is passed forward', function (done) {
      request(app)
        .get('/hostHdrTest')
        .set('host', 'hamburger-helper')
        .end(function (err, res) {
          assert(res.text === 'hamburger-helper');
          done();
        });
    });
  });

  describe('when preserveHostHdr is absent or false', function () {
    before(function () {
      proxyServer = proxyTarget(12346, 100, proxyRouteFn);
      app = express();
      app.use(proxy('localhost:12346'));
    });

    after(function () {
      proxyServer.close();
    });

    it('host is not passed forward', function (done) {
      request(app)
        .get('/hostHdrTest')
        .set('host', 'hamburger-helper')
        .end(function (err, res) {
          assert(res.text !== 'hamburger-helper');
          done();
        });
    });
  });

});
