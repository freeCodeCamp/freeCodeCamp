'use strict';

var assert = require('assert');
var bodyParser = require('body-parser');
var express = require('express');
var nock = require('nock');
var request = require('supertest');
var proxy = require('../');


function createLocalApplicationServer() {
  var app = express();
  return app;
}

describe('when proxy request is a GET', function () {

  this.timeout(10000);

  var localServer;

  beforeEach(function () {
    localServer = createLocalApplicationServer();
    localServer.use(bodyParser.json());
  });

  afterEach(function () {
    nock.cleanAll();
  });

  var testCases = [
    { name: 'form encoded', encoding: 'application/x-www-form-urlencoded' },
    { name: 'JSON encoded', encoding: 'application/json' }
  ];

  testCases.forEach(function (test) {
    it('should deliver the get query when ' + test.name, function (done) {
      var nockedPostWithEncoding = nock('http://127.0.0.1:12345')
        .get('/')
        .query({ name: 'tobi' })
        .matchHeader('Content-Type', test.encoding)
        .reply(200, {
          name: 'tobi'
        });

      localServer.use('/proxy', proxy('http://127.0.0.1:12345'));
      localServer.use(function (req, res) { res.sendStatus(200); });
      localServer.use(function (err, req, res, next) { throw new Error(err, req, res, next); });

      request(localServer)
        .get('/proxy')
        .query({ name: 'tobi' })
        .set('Content-Type', test.encoding)
        .expect(function (res) {
          assert(res.body.name === 'tobi');
          nockedPostWithEncoding.done();
        })
        .end(done);
    });

    it('should deliver the get body when ' + test.name, function (done) {
      var nockedPostWithEncoding = nock('http://127.0.0.1:12345')
        .get('/', test.encoding.includes('json') ? { name: 'tobi' } : '')
        .matchHeader('Content-Type', test.encoding)
        .reply(200, {
          name: 'tobi'
        });

      localServer.use('/proxy', proxy('http://127.0.0.1:12345'));
      localServer.use(function (req, res) { res.sendStatus(200); });
      localServer.use(function (err, req, res, next) { throw new Error(err, req, res, next); });

      request(localServer)
        .get('/proxy')
        .send({ name: 'tobi' })
        .set('Content-Type', test.encoding)
        .expect(function (res) {
          assert(res.body.name === 'tobi');
          nockedPostWithEncoding.done();
        })
        .end(done);
    });
  });

  it('should deliver empty string get body', function (done) {
    var nockedPostWithoutBody = nock('http://127.0.0.1:12345')
      .get('/')
      .matchHeader('Content-Type', 'application/json')
      .reply(200, {
        name: 'get with string body'
      });

    localServer.use('/proxy', proxy('http://127.0.0.1:12345'));
    localServer.use(function (req, res) { res.sendStatus(200); });
    localServer.use(function (err, req, res, next) { throw new Error(err, req, res, next); });

    request(localServer)
      .get('/proxy')
      .send('')
      .set('Content-Type', 'application/json')
      .expect(function (res) {
        assert(res.body.name === 'get with string body');
        nockedPostWithoutBody.done();
      })
      .end(done);
  });

  it('should deliver empty object get body', function (done) {
    var nockedPostWithoutBody = nock('http://127.0.0.1:12345')
      .get('/', {})
      .matchHeader('Content-Type', 'application/json')
      .reply(200, {
        name: 'get with object body'
      });

    localServer.use('/proxy', proxy('http://127.0.0.1:12345'));
    localServer.use(function (req, res) { res.sendStatus(200); });
    localServer.use(function (err, req, res, next) { throw new Error(err, req, res, next); });

    request(localServer)
      .get('/proxy')
      .send({})
      .set('Content-Type', 'application/json')
      .expect(function (res) {
        assert(res.body.name === 'get with object body');
        nockedPostWithoutBody.done();
      })
      .end(done);
  });

  it('should support parseReqBody', function (done) {
    var nockedPostWithBody = nock('http://127.0.0.1:12345')
      .get('/', '')
      .matchHeader('Content-Type', 'application/json')
      .reply(200, {
        name: 'get with parseReqBody false'
      });

    localServer.use('/proxy', proxy('http://127.0.0.1:12345', {
      parseReqBody: false,
    }));
    localServer.use(function (req, res) { res.sendStatus(200); });
    localServer.use(function (err, req, res, next) { throw new Error(err, req, res, next); });

    request(localServer)
      .get('/proxy')
      .send({
        name: 'tobi'
      })
      .set('Content-Type', 'application/json')
      .expect(function (res) {
        assert(res.body.name === 'get with parseReqBody false');
        nockedPostWithBody.done();
      })
      .end(done);
  });

});
