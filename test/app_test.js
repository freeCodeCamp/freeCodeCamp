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
  it('should return 404', function(done) {
    request(app)
      .get('/reset')
      .expect(404, done);
    // this will fail
  });
});