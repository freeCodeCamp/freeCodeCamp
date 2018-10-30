var helpers = require('./helpers'),
    should  = require('should'),
    sinon   = require('sinon'),
    needle  = require('./../');

var ports = {
  http  : 8888,
  https : 9999
}

var protocols = {
  http  : require('http'),
  https : require('https')
}

var code = 301;
var location; // var to set the response location

function response_code() {
  return code;
}

function response_headers() {
  return { 'Content-Type': 'text/plain', 'Location': location }
}

describe('redirects', function() {

  var spies   = {},
      servers = {};

  var current_protocol;
  var hostname = require('os').hostname();

  // open two servers, one that responds to a redirect
  before(function(done) {

    var conf = {
      port    : ports.http,
      code    : response_code,
      headers : response_headers
    }

    servers.http = helpers.server(conf, function() {
      conf.port = ports.https;
      conf.protocol = 'https';
      servers.https = helpers.server(conf, done);
    });
  })

  after(function(done) {
    servers.http.close(function() {
      servers.https.close(done);
    });
  })

  var prots = {'http': 'https'};
  Object.keys(prots).forEach(function(protocol) {

    current_protocol = protocol;
    var other_protocol = protocol == 'http' ? 'https' : 'http';

    var opts, // each test will modify this
        host = '127.0.0.1',
        url  = protocol + '://' + host + ':' + ports[protocol] + '/hello';

    function send_request(opts, cb) {
      opts.rejectUnauthorized = false;
      // console.log(' -- sending request ' + url + ' -- redirect to ' + location);
      needle.post(url, { foo: 'bar' }, opts, cb);
    }

    function not_followed(done) {
      send_request(opts, function(err, resp) {
        resp.statusCode.should.eql(301);
        if (current_protocol == 'http') {
          spies.http.callCount.should.eql(1); // only original request
          spies.https.callCount.should.eql(0);
        } else {
          spies.http.callCount.should.eql(0);
          spies.https.callCount.should.eql(1); // only original request
        }
        done();
      })
    }

    function followed_same_protocol(done) {
      send_request(opts, function(err, resp) {
        // the original request plus the redirect one
        spies[current_protocol].callCount.should.eql(2);
        done();
      })

    }

    function followed_other_protocol(done) {
      send_request(opts, function(err, resp) {
        // on new node versions, https.request calls http.request internally,
        // so we need to amount for that additional call.

        var http_calls = protocols.http.Agent.defaultMaxSockets == Infinity ? 2 : 1;

        spies.http.callCount.should.eql(http_calls); // the one(s) from http.request
        spies.https.callCount.should.eql(1); // the one from https.request (redirect)
        done();
      })
    }

    // set a spy on [protocol].request
    // so we can see how many times a request was made
    before(function() {
      spies.http  = sinon.spy(protocols.http, 'request');
      spies.https = sinon.spy(protocols.https, 'request');
    })

    // and make sure it is restored after each test
    afterEach(function() {
      spies.http.reset();
      spies.https.reset();
    })

    after(function() {
      spies.http.restore();
      spies.https.restore();
    })

    describe('when overriding defaults', function() {

      before(function() {
        needle.defaults({ follow_max: 10 });
        opts = {};
      })

      after(function() {
        // reset values to previous
        needle.defaults({ follow_max: 0 });
      })

      describe('and redirected to the same path on same host and protocol', function() {
        before(function() {
          location = url;
        })
        it('does not follow redirect', not_followed);
      })

      describe('and redirected to the same path on same host and different protocol', function() {
        before(function() {
          location = url.replace(protocol, other_protocol).replace(ports[protocol], ports[other_protocol]);
        })

        it('follows redirect', followed_other_protocol);
      })

      describe('and redirected to a different path on same host, same protocol', function() {
        before(function() {
          location = url.replace('/hello', '/goodbye');
        })
        it('follows redirect', followed_same_protocol);
      })

      describe('and redirected to a different path on same host, different protocol', function() {
        before(function() {
          location = url.replace('/hello', '/goodbye').replace(protocol, other_protocol).replace(ports[protocol], ports[other_protocol]);
        })
        it('follows redirect', followed_other_protocol);
      })

      describe('and redirected to same path on another host, same protocol', function() {
        before(function() {
          location = url.replace(host, hostname);
        })
        it('follows redirect', followed_same_protocol);
      })

      describe('and redirected to same path on another host, different protocol', function() {
        before(function() {
          location = url.replace(host, hostname).replace(protocol, other_protocol).replace(ports[protocol], ports[other_protocol]);
        })
        it('follows redirect', followed_other_protocol);
      })

    })

    // false and null have the same result
    var values = [false, null];
    values.forEach(function(value) {

      describe('when follow is ' + value, function() {

        before(function() {
          opts = { follow: value };
        })



        describe('and redirected to the same path on same host and protocol', function() {
          before(function() {
            location = url;
          })

          it('throws an error', function() {
            (function() {
              send_request(opts, function() { });
            }).should.throw;
          })

        })

      })

    })

    describe('when follow is true', function() {

      before(function() {
        opts = { follow: true };
      })

      describe('and redirected to the same path on same host and protocol', function() {
        before(function() { location = url })

        it('throws an error', function() {
          (function() {
            send_request(opts, function() { });
          }).should.throw;
        })

      })

    })

    describe('when follow is > 0', function() {

      before(function() {
        needle.defaults({ follow: 10 });
      })

      after(function() {
        needle.defaults({ follow: 0 });
      })

      describe('when keep_method is false', function() {

        before(function() {
          opts = { follow_keep_method: false };
        })

        // defaults to follow host and protocol
        describe('and redirected to the same path on same host and different protocol', function() {

          before(function() {
            location = url.replace(protocol, other_protocol);
          })

          it('follows redirect', followed_other_protocol);

          it('sends a GET request with no data', function(done) {
            send_request(opts, function(err, resp) {
              spies.http.args[0][0].method.should.eql('GET');
              // spy.args[0][3].should.eql(null);
              done();
            })
          })

        })

      })

      describe('and set_referer is true', function() {

        before(function() {
          opts = { follow_set_referer: true };
        })

        // defaults to follow host and protocol
        describe('and redirected to the same path on same host and different protocol', function() {

          before(function() {
            location = url.replace(protocol, other_protocol);
          })

          it('follows redirect', followed_other_protocol);

          it('sets Referer header when following redirect', function(done) {
            send_request(opts, function(err, resp) {
              spies.http.args[0][0].headers['referer'].should.eql("http://" + host + ":8888/hello");
              // spies.http.args[0][3].should.eql({ foo: 'bar'});
              done();
            })
          })

        })

      })

      describe('and keep_method is true', function() {

        before(function() {
          opts = { follow_keep_method: true };
        })

        // defaults to follow host and protocol
        describe('and redirected to the same path on same host and different protocol', function() {

          before(function() {
            location = url.replace(protocol, other_protocol);
          })

          it('follows redirect', followed_other_protocol);

          it('sends a POST request with the original data', function(done) {
            send_request(opts, function(err, resp) {
              spies.http.args[0][0].method.should.eql('post');
              // spies.http.args[0][3].should.eql({ foo: 'bar'});
              done();
            })
          })

        })

      })

      describe('and if_same_host is false', function() {

        before(function() {
          opts = { follow_if_same_host: false };
        })

        // by default it will follow other protocols
        describe('and redirected to same path on another domain, same protocol', function() {
          before(function() {
            location = url.replace(host, hostname);
          })
          it('follows redirect', followed_same_protocol);
        })

      })

      describe('and if_same_host is true', function() {

        before(function() {
          opts = { follow_if_same_host: true };
        })

        // by default it will follow other protocols
        describe('and redirected to same path on another domain, same protocol', function() {
          before(function() {
            location = url.replace(host, hostname);
          })

          it('does not follow redirect', not_followed);
        })

      })

      describe('and if_same_protocol is false', function() {

        before(function() {
          opts = { follow_if_same_protocol: false };
        })

        // by default it will follow other hosts
        describe('and redirected to same path on another domain, different protocol', function() {
          before(function() {
            location = url.replace(host, hostname).replace(protocol, other_protocol).replace(ports[protocol], ports[other_protocol]);
          })
          it('follows redirect', followed_other_protocol);
        })

      })

      describe('and if_same_protocol is true', function() {

        before(function() {
          opts = { follow_if_same_protocol: true };
        })

        // by default it will follow other hosts
        describe('and redirected to same path on another domain, different protocol', function() {
          before(function() {
            location = url.replace(host, hostname).replace(protocol, other_protocol).replace(ports[protocol], ports[other_protocol]);
          })
          it('does not follow redirect', not_followed);
        })

      })

    })

  })

});
