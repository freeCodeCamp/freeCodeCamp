var needle = require('../'),
    should = require('should');

describe('when posting a very long string', function() {

  this.timeout(20000);

  function get_string(length) {
    var str = '';
    for (var i = 0; i < length; i++) {
      str += 'x';
    }
    return str;
  }

  it("shouldn't throw an EPIPE error out of nowhere", function(done) {
    var error;

    function finished() {
      setTimeout(function() {
        should.not.exist(error);
        done();
      }, 300);
    }

    try {
      needle.post('http://google.com', { data: get_string(Math.pow(2, 20)) }, finished)
    } catch(e) {
      error = e;
    }

  })

})
