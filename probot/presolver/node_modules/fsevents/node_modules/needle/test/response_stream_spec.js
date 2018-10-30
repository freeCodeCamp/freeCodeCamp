var should = require('should'),
    needle = require('./../'),
    http   = require('http'),
    stream = require('stream'),
    fs     = require('fs'),
    port   = 11111,
    server;

describe('response streams', function() {

  describe('when the server sends back json', function(){

    before(function() {
      server = http.createServer(function(req, res) {
        res.setHeader('Content-Type', 'application/json')
        res.end('{"foo":"bar"}')
      }).listen(port);
    });

    after(function() {
      server.close();
    })

    describe('and the client uses streams', function(){

      it('should create a proper streams2 stream', function(done) {
        var stream = needle.get('localhost:' + port)

        // newer node versions set this to null instead of false
        var bool = !!stream._readableState.flowing;
        should.equal(false, bool);

        var readableCalled = false;
        stream.on('readable', function() {
          readableCalled = true;
        })

        stream.on('done', function() {
          readableCalled.should.be.true;
          done();
        });

        stream.resume()

      })

      it('emits a single data item which is our JSON object', function(done) {
        var stream = needle.get('localhost:' + port)

        var chunks = [];
        stream.on('readable', function () {
          while (chunk = this.read()) {
            chunk.should.be.an.Object;
            chunks.push(chunk);
          }
        })

        stream.on('done', function () {
          chunks.should.have.length(1)
          chunks[0].should.have.property('foo', 'bar');
          done();
        });
      })

      it('emits a raw buffer if we do not want to parse JSON', function(done) {
        var stream  = needle.get('localhost:' + port, { parse: false })

        var chunks = [];
        stream.on('readable', function () {
          while (chunk = this.read()) {
            Buffer.isBuffer(chunk).should.be.true;
            chunks.push(chunk);
          }
        })

        stream.on('done', function() {
          var body = Buffer.concat(chunks).toString();
          body.should.equal('{"foo":"bar"}')
          done();
        });
      })

    })
  })

  describe('when the server sends back what was posted to it', function () {
    var file = 'asdf.txt';

    before(function(done){
      server = http.createServer(function(req, res) {
        res.setHeader('Content-Type', 'application/octet')
        req.pipe(res);
      }).listen(port);

      fs.writeFile(file, 'contents of stream', done);
    });

    after(function(done){
      server.close();
      fs.unlink(file, done);
    })

    it('can PUT a stream', function (done) {
      var stream = needle.put('localhost:' + port, fs.createReadStream(file), { stream: true });

      var chunks = [];
      stream.on('readable', function () {
        while (chunk = this.read()) {
          Buffer.isBuffer(chunk).should.be.true;
          chunks.push(chunk);
        }
      })

      stream.on('end', function () {
        var body = Buffer.concat(chunks).toString();
          body.should.equal('contents of stream')
          done();
      });
    });

    it('can PATCH a stream', function (done) {
      var stream = needle.patch('localhost:' + port, fs.createReadStream(file), { stream: true });

      var chunks = [];
      stream.on('readable', function () {
        while (chunk = this.read()) {
          Buffer.isBuffer(chunk).should.be.true;
          chunks.push(chunk);
        }
      })

      stream.on('end', function () {
        var body = Buffer.concat(chunks).toString();
          body.should.equal('contents of stream')
          done();
      });
    });
  })
})
