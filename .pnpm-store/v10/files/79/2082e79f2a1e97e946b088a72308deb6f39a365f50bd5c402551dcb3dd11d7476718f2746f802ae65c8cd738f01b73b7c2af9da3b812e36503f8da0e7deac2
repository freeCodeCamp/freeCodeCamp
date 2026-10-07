'use strict';

var assert = require('assert');
var ScopeContainer = require('../lib/scopeContainer');
var resolveProxyReqPath = require('../app/steps/resolveProxyReqPath');
var expect = require('chai').expect;
var express = require('express');
var request = require('supertest');
var proxy = require('../');


describe('resolveProxyReqPath', function () {
  var container;

  beforeEach(function () {
    container = new ScopeContainer();
  });

  var tests = [
    {
      resolverType: 'undefined',
      resolverFn: undefined,
      data: [
        { url: 'http://localhost:12345', parsed: '/' },
        { url: 'http://g.com/123?45=67', parsed: '/123?45=67' }
      ]
    },
    {
      resolverType: 'a syncronous function',
      resolverFn: function () { return 'the craziest thing'; },
      data: [
        { url: 'http://localhost:12345', parsed: 'the craziest thing' },
        { url: 'http://g.com/123?45=67', parsed: 'the craziest thing' }
      ]
    },
    {
      resolverType: 'a Promise',
      resolverFn: function () {
        return new Promise(function (resolve) {
          resolve('the craziest think');
        });
      },
      data: [
        { url: 'http://localhost:12345', parsed: 'the craziest think' },
        { url: 'http://g.com/123?45=67', parsed: 'the craziest think' }
      ]
    }
  ];

  describe('when proxyReqPathResolver', function () {

    tests.forEach(function (test) {
      describe('is ' + test.resolverType, function () {
        describe('it returns a promise which resolves a container with expected url', function () {
          test.data.forEach(function (data) {
            it(data.url, function (done) {
              container.user.req = { url: data.url };
              container.options.proxyReqPathResolver = test.resolverFn;
              var r = resolveProxyReqPath(container);

              assert(r instanceof Promise, 'Expect resolver to return a thennable');

              r.then(function (container) {
                var response;
                try {
                  response = container.proxy.reqBuilder.path;
                  if (!response) {
                    throw new Error('reqBuilder.url is undefined');
                  }
                } catch (e) {
                  done(e);
                }
                expect(response).to.equal(data.parsed);
                done();
              });
            });
          });
        });
      });
    });

  });

  describe('testing example code in docs', function () {
    it('works as advertised', function (done) {
      var proxyTarget = require('../test/support/proxyTarget');
      var proxyRouteFn = [{
        method: 'get',
        path: '/tent',
        fn: function (req, res) {
          res.send(req.url);
        }
      }];

      var proxyServer = proxyTarget(12345, 100, proxyRouteFn);
      var app = express();
      app.use(proxy('localhost:12345', {
        proxyReqPathResolver: function (req) {
          var parts = req.url.split('?');
          var queryString = parts[1];
          var updatedPath = parts[0].replace(/test/, 'tent');
          return updatedPath + (queryString ? '?' + queryString : '');
        }
      }));

      request(app)
        .get('/test?a=1&b=2&c=3')
        .end(function (err, res) {
          assert.equal(res.text, '/tent?a=1&b=2&c=3');
          proxyServer.close();
          done(err);
        });
    });
  });

});
