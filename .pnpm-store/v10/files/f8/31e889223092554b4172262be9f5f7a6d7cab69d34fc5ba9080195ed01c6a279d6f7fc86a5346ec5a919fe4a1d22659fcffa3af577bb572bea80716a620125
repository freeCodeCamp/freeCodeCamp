'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');

function proxyTarget(port) {

  var other = express();
  other.get('/', function (req, res) {
    res.send('Success');
  });
  return other.listen(port);
}

describe('proxies to requested port', function () {
  var other;
  var  http;

  beforeEach(function () {
    http = express();
    other = proxyTarget(56001);
  });

  afterEach(function () {
    other.close();
  });


  function assertSuccess(server, done) {
    request(http)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) { return done(err); }
        assert(res.text === 'Success');
        done();
      });
  }

  describe('when host is a String', function () {
    it('when passed as an option', function (done) {

      http.use(proxy('http://localhost', {
        port: 56001
      }));

      assertSuccess(http, done);
    });

    it('when passed on the host string', function (done) {

      http.use(proxy('http://localhost:56001'));

      assertSuccess(http, done);
    });

  });

  describe('when host is a function', function () {


    it('and port is on the String returned', function (done) {

      http.use(proxy(
        function () { return 'http://localhost:56001'; }
      ));

      assertSuccess(http, done);
    });

    it('and port passed as an option', function (done) {

      http.use(proxy(
        function () { return 'http://localhost'; },
        { port: 56001 }
      ));

      assertSuccess(http, done);
    });
  });

});
