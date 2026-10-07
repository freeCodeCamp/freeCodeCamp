'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');

describe('url parsing', function () {

  this.timeout(10000);

  it('can parse a url with a port', function (done) {
    var app = express();
    app.use(proxy('http://httpbin.org:80'));
    request(app)
      .get('/')
      .end(function (err) {
        if (err) { return done(err); }
        assert(true);
        done();
      });
  });

  it('does not throw `Uncaught RangeError` if you have both a port and a trailing slash', function (done) {
    var app = express();
    app.use(proxy('http://httpbin.org:80/'));
    request(app)
      .get('/')
      .end(function (err) {
        if (err) { return done(err); }
        assert(true);
        done();
      });
  });
});


