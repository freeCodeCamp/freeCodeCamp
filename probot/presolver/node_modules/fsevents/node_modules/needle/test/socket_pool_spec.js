var needle  = require('../'),
    should  = require('should'),
    http    = require('http');

var server, port = 11112;

describe('socket reuse', function() {

  before(function() {
    server = http.createServer(function(req, res) {
      res.setHeader('Content-Type', 'application/json');
      setTimeout(function() {
        res.end('{"foo":"bar"}');
      }, 50);
    }).listen(port);
  });

  after(function() {
    server.close();
  });

  describe('when sockets are reused', function() {

    var httpAgent = new http.Agent({
      keepAlive  : true,
      maxSockets : 1
    });

    it('does not duplicate listeners on .end', function(done) {

      var last_error;
      var count = 10;

      function completed(err) {
        --count || done(last_error);
      }

      function send() {
        needle.get('localhost:' + port, { agent: httpAgent }, function(err, resp) {
          if (err)
            throw new Error("Unexpected error: " + err);

          // lets go through all sockets and inspect all socket objects
          for (hostTarget in httpAgent.sockets) {
            httpAgent.sockets[hostTarget].forEach(function(socket) {
              // normally, there are 2 internal listeners and 1 needle sets up,
              // but to be sure the test does not fail even if newer node versions
              // introduce additional listeners, we use a higher limit.
              try {
                socket.listeners('end').length.should.be.below(5, "too many listeners on the socket object's end event");
              } catch (e) {
                last_error = e;
              }
            });
          }

          completed();
        });
      }

      for (var i = 0; i < count; i++) {
        send();
      }
    });
  });
});
