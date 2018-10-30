/**
 * Module dependencies.
 */

var fs = require('fs');
var url = require('url');
var net = require('net');
var tls = require('tls');
var http = require('http');
var https = require('https');
var WebSocket = require('ws');
var assert = require('assert');
var events = require('events');
var inherits = require('util').inherits;
var Agent = require('../');

var PassthroughAgent = Agent(function(req, opts) {
  return opts.secureEndpoint ? https.globalAgent : http.globalAgent;
});

describe('Agent', function() {
  describe('subclass', function() {
    it('should be subclassable', function(done) {
      function MyAgent() {
        Agent.call(this);
      }
      inherits(MyAgent, Agent);

      MyAgent.prototype.callback = function(req, opts, fn) {
        assert.equal(req.path, '/foo');
        assert.equal(req.getHeader('host'), '127.0.0.1:1234');
        assert.equal(opts.secureEndpoint, true);
        done();
      };

      var info = url.parse('https://127.0.0.1:1234/foo');
      info.agent = new MyAgent();
      https.get(info);
    });
  });
  describe('options', function() {
    it('should support an options Object as first argument', function() {
      var agent = new Agent({ timeout: 1000 });
      assert.equal(1000, agent.timeout);
    });
    it('should support an options Object as second argument', function() {
      var agent = new Agent(function() {}, { timeout: 1000 });
      assert.equal(1000, agent.timeout);
    });
    it('should be mixed in with HTTP request options', function(done) {
      var agent = new Agent({
        host: 'my-proxy.com',
        port: 3128,
        foo: 'bar'
      });
      agent.callback = function(req, opts, fn) {
        assert.equal('bar', opts.foo);
        assert.equal('a', opts.b);

        // `host` and `port` are special-cases, and should always be
        // overwritten in the request `opts` inside the agent-base callback
        assert.equal('localhost', opts.host);
        assert.equal(80, opts.port);
        done();
      };
      var opts = {
        b: 'a',
        agent: agent
      };
      http.get(opts);
    });
  });
  describe('`this` context', function() {
    it('should be the Agent instance', function(done) {
      var called = false;
      var agent = new Agent();
      agent.callback = function() {
        called = true;
        assert.equal(this, agent);
      };
      var info = url.parse('http://127.0.0.1/foo');
      info.agent = agent;
      var req = http.get(info);
      req.on('error', function(err) {
        assert(/no Duplex stream was returned/.test(err.message));
        done();
      });
    });
    it('should be the Agent instance with callback signature', function(done) {
      var called = false;
      var agent = new Agent();
      agent.callback = function(req, opts, fn) {
        called = true;
        assert.equal(this, agent);
        fn();
      };
      var info = url.parse('http://127.0.0.1/foo');
      info.agent = agent;
      var req = http.get(info);
      req.on('error', function(err) {
        assert(/no Duplex stream was returned/.test(err.message));
        done();
      });
    });
  });
  describe('"error" event', function() {
    it('should be invoked on `http.ClientRequest` instance if `callback()` has not been defined', function(
      done
    ) {
      var agent = new Agent();
      var info = url.parse('http://127.0.0.1/foo');
      info.agent = agent;
      var req = http.get(info);
      req.on('error', function(err) {
        assert.equal(
          '"agent-base" has no default implementation, you must subclass and override `callback()`',
          err.message
        );
        done();
      });
    });
    it('should be invoked on `http.ClientRequest` instance if Error passed to callback function on the first tick', function(
      done
    ) {
      var agent = new Agent(function(req, opts, fn) {
        fn(new Error('is this caught?'));
      });
      var info = url.parse('http://127.0.0.1/foo');
      info.agent = agent;
      var req = http.get(info);
      req.on('error', function(err) {
        assert.equal('is this caught?', err.message);
        done();
      });
    });
    it('should be invoked on `http.ClientRequest` instance if Error passed to callback function after the first tick', function(
      done
    ) {
      var agent = new Agent(function(req, opts, fn) {
        setTimeout(function() {
          fn(new Error('is this caught?'));
        }, 10);
      });
      var info = url.parse('http://127.0.0.1/foo');
      info.agent = agent;
      var req = http.get(info);
      req.on('error', function(err) {
        assert.equal('is this caught?', err.message);
        done();
      });
    });
  });
  describe('artificial "streams"', function() {
    it('should send a GET request', function(done) {
      var stream = new events.EventEmitter();

      // needed for the `http` module to call .write() on the stream
      stream.writable = true;

      stream.write = function(str) {
        assert(0 == str.indexOf('GET / HTTP/1.1'));
        done();
      };

      // needed for `http` module in Node.js 4
      stream.cork = function() {};

      var opts = {
        method: 'GET',
        host: '127.0.0.1',
        path: '/',
        port: 80,
        agent: new Agent(function(req, opts, fn) {
          fn(null, stream);
        })
      };
      var req = http.request(opts);
      req.end();
    });
    it('should receive a GET response', function(done) {
      var stream = new events.EventEmitter();
      var opts = {
        method: 'GET',
        host: '127.0.0.1',
        path: '/',
        port: 80,
        agent: new Agent(function(req, opts, fn) {
          fn(null, stream);
        })
      };
      var req = http.request(opts, function(res) {
        assert.equal('0.9', res.httpVersion);
        assert.equal(111, res.statusCode);
        assert.equal('bar', res.headers.foo);
        done();
      });

      // have to wait for the "socket" event since `http.ClientRequest`
      // doesn't *actually* attach the listeners to the "stream" until
      // this happens
      req.once('socket', function() {
        var buf = new Buffer(
          'HTTP/0.9 111\r\n' +
            'Foo: bar\r\n' +
            'Set-Cookie: 1\r\n' +
            'Set-Cookie: 2\r\n\r\n'
        );
        stream.emit('data', buf);
      });

      req.end();
    });
  });
});

