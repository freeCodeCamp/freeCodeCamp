process.env.NODE_ENV = 'test';

var request = require('supertest')
  , express = require('express')
  , mocha = require('mocha')
  , app = require('../../app.js');

describe('GET /', function(){
  it('should return HTTP 200', function(done){
    request(app)
      .get('/')
      .expect(200, done);
  });
});


