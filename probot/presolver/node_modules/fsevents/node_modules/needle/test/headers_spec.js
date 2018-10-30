var http    = require('http'),
    helpers = require('./helpers'),
    should  = require('should');

var port = 5432;

describe('request headers', function() {

  var needle,
      server,
      existing_sockets,
      original_defaultMaxSockets;

  before(function(done) {
    setTimeout(function() {
      existing_sockets = get_active_sockets().length;
      server = helpers.server({ port: port }, done);
    }, 100);
  })

  after(function(done) {
    server.close(done)
  })

  function send_request(opts, cb) {
    needle.get('http://localhost:' + port, opts, cb);
  }

  function get_active_sockets() {
    var handles = process._getActiveHandles();

    // only return the ones that have a .end() function (like a socket)
    return handles.filter(function(el) {
      if (el.constructor.name.toString() == 'Socket') {
        return el.destroyed !== true;
      }
    })
  }

  describe('old node versions (<0.11.4) with persistent keep-alive connections', function() {

    before(function() {
      delete require.cache[require.resolve('..')] // in case it was already loaded
      original_defaultMaxSockets = http.Agent.defaultMaxSockets;
      http.Agent.defaultMaxSockets = 5;
      needle = require('..');
    })

    after(function() {
      http.Agent.defaultMaxSockets = original_defaultMaxSockets;
      delete require.cache[require.resolve('..')]
    })

    describe('default options', function() {

      it('sends a Connection: close header', function(done) {
        send_request({}, function(err, resp) {
          resp.body.headers['connection'].should.eql('close');
          done();
        })
      })

      it('no open sockets remain after request', function(done) {
        send_request({}, function(err, resp) {
          get_active_sockets().length.should.eql(existing_sockets);
          done();
        });
      })

    })

    describe('passing connection: close', function() {

      it('sends a Connection: close header', function(done) {
        send_request({ connection: 'close' }, function(err, resp) {
          resp.body.headers['connection'].should.eql('close');
          done();
        })
      })

      it('no open sockets remain after request', function(done) {
        send_request({ connection: 'close' }, function(err, resp) {
          get_active_sockets().length.should.eql(existing_sockets);
          done();
        });
      })

    })

    describe('passing connection: keep-alive', function() {

      it('sends a Connection: keep-alive header (using options.headers.connection)', function(done) {
        send_request({ headers: { connection: 'keep-alive' }}, function(err, resp) {
          resp.body.headers['connection'].should.eql('keep-alive');
          done();
        })
      })

      it('sends a Connection: keep-alive header (using options.connection)', function(done) {
        send_request({ connection: 'keep-alive' }, function(err, resp) {
          resp.body.headers['connection'].should.eql('keep-alive');
          done();
        })
      })

      it('one open socket remain after request', function(done) {
        send_request({ connection: 'keep-alive' }, function(err, resp) {
          get_active_sockets().length.should.eql(existing_sockets + 1);
          done();
        });
      })

    })

  })

  describe('new node versions with smarter connection disposing', function() {

    before(function() {
      delete require.cache[require.resolve('..')]
      original_defaultMaxSockets = http.Agent.defaultMaxSockets;
      http.Agent.defaultMaxSockets = Infinity;
      needle = require('..');
    })

    after(function() {
      http.Agent.defaultMaxSockets = original_defaultMaxSockets;
      delete require.cache[require.resolve('..')]
    })

    describe('default options', function() {

      // TODO:
      // this is weird. by default, new node versions set a 'close' header
      // while older versions set a keep-alive header

      it.skip('sets a Connection header', function(done) {
        send_request({}, function(err, resp) {
          // should.not.exist(resp.body.headers['connection']);
          // done();
        })
      })

      it.skip('one open sockets remain after request', function(done) {
        send_request({}, function(err, resp) {
          // get_active_sockets().length.should.eql(1);
          // done();
        });
      })

    })

    describe('passing connection: close', function() {

      it('sends a Connection: close header', function(done) {
        send_request({ connection: 'close' }, function(err, resp) {
          resp.body.headers['connection'].should.eql('close');
          done();
        })
      })

      it('no open sockets remain after request', function(done) {
        send_request({ connection: 'close' }, function(err, resp) {
          get_active_sockets().length.should.eql(existing_sockets);
          done();
        });
      })

    })

    describe('passing connection: keep-alive', function() {

      it('sends a Connection: keep-alive header (using options.headers.connection)', function(done) {
        send_request({ headers: { connection: 'keep-alive' }}, function(err, resp) {
          resp.body.headers['connection'].should.eql('keep-alive');
          done();
        })
      })

      it('sends a Connection: keep-alive header (using options.connection)', function(done) {
        send_request({ connection: 'keep-alive' }, function(err, resp) {
          resp.body.headers['connection'].should.eql('keep-alive');
          done();
        })
      })

      it('one open socket remain after request', function(done) {
        send_request({ connection: 'keep-alive' }, function(err, resp) {
          get_active_sockets().length.should.eql(existing_sockets + 1);
          done();
        });
      })

    })

  })

})
