'use strict';

var assert = require('assert');
var express = require('express');
var http = require('http');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('../test/support/proxyTarget');

describe('proxyReqOptDecorator', function () {
  var server;

  this.timeout(10000);

  before(function () {
    var handlers = [{
      method: 'get',
      path: '/working',
      fn: function (req, res) {
        res.send({ headers: req.headers });
      }
    }];

    server = proxyTarget(12345, 100, handlers);
  });

  after(function () {
    server.close();
  });

  this.timeout(10000);

  var app;

  beforeEach(function () {
    app = express();
    app.use(proxy('localhost:12345'));
  });

  describe('allows authors to modify a number of request parameters', function () {
    it('modify headers', function (done) {
      app = express();
      app.use(proxy('localhost:12345', {
        proxyReqOptDecorator: function (reqOpt) {
          reqOpt.headers['user-agent'] = 'test user agent';
          reqOpt.headers.mmmmmmmmmm = 'misty mountain hop';
          return reqOpt;
        }
      }));

      request(app)
        .get('/working')
        .end(function (err, res) {
          if (err) { return done(err); }

          assert.equal(res.body.headers['user-agent'], 'test user agent');
          assert.equal(res.body.headers.mmmmmmmmmm, 'misty mountain hop');
          done();
        });
    });

    describe('when proxyReqOptDecorator is a simple function (non Promise)', function () {
      it('can modify headers', function (done) {
        var app = express();
        app.use(proxy('localhost:12345', {
          proxyReqOptDecorator: function (reqOpt, req) {
            reqOpt.headers['user-agent'] = 'test user agent';
            assert(req instanceof http.IncomingMessage);
            return reqOpt;
          }
        }));

        request(app)
          .get('/working')
          .end(function (err, res) {
            if (err) { return done(err); }
            assert.equal(res.body.headers['user-agent'], 'test user agent');
            done();
          });
      });
    });

    describe('when proxyReqOptDecorator is a Promise', function () {
      it('should mutate the proxied request', function (done) {
        var app = express();
        app.use(proxy('localhost:12345', {
          proxyReqOptDecorator: function (reqOpt, req) {
            assert(req instanceof http.IncomingMessage);
            return new Promise(function (resolve) {
              reqOpt.headers['user-agent'] = 'test user agent';
              resolve(reqOpt);
            });
          }
        }));

        request(app)
          .get('/working')
          .end(function (err, res) {
            if (err) { return done(err); }
            assert.equal(res.body.headers['user-agent'], 'test user agent');
            done();
          });
      });

      describe('when the Promise is rejected', function () {
        it('returns err to host application for processing', function (done) {
          var app = express();

          app.use(proxy('/reject-promise', {
            proxyReqOptDecorator: function () {
              return Promise.reject('An arbitrary rejection message.');
            }
          }));

          /* jshint ignore:start */
          app.use(function (err, req, res, next) { // eslint-disable-line no-unused-vars
            assert(err === 'An arbitrary rejection message.');
            res.status(221).send(err);
          });
          /* jshint ignore:end */

          request(app)
            .get('/reject-promise')
            .expect(221, done); // ensures we've entered the handler with assert above
        });
      });
    });
  });

  describe('proxyReqOptDecorator has access to the source request\'s data', function () {
    it('should have access to ip', function (done) {
      var app = express();
      app.use(proxy('localhost:12345', {
        proxyReqOptDecorator: function (reqOpts, req) {
          assert(req instanceof http.IncomingMessage);
          assert(req.ip);
          return reqOpts;
        }
      }));

      request(app)
        .get('/working')
        .end(function (err) {
          if (err) { return done(err); }
          done();
        });

    });
  });
});
