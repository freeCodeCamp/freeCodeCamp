'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');

describe('preserveReqSession', function () {

  this.timeout(10000);

  var app;

  beforeEach(function () {
    app = express();
    app.use(proxy('httpbin.org'));
  });

  it('preserveReqSession', function (done) {
    var app = express();
    app.use(function (req, res, next) {
      req.session = 'hola';
      next();
    });
    app.use(proxy('httpbin.org', {
      preserveReqSession: true,
      proxyReqOptDecorator: function (reqOpts) {
        assert(reqOpts.session, 'hola');
        return reqOpts;
      }
    }));

    request(app)
      .get('/user-agent')
      .end(function (err) {
        if (err) { return done(err); }
        done();
      });
  });
});
