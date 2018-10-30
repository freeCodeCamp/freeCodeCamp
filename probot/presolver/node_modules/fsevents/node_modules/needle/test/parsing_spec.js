var should = require('should'),
    needle = require('./../'),
    http   = require('http'),
    port   = 11111,
    server;

describe('parsing', function(){

  describe('when response is an JSON string', function(){

    var json_string = '{"foo":"bar"}';

    before(function(done){
      server = http.createServer(function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(json_string);
      }).listen(port, done);
    });

    after(function(done){
      server.close(done);
    })

    describe('and parse option is not passed', function() {

      describe('with default parse_response', function() {

        before(function() {
          needle.defaults().parse_response.should.eql('all')
        })

        it('should return object', function(done){
          needle.get('localhost:' + port, function(err, response, body){
            should.ifError(err);
            body.should.have.property('foo', 'bar');
            done();
          })
        })

      })

      describe('and default parse_response is set to false', function() {

        it('does NOT return object when disabled using .defaults', function(done){
          needle.defaults({ parse_response: false })

          needle.get('localhost:' + port, function(err, response, body) {
            should.not.exist(err);
            body.should.be.an.instanceof(Buffer)
            body.toString().should.eql('{"foo":"bar"}');

            needle.defaults({ parse_response: 'all' });
            done();
          })
        })


      })

    })

    describe('and parse option is true', function() {

      describe('and JSON is valid', function() {

        it('should return object', function(done) {
          needle.get('localhost:' + port, { parse: true }, function(err, response, body){
            should.not.exist(err);
            body.should.have.property('foo', 'bar')
            done();
          })
        })

        it('should have a .parser = json property', function(done) {
          needle.get('localhost:' + port, { parse: true }, function(err, resp) {
            should.not.exist(err);
            resp.parser.should.eql('json');
            done();
          })
        })

      });

      describe('and response is empty', function() {

        var old_json_string;

        before(function() {
          old_json_string = json_string;
          json_string = "";
        });

        after(function() {
          json_string = old_json_string;
        });

        it('should return an empty string', function(done) {
          needle.get('localhost:' + port, { parse: true }, function(err, resp) {
            should.not.exist(err);
            resp.body.should.equal('');
            done();
          })
        })

      })

      describe('and JSON is invalid', function() {

        var old_json_string;

        before(function() {
          old_json_string = json_string;
          json_string = "this is not going to work";
        });

        after(function() {
          json_string = old_json_string;
        });

        it('does not throw', function(done) {
          (function(){
            needle.get('localhost:' + port, { parse: true }, done);
          }).should.not.throw();
        });

        it('does NOT return object', function(done) {
          needle.get('localhost:' + port, { parse: true }, function(err, response, body) {
            should.not.exist(err);
            body.should.be.a.String;
            body.toString().should.eql('this is not going to work');
            done();
          })
        })

      });

    })

    describe('and parse option is false', function() {

      it('does NOT return object', function(done){
        needle.get('localhost:' + port, { parse: false }, function(err, response, body) {
          should.not.exist(err);
          body.should.be.an.instanceof(Buffer)
          body.toString().should.eql('{"foo":"bar"}');
          done();
        })
      })

      it('should NOT have a .parser = json property', function(done) {
        needle.get('localhost:' + port, { parse: false }, function(err, resp) {
          should.not.exist(err);
          should.not.exist(resp.parser);
          done();
        })
      })

    })

    describe('and parse option is "xml"', function() {

      it('does NOT return object', function(done){
        needle.get('localhost:' + port, { parse: 'xml' }, function(err, response, body) {
          should.not.exist(err);
          body.should.be.an.instanceof(Buffer)
          body.toString().should.eql('{"foo":"bar"}');
          done();
        })
      })

      it('should NOT have a .parser = json property', function(done) {
        needle.get('localhost:' + port, { parse: 'xml' }, function(err, resp) {
          should.not.exist(err);
          should.not.exist(resp.parser);
          done();
        })
      })

    })

  });

  describe('when response is JSON \'false\'', function(){

    var json_string = 'false';

    before(function(done){
      server = http.createServer(function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(json_string);
      }).listen(port, done);
    });

    after(function(done){
      server.close(done);
    })

    describe('and parse option is not passed', function() {

      it('should return object', function(done){
        needle.get('localhost:' + port, function(err, response, body){
          should.ifError(err);
          body.should.equal(false);
          done();
        })
      })

    })

    describe('and parse option is true', function() {

      describe('and JSON is valid', function() {

        it('should return object', function(done){
          needle.get('localhost:' + port, { parse: true }, function(err, response, body){
            should.not.exist(err);
            body.should.equal(false)
            done();
          })
        })

      });

      describe('and response is empty', function() {

        var old_json_string;

        before(function() {
          old_json_string = json_string;
          json_string = "";
        });

        after(function() {
          json_string = old_json_string;
        });

        it('should return an empty string', function(done) {
          needle.get('localhost:' + port, { parse: true }, function(err, resp) {
            should.not.exist(err);
            resp.body.should.equal('');
            done();
          })
        })

      })

      describe('and JSON is invalid', function() {

        var old_json_string;

        before(function() {
          old_json_string = json_string;
          json_string = "this is not going to work";
        });

        after(function() {
          json_string = old_json_string;
        });

        it('does not throw', function(done) {
          (function(){
            needle.get('localhost:' + port, { parse: true }, done);
          }).should.not.throw();
        });

        it('does NOT return object', function(done) {
          needle.get('localhost:' + port, { parse: true }, function(err, response, body) {
            should.not.exist(err);
            body.should.be.a.String;
            body.toString().should.eql('this is not going to work');
            done();
          })
        })

      });

    })

    describe('and parse option is false', function() {

      it('does NOT return object', function(done){
        needle.get('localhost:' + port, { parse: false }, function(err, response, body) {
          should.not.exist(err);
          body.should.be.an.instanceof(Buffer)
          body.toString().should.eql('false');
          done();
        })
      })

    })

    describe('and parse option is "xml"', function() {

      it('does NOT return object', function(done){
        needle.get('localhost:' + port, { parse: 'xml' }, function(err, response, body) {
          should.not.exist(err);
          body.should.be.an.instanceof(Buffer)
          body.toString().should.eql('false');
          done();
        })
      })

    })


  });

  describe('when response is an invalid XML string', function(){

    before(function(done){
      server = http.createServer(function(req, res) {
        res.writeHeader(200, {'Content-Type': 'application/xml'})
        res.end("<post><body there11post>")
      }).listen(port, done);
    });

    after(function(done){
      server.close(done);
    })

    describe('and parse_response is true', function(){

      it('should return original string', function(done) {
        needle.get('localhost:' + port, { parse_response: true }, function(err, response, body) {
          should.not.exist(err);
          body.should.eql('<post><body there11post>')
          should.not.exist(body.name);
          done();
        })
      })

      it('should not have a .parser = xml property', function(done) {
        needle.get('localhost:' + port, { parse_response: true }, function(err, resp) {
          should.not.exist(err);
          should.not.exist(resp.parser);
          done();
        })
      })

    })

    describe('and parse response is false', function(){

      it('should return valid object', function(done) {
        needle.get('localhost:' + port, { parse_response: false }, function(err, response, body){
          should.not.exist(err);
          body.toString().should.eql('<post><body there11post>')
          done();
        })
      })

      it('should not have a .parser property', function(done) {
        needle.get('localhost:' + port, { parse_response: false }, function(err, resp) {
          should.not.exist(err);
          should.not.exist(resp.parser)
          done();
        })
      })

    })

  })

  describe('when response is a valid XML string', function(){

    before(function(done) {
      server = http.createServer(function(req, res) {
        res.writeHeader(200, {'Content-Type': 'application/xml'})
        res.end("<post><p>hello</p><p>world</p></post>")
      }).listen(port, done);
    });

    after(function(done) {
      server.close(done);
    })

    describe('and parse_response is true', function(){

      it('should return valid object', function(done) {
        needle.get('localhost:' + port, { parse_response: true }, function(err, response, body) {
          should.not.exist(err);
          body.name.should.eql('post')
          body.children[0].name.should.eql('p')
          body.children[0].value.should.eql('hello')

          body.children[1].name.should.eql('p')
          body.children[1].value.should.eql('world')
          done();
        })
      })

      it('should have a .parser = xml property', function(done) {
        needle.get('localhost:' + port, { parse_response: true }, function(err, resp) {
          should.not.exist(err);
          resp.parser.should.eql('xml');
          done();
        })
      })

    })

    describe('and parse response is false', function(){

      it('should return valid object', function(done) {
        needle.get('localhost:' + port, { parse_response: false }, function(err, response, body){
          should.not.exist(err);
          body.toString().should.eql('<post><p>hello</p><p>world</p></post>')
          done();
        })
      })

      it('should not have a .parser property', function(done) {
        needle.get('localhost:' + port, { parse_response: false }, function(err, resp) {
          should.not.exist(err);
          should.not.exist(resp.parser)
          done();
        })
      })

    })

  })


  describe('valid XML, using xml2js', function() {

    var parsers, origParser;

    before(function(done) {
      var xml2js = require('xml2js')
      parsers = require('../lib/parsers');
      origParser = parsers['application/xml'];

      var customParser = require('xml2js').parseString;
      parsers.use('xml2js', ['application/xml'], function(buff, cb) {
        var opts = { explicitRoot: true, explicitArray: false };
        customParser(buff, opts, cb);
      })

      server = http.createServer(function(req, res) {
        res.writeHeader(200, {'Content-Type': 'application/xml'})
        res.end("<post><p>hello</p><p>world</p></post>")
      }).listen(port, done);
    });

    after(function(done) {
      parsers['application/xml'] = origParser;
      server.close(done);
    })

    describe('and parse_response is true', function(){

      it('should return valid object', function(done) {
        needle.get('localhost:' + port, { parse_response: true }, function(err, response, body) {
          should.not.exist(err);
          body.should.eql({ post: { p: ['hello', 'world' ]}})
          done();
        })
      })

      it('should have a .parser = xml property', function(done) {
        needle.get('localhost:' + port, { parse_response: true }, function(err, resp) {
          should.not.exist(err);
          resp.parser.should.eql('xml2js');
          done();
        })
      })

    })

    describe('and parse response is false', function(){

      it('should return valid object', function(done) {
        needle.get('localhost:' + port, { parse_response: false }, function(err, response, body){
          should.not.exist(err);
          body.toString().should.eql('<post><p>hello</p><p>world</p></post>')
          done();
        })
      })

      it('should not have a .parser property', function(done) {
        needle.get('localhost:' + port, { parse_response: false }, function(err, resp) {
          should.not.exist(err);
          should.not.exist(resp.parser)
          done();
        })
      })

    })

  })


})
