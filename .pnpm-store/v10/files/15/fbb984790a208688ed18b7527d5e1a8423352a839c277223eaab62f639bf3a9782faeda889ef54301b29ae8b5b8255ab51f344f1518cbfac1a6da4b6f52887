'use strict';

var assert = require('assert');
var express = require('express');
var http = require('http');
var startProxyTarget = require('./support/proxyTarget');
var proxy = require('../');

function chunkingProxyServer() {
  var proxyRouteFn = [{
    method: 'get',
    path: '/stream',
    fn: function (req, res) {
      res.write('0');
      setTimeout(function () { res.write('1'); }, 100);
      setTimeout(function () {  res.write('2'); }, 200);
      setTimeout(function () { res.write('3'); }, 300);
      setTimeout(function () { res.end(); }, 500);
    }
  }];

  return startProxyTarget(8309, 1000, proxyRouteFn);
}

function simulateUserRequest() {
  return new Promise(function (resolve, reject) {
    var req = http.request({ hostname: 'localhost', port: 8308, path: '/stream' }, function (res) {
      var chunks = [];
      res.on('data', function (chunk) { chunks.push(chunk.toString()); });
      res.on('end', function () { resolve(chunks); });
    });

    req.on('error', function (e) {
      reject('problem with request:', e.message);
    });

    req.end();
  });
}

function startLocalServer(proxyOptions) {
  var app = express();
  app.get('/stream', proxy('http://localhost:8309', proxyOptions));
  return app.listen(8308);
}

describe('streams / piped requests', function () {
  this.timeout(3000);

  var server;
  var  targetServer;

  beforeEach(function () {
    targetServer = chunkingProxyServer();
  });

  afterEach(function () {
    server.close();
    targetServer.close();
  });

  describe('when streaming options are truthy', function () {
    var TEST_CASES = [{
      name: 'vanilla, no options defined',
      options: {}
    }, {
      name: 'proxyReqOptDecorator is defined',
      options: { proxyReqOptDecorator: function (reqBuilder) { return reqBuilder; } }
    }, {
      //// Keep around this case for manually testing that this for sure fails for a few cycles.   2018 NMK
      //name: 'proxyReqOptDecorator never returns',
      //options: { proxyReqOptDecorator: function () { return new Promise(function () {}); } }
    //}, {

      name: 'proxyReqOptDecorator is a Promise',
      options: { proxyReqOptDecorator: function (reqBuilder) { return Promise.resolve(reqBuilder); } }
    }];

    TEST_CASES.forEach(function (testCase) {
      describe(testCase.name, function () {
        it('chunks are received without any buffering, e.g. before request end', function (done) {
          server = startLocalServer(testCase.options);
          simulateUserRequest()
            .then(function (res) {
              // Assume that if I'm getting a chunked response, it will be an array of length > 1;

              assert(res instanceof Array, 'res is an Array');
              assert.equal(res.length, 4);
              done();
            })
            .catch(done);
        });
      });
    });
  });

  describe('when streaming options are falsey', function () {
    var TEST_CASES = [{
      name: 'skipToNextHandler is defined',
      options: { skipToNextHandlerFilter: function () { return false; } }
    }];

    TEST_CASES.forEach(function (testCase) {
      describe(testCase.name, function () {
        it('response arrives in one large chunk', function (done) {
          server = startLocalServer(testCase.options);

          simulateUserRequest()
            .then(function (res) {
              // Assume that if I'm getting a un-chunked response, it will be an array of length = 1;

              assert(res instanceof Array);
              assert.equal(res.length, 1);
              done();
            })
            .catch(done);
        });
      });
    });
  });
});
