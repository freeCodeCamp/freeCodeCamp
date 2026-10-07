'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');

describe('userResDecorator', function () {

  describe('when handling a 304', function () {
    this.timeout(10000);

    var app;
    var  slowTarget;
    var  serverReference;

    beforeEach(function () {
      app = express();
      slowTarget = express();
      slowTarget.use(function (req, res) { res.sendStatus(304); });
      serverReference = slowTarget.listen(12345);
    });

    afterEach(function () {
      serverReference.close();
    });

    it('skips any handling', function (done) {
      app.use('/proxy', proxy('http://127.0.0.1:12345', {
        userResDecorator: function (/*res*/) {
          throw new Error('expected to never get here because this step should be skipped for 304');
        }
      }));

      request(app)
        .get('/proxy')
        .expect(304)
        .end(done);
    });
  });

  it('has access to original response', function (done) {
    var app = express();
    app.use(proxy('httpbin.org', {
      userResDecorator: function (proxyRes, proxyResData) {
        assert(proxyRes.connection);
        assert(proxyRes.socket);
        assert(proxyRes.headers);
        assert(proxyRes.headers['content-type']);
        return proxyResData;
      }
    }));

    request(app).get('/').end(done);
  });

  it('works with promises', function (done) {
    var app = express();
    app.use(proxy('httpbin.org', {
      userResDecorator: function (proxyRes, proxyResData) {
        return new Promise(function (resolve) {
          proxyResData.funkyMessage = 'oi io oo ii';
          setTimeout(function () {
            resolve(proxyResData);
          }, 200);
        });
      }
    }));

    request(app)
      .get('/ip')
      .end(function (err, res) {
        if (err) { return done(err); }

        assert(res.body.funkyMessage = 'oi io oo ii');
        done();
      });

  });

  it('can modify the response data', function (done) {
    var app = express();
    app.use(proxy('httpbin.org', {
      userResDecorator: function (proxyRes, proxyResData) {
        proxyResData = JSON.parse(proxyResData.toString('utf8'));
        proxyResData.intercepted = true;
        return JSON.stringify(proxyResData);
      }
    }));

    request(app)
      .get('/ip')
      .end(function (err, res) {
        if (err) { return done(err); }

        assert(res.body.intercepted);
        done();
      });
  });


  it('can modify the response headers, [deviant case, supported by pass-by-reference atm]', function (done) {
    var app = express();
    app.use(proxy('httpbin.org', {
      userResDecorator: function (rsp, data, req, res) {
        res.set('x-wombat-alliance', 'mammels');
        res.set('content-type', 'wiki/wiki');
        return data;
      }
    }));

    request(app)
      .get('/ip')
      .end(function (err, res) {
        if (err) { return done(err); }
        assert(res.headers['content-type'] === 'wiki/wiki');
        assert(res.headers['x-wombat-alliance'] === 'mammels');
        done();
      });
  });

  it('can mutuate an html response', function (done) {
    var app = express();
    app.use(proxy('httpbin.org', {
      userResDecorator: function (rsp, data) {
        data = data.toString().replace('Oh', '<strong>Hey</strong>');
        assert(data !== '');
        return data;
      }
    }));

    request(app)
      .get('/html')
      .end(function (err, res) {
        if (err) { return done(err); }
        assert(res.text.indexOf('<strong>Hey</strong>') > -1);
        done();
      });
  });

  it('can change the location of a redirect', function (done) {

    function redirectingServer(port, origin) {
      var app = express();
      app.get('/', function (req, res) {
        res.status(302);
        res.location(origin + '/proxied/redirect/url');
        res.send();
      });
      return app.listen(port);
    }

    var redirectingServerPort = 8012;
    var redirectingServerOrigin = ['http://localhost', redirectingServerPort].join(':');

    var server = redirectingServer(redirectingServerPort, redirectingServerOrigin);

    var proxyApp = express();
    var preferredPort = 3000;

    proxyApp.use(proxy(redirectingServerOrigin, {
      userResDecorator: function (rsp, data, req, res) {
        var proxyReturnedLocation = res.getHeaders ? res.getHeaders().location : res._headers.location;
        res.location(proxyReturnedLocation.replace(redirectingServerPort, preferredPort));
        return data;
      }
    }));

    request(proxyApp)
      .get('/')
      .expect(function (res) {
        res.headers.location.match(/localhost:3000/);
      })
      .end(function () {
        server.close();
        done();
      });
  });
});


describe('test userResDecorator on html response from github', function () {

  /*
     Github provided a unique situation where the encoding was different than
     utf-8 when we didn't explicitly ask for utf-8.  This test helped sort out
     the issue, and even though its a little too on the nose for a specific
     case, it seems worth keeping around to ensure we don't regress on this
     issue.
  */

  it('is able to read and manipulate the response', function (done) {
    this.timeout(15000);  // give it some extra time to get response
    var app = express();
    app.use(proxy('https://github.com/villadora/express-http-proxy', {
      userResDecorator: function (targetResponse, data) {
        data = data.toString().replace('DOCTYPE', 'WINNING');
        assert(data !== '');
        return data;
      }
    }));

    request(app)
      .get('/html')
      .end(function (err, res) {
        if (err) { return done(err); }
        assert(res.text.indexOf('WINNING') > -1);
        done();
      });

  });
});

