'use strict';

var assert = require('assert');
var express = require('express');
var http = require('http');
var request = require('supertest');
var proxy = require('../');
var proxyTarget = require('../test/support/proxyTarget');

var aliases = ['forwardPath', 'forwardPathAsync', 'proxyReqPathResolver'];

describe('resolveProxyReqPath', function () {
  var server;

  this.timeout(10000);

  before(function () {
    var handlers = [{
      method: 'get',
      path: '/working',
      fn: function (req, res) {
        res.sendStatus(200);
      }
    }];

    server = proxyTarget(12345, 100, handlers);
  });

  after(function () {
    server.close();
  });

  aliases.forEach(function (alias) {
    describe('when author uses option ' + alias, function () {
      it('the proxy request path is the result of the function', function (done) {
        var app = express();
        var opts = {};
        opts[alias] = function () { return '/working'; };
        app.use(proxy('localhost:12345', opts));

        request(app)
          .get('/failing')
          .expect(200)
          .end(done);
      });

      it('the ' + alias + ' method has access to request object', function (done) {
        var app = express();
        app.use(proxy('localhost:12345', {
          forwardPath: function (req) {
            assert.ok(req instanceof http.IncomingMessage);
            return '/working';
          }
        }));

        request(app)
          .get('/foobar')
          .expect(200)
          .end(done);
      });

    });
  });
});
