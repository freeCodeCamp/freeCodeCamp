
/**
 * Module dependencies.
 */

var net = require('net');
var tls = require('tls');
var url = require('url');
var Agent = require('agent-base');
var inherits = require('util').inherits;
var debug = require('debug')('http-proxy-agent');

/**
 * Module exports.
 */

module.exports = HttpProxyAgent;

/**
 * The `HttpProxyAgent` implements an HTTP Agent subclass that connects to the
 * specified "HTTP proxy server" in order to proxy HTTP requests.
 *
 * @api public
 */

function HttpProxyAgent (opts) {
  if (!(this instanceof HttpProxyAgent)) return new HttpProxyAgent(opts);
  if ('string' == typeof opts) opts = url.parse(opts);
  if (!opts) throw new Error('an HTTP(S) proxy server `host` and `port` must be specified!');
  debug('creating new HttpProxyAgent instance: %o', opts);
  Agent.call(this, opts);

  var proxy = Object.assign({}, opts);

  // if `true`, then connect to the proxy server over TLS. defaults to `false`.
  this.secureProxy = proxy.protocol ? /^https:?$/i.test(proxy.protocol) : false;

  // prefer `hostname` over `host`, and set the `port` if needed
  proxy.host = proxy.hostname || proxy.host;
  proxy.port = +proxy.port || (this.secureProxy ? 443 : 80);

  if (proxy.host && proxy.path) {
    // if both a `host` and `path` are specified then it's most likely the
    // result of a `url.parse()` call... we need to remove the `path` portion so
    // that `net.connect()` doesn't attempt to open that as a unix socket file.
    delete proxy.path;
    delete proxy.pathname;
  }

  this.proxy = proxy;
}
inherits(HttpProxyAgent, Agent);

/**
 * Called when the node-core HTTP client library is creating a new HTTP request.
 *
 * @api public
 */

HttpProxyAgent.prototype.callback = function connect (req, opts, fn) {
  var proxy = this.proxy;

  // change the `http.ClientRequest` instance's "path" field
  // to the absolute path of the URL that will be requested
  var parsed = url.parse(req.path);
  if (null == parsed.protocol) parsed.protocol = 'http:';
  if (null == parsed.hostname) parsed.hostname = opts.hostname || opts.host;
  if (null == parsed.port) parsed.port = opts.port;
  if (parsed.port == 80) {
    // if port is 80, then we can remove the port so that the
    // ":80" portion is not on the produced URL
    delete parsed.port;
  }
  var absolute = url.format(parsed);
  req.path = absolute;

  // inject the `Proxy-Authorization` header if necessary
  if (proxy.auth) {
    req.setHeader(
      'Proxy-Authorization',
      'Basic ' + Buffer.from(proxy.auth).toString('base64')
    );
  }

  // create a socket connection to the proxy server
  var socket;
  if (this.secureProxy) {
    socket = tls.connect(proxy);
  } else {
    socket = net.connect(proxy);
  }

  // at this point, the http ClientRequest's internal `_header` field might have
  // already been set. If this is the case then we'll need to re-generate the
  // string since we just changed the `req.path`
  if (req._header) {
    debug('regenerating stored HTTP header string for request');
    req._header = null;
    req._implicitHeader();
    if (req.output && req.output.length > 0) {
      debug('patching connection write() output buffer with updated header');
      // the _header has already been queued to be written to the socket
      var first = req.output[0];
      var endOfHeaders = first.indexOf('\r\n\r\n') + 4;
      req.output[0] = req._header + first.substring(endOfHeaders);
      debug('output buffer: %o', req.output);
    }
  }

  fn(null, socket);
};
