var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /reset', function() {
  it('should load password reset page', function(done) {
    request(app)
      .get('/reset')
      .expect(200, done);
    // this will fail
  });
});