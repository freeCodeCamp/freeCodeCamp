var should = require('should'),
    needle = require('./../'),
    http   = require('http'),
    sinon  = require('sinon'),
    stream = require('stream'),
    fs     = require('fs'),
    port   = 11111,
    server;

describe('with output option', function() {

  var server, handler, file = '/tmp/foobar.out';

  function send_request_cb(where, cb) {
    var url = 'http://localhost:' + port + '/whatever.file';
    return needle.get(url, { output: where }, cb);
  }

  function send_request_stream(where, cb) {
    var url = 'http://localhost:' + port + '/whatever.file';
    var stream = needle.get(url, { output: where });
    stream.on('end', cb);
  }

  // this will only work in UNICES
  function get_open_file_descriptors() {
    var list = fs.readdirSync('/proc/self/fd');
    return list.length;
  }

  var send_request = send_request_cb;

  before(function(){
    server = http.createServer(function(req, res) {
      handler(req, res);
    }).listen(port);
  });

  after(function() {
    server.close();
  })

  beforeEach(function() {
      try { fs.unlinkSync(file) } catch(e) { };
  })

  describe('and a 404 response', function() {

    before(function() {
      handler = function(req, res) {
        res.writeHead(404, {'Content-Type': 'text/plain' });
        res.end();
      }
    })

    it('doesnt attempt to write a file', function(done) {
      var spy = sinon.spy(fs, 'createWriteStream');
      send_request(file, function(err, resp) {
        resp.statusCode.should.eql(404);
        spy.called.should.eql(false);
        spy.restore();
        done();
      })
    })

    it('doesnt actually write a file', function(done) {
      send_request(file, function(err, resp) {
        resp.statusCode.should.eql(404);
        fs.existsSync(file).should.eql(false);
        done();
      })
    })

  })

  describe('and a 200 response', function() {

    describe('for an empty response', function() {

      before(function() {
        handler = function(req, res) {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end();
        }
      })

      it('uses a writableStream', function(done) {
        var spy = sinon.spy(fs, 'createWriteStream');
        send_request(file, function(err, resp) {
          resp.statusCode.should.eql(200);
          spy.called.should.eql(true);
          spy.restore();
          done();
        })
      })

      it('writes a file', function(done) {
        fs.existsSync(file).should.eql(false);
        send_request(file, function(err, resp) {
          fs.existsSync(file).should.eql(true);
          done();
        })
      })

      it('file is zero bytes in length', function(done) {
        send_request(file, function(err, resp) {
          fs.statSync(file).size.should.equal(0);
          done();
        })
      })

      if (process.platform != 'win32') {
        it('closes the file descriptor', function(done) {
          var open_descriptors = get_open_file_descriptors();
          send_request(file + Math.random(), function(err, resp) {
            var current_descriptors = get_open_file_descriptors();
            open_descriptors.should.eql(current_descriptors);
            done()
          })
        })
      }

    })

    describe('for a JSON response', function() {

      before(function() {
        handler = function(req, res) {
          res.writeHead(200, { 'Content-Type': 'application/javascript' });
          res.end(JSON.stringify({foo: 'bar'}));
        }
      })

      it('uses a writableStream', function(done) {
        var spy = sinon.spy(fs, 'createWriteStream');
        send_request(file, function(err, resp) {
          resp.statusCode.should.eql(200);
          spy.called.should.eql(true);
          spy.restore();
          done();
        })
      })

      it('writes a file', function(done) {
        fs.existsSync(file).should.eql(false);
        send_request(file, function(err, resp) {
          fs.existsSync(file).should.eql(true);
          done();
        })
      })

      it('file size equals response length', function(done) {
        send_request(file, function(err, resp) {
          fs.statSync(file).size.should.equal(resp.bytes);
          done();
        })
      })

      it('response pipeline is honoured (JSON is decoded by default)', function(done) {
        send_request_stream(file, function(err, resp) {
          // we need to wait a bit since writing to config.output
          // happens independently of needle's callback logic.
          setTimeout(function() {
            fs.readFileSync(file).toString().should.eql('{\"foo\":\"bar\"}');
            done();
          }, 20);
        })
      })

      it('closes the file descriptor', function(done) {
        var open_descriptors = get_open_file_descriptors();
        send_request(file + Math.random(), function(err, resp) {
          var current_descriptors = get_open_file_descriptors();
          open_descriptors.should.eql(current_descriptors);
          done()
        })
      })

    })

    describe('for a binary file', function() {

      var pixel = new Buffer("base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs", "base64");

      before(function() {
        handler = function(req, res) {
          res.writeHead(200, { 'Content-Type': 'application/octet-stream', 'Transfer-Encoding': 'chunked' });
          res.write(pixel.slice(0, 10));
          res.write(pixel.slice(10, 20));
          res.write(pixel.slice(20, 30));
          res.write(pixel.slice(30));
          res.end();
        }
      })

      it('uses a writableStream', function(done) {
        var spy = sinon.spy(fs, 'createWriteStream');
        send_request(file, function(err, resp) {
          resp.statusCode.should.eql(200);
          spy.called.should.eql(true);
          spy.restore();
          done();
        })
      })

      it('writes a file', function(done) {
        fs.existsSync(file).should.eql(false);
        send_request(file, function(err, resp) {
          fs.existsSync(file).should.eql(true);
          done();
        })
      })

      it('file size equals response length', function(done) {
        send_request(file, function(err, resp) {
          fs.statSync(file).size.should.equal(resp.bytes);
          done();
        })
      })

      it('file is equal to original buffer', function(done) {
        send_request(file, function(err, resp) {
          // we need to wait a bit since writing to config.output
          // happens independently of needle's callback logic.
          setTimeout(function() {
            fs.readFileSync(file).should.eql(pixel);
            done();
          }, 20);
        })
      })

      it('returns the data in resp.body too', function(done) {
        send_request(file, function(err, resp) {
          resp.body.should.eql(pixel);
          done();
        })
      })

      if (process.platform != 'win32') {
        it('closes the file descriptor', function(done) {
          var open_descriptors = get_open_file_descriptors();
          send_request(file + Math.random(), function(err, resp) {
            var current_descriptors = get_open_file_descriptors();
            open_descriptors.should.eql(current_descriptors);
            done()
          })
        })
      }

    })

  })

})
