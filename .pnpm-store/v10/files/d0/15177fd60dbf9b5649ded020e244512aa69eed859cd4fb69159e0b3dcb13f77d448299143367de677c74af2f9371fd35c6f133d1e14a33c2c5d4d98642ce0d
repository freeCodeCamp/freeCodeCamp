'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');

describe('proxies https', function () {

  this.timeout(10000);

  var app;

  beforeEach(function () {
    app = express();
  });

  function assertSecureRequest(app, done) {
    request(app)
      .get('/get?show_env=1')
      .end(function (err, res) {
        if (err) { return done(err); }
        assert(res.body.headers['X-Forwarded-Port'] === '443', 'Expects forwarded 443 Port');
        assert(res.body.headers['X-Forwarded-Proto'] === 'https', 'Expects forwarded protocol to be https');
        done();
      });
  }

  describe('when host is a String', function () {
    describe('and includes "https" as protocol', function () {
      it('proxys via https', function (done) {
        app.use(proxy('https://httpbin.org'));
        assertSecureRequest(app, done);
      });
    });
    describe('option https is set to "true"', function () {
      it('proxys via https', function (done) {
        app.use(proxy('http://httpbin.org', { https: true }));
        assertSecureRequest(app, done);
      });
    });
  });

  describe('when host is a Function', function () {
    describe('returned value includes "https" as protocol', function () {
      it('proxys via https', function (done) {
        app.use(proxy(function () { return 'https://httpbin.org'; }));
        assertSecureRequest(app, done);
      });
    });
    describe('option https is set to "true"', function () {
      it('proxys via https', function (done) {
        app.use(proxy(function () { return 'http://httpbin.org'; }, { https: true }));
        assertSecureRequest(app, done);
      });
    });
  });

});
