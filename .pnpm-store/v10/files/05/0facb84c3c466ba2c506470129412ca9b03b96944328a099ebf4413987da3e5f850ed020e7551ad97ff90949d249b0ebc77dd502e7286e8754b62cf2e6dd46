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

describe('when proxy request is a POST', function () {

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
    it('should deliver the post query when ' + test.name, function (done) {
      var nockedPostWithEncoding = nock('http://127.0.0.1:12345')
        .post('/')
        .query({ name: 'tobi' })
        .matchHeader('Content-Type', test.encoding)
        .reply(200, {
          name: 'tobi'
        });

      localServer.use('/proxy', proxy('http://127.0.0.1:12345'));
      localServer.use(function (req, res) { res.sendStatus(200); });
      localServer.use(function (err, req, res, next) { throw new Error(err, req, res, next); });

      request(localServer)
        .post('/proxy')
        .query({ name: 'tobi' })
        .set('Content-Type', test.encoding)
        .expect(function (res) {
          assert(res.body.name === 'tobi');
          nockedPostWithEncoding.done();
        })
        .end(done);
    });

    it('should deliver the post body when ' + test.name, function (done) {
      var nockedPostWithEncoding = nock('http://127.0.0.1:12345')
        .post('/', test.encoding.includes('json') ? { name: 'tobi' } : {})
        .matchHeader('Content-Type', test.encoding)
        .reply(200, {
          name: 'tobi'
        });

      localServer.use('/proxy', proxy('http://127.0.0.1:12345'));
      localServer.use(function (req, res) { res.sendStatus(200); });
      localServer.use(function (err, req, res, next) { throw new Error(err, req, res, next); });

      request(localServer)
        .post('/proxy')
        .send({ name: 'tobi' })
        .set('Content-Type', test.encoding)
        .expect(function (res) {
          assert(res.body.name === 'tobi');
          nockedPostWithEncoding.done();
        })
        .end(done);
    });
  });

  it('should deliver empty string post body', function (done) {
    var nockedPostWithoutBody = nock('http://127.0.0.1:12345')
      .post('/')
      .matchHeader('Content-Type', 'application/json')
      .reply(200, {
        name: 'tobi'
      });

    localServer.use('/proxy', proxy('http://127.0.0.1:12345'));
    localServer.use(function (req, res) { res.sendStatus(200); });
    localServer.use(function (err, req, res, next) { throw new Error(err, req, res, next); });

    request(localServer)
      .post('/proxy')
      .send('')
      .set('Content-Type', 'application/json')
      .expect(function (res) {
        assert(res.body.name === 'tobi');
        nockedPostWithoutBody.done();
      })
      .end(done);
  });

  it('should deliver empty object post body', function (done) {
    var nockedPostWithoutBody = nock('http://127.0.0.1:12345')
      .post('/', {})
      .matchHeader('Content-Type', 'application/json')
      .reply(200, {
        name: 'tobi'
      });

    localServer.use('/proxy', proxy('http://127.0.0.1:12345'));
    localServer.use(function (req, res) { res.sendStatus(200); });
    localServer.use(function (err, req, res, next) { throw new Error(err, req, res, next); });

    request(localServer)
      .post('/proxy')
      .send({})
      .set('Content-Type', 'application/json')
      .expect(function (res) {
        assert(res.body.name === 'tobi');
        nockedPostWithoutBody.done();
      })
      .end(done);
  });

});
