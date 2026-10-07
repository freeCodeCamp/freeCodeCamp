'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var bodyParser = require('body-parser');
var proxy = require('../');
var proxyTarget = require('../test/support/proxyTarget');


var proxyRouteFn = [{
  method: 'post',
  path: '/poster',
  fn: function (req, res) {
    res.send(req.body);
  }
}];

describe('middleware compatibility', function () {
  var proxyServer;

  beforeEach(function () {
    proxyServer = proxyTarget(12346, 100, proxyRouteFn);
  });

  afterEach(function () {
    proxyServer.close();
  });

  it('should use req.body if defined', function (done) {
    var app = express();

    // Simulate another middleware that puts req stream into the body

    app.use(function (req, res, next) {
      var received = [];
      req.on('data', function onData(chunk) {
        if (!chunk) { return; }
        received.push(chunk);
      });
      req.on('end', function onEnd() {
        received = Buffer.concat(received).toString('utf8');
        req.body = JSON.parse(received);
        req.body.foo = 1;
        next();
      });
    });

    app.use(proxy('localhost:12346', {
      userResDecorator: function (rsp, data, req) {
        assert(req.body);
        assert.equal(req.body.foo, 1);
        assert.equal(req.body.mypost, 'hello');
        return data;
      }
    }));

    request(app)
      .post('/poster')
      .send({ mypost: 'hello' })
      .expect(function (res) {
        assert.equal(res.body.foo, 1);
        assert.equal(res.body.mypost, 'hello');
      })
      .end(done);
  });

  it('should stringify req.body when it is a json body so it is written to proxy request', function (done) {
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: false
    }));
    app.use(proxy('localhost:12346'));
    request(app)
      .post('/poster')
      .send({
        mypost: 'hello',
        doorknob: 'wrect'
      })
      .expect(function (res) {
        assert.equal(res.body.doorknob, 'wrect');
        assert.equal(res.body.mypost, 'hello');
      })
      .end(done);
  });

  it('should convert req.body to a Buffer when reqAsBuffer is set', function (done) {
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: false
    }));
    app.use(proxy('localhost:12346', {
      reqAsBuffer: true
    }));
    request(app)
      .post('/poster')
      .send({
        mypost: 'hello',
        doorknob: 'wrect'
      })
      .expect(function (res) {
        assert.equal(res.body.doorknob, 'wrect');
        assert.equal(res.body.mypost, 'hello');
      })
      .end(done);
  });

});
