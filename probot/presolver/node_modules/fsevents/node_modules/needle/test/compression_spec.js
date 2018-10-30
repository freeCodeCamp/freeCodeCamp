var should = require('should'),
    needle = require('./../'),
    http   = require('http'),
    zlib   = require('zlib'),
    stream = require('stream'),
    port   = 11123,
    server;

describe('compression', function(){

  require.bind(null, 'zlib').should.not.throw()

  var jsonData = '{"foo":"bar"}';

  describe('when server supports compression', function(){

    before(function(){
      server = http.createServer(function(req, res) {
        var raw = new stream.PassThrough();

        var acceptEncoding = req.headers['accept-encoding'];
        if (!acceptEncoding) {
          acceptEncoding = '';
        }

        if (acceptEncoding.match(/\bdeflate\b/)) {
          res.setHeader('Content-Encoding', 'deflate');
          raw.pipe(zlib.createDeflate()).pipe(res);
        } else if (acceptEncoding.match(/\bgzip\b/)) {
          res.setHeader('Content-Encoding', 'gzip');
          raw.pipe(zlib.createGzip()).pipe(res);
        } else {
          raw.pipe(res);
        }

        res.setHeader('Content-Type', 'application/json')
        if (req.headers['with-bad']) {
          res.end('foo'); // end, no deflate data
        } else {
          raw.end(jsonData)
        }

      })

      server.listen(port);
    });

    after(function(done){
      server.close(done);
    })

    describe('and client requests no compression', function() {
      it('should have the body decompressed', function(done){
        needle.get('localhost:' + port, function(err, response, body){
          should.ifError(err);
          body.should.have.property('foo', 'bar');
          response.bytes.should.equal(jsonData.length);
          done();
        })
      })
    })

    describe('and client requests gzip compression', function() {
      it('should have the body decompressed', function(done){
        needle.get('localhost:' + port, {headers: {'Accept-Encoding': 'gzip'}}, function(err, response, body){
          should.ifError(err);
          body.should.have.property('foo', 'bar');
          response.bytes.should.not.equal(jsonData.length);
          done();
        })
      })
    })

    describe('and client requests deflate compression', function() {
      it('should have the body decompressed', function(done){
        needle.get('localhost:' + port, {headers: {'Accept-Encoding': 'deflate'}}, function(err, response, body){
          should.ifError(err);
          body.should.have.property('foo', 'bar');
          response.bytes.should.not.equal(jsonData.length);
          done();
        })
      })

      it('should rethrow errors from decompressors', function(done){
        needle.get('localhost:' + port, {headers: {'Accept-Encoding': 'deflate', 'With-Bad': 'true'}}, function(err, response, body) {
          should.exist(err);
          err.message.should.equal("incorrect header check");
          err.code.should.equal("Z_DATA_ERROR")
          done();
        })
      })
    })
  })
})
