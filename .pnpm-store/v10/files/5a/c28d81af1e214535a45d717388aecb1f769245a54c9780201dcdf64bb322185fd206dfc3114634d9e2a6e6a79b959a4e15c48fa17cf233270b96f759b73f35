'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');

describe('proxies headers', function () {
  this.timeout(10000);

  var http;

  beforeEach(function () {
    http = express();
    http.use(proxy('http://httpbin.org', {
      headers: {
        'X-Current-president': 'taft'
      }
    }));
  });

  it('passed as options', function (done) {
    request(http)
      .get('/headers')
      .expect(200)
      .end(function (err, res) {
        if (err) { return done(err); }
        assert(res.body.headers['X-Current-President'] === 'taft');
        done();
      });
  });

  it('passed as on request', function (done) {
    request(http)
      .get('/headers')
      .set('X-Powerererer', 'XTYORG')
      .expect(200)
      .end(function (err, res) {
        if (err) { return done(err); }
        assert(res.body.headers['X-Powerererer']);
        done();
      });
  });

});
