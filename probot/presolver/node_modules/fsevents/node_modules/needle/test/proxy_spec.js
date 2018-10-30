var helpers = require('./helpers'),
    should  = require('should'),
    sinon   = require('sinon'),
    http    = require('http'),
    needle  = require('./../');

var port = 7707;
var url = 'localhost:' + port;
var nonexisting_host = 'awepfokawepofawe.com';

describe('proxy option', function() {

  var spy, opts;

  function send_request(opts, done) {
    if (spy) spy.restore();
    spy = sinon.spy(http, 'request');
    needle.get(url, opts, done);
  }

  //////////////////////
  // proxy opts helpers

  function not_proxied(done) {
    return function(err, resp) {
      var path = spy.args[0][0].path;
      path.should.eql('/'); // not the full original URI
      spy.restore();
      done();
    }
  }

  function proxied(host, port, done) {
    return function(err, resp) {
      var path = spy.args[0][0].path;
      path.should.eql('http://' + url); // the full original URI

      var http_host = spy.args[0][0].host;
      if (http_host) http_host.should.eql(host);

      var http_port = spy.args[0][0].port;
      if (http_port) http_port.should.eql(port);

      spy.restore();
      done();
    }
  }

  //////////////////////
  // auth helpers

  function get_auth(header) {
    var token  = header.split(/\s+/).pop();
    return token && new Buffer(token, 'base64').toString().split(':');
  }

  function no_proxy_auth(done) {
    return function(err, resp) {
      var headers = spy.args[0][0].headers;
      Object.keys(headers).should.not.containEql('proxy-authorization');
      done();
    }
  }

  function header_set(name, user, pass, done) {
    return function(err, resp) {
      var headers = spy.args[0][0].headers;
      var auth = get_auth(headers[name]);
      auth[0].should.eql(user);
      auth[1].should.eql(pass);
      done();
    }
  }

  function proxy_auth_set(user, pass, done) {
    return header_set('proxy-authorization', user, pass, done);
  }

  function basic_auth_set(user, pass, done) {
    return header_set('authorization', user, pass, done);
  }

  after(function() {
    spy.restore();
  })

  describe('when null proxy is passed', function() {

    it('does not proxy', function(done) {
      send_request({ proxy: null }, not_proxied(done))
    })

    describe('but defaults has been set', function() {

      before(function() {
        needle.defaults({ proxy: 'foobar' });
      })

      after(function() {
        needle.defaults({ proxy: null });
      })

      it('tries to proxy anyway', function(done) {
        send_request({}, proxied('foobar', 80, done))
      })

    })

  })

  describe('when weird string is passed', function() {

    it('tries to proxy anyway', function(done) {
      send_request({ proxy: 'alfalfa' }, proxied('alfalfa', 80, done))
    })
  })

  describe('when valid url is passed', function() {

    it('proxies request', function(done) {
      send_request({ proxy: nonexisting_host + ':123/done' }, proxied(nonexisting_host, '123', done))
    })

    it('does not set a Proxy-Authorization header', function(done) {
      send_request({ proxy: nonexisting_host + ':123/done' }, no_proxy_auth(done));
    })

    describe('and proxy url contains user:pass', function() {

      before(function() {
        opts = {
          proxy: 'http://mj:x@' + nonexisting_host + ':123/done'
        }
      })

      it('proxies request', function(done) {
        send_request(opts, proxied(nonexisting_host, '123', done))
      })

      it('sets Proxy-Authorization header', function(done) {
        send_request(opts, proxy_auth_set('mj', 'x', done));
      })

    })

    describe('and a proxy_user is passed', function() {

      before(function() {
        opts = {
          proxy: nonexisting_host + ':123',
          proxy_user: 'someone',
          proxy_pass: 'else'
        }
      })

      it('proxies request', function(done) {
        send_request(opts, proxied(nonexisting_host, '123', done))
      })

      it('sets Proxy-Authorization header', function(done) {
        send_request(opts, proxy_auth_set('someone', 'else', done));
      })

      describe('and url also contains user:pass', function() {

        it('url user:pass wins', function(done) {
          var opts = {
            proxy: 'http://xxx:yyy@' + nonexisting_host + ':123',
            proxy_user: 'someone',
            proxy_pass: 'else'
          }

          send_request(opts, proxy_auth_set('xxx', 'yyy', done));
        })

      })

      describe('and options.username is also present', function() {

        before(function() {
          opts = { proxy_user: 'foobar', username: 'someone' };
        })

        it('a separate Authorization header is set', function(done) {
          var opts = {
            proxy: nonexisting_host + ':123',
            proxy_user: 'someone',
            proxy_pass: 'else',
            username: 'test',
            password: 'X'
          }

          send_request(opts, basic_auth_set('test', 'X', done));
        })

      })

    })

  })

})