describe('"http" module', function() {
  var server;
  var port;

  // setup test HTTP server
  before(function(done) {
    server = http.createServer();
    server.listen(0, function() {
      port = server.address().port;
      done();
    });
  });

  // shut down test HTTP server
  after(function(done) {
    server.once('close', function() {
      done();
    });
    server.close();
  });

  it('should work for basic HTTP requests', function(done) {
    var called = false;
    var agent = new Agent(function(req, opts, fn) {
      called = true;
      var socket = net.connect(opts);
      fn(null, socket);
    });

    // add HTTP server "request" listener
    var gotReq = false;
    server.once('request', function(req, res) {
      gotReq = true;
      res.setHeader('X-Foo', 'bar');
      res.setHeader('X-Url', req.url);
      res.end();
    });

    var info = url.parse('http://127.0.0.1:' + port + '/foo');
    info.agent = agent;
    http.get(info, function(res) {
      assert.equal('bar', res.headers['x-foo']);
      assert.equal('/foo', res.headers['x-url']);
      assert(gotReq);
      assert(called);
      done();
    });
  });

  it('should support direct return in `connect()`', function(done) {
    var called = false;
    var agent = new Agent(function(req, opts) {
      called = true;
      return net.connect(opts);
    });

    // add HTTP server "request" listener
    var gotReq = false;
    server.once('request', function(req, res) {
      gotReq = true;
      res.setHeader('X-Foo', 'bar');
      res.setHeader('X-Url', req.url);
      res.end();
    });

    var info = url.parse('http://127.0.0.1:' + port + '/foo');
    info.agent = agent;
    http.get(info, function(res) {
      assert.equal('bar', res.headers['x-foo']);
      assert.equal('/foo', res.headers['x-url']);
      assert(gotReq);
      assert(called);
      done();
    });
  });

  it('should support returning a Promise in `connect()`', function(done) {
    var called = false;
    var agent = new Agent(function(req, opts) {
      return new Promise(function(resolve, reject) {
        called = true;
        resolve(net.connect(opts));
      });
    });

    // add HTTP server "request" listener
    var gotReq = false;
    server.once('request', function(req, res) {
      gotReq = true;
      res.setHeader('X-Foo', 'bar');
      res.setHeader('X-Url', req.url);
      res.end();
    });

    var info = url.parse('http://127.0.0.1:' + port + '/foo');
    info.agent = agent;
    http.get(info, function(res) {
      assert.equal('bar', res.headers['x-foo']);
      assert.equal('/foo', res.headers['x-url']);
      assert(gotReq);
      assert(called);
      done();
    });
  });

  it('should set the `Connection: close` response header', function(done) {
    var called = false;
    var agent = new Agent(function(req, opts, fn) {
      called = true;
      var socket = net.connect(opts);
      fn(null, socket);
    });

    // add HTTP server "request" listener
    var gotReq = false;
    server.once('request', function(req, res) {
      gotReq = true;
      res.setHeader('X-Url', req.url);
      assert.equal('close', req.headers.connection);
      res.end();
    });

    var info = url.parse('http://127.0.0.1:' + port + '/bar');
    info.agent = agent;
    http.get(info, function(res) {
      assert.equal('/bar', res.headers['x-url']);
      assert.equal('close', res.headers.connection);
      assert(gotReq);
      assert(called);
      done();
    });
  });

  it('should pass through options from `http.request()`', function(done) {
    var agent = new Agent(function(req, opts, fn) {
      assert.equal('google.com', opts.host);
      assert.equal('bar', opts.foo);
      done();
    });

    http.get({
      host: 'google.com',
      foo: 'bar',
      agent: agent
    });
  });

  it('should default to port 80', function(done) {
    var agent = new Agent(function(req, opts, fn) {
      assert.equal(80, opts.port);
      done();
    });

    // (probably) not hitting a real HTTP server here,
    // so no need to add a httpServer request listener
    http.get({
      host: '127.0.0.1',
      path: '/foo',
      agent: agent
    });
  });

  it('should support the "timeout" option', function(done) {
    // ensure we timeout after the "error" event had a chance to trigger
    this.timeout(1000);
    this.slow(800);

    var agent = new Agent(
      function(req, opts, fn) {
        // this function will time out
      },
      { timeout: 100 }
    );

    var opts = url.parse('http://nodejs.org');
    opts.agent = agent;

    var req = http.get(opts);
    req.once('error', function(err) {
      assert.equal('ETIMEOUT', err.code);
      req.abort();
      done();
    });
  });

  it('should free sockets after use', function(done) {
    var agent = new Agent(function(req, opts, fn) {
      var socket = net.connect(opts);
      fn(null, socket);
    });

    // add HTTP server "request" listener
    var gotReq = false;
    server.once('request', function(req, res) {
      gotReq = true;
      res.end();
    });

    var info = url.parse('http://127.0.0.1:' + port + '/foo');
    info.agent = agent;
    http.get(info, function(res) {
      res.socket.emit('free');
      assert.equal(true, res.socket.destroyed);
      assert(gotReq);
      done();
    });
  });


  describe('PassthroughAgent', function() {
    it('should pass through to `http.globalAgent`', function(done) {
      // add HTTP server "request" listener
      var gotReq = false;
      server.once('request', function(req, res) {
        gotReq = true;
        res.setHeader('X-Foo', 'bar');
        res.setHeader('X-Url', req.url);
        res.end();
      });

      var info = url.parse('http://127.0.0.1:' + port + '/foo');
      info.agent = PassthroughAgent;
      http.get(info, function(res) {
        assert.equal('bar', res.headers['x-foo']);
        assert.equal('/foo', res.headers['x-url']);
        assert(gotReq);
        done();
      });
    });
  });
});

