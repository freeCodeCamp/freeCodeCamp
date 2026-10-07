'use strict';

var assert = require('assert');
var express = require('express');
var bodyParser = require('body-parser');
var request = require('supertest');
var proxy = require('../');

describe('http verbs', function () {
  this.timeout(10000);

  var app;

  beforeEach(function () {
    app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(proxy('httpbin.org'));
  });

  it('test proxy get', function (done) {
    request(app)
      .get('/get')
      .end(function (err, res) {
        if (err) { return done(err); }
        assert(/node-superagent/.test(res.body.headers['User-Agent']));
        assert.equal(res.body.url, 'http://httpbin.org/get');
        done(err);
      });
  });

  it('test proxy post', function (done) {
    request(app)
      .post('/post')
      .send({
        mypost: 'hello'
      })
      .end(function (err, res) {
        assert.equal(res.body.data, '{"mypost":"hello"}');
        done(err);
      });
  });

  it('test proxy post by x-www-form-urlencoded', function (done) {
    request(app)
      .post('/post')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('mypost=hello')
      .end(function (err, res) {
        assert.equal(JSON.stringify(res.body.form), '{"mypost":"hello"}');
        done(err);
      });
  });

  it('test proxy put', function (done) {
    request(app)
      .put('/put')
      .send({
        mypost: 'hello'
      })
      .end(function (err, res) {
        assert.equal(res.body.data, '{"mypost":"hello"}');
        done(err);
      });
  });

  it('test proxy patch', function (done) {
    request(app)
      .patch('/patch')
      .send({
        mypost: 'hello'
      })
      .end(function (err, res) {
        assert.equal(res.body.data, '{"mypost":"hello"}');
        done(err);
      });
  });

  it('test proxy delete', function (done) {
    request(app)
      .del('/delete')
      .send({
        mypost: 'hello'
      })
      .end(function (err, res) {
        assert.equal(res.body.data, '{"mypost":"hello"}');
        done(err);
      });
  });
});
