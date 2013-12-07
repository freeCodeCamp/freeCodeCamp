describe("MongoDB", function() {
  it("is there a server running", function(next) {
    var mongoose = require('mongoose');
    mongoose.connect('localhost', function(err) {
      expect(err).toBe(null);
      next();
    });
  });
});
