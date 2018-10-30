var fs     = require('fs'),
    needle = require('..'),
    stream = require('stream'),
    http   = require('http'),
    should = require('should'),
    sinon  = require('sinon');

var port   = 2233;

describe('request stream length', function() {

  var server, writable;

  function createServer() {
    return http.createServer(function(req, res) {

      req.on('data', function(chunk) {
        // console.log(chunk.length);
      })

      req.on('end', function() {
        res.writeHeader(200, { 'Content-Type': 'application/json'})
        res.end(JSON.stringify({ headers: req.headers }))
      })

    })
  }

  before(function(done) {
    server = createServer();
    server.listen(port, done)
  })

  beforeEach(function() {
    writable = new stream.Readable();
    writable._read = function() {
      this.push('hello world');
      this.push(null);
    }
  })

  after(function(done) {
    server.close(done)
  })

  function send_request(opts, cb) {
    needle.post('http://localhost:' + port, writable, opts, function(err, resp) {
      cb(err, resp)
    })
  }

  describe('no stream_length set', function() {

    it('doesnt set Content-Length header', function(done) {
      send_request({}, function(err, resp) {
        should.not.exist(resp.body.headers['content-length']);
        done()
      })
    })

    it('doesnt work if Transfer-Encoding is set to a blank string', function(done) {
      send_request({ headers: { 'Transfer-Encoding': '' }}, function(err, resp) {
        err.code.should.eql('ECONNRESET');
        done()
      })
    })

    it('works if Transfer-Encoding is not set', function(done) {
      send_request({}, function(err, resp) {
        should.not.exist(err);
        resp.statusCode.should.eql(200);
        done()
      })
    })

  })

  describe('stream_length set to invalid value', function() {

    it('sets Content-Length header to that value', function(done) {
      send_request({ stream_length: 5 }, function(err, resp) {
        should.exist(err);
        err.code.should.eql('ECONNRESET');
        done()
      })
    })

    it('doesnt work if Transfer-Encoding is set to a blank string', function(done) {
      send_request({ stream_length: 5, headers: { 'Transfer-Encoding': '' }}, function(err, resp) {
        err.code.should.eql('ECONNRESET');
        done()
      })
    })

    it('doesnt work if Transfer-Encoding is not set', function(done) {
      send_request({ stream_length: 5 }, function(err, resp) {
        err.code.should.eql('ECONNRESET');
        done()
      })
    })

  })

  describe('stream_length is set to valid value', function() {

    it('sets Content-Length header to that value', function(done) {
      send_request({ stream_length: 11 }, function(err, resp) {
        resp.body.headers['content-length'].should.eql('11');
        done()
      })
    })

    it('works if Transfer-Encoding is set to a blank string', function(done) {
      send_request({ stream_length: 11, headers: { 'Transfer-Encoding': '' }}, function(err, resp) {
        should.not.exist(err);
        resp.statusCode.should.eql(200);
        done()
      })
    })

    it('works if Transfer-Encoding is not set', function(done) {
      send_request({ stream_length: 11 }, function(err, resp) {
        should.not.exist(err);
        resp.statusCode.should.eql(200);
        done()
      })
    })

  })


  describe('stream_length set to 0', function() {

    describe('stream with path', function() {

      var stub;

      beforeEach(function() {
        writable.path = '/foo/bar';
        stub = sinon.stub(fs, 'stat', function(path, cb) {
          cb(null, { size: 11 })
        })
      })

      afterEach(function() {
        stub.restore();
      })

      it('sets Content-Length header to streams length', function(done) {
        send_request({ stream_length: 0 }, function(err, resp) {
          resp.body.headers['content-length'].should.eql('11');
          done()
        })
      })

      it('works if Transfer-Encoding is set to a blank string', function(done) {
        send_request({ stream_length: 0, headers: { 'Transfer-Encoding': '' }}, function(err, resp) {
          should.not.exist(err);
          resp.statusCode.should.eql(200);
          done()
        })
      })

      it('works if Transfer-Encoding is not set', function(done) {
        send_request({ stream_length: 0 }, function(err, resp) {
          should.not.exist(err);
          resp.statusCode.should.eql(200);
          done()
        })
      })

    })

    describe('stream without path', function() {
      it('does not set Content-Length header', function(done) {
        send_request({ stream_length: 0 }, function(err, resp) {
          should.not.exist(resp.body.headers['content-length']);
          done()
        })
      })

      it('doesnt work if Transfer-Encoding is set to a blank string', function(done) {
        send_request({ stream_length: 0, headers: { 'Transfer-Encoding': '' }}, function(err, resp) {
          err.code.should.eql('ECONNRESET');
          done()
        })
      })

      it('works if Transfer-Encoding is not set', function(done) {
        send_request({ stream_length: 0 }, function(err, resp) {
          should.not.exist(err);
          resp.statusCode.should.eql(200);
          done()
        })
      })

    })


  })

})
