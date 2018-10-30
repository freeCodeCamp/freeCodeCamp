var helpers = require('./helpers'),
    should  = require('should'),
    needle  = require('./../'),
    server;

var port = 7707;

describe('Basic Auth', function() {

  before(function(done) {
    server = helpers.server({ port: port }, done);
  })

  after(function(done) {
    server.close(done);
  })

  ///////////////// helpers

  var get_auth = function(header) {
    var token  = header.split(/\s+/).pop();
    return token && new Buffer(token, 'base64').toString().split(':');
  }

  describe('when neither username or password are passed', function() {

    it('doesnt send any Authorization headers', function(done) {
      needle.get('localhost:' + port, { parse: true }, function(err, resp) {
        var sent_headers = resp.body.headers;
        Object.keys(sent_headers).should.not.containEql('authorization');
        done();
      })
    })

  })

  describe('when username is an empty string, and password is a valid string', function() {

    var opts = { username: '', password: 'foobar', parse: true };

    it('doesnt send any Authorization headers', function(done) {
      needle.get('localhost:' + port, { parse: true }, function(err, resp) {
        var sent_headers = resp.body.headers;
        Object.keys(sent_headers).should.not.containEql('authorization');
        done();
      })
    })

  });

  describe('when username is a valid string, but no username is passed', function() {

    var opts = { username: 'foobar', parse: true };

    it('sends Authorization header', function(done) {
      needle.get('localhost:' + port, opts, function(err, resp) {
        var sent_headers = resp.body.headers;
        Object.keys(sent_headers).should.containEql('authorization');
        done();
      })
    })

    it('Basic Auth only includes username, without colon', function(done) {
      needle.get('localhost:' + port, opts, function(err, resp) {
        var sent_headers = resp.body.headers;
        var auth = get_auth(sent_headers['authorization']);
        auth[0].should.equal('foobar');
        auth.should.have.lengthOf(1);
        done();
      })
    })

  })

  describe('when username is a valid string, and password is null', function() {

    var opts = { username: 'foobar', password: null, parse: true };

    it('sends Authorization header', function(done) {
      needle.get('localhost:' + port, opts, function(err, resp) {
        var sent_headers = resp.body.headers;
        Object.keys(sent_headers).should.containEql('authorization');
        done();
      })
    })

    it('Basic Auth only includes both username and password', function(done) {
      needle.get('localhost:' + port, opts, function(err, resp) {
        var sent_headers = resp.body.headers;
        var auth = get_auth(sent_headers['authorization']);
        auth[0].should.equal('foobar');
        auth[1].should.equal('');
        done();
      })
    })

  })

  describe('when username is a valid string, and password is an empty string', function() {

    var opts = { username: 'foobar', password: '', parse: true };

    it('sends Authorization header', function(done) {
      needle.get('localhost:' + port, opts, function(err, resp) {
        var sent_headers = resp.body.headers;
        Object.keys(sent_headers).should.containEql('authorization');
        done();
      })
    })

    it('Basic Auth only includes both username and password', function(done) {
      needle.get('localhost:' + port, opts, function(err, resp) {
        var sent_headers = resp.body.headers;
        var auth = get_auth(sent_headers['authorization']);
        auth[0].should.equal('foobar');
        auth[1].should.equal('');
        auth.should.have.lengthOf(2);
        done();
      })
    })

  })

  describe('when username AND password are non empty strings', function() {

    var opts = { username: 'foobar', password: 'jakub', parse: true };

    it('sends Authorization header', function(done) {
      needle.get('localhost:' + port, opts, function(err, resp) {
        var sent_headers = resp.body.headers;
        Object.keys(sent_headers).should.containEql('authorization');
        done();
      })
    })

    it('Basic Auth only includes both user and password', function(done) {
      needle.get('localhost:' + port, opts, function(err, resp) {
        var sent_headers = resp.body.headers;
        var auth = get_auth(sent_headers['authorization']);
        auth[0].should.equal('foobar');
        auth[1].should.equal('jakub');
        auth.should.have.lengthOf(2);
        done();
      })
    })

  })

  describe('URL with @ but not username/pass', function() {
    it('doesnt send Authorization header', function(done) {
      var url = 'localhost:' + port + '/abc/@def/xyz.zip';

      needle.get(url, {}, function(err, resp) {
        var sent_headers = resp.body.headers;
        Object.keys(sent_headers).should.not.containEql('authorization');
        done();
      })
    })

    it('sends user:pass headers if passed via options', function(done) {
      var url = 'localhost:' + port + '/abc/@def/xyz.zip';

      needle.get(url, { username: 'foo' }, function(err, resp) {
        var sent_headers = resp.body.headers;
        Object.keys(sent_headers).should.containEql('authorization');
        sent_headers['authorization'].should.eql('Basic Zm9v')
        done();
      })
    })
  })

  describe('when username/password are included in URL', function() {
    var opts = { parse: true };

    it('sends Authorization header', function(done) {
      needle.get('foobar:jakub@localhost:' + port, opts, function(err, resp) {
        var sent_headers = resp.body.headers;
        Object.keys(sent_headers).should.containEql('authorization');
        done();
      })
    })

    it('Basic Auth only includes both user and password', function(done) {
      needle.get('foobar:jakub@localhost:' + port, opts, function(err, resp) {
        var sent_headers = resp.body.headers;
        var auth = get_auth(sent_headers['authorization']);
        auth[0].should.equal('foobar');
        auth[1].should.equal('jakub');
        auth.should.have.lengthOf(2);
        done();
      })
    })

  })

})
