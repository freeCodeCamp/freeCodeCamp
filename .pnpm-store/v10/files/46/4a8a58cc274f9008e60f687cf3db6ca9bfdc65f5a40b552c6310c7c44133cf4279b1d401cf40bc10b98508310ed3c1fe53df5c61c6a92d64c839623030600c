'use strict';

var express = require('express');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('../test/support/proxyTarget');
var proxyRouteFn = [{
  method: 'get',
  path: '/',
  fn: function (req, res) {
    return res.status(209).send('Proxy Server');
  }
}];

function nextMethod(req, res, next) {
  res.status(201).send('Client Application');
  next();
}

describe('filter', function () {
  var app = express();
  var proxyServer;

  beforeEach(function () {
    proxyServer = proxyTarget(12346, 100, proxyRouteFn);
    app = express();
  });

  afterEach(function () {
    proxyServer.close();
  });

  describe('when filter function returns true', function () {
    it('continues route processing', function (done) {
      // should capture every possible path

      app.use(proxy('localhost:12346', {
        filter: function () { return true; }
      }));

      // because prior line should *always* fire and return, we should never get here.

      app.use(nextMethod);

      request(app)
        .get('/')
        .expect(209)
        .end(done);
    });
  });

  describe('when filter function returns false', function () {

    it('hanldes route processing', function (done) {
      // should capture every possible path

      app.use(proxy('localhost:12346', {
        filter: function () { return false; }
      }));

      // because prior line should *always* fire skip, we should get here.

      app.use(nextMethod);

      request(app)
        .get('/')
        .expect(201)
        .end(done);
    });
  });

  describe('promise form', function () {
    describe('when filter function returns true', function () {
      it('continues route processing', function (done) {
        // should capture every possible path

        app.use(proxy('localhost:12346', {
          filter: function () { return new Promise(function (resolve) { resolve(true); }); }
        }));

        // because prior line should *always* fire and return, we should never get here.

        app.use(nextMethod);

        request(app)
          .get('/')
          .expect(209)
          .end(done);
      });
    });

    describe('when filter function returns false', function () {

      it('hanldes route processing', function (done) {
        // should capture every possible path

        app.use(proxy('localhost:12346', {
          filter: function () { return new Promise(function (resolve) { resolve(false); }); }
        }));

        // because prior line should *always* fire skip, we should get here.

        app.use(nextMethod);

        request(app)
          .get('/')
          .expect(201)
          .end(done);
      });
    });
  });

});
