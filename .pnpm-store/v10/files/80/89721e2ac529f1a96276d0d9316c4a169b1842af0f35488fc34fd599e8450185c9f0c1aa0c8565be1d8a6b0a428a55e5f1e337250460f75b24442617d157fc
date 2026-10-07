'use strict';

var express = require('express');
var request = require('supertest');
var proxy = require('../');
var mockEndpoint = require('../lib/mockHTTP.js');

describe('proxies status code', function () {
  var proxyServer = express();
  var port = 21239;
  var proxiedEndpoint = 'http://localhost:' + port;
  var server;

  proxyServer.use(proxy(proxiedEndpoint));

  beforeEach(function () {
    server = mockEndpoint.listen(21239);
  });

  afterEach(function () {
    server.close();
  });

  [304, 404, 200, 401, 500].forEach(function (status) {
    it('on ' + status, function (done) {
      request(proxyServer)
        .get('/status/' + status)
        .expect(status, done);
    });
  });
});
