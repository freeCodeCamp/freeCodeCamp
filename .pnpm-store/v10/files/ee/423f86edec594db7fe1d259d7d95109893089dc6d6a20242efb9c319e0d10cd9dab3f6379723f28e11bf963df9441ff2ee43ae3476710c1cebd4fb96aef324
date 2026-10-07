'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('../test/support/proxyTarget');
var proxyRouteFn = [{
  method: 'get',
  path: '/:errorCode',
  fn: function (req, res) {
    var errorCode = req.params.errorCode;
    if (errorCode === 'timeout') {
      return res.status(504).send('mock timeout');
    }
    return res.status(parseInt(errorCode)).send('test case error');
  }
}];

describe('error handling can be over-ridden by user', function () {
  var app = express();
  var proxyServer;

  beforeEach(function () {
    proxyServer = proxyTarget(12346, 100, proxyRouteFn);
    app = express();
  });

  afterEach(function () {
    proxyServer.close();
  });

  describe('when user provides a null function', function () {

    describe('when author sets a timeout that fires', function () {
      it('passes 504 directly to client', function (done) {
        app.use(proxy('localhost:12346', {
          timeout: 1,
        }));

        request(app)
          .get('/200')
          .expect(504)
          .expect('X-Timeout-Reason', 'express-http-proxy reset the request.')
          .end(done);
      });
    });

    it('passes status code (e.g. 504) directly to the client', function (done) {
      app.use(proxy('localhost:12346'));
      request(app)
        .get('/504')
        .expect(504)
        .expect(function (res) {
          assert(res.text === 'test case error');
          return res;
        })
        .end(done);
    });

    it('passes status code (e.g. 500) back to the client', function (done) {
      app.use(proxy('localhost:12346'));
      request(app)
        .get('/500')
        .expect(500)
        .end(function (err, res) {
          assert(res.text === 'test case error');
          done();
        });
    });
  });

  describe('when user provides a handler function', function () {
    var intentionallyWeirdStatusCode = 399;
    var intentionallyQuirkyStatusMessage = 'monkey skunky';

    describe('when author sets a timeout that fires', function () {
      it('allows author to skip handling and handle in application step', function (done) {
        app.use(proxy('localhost:12346', {
          timeout: 1,
          proxyErrorHandler: function (err, res, next) {
            next(err);
          }
        }));

        app.use(function (err, req, res, next) { // eslint-disable-line no-unused-vars
          if (err.code === 'ECONNRESET') {
            res.status(intentionallyWeirdStatusCode).send(intentionallyQuirkyStatusMessage);
          }
        });

        request(app)
          .get('/200')
          .expect(function (res) {
            assert(res.text === intentionallyQuirkyStatusMessage);
            return res;
          })
          .expect(intentionallyWeirdStatusCode)
          .end(done);
      });
    });

    it('allows authors to sub in their own handling', function (done) {
      app.use(proxy('localhost:12346', {
        timeout: 1,
        proxyErrorHandler: function (err, res, next) {
          switch (err && err.code) {
            case 'ECONNRESET':    { return res.status(405).send('504 became 405'); }
            case 'ECONNREFUSED':  { return res.status(200).send('gotcher back'); }
            default:              { next(err); }
          }
        } }));

      request(app)
        .get('/timeout')
        .expect(405)
        .expect(function (res) {
          assert(res.text === '504 became 405');
          return res;
        })
        .end(done);
    });

    it('passes status code (e.g. 500) back to the client', function (done) {
      app.use(proxy('localhost:12346'));
      request(app)
        .get('/500')
        .expect(500)
        .end(function (err, res) {
          assert(res.text === 'test case error');
          done();
        });
    });
  });

});