describe('"https" module', function() {
  var server;
  var port;

  // setup test HTTPS server
  before(function(done) {
    var options = {
      key: fs.readFileSync(__dirname + '/ssl-cert-snakeoil.key'),
      cert: fs.readFileSync(__dirname + '/ssl-cert-snakeoil.pem')
    };
    server = https.createServer(options);
    server.listen(0, function() {
      port = server.address().port;
      done();
    });
  });

  // shut down test HTTP server
  after(function(done) {
    server.once('close', function() {
      done();
    });
    server.close();
  });

  it('should not modify the passed in Options object', function(done) {
    var called = false;
    var agent = new Agent(function(req, opts, fn) {
      called = true;
      assert.equal(true, opts.secureEndpoint);
      assert.equal(443, opts.port);
      assert.equal('localhost', opts.host);
    });
    var opts = { agent: agent };
    var req = https.request(opts);
    assert.equal(true, called);
    assert.equal(false, 'secureEndpoint' in opts);
    assert.equal(false, 'port' in opts);
    done();
  });

  it('should work with a String URL', function(done) {
    var endpoint = 'https://127.0.0.1:' + port;
    var req = https.get(endpoint);

    // it's gonna error out since `rejectUnauthorized` is not being passed in
    req.on('error', function(err) {
      assert.equal(err.code, 'DEPTH_ZERO_SELF_SIGNED_CERT');
      done();
    });
  });

  it('should work for basic HTTPS requests', function(done) {
    var called = false;
    var agent = new Agent(function(req, opts, fn) {
      called = true;
      assert(opts.secureEndpoint);
      var socket = tls.connect(opts);
      fn(null, socket);
    });

    // add HTTPS server "request" listener
    var gotReq = false;
    server.once('request', function(req, res) {
      gotReq = true;
      res.setHeader('X-Foo', 'bar');
      res.setHeader('X-Url', req.url);
      res.end();
    });

    var info = url.parse('https://127.0.0.1:' + port + '/foo');
    info.agent = agent;
    info.rejectUnauthorized = false;
    https.get(info, function(res) {
      assert.equal('bar', res.headers['x-foo']);
      assert.equal('/foo', res.headers['x-url']);
      assert(gotReq);
      assert(called);
      done();
    });
  });

  it('should pass through options from `https.request()`', function(done) {
    var agent = new Agent(function(req, opts, fn) {
      assert.equal('google.com', opts.host);
      assert.equal('bar', opts.foo);
      done();
    });

    https.get({
      host: 'google.com',
      foo: 'bar',
      agent: agent
    });
  });

  it('should default to port 443', function(done) {
    var agent = new Agent(function(req, opts, fn) {
      assert.equal(true, opts.secureEndpoint);
      assert.equal(false, opts.rejectUnauthorized);
      assert.equal(443, opts.port);
      done();
    });

    // (probably) not hitting a real HTTPS server here,
    // so no need to add a httpsServer request listener
    https.get({
      host: '127.0.0.1',
      path: '/foo',
      agent: agent,
      rejectUnauthorized: false
    });
  });

  describe('PassthroughAgent', function() {
    it('should pass through to `https.globalAgent`', function(done) {
      // add HTTP server "request" listener
      var gotReq = false;
      server.once('request', function(req, res) {
        gotReq = true;
        res.setHeader('X-Foo', 'bar');
        res.setHeader('X-Url', req.url);
        res.end();
      });

      var info = url.parse('https://127.0.0.1:' + port + '/foo');
      info.agent = PassthroughAgent;
      info.rejectUnauthorized = false;
      https.get(info, function(res) {
        assert.equal('bar', res.headers['x-foo']);
        assert.equal('/foo', res.headers['x-url']);
        assert(gotReq);
        done();
      });
    });
  });
});

