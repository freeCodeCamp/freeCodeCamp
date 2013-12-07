var request = require('request');

describe("Demo", function() {
  it("should return 200 OK", function(done) {
    request("http://localhost:3000", function(error, response, body){
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
});