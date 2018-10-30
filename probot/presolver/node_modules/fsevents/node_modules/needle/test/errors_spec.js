var needle  = require('../'),
    sinon   = require('sinon'),
    should  = require('should'),
    http    = require('http'),
    Emitter = require('events').EventEmitter,
    helpers = require('./helpers');

var get_catch = function(url, opts) {
  var err;
  try {
    needle.get(url, opts);
  } catch(e) {
    err = e;
  }
  return err;
}

describe('errors', function() {

  after(function(done) {
    setTimeout(done, 100)
  })

  describe('when host does not exist', function() {

    var url = 'http://unexistinghost/foo';

    describe('with callback', function() {

      it('does not throw', function() {
        var ex = get_catch(url);
        should.not.exist(ex);
      })

      it('callbacks an error', function(done) {
        needle.get(url, function(err) {
          err.should.be.a.Error;
          done();
        })
      })

      it('error should be ENOTFOUND', function(done) {
        needle.get(url, function(err) {
          err.code.should.match(/ENOTFOUND|EADDRINFO/)
          done();
        })
      })

      it('does not callback a response', function(done) {
        needle.get(url, function(err, resp) {
          should.not.exist(resp);
          done();
        })
      })

      it('does not emit an error event', function(done) {
        var emitted = false;
        var req = needle.get(url, function(err, resp) { })

        req.on('error', function() {
          emitted = true;
        })

        setTimeout(function() {
          emitted.should.eql(false);
          done();
        }, 100);
      })

    })

    describe('without callback', function() {

      it('does not throw', function() {
        var ex = get_catch(url);
        should.not.exist(ex);
      })

      it('emits end event once, with error', function(done) {
        var callcount = 0,
            stream = needle.get(url);

        stream.on('done', function(err) {
          callcount++;
        })

        setTimeout(function() {
          callcount.should.equal(1);
          done();
        }, 200)
      })

      it('error should be ENOTFOUND or EADDRINFO', function(done) {
        var errorific,
            stream = needle.get(url);

        stream.on('done', function(err) {
          errorific = err;
        })

        setTimeout(function() {
          should.exist(errorific);
          errorific.code.should.match(/ENOTFOUND|EADDRINFO/)
          done();
        }, 200)
      })

      it('does not emit a readable event', function(done) {
        var called = false,
            stream = needle.get(url);

        stream.on('readable', function() {
          called = true;
        })

        setTimeout(function() {
          called.should.be.false;
          done();
        }, 50)
      })

      it('does not emit an error event', function(done) {
        var emitted = false,
            req = needle.get(url);

        req.on('error', function() {
          emitted = true;
        })

        setTimeout(function() {
          emitted.should.eql(false);
          done();
        }, 100);
      })

    })

  })

  describe('when request times out waiting for response', function() {

    var server,
        url = 'http://localhost:3333/foo';

    var send_request = function(cb) {
      return needle.get(url, { response_timeout: 200 }, cb);
    }

    before(function() {
      server = helpers.server({ port: 3333, wait: 1000 });
    })

    after(function() {
      server.close();
    })

    describe('with callback', function() {

      it('aborts the request', function(done) {

        var time = new Date();

        send_request(function(err) {
          var timediff = (new Date() - time);
          timediff.should.be.within(200, 300);
          done();
        })

      })

      it('callbacks an error', function(done) {
        send_request(function(err) {
          err.should.be.a.Error;
          done();
        })
      })

      it('error should be ECONNRESET', function(done) {
        send_request(function(err) {
          err.code.should.equal('ECONNRESET')
          done();
        })
      })

      it('does not callback a response', function(done) {
        send_request(function(err, resp) {
          should.not.exist(resp);
          done();
        })
      })

      it('does not emit an error event', function(done) {
        var emitted = false;

        var req = send_request(function(err, resp) {
          should.not.exist(resp);
        })

        req.on('error', function() {
          emitted = true;
        })

        setTimeout(function() {
          emitted.should.eql(false);
          done();
        }, 350);
      })

    })

    describe('without callback', function() {

      it('emits done event once, with error', function(done) {
        var called = 0,
            stream = send_request();

        stream.on('done', function(err) {
          called++;
        })

        setTimeout(function() {
          called.should.equal(1);
          done();
        }, 250)
      })

      it('aborts the request', function(done) {

        var time = new Date();
        var stream = send_request();

        stream.on('done', function(err) {
          var timediff = (new Date() - time);
          timediff.should.be.within(200, 300);
          done();
        })

      })

      it('error should be ECONNRESET', function(done) {
        var error,
            stream = send_request();

        stream.on('done', function(err) {
          error = err;
        })

        setTimeout(function() {
          error.code.should.equal('ECONNRESET')
          done();
        }, 250)
      })

      it('does not emit a readable event', function(done) {
        var called = false,
            stream = send_request();

        stream.on('readable', function() {
          called = true;
        })

        setTimeout(function() {
          called.should.be.false;
          done();
        }, 250)
      })

      it('does not emit an error event', function(done) {
        var emitted = false;
        var req = send_request();

        req.on('error', function() {
          emitted = true;
        })

        setTimeout(function() {
          emitted.should.eql(false);
          done();
        }, 100);
      })

    })

  })

})