describe('"ws" server', function() {
  var wss;
  var server;
  var port;

  // setup test HTTP server
  before(function(done) {
    server = http.createServer();
    wss = new WebSocket.Server({ server: server });
    server.listen(0, function() {
      port = server.address().port;
      done();
    });
  });

  // shut down test HTTP server
  after(function(done) {
    server.once('close', function() {
      done();
    });
    server.close();
  });

  it('should work for basic WebSocket connections', function(done) {
    function onconnection(ws) {
      ws.on('message', function(data) {
        assert.equal('ping', data);
        ws.send('pong');
      });
    }
    wss.on('connection', onconnection);

    var agent = new Agent(function(req, opts, fn) {
      var socket = net.connect(opts);
      fn(null, socket);
    });

    var client = new WebSocket('ws://127.0.0.1:' + port + '/', {
      agent: agent
    });

    client.on('open', function() {
      client.send('ping');
    });

    client.on('message', function(data) {
      assert.equal('pong', data);
      client.close();
      wss.removeListener('connection', onconnection);
      done();
    });
  });
});

describe('"wss" server', function() {
  var wss;
  var server;
  var port;

  // setup test HTTP server
  before(function(done) {
    var options = {
      key: fs.readFileSync(__dirname + '/ssl-cert-snakeoil.key'),
      cert: fs.readFileSync(__dirname + '/ssl-cert-snakeoil.pem')
    };
    server = https.createServer(options);
    wss = new WebSocket.Server({ server: server });
    server.listen(0, function() {
      port = server.address().port;
      done();
    });
  });

  // shut down test HTTP server
  after(function(done) {
    server.once('close', function() {
      done();
    });
    server.close();
  });

  it('should work for secure WebSocket connections', function(done) {
    function onconnection(ws) {
      ws.on('message', function(data) {
        assert.equal('ping', data);
        ws.send('pong');
      });
    }
    wss.on('connection', onconnection);

    var agent = new Agent(function(req, opts, fn) {
      var socket = tls.connect(opts);
      fn(null, socket);
    });

    var client = new WebSocket('wss://127.0.0.1:' + port + '/', {
      agent: agent,
      rejectUnauthorized: false
    });

    client.on('open', function() {
      client.send('ping');
    });

    client.on('message', function(data) {
      assert.equal('pong', data);
      client.close();
      wss.removeListener('connection', onconnection);
      done();
    });
  });
});
