
/**
 * Module dependencies.
 */

var fs = require('fs');
var url = require('url');
var http = require('http');
var https = require('https');
var assert = require('assert');
var Proxy = require('proxy');
var HttpsProxyAgent = require('../');

describe('HttpsProxyAgent', function () {

  var server;
  var serverPort;

  var sslServer;
  var sslServerPort;

  var proxy;
  var proxyPort;

  var sslProxy;
  var sslProxyPort;

  before(function (done) {
    // setup target HTTP server
    server = http.createServer();
    server.listen(function () {
      serverPort = server.address().port;
      done();
    });
  });

  before(function (done) {
    // setup HTTP proxy server
    proxy = Proxy();
    proxy.listen(function () {
      proxyPort = proxy.address().port;
      done();
    });
  });

  before(function (done) {
    // setup target HTTPS server
    var options = {
      key: fs.readFileSync(__dirname + '/ssl-cert-snakeoil.key'),
      cert: fs.readFileSync(__dirname + '/ssl-cert-snakeoil.pem')
    };
    sslServer = https.createServer(options);
    sslServer.listen(function () {
      sslServerPort = sslServer.address().port;
      done();
    });
  });

  before(function (done) {
    // setup SSL HTTP proxy server
    var options = {
      key: fs.readFileSync(__dirname + '/ssl-cert-snakeoil.key'),
      cert: fs.readFileSync(__dirname + '/ssl-cert-snakeoil.pem')
    };
    sslProxy = Proxy(https.createServer(options));
    sslProxy.listen(function () {
      sslProxyPort = sslProxy.address().port;
      done();
    });
  });

  // shut down test HTTP server
  after(function (done) {
    server.once('close', function () { done(); });
    server.close();
  });

  after(function (done) {
    proxy.once('close', function () { done(); });
    proxy.close();
  });

  after(function (done) {
    sslServer.once('close', function () { done(); });
    sslServer.close();
  });

  after(function (done) {
    sslProxy.once('close', function () { done(); });
    sslProxy.close();
  });

  describe('constructor', function () {
    it('should throw an Error if no "proxy" argument is given', function () {
      assert.throws(function () {
        new HttpsProxyAgent();
      });
    });
    it('should accept a "string" proxy argument', function () {
      var agent = new HttpsProxyAgent('http://127.0.0.1:' + proxyPort);
      assert.equal('127.0.0.1', agent.proxy.host);
      assert.equal(proxyPort, agent.proxy.port);
    });
    it('should accept a `url.parse()` result object argument', function () {
      var opts = url.parse('http://127.0.0.1:' + proxyPort);
      var agent = new HttpsProxyAgent(opts);
      assert.equal('127.0.0.1', agent.proxy.host);
      assert.equal(proxyPort, agent.proxy.port);
    });
    it('should set a `defaultPort` property', function () {
      var opts = url.parse("http://127.0.0.1:" + proxyPort);
      var agent = new HttpsProxyAgent(opts);
      assert.equal(443, agent.defaultPort);
    });
    describe('secureProxy', function () {
      it('should default to `false`', function () {
        var agent = new HttpsProxyAgent({ port: proxyPort });
        assert.equal(false, agent.secureProxy);
      });
      it('should be `false` when "http:" protocol is used', function () {
        var agent = new HttpsProxyAgent({ port: proxyPort, protocol: 'http:' });
        assert.equal(false, agent.secureProxy);
      });
      it('should be `true` when "https:" protocol is used', function () {
        var agent = new HttpsProxyAgent({ port: proxyPort, protocol: 'https:' });
        assert.equal(true, agent.secureProxy);
      });
      it('should be `true` when "https" protocol is used', function () {
        var agent = new HttpsProxyAgent({ port: proxyPort, protocol: 'https' });
        assert.equal(true, agent.secureProxy);
      });
    });
  });

  describe('"http" module', function () {

    beforeEach(function () {
      delete proxy.authenticate;
    });

    it('should work over an HTTP proxy', function (done) {
      server.once('request', function (req, res) {
        res.end(JSON.stringify(req.headers));
      });

      var proxy = process.env.HTTP_PROXY || process.env.http_proxy || 'http://127.0.0.1:' + proxyPort;
      var agent = new HttpsProxyAgent(proxy);

      var opts = url.parse('http://127.0.0.1:' + serverPort);
      opts.agent = agent;

      var req = http.get(opts, function (res) {
        var data = '';
        res.setEncoding('utf8');
        res.on('data', function (b) {
          data += b;
        });
        res.on('end', function () {
          data = JSON.parse(data);
          assert.equal('127.0.0.1:' + serverPort, data.host);
          done();
        });
      });
      req.once('error', done);
    });
    it('should work over an HTTPS proxy', function (done) {
      server.once('request', function (req, res) {
        res.end(JSON.stringify(req.headers));
      });

      var proxy = process.env.HTTPS_PROXY || process.env.https_proxy || 'https://127.0.0.1:' + sslProxyPort;
      proxy = url.parse(proxy);
      proxy.rejectUnauthorized = false;
      var agent = new HttpsProxyAgent(proxy);

      var opts = url.parse('http://127.0.0.1:' + serverPort);
      opts.agent = agent;

      http.get(opts, function (res) {
        var data = '';
        res.setEncoding('utf8');
        res.on('data', function (b) {
          data += b;
        });
        res.on('end', function () {
          data = JSON.parse(data);
          assert.equal('127.0.0.1:' + serverPort, data.host);
          done();
        });
      });
    });
    it('should receive the 407 authorization code on the `http.ClientResponse`', function (done) {
      // set a proxy authentication function for this test
      proxy.authenticate = function (req, fn) {
        // reject all requests
        fn(null, false);
      };

      var proxyUri = process.env.HTTP_PROXY || process.env.http_proxy || 'http://127.0.0.1:' + proxyPort;
      var agent = new HttpsProxyAgent(proxyUri);

      var opts = {};
      // `host` and `port` don't really matter since the proxy will reject anyways
      opts.host = '127.0.0.1';
      opts.port = 80;
      opts.agent = agent;

      var req = http.get(opts, function (res) {
        assert.equal(407, res.statusCode);
        assert('proxy-authenticate' in res.headers);
        done();
      });
    });
    it('should emit an "error" event on the `http.ClientRequest` if the proxy does not exist', function (done) {
      // port 4 is a reserved, but "unassigned" port
      var proxyUri = 'http://127.0.0.1:4';
      var agent = new HttpsProxyAgent(proxyUri);

      var opts = url.parse('http://nodejs.org');
      opts.agent = agent;

      var req = http.get(opts);
      req.once('error', function (err) {
        assert.equal('ECONNREFUSED', err.code);
        req.abort();
        done();
      });
    });

    it('should allow custom proxy "headers"', function (done) {
      server.once('connect', function (req, socket, head) {
        assert.equal('CONNECT', req.method);
        assert.equal('bar', req.headers.foo);
        socket.destroy();
        done();
      });

      var uri = 'http://127.0.0.1:' + serverPort;
      var proxyOpts = url.parse(uri);
      proxyOpts.headers = {
        'Foo': 'bar'
      };
      var agent = new HttpsProxyAgent(proxyOpts);

      var opts = {};
      // `host` and `port` don't really matter since the proxy will reject anyways
      opts.host = '127.0.0.1';
      opts.port = 80;
      opts.agent = agent;

      http.get(opts);
    });

  });

  describe('"https" module', function () {
    it('should work over an HTTP proxy', function (done) {
      sslServer.once('request', function (req, res) {
        res.end(JSON.stringify(req.headers));
      });

      var proxy = process.env.HTTP_PROXY || process.env.http_proxy || 'http://127.0.0.1:' + proxyPort;
      var agent = new HttpsProxyAgent(proxy);

      var opts = url.parse('https://127.0.0.1:' + sslServerPort);
      opts.rejectUnauthorized = false;
      opts.agent = agent;

      https.get(opts, function (res) {
        var data = '';
        res.setEncoding('utf8');
        res.on('data', function (b) {
          data += b;
        });
        res.on('end', function () {
          data = JSON.parse(data);
          assert.equal('127.0.0.1:' + sslServerPort, data.host);
          done();
        });
      });
    });

    it('should work over an HTTPS proxy', function (done) {
      sslServer.once('request', function (req, res) {
        res.end(JSON.stringify(req.headers));
      });

      var proxy = process.env.HTTPS_PROXY || process.env.https_proxy || 'https://127.0.0.1:' + sslProxyPort;
      proxy = url.parse(proxy);
      proxy.rejectUnauthorized = false;
      var agent = new HttpsProxyAgent(proxy);

      var opts = url.parse('https://127.0.0.1:' + sslServerPort);
      opts.agent = agent;
      opts.rejectUnauthorized = false;

      https.get(opts, function (res) {
        var data = '';
        res.setEncoding('utf8');
        res.on('data', function (b) {
          data += b;
        });
        res.on('end', function () {
          data = JSON.parse(data);
          assert.equal('127.0.0.1:' + sslServerPort, data.host);
          done();
        });
      });
    });

    it('should not send a port number for the default port', function (done) {
      sslServer.once('request', function (req, res) {
        res.end(JSON.stringify(req.headers));
      });

      var proxy = process.env.HTTPS_PROXY || process.env.https_proxy || "https://127.0.0.1:" + sslProxyPort;
      proxy = url.parse(proxy);
      proxy.rejectUnauthorized = false;
      var agent = new HttpsProxyAgent(proxy);
      agent.defaultPort = sslServerPort;

      var opts = url.parse("https://127.0.0.1:" + sslServerPort);
      opts.agent = agent;
      opts.rejectUnauthorized = false;

      https.get(opts, function(res) {
        var data = "";
        res.setEncoding("utf8");
        res.on("data", function(b) {
          data += b;
        });
        res.on("end", function() {
          data = JSON.parse(data);
          assert.equal("127.0.0.1", data.host);
          done();
        });
      });
    });

  });

});
