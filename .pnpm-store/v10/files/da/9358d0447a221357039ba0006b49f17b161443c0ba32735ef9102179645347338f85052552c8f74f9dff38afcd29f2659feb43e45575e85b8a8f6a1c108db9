'use strict';

var assert = require('assert');
var express = require('express');
var request = require('supertest');
var proxy = require('../');

describe('when server responds with an error', function () {

  this.timeout(10000);

  var app;
  var slowTarget;
  var serverReference;

  beforeEach(function () {
    app = express();
  });

  afterEach(function () {
    serverReference.close();
  });

  var STATUS_CODES = [
    { code: 403, text: 'Forbidden', toString: 'Error: cannot GET /proxy (403)' },
    { code: 404, text: 'Not Found', toString: 'Error: cannot GET /proxy (404)' },
    { code: 500, text: 'Internal Server Error', toString: 'Error: cannot GET /proxy (500)' }
  ];

  STATUS_CODES.forEach(function (statusCode) {
    it('express-http-proxy responds with ' + statusCode.text +
      'when proxy server responds ' + statusCode.code, function (done) {
      slowTarget = express();
      slowTarget.use(function (req, res) { res.sendStatus(statusCode.code); });
      serverReference = slowTarget.listen(12345);

      app.use('/proxy', proxy('http://127.0.0.1:12345', {
        reqAsBuffer: true,
        reqBodyEncoding: null,
        parseReqBody: false
      }));

      request(app)
        .get('/proxy')
        .expect(statusCode.code)
        .end(function (err, res) {
          assert(err === null);
          assert(res.error);
          assert(res.error.text === statusCode.text);
          assert(res.error.toString() === statusCode.toString);
          done();
        });
    });
  });
});
