"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Module dependencies.
 */

// eslint-disable-next-line node/no-deprecated-api
const _require = require('url'),
  parse = _require.parse,
  format = _require.format,
  resolve = _require.resolve;
const Stream = require('stream');
const https = require('https');
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const util = require('util');
const qs = require('qs');
const mime = require('mime');
let methods = require('methods');
const FormData = require('form-data');
const formidable = require('formidable');
const debug = require('debug')('superagent');
const CookieJar = require('cookiejar');
const semverGte = require('semver/functions/gte');
const safeStringify = require('fast-safe-stringify');
const utils = require('../utils');
const RequestBase = require('../request-base');
const _require2 = require('./unzip'),
  unzip = _require2.unzip;
const Response = require('./response');
const mixin = utils.mixin,
  hasOwn = utils.hasOwn;
let http2;
if (semverGte(process.version, 'v10.10.0')) http2 = require('./http2wrapper');
function request(method, url) {
  // callback
  if (typeof url === 'function') {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (arguments.length === 1) {
    return new exports.Request('GET', method);
  }
  return new exports.Request(method, url);
}
module.exports = request;
exports = module.exports;

/**
 * Expose `Request`.
 */

exports.Request = Request;

/**
 * Expose the agent function
 */

exports.agent = require('./agent');

/**
 * Noop.
 */

function noop() {}

/**
 * Expose `Response`.
 */

exports.Response = Response;

/**
 * Define "form" mime type.
 */

mime.define({
  'application/x-www-form-urlencoded': ['form', 'urlencoded', 'form-data']
}, true);

/**
 * Protocol map.
 */

exports.protocols = {
  'http:': http,
  'https:': https,
  'http2:': http2
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

exports.serialize = {
  'application/x-www-form-urlencoded': qs.stringify,
  'application/json': safeStringify
};

/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(res, fn){
 *       fn(null, res);
 *     };
 *
 */

exports.parse = require('./parsers');

/**
 * Default buffering map. Can be used to set certain
 * response types to buffer/not buffer.
 *
 *     superagent.buffer['application/xml'] = true;
 */
exports.buffer = {};

/**
 * Initialize internal header tracking properties on a request instance.
 *
 * @param {Object} req the instance
 * @api private
 */
function _initHeaders(request_) {
  request_._header = {
    // coerces header names to lowercase
  };
  request_.header = {
    // preserves header name case
  };
}

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String|Object} url
 * @api public
 */

function Request(method, url) {
  Stream.call(this);
  if (typeof url !== 'string') url = format(url);
  this._enableHttp2 = Boolean(process.env.HTTP2_TEST); // internal only
  this._agent = false;
  this._formData = null;
  this.method = method;
  this.url = url;
  _initHeaders(this);
  this.writable = true;
  this._redirects = 0;
  this.redirects(method === 'HEAD' ? 0 : 5);
  this.cookies = '';
  this.qs = {};
  this._query = [];
  this.qsRaw = this._query; // Unused, for backwards compatibility only
  this._redirectList = [];
  this._streamRequest = false;
  this._lookup = undefined;
  this.once('end', this.clearTimeout.bind(this));
}

/**
 * Inherit from `Stream` (which inherits from `EventEmitter`).
 * Mixin `RequestBase`.
 */
util.inherits(Request, Stream);
mixin(Request.prototype, RequestBase.prototype);

/**
 * Enable or Disable http2.
 *
 * Enable http2.
 *
 * ``` js
 * request.get('http://localhost/')
 *   .http2()
 *   .end(callback);
 *
 * request.get('http://localhost/')
 *   .http2(true)
 *   .end(callback);
 * ```
 *
 * Disable http2.
 *
 * ``` js
 * request = request.http2();
 * request.get('http://localhost/')
 *   .http2(false)
 *   .end(callback);
 * ```
 *
 * @param {Boolean} enable
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.http2 = function (bool) {
  if (exports.protocols['http2:'] === undefined) {
    throw new Error('superagent: this version of Node.js does not support http2');
  }
  this._enableHttp2 = bool === undefined ? true : bool;
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('http://localhost/upload')
 *   .attach('field', Buffer.from('<b>Hello world</b>'), 'hello.html')
 *   .end(callback);
 * ```
 *
 * A filename may also be used:
 *
 * ``` js
 * request.post('http://localhost/upload')
 *   .attach('files', 'image.jpg')
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {String|fs.ReadStream|Buffer} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw new Error("superagent can't mix .send() and .attach()");
    }
    let o = options || {};
    if (typeof options === 'string') {
      o = {
        filename: options
      };
    }
    if (typeof file === 'string') {
      if (!o.filename) o.filename = file;
      debug('creating `fs.ReadStream` instance for file: %s', file);
      file = fs.createReadStream(file);
      file.on('error', error => {
        const formData = this._getFormData();
        formData.emit('error', error);
      });
    } else if (!o.filename && file.path) {
      o.filename = file.path;
    }
    this._getFormData().append(field, file, o);
  }
  return this;
};
Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new FormData();
    this._formData.on('error', error => {
      debug('FormData error', error);
      if (this.called) {
        // The request has already finished and the callback was called.
        // Silently ignore the error.
        return;
      }
      this.callback(error);
      this.abort();
    });
  }
  return this._formData;
};

/**
 * Gets/sets the `Agent` to use for this HTTP request. The default (if this
 * function is not called) is to opt out of connection pooling (`agent: false`).
 *
 * @param {http.Agent} agent
 * @return {http.Agent}
 * @api public
 */

Request.prototype.agent = function (agent) {
  if (arguments.length === 0) return this._agent;
  this._agent = agent;
  return this;
};

/**
 * Gets/sets the `lookup` function to use custom DNS resolver.
 *
 * @param {Function} lookup
 * @return {Function}
 * @api public
 */

Request.prototype.lookup = function (lookup) {
  if (arguments.length === 0) return this._lookup;
  this._lookup = lookup;
  return this;
};

/**
 * Set _Content-Type_ response header passed through `mime.getType()`.
 *
 * Examples:
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('json')
 *        .send(jsonstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/json')
 *        .send(jsonstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function (type) {
  return this.set('Content-Type', type.includes('/') ? type : mime.getType(type));
};

/**
 * Set _Accept_ response header passed through `mime.getType()`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function (type) {
  return this.set('Accept', type.includes('/') ? type : mime.getType(type));
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function (value) {
  if (typeof value === 'string') {
    this._query.push(value);
  } else {
    Object.assign(this.qs, value);
  }
  return this;
};

/**
 * Write raw `data` / `encoding` to the socket.
 *
 * @param {Buffer|String} data
 * @param {String} encoding
 * @return {Boolean}
 * @api public
 */

Request.prototype.write = function (data, encoding) {
  const request_ = this.request();
  if (!this._streamRequest) {
    this._streamRequest = true;
  }
  return request_.write(data, encoding);
};

/**
 * Pipe the request body to `stream`.
 *
 * @param {Stream} stream
 * @param {Object} options
 * @return {Stream}
 * @api public
 */

Request.prototype.pipe = function (stream, options) {
  this.piped = true; // HACK...
  this.buffer(false);
  this.end();
  return this._pipeContinue(stream, options);
};
Request.prototype._pipeContinue = function (stream, options) {
  this.req.once('response', res => {
    // redirect
    if (isRedirect(res.statusCode) && this._redirects++ !== this._maxRedirects) {
      return this._redirect(res) === this ? this._pipeContinue(stream, options) : undefined;
    }
    this.res = res;
    this._emitResponse();
    if (this._aborted) return;
    if (this._shouldUnzip(res)) {
      const unzipObject = zlib.createUnzip();
      unzipObject.on('error', error => {
        if (error && error.code === 'Z_BUF_ERROR') {
          // unexpected end of file is ignored by browsers and curl
          stream.emit('end');
          return;
        }
        stream.emit('error', error);
      });
      res.pipe(unzipObject).pipe(stream, options);
      // don't emit 'end' until unzipObject has completed writing all its data.
      unzipObject.once('end', () => this.emit('end'));
    } else {
      res.pipe(stream, options);
      res.once('end', () => this.emit('end'));
    }
  });
  return stream;
};

/**
 * Enable / disable buffering.
 *
 * @return {Boolean} [val]
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.buffer = function (value) {
  this._buffer = value !== false;
  return this;
};

/**
 * Redirect to `url
 *
 * @param {IncomingMessage} res
 * @return {Request} for chaining
 * @api private
 */

Request.prototype._redirect = function (res) {
  let url = res.headers.location;
  if (!url) {
    return this.callback(new Error('No location header for redirect'), res);
  }
  debug('redirect %s -> %s', this.url, url);

  // location
  url = resolve(this.url, url);

  // ensure the response is being consumed
  // this is required for Node v0.10+
  res.resume();
  let headers = this.req.getHeaders ? this.req.getHeaders() : this.req._headers;
  const changesOrigin = parse(url).host !== parse(this.url).host;

  // implementation of 302 following defacto standard
  if (res.statusCode === 301 || res.statusCode === 302) {
    // strip Content-* related fields
    // in case of POST etc
    headers = utils.cleanHeader(headers, changesOrigin);

    // force GET
    this.method = this.method === 'HEAD' ? 'HEAD' : 'GET';

    // clear data
    this._data = null;
  }

  // 303 is always GET
  if (res.statusCode === 303) {
    // strip Content-* related fields
    // in case of POST etc
    headers = utils.cleanHeader(headers, changesOrigin);

    // force method
    this.method = 'GET';

    // clear data
    this._data = null;
  }

  // 307 preserves method
  // 308 preserves method
  delete headers.host;
  delete this.req;
  delete this._formData;

  // remove all add header except User-Agent
  _initHeaders(this);

  // redirect
  this.res = res;
  this._endCalled = false;
  this.url = url;
  this.qs = {};
  this._query.length = 0;
  this.set(headers);
  this._emitRedirect();
  this._redirectList.push(this.url);
  this.end(this._callback);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * Examples:
 *
 *   .auth('tobi', 'learnboost')
 *   .auth('tobi:learnboost')
 *   .auth('tobi')
 *   .auth(accessToken, { type: 'bearer' })
 *
 * @param {String} user
 * @param {String} [pass]
 * @param {Object} [options] options with authorization type 'basic' or 'bearer' ('basic' is default)
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function (user, pass, options) {
  if (arguments.length === 1) pass = '';
  if (typeof pass === 'object' && pass !== null) {
    // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'basic'
    };
  }
  const encoder = string => Buffer.from(string).toString('base64');
  return this._auth(user, pass, options, encoder);
};

/**
 * Set the certificate authority option for https request.
 *
 * @param {Buffer | Array} cert
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.ca = function (cert) {
  this._ca = cert;
  return this;
};

/**
 * Set the client certificate key option for https request.
 *
 * @param {Buffer | String} cert
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.key = function (cert) {
  this._key = cert;
  return this;
};

/**
 * Set the key, certificate, and CA certs of the client in PFX or PKCS12 format.
 *
 * @param {Buffer | String} cert
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.pfx = function (cert) {
  if (typeof cert === 'object' && !Buffer.isBuffer(cert)) {
    this._pfx = cert.pfx;
    this._passphrase = cert.passphrase;
  } else {
    this._pfx = cert;
  }
  return this;
};

/**
 * Set the client certificate option for https request.
 *
 * @param {Buffer | String} cert
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.cert = function (cert) {
  this._cert = cert;
  return this;
};

/**
 * Do not reject expired or invalid TLS certs.
 * sets `rejectUnauthorized=true`. Be warned that this allows MITM attacks.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.disableTLSCerts = function () {
  this._disableTLSCerts = true;
  return this;
};

/**
 * Return an http[s] request.
 *
 * @return {OutgoingMessage}
 * @api private
 */

// eslint-disable-next-line complexity
Request.prototype.request = function () {
  if (this.req) return this.req;
  const options = {};
  try {
    const query = qs.stringify(this.qs, {
      indices: false,
      strictNullHandling: true
    });
    if (query) {
      this.qs = {};
      this._query.push(query);
    }
    this._finalizeQueryString();
  } catch (err) {
    return this.emit('error', err);
  }
  let url = this.url;
  const retries = this._retries;

  // Capture backticks as-is from the final query string built above.
  // Note: this'll only find backticks entered in req.query(String)
  // calls, because qs.stringify unconditionally encodes backticks.
  let queryStringBackticks;
  if (url.includes('`')) {
    const queryStartIndex = url.indexOf('?');
    if (queryStartIndex !== -1) {
      const queryString = url.slice(queryStartIndex + 1);
      queryStringBackticks = queryString.match(/`|%60/g);
    }
  }

  // default to http://
  if (url.indexOf('http') !== 0) url = `http://${url}`;
  url = parse(url);

  // See https://github.com/ladjs/superagent/issues/1367
  if (queryStringBackticks) {
    let i = 0;
    url.query = url.query.replace(/%60/g, () => queryStringBackticks[i++]);
    url.search = `?${url.query}`;
    url.path = url.pathname + url.search;
  }

  // support unix sockets
  if (/^https?\+unix:/.test(url.protocol) === true) {
    // get the protocol
    url.protocol = `${url.protocol.split('+')[0]}:`;

    // get the socket, path
    const unixParts = url.path.match(/^([^/]+)(.+)$/);
    options.socketPath = unixParts[1].replace(/%2F/g, '/');
    url.path = unixParts[2];
  }

  // Override IP address of a hostname
  if (this._connectOverride) {
    const _url = url,
      hostname = _url.hostname;
    const match = hostname in this._connectOverride ? this._connectOverride[hostname] : this._connectOverride['*'];
    if (match) {
      // backup the real host
      if (!this._header.host) {
        this.set('host', url.host);
      }
      let newHost;
      let newPort;
      if (typeof match === 'object') {
        newHost = match.host;
        newPort = match.port;
      } else {
        newHost = match;
        newPort = url.port;
      }

      // wrap [ipv6]
      url.host = /:/.test(newHost) ? `[${newHost}]` : newHost;
      if (newPort) {
        url.host += `:${newPort}`;
        url.port = newPort;
      }
      url.hostname = newHost;
    }
  }

  // options
  options.method = this.method;
  options.port = url.port;
  options.path = url.path;
  options.host = url.hostname;
  options.ca = this._ca;
  options.key = this._key;
  options.pfx = this._pfx;
  options.cert = this._cert;
  options.passphrase = this._passphrase;
  options.agent = this._agent;
  options.lookup = this._lookup;
  options.rejectUnauthorized = typeof this._disableTLSCerts === 'boolean' ? !this._disableTLSCerts : process.env.NODE_TLS_REJECT_UNAUTHORIZED !== '0';

  // Allows request.get('https://1.2.3.4/').set('Host', 'example.com')
  if (this._header.host) {
    options.servername = this._header.host.replace(/:\d+$/, '');
  }
  if (this._trustLocalhost && /^(?:localhost|127\.0\.0\.\d+|(0*:)+:0*1)$/.test(url.hostname)) {
    options.rejectUnauthorized = false;
  }

  // initiate request
  const module_ = this._enableHttp2 ? exports.protocols['http2:'].setProtocol(url.protocol) : exports.protocols[url.protocol];

  // request
  this.req = module_.request(options);
  const req = this.req;

  // set tcp no delay
  req.setNoDelay(true);
  if (options.method !== 'HEAD') {
    req.setHeader('Accept-Encoding', 'gzip, deflate');
  }
  this.protocol = url.protocol;
  this.host = url.host;

  // expose events
  req.once('drain', () => {
    this.emit('drain');
  });
  req.on('error', error => {
    // flag abortion here for out timeouts
    // because node will emit a faux-error "socket hang up"
    // when request is aborted before a connection is made
    if (this._aborted) return;
    // if not the same, we are in the **old** (cancelled) request,
    // so need to continue (same as for above)
    if (this._retries !== retries) return;
    // if we've received a response then we don't want to let
    // an error in the request blow up the response
    if (this.response) return;
    this.callback(error);
  });

  // auth
  if (url.auth) {
    const auth = url.auth.split(':');
    this.auth(auth[0], auth[1]);
  }
  if (this.username && this.password) {
    this.auth(this.username, this.password);
  }
  for (const key in this.header) {
    if (hasOwn(this.header, key)) req.setHeader(key, this.header[key]);
  }

  // add cookies
  if (this.cookies) {
    if (hasOwn(this._header, 'cookie')) {
      // merge
      const temporaryJar = new CookieJar.CookieJar();
      temporaryJar.setCookies(this._header.cookie.split('; '));
      temporaryJar.setCookies(this.cookies.split('; '));
      req.setHeader('Cookie', temporaryJar.getCookies(CookieJar.CookieAccessInfo.All).toValueString());
    } else {
      req.setHeader('Cookie', this.cookies);
    }
  }
  return req;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function (error, res) {
  if (this._shouldRetry(error, res)) {
    return this._retry();
  }

  // Avoid the error which is emitted from 'socket hang up' to cause the fn undefined error on JS runtime.
  const fn = this._callback || noop;
  this.clearTimeout();
  if (this.called) return console.warn('superagent: double callback bug');
  this.called = true;
  if (!error) {
    try {
      if (!this._isResponseOK(res)) {
        let message = 'Unsuccessful HTTP response';
        if (res) {
          message = http.STATUS_CODES[res.status] || message;
        }
        error = new Error(message);
        error.status = res ? res.status : undefined;
      }
    } catch (err) {
      error = err;
      error.status = error.status || (res ? res.status : undefined);
    }
  }

  // It's important that the callback is called outside try/catch
  // to avoid double callback
  if (!error) {
    return fn(null, res);
  }
  error.response = res;
  if (this._maxRetries) error.retries = this._retries - 1;

  // only emit error event if there is a listener
  // otherwise we assume the callback to `.end()` will get the error
  if (error && this.listeners('error').length > 0) {
    this.emit('error', error);
  }
  fn(error, res);
};

/**
 * Check if `obj` is a host object,
 *
 * @param {Object} obj host object
 * @return {Boolean} is a host object
 * @api private
 */
Request.prototype._isHost = function (object) {
  return Buffer.isBuffer(object) || object instanceof Stream || object instanceof FormData;
};

/**
 * Initiate request, invoking callback `fn(err, res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype._emitResponse = function (body, files) {
  const response = new Response(this);
  this.response = response;
  response.redirects = this._redirectList;
  if (undefined !== body) {
    response.body = body;
  }
  response.files = files;
  if (this._endCalled) {
    response.pipe = function () {
      throw new Error("end() has already been called, so it's too late to start piping");
    };
  }
  this.emit('response', response);
  return response;
};

/**
 * Emit `redirect` event, passing an instanceof `Response`.
 *
 * @api private
 */

Request.prototype._emitRedirect = function () {
  const response = new Response(this);
  response.redirects = this._redirectList;
  this.emit('redirect', response);
};
Request.prototype.end = function (fn) {
  this.request();
  debug('%s %s', this.method, this.url);
  if (this._endCalled) {
    throw new Error('.end() was called twice. This is not supported in superagent');
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;
  this._end();
};
Request.prototype._end = function () {
  if (this._aborted) return this.callback(new Error('The request has been aborted even before .end() was called'));
  let data = this._data;
  const req = this.req;
  const method = this.method;
  this._setTimeouts();

  // body
  if (method !== 'HEAD' && !req._headerSent) {
    // serialize stuff
    if (typeof data !== 'string') {
      let contentType = req.getHeader('Content-Type');
      // Parse out just the content type from the header (ignore the charset)
      if (contentType) contentType = contentType.split(';')[0];
      let serialize = this._serializer || exports.serialize[contentType];
      if (!serialize && isJSON(contentType)) {
        serialize = exports.serialize['application/json'];
      }
      if (serialize) data = serialize(data);
    }

    // content-length
    if (data && !req.getHeader('Content-Length')) {
      req.setHeader('Content-Length', Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data));
    }
  }

  // response
  // eslint-disable-next-line complexity
  req.once('response', res => {
    debug('%s %s -> %s', this.method, this.url, res.statusCode);
    if (this._responseTimeoutTimer) {
      clearTimeout(this._responseTimeoutTimer);
    }
    if (this.piped) {
      return;
    }
    const max = this._maxRedirects;
    const mime = utils.type(res.headers['content-type'] || '') || 'text/plain';
    let type = mime.split('/')[0];
    if (type) type = type.toLowerCase().trim();
    const multipart = type === 'multipart';
    const redirect = isRedirect(res.statusCode);
    const responseType = this._responseType;
    this.res = res;

    // redirect
    if (redirect && this._redirects++ !== max) {
      return this._redirect(res);
    }
    if (this.method === 'HEAD') {
      this.emit('end');
      this.callback(null, this._emitResponse());
      return;
    }

    // zlib support
    if (this._shouldUnzip(res)) {
      unzip(req, res);
    }
    let buffer = this._buffer;
    if (buffer === undefined && mime in exports.buffer) {
      buffer = Boolean(exports.buffer[mime]);
    }
    let parser = this._parser;
    if (undefined === buffer && parser) {
      console.warn("A custom superagent parser has been set, but buffering strategy for the parser hasn't been configured. Call `req.buffer(true or false)` or set `superagent.buffer[mime] = true or false`");
      buffer = true;
    }
    if (!parser) {
      if (responseType) {
        parser = exports.parse.image; // It's actually a generic Buffer
        buffer = true;
      } else if (multipart) {
        const form = formidable();
        parser = form.parse.bind(form);
        buffer = true;
      } else if (isBinary(mime)) {
        parser = exports.parse.image;
        buffer = true; // For backwards-compatibility buffering default is ad-hoc MIME-dependent
      } else if (exports.parse[mime]) {
        parser = exports.parse[mime];
      } else if (type === 'text') {
        parser = exports.parse.text;
        buffer = buffer !== false;
        // everyone wants their own white-labeled json
      } else if (isJSON(mime)) {
        parser = exports.parse['application/json'];
        buffer = buffer !== false;
      } else if (buffer) {
        parser = exports.parse.text;
      } else if (undefined === buffer) {
        parser = exports.parse.image; // It's actually a generic Buffer
        buffer = true;
      }
    }

    // by default only buffer text/*, json and messed up thing from hell
    if (undefined === buffer && isText(mime) || isJSON(mime)) {
      buffer = true;
    }
    this._resBuffered = buffer;
    let parserHandlesEnd = false;
    if (buffer) {
      // Protectiona against zip bombs and other nuisance
      let responseBytesLeft = this._maxResponseSize || 200000000;
      res.on('data', buf => {
        responseBytesLeft -= buf.byteLength || buf.length > 0 ? buf.length : 0;
        if (responseBytesLeft < 0) {
          // This will propagate through error event
          const error = new Error('Maximum response size reached');
          error.code = 'ETOOLARGE';
          // Parsers aren't required to observe error event,
          // so would incorrectly report success
          parserHandlesEnd = false;
          // Will not emit error event
          res.destroy(error);
          // so we do callback now
          this.callback(error, null);
        }
      });
    }
    if (parser) {
      try {
        // Unbuffered parsers are supposed to emit response early,
        // which is weird BTW, because response.body won't be there.
        parserHandlesEnd = buffer;
        parser(res, (error, object, files) => {
          if (this.timedout) {
            // Timeout has already handled all callbacks
            return;
          }

          // Intentional (non-timeout) abort is supposed to preserve partial response,
          // even if it doesn't parse.
          if (error && !this._aborted) {
            return this.callback(error);
          }
          if (parserHandlesEnd) {
            this.emit('end');
            this.callback(null, this._emitResponse(object, files));
          }
        });
      } catch (err) {
        this.callback(err);
        return;
      }
    }
    this.res = res;

    // unbuffered
    if (!buffer) {
      debug('unbuffered %s %s', this.method, this.url);
      this.callback(null, this._emitResponse());
      if (multipart) return; // allow multipart to handle end event
      res.once('end', () => {
        debug('end %s %s', this.method, this.url);
        this.emit('end');
      });
      return;
    }

    // terminating events
    res.once('error', error => {
      parserHandlesEnd = false;
      this.callback(error, null);
    });
    if (!parserHandlesEnd) res.once('end', () => {
      debug('end %s %s', this.method, this.url);
      // TODO: unless buffering emit earlier to stream
      this.emit('end');
      this.callback(null, this._emitResponse());
    });
  });
  this.emit('request', this);
  const getProgressMonitor = () => {
    const lengthComputable = true;
    const total = req.getHeader('Content-Length');
    let loaded = 0;
    const progress = new Stream.Transform();
    progress._transform = (chunk, encoding, callback) => {
      loaded += chunk.length;
      this.emit('progress', {
        direction: 'upload',
        lengthComputable,
        loaded,
        total
      });
      callback(null, chunk);
    };
    return progress;
  };
  const bufferToChunks = buffer => {
    const chunkSize = 16 * 1024; // default highWaterMark value
    const chunking = new Stream.Readable();
    const totalLength = buffer.length;
    const remainder = totalLength % chunkSize;
    const cutoff = totalLength - remainder;
    for (let i = 0; i < cutoff; i += chunkSize) {
      const chunk = buffer.slice(i, i + chunkSize);
      chunking.push(chunk);
    }
    if (remainder > 0) {
      const remainderBuffer = buffer.slice(-remainder);
      chunking.push(remainderBuffer);
    }
    chunking.push(null); // no more data

    return chunking;
  };

  // if a FormData instance got created, then we send that as the request body
  const formData = this._formData;
  if (formData) {
    // set headers
    const headers = formData.getHeaders();
    for (const i in headers) {
      if (hasOwn(headers, i)) {
        debug('setting FormData header: "%s: %s"', i, headers[i]);
        req.setHeader(i, headers[i]);
      }
    }

    // attempt to get "Content-Length" header
    formData.getLength((error, length) => {
      // TODO: Add chunked encoding when no length (if err)
      if (error) debug('formData.getLength had error', error, length);
      debug('got FormData Content-Length: %s', length);
      if (typeof length === 'number') {
        req.setHeader('Content-Length', length);
      }
      formData.pipe(getProgressMonitor()).pipe(req);
    });
  } else if (Buffer.isBuffer(data)) {
    bufferToChunks(data).pipe(getProgressMonitor()).pipe(req);
  } else {
    req.end(data);
  }
};

// Check whether response has a non-0-sized gzip-encoded body
Request.prototype._shouldUnzip = res => {
  if (res.statusCode === 204 || res.statusCode === 304) {
    // These aren't supposed to have any body
    return false;
  }

  // header content is a string, and distinction between 0 and no information is crucial
  if (res.headers['content-length'] === '0') {
    // We know that the body is empty (unfortunately, this check does not cover chunked encoding)
    return false;
  }

  // console.log(res);
  return /^\s*(?:deflate|gzip)\s*$/.test(res.headers['content-encoding']);
};

/**
 * Overrides DNS for selected hostnames. Takes object mapping hostnames to IP addresses.
 *
 * When making a request to a URL with a hostname exactly matching a key in the object,
 * use the given IP address to connect, instead of using DNS to resolve the hostname.
 *
 * A special host `*` matches every hostname (keep redirects in mind!)
 *
 *      request.connect({
 *        'test.example.com': '127.0.0.1',
 *        'ipv6.example.com': '::1',
 *      })
 */
Request.prototype.connect = function (connectOverride) {
  if (typeof connectOverride === 'string') {
    this._connectOverride = {
      '*': connectOverride
    };
  } else if (typeof connectOverride === 'object') {
    this._connectOverride = connectOverride;
  } else {
    this._connectOverride = undefined;
  }
  return this;
};
Request.prototype.trustLocalhost = function (toggle) {
  this._trustLocalhost = toggle === undefined ? true : toggle;
  return this;
};

// generate HTTP verb methods
if (!methods.includes('del')) {
  // create a copy so we don't cause conflicts with
  // other packages using the methods package and
  // npm 3.x
  methods = [...methods];
  methods.push('del');
}
var _iterator = _createForOfIteratorHelper(methods),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    let method = _step.value;
    const name = method;
    method = method === 'del' ? 'delete' : method;
    method = method.toUpperCase();
    request[name] = (url, data, fn) => {
      const request_ = request(method, url);
      if (typeof data === 'function') {
        fn = data;
        data = null;
      }
      if (data) {
        if (method === 'GET' || method === 'HEAD') {
          request_.query(data);
        } else {
          request_.send(data);
        }
      }
      if (fn) request_.end(fn);
      return request_;
    };
  }

  /**
   * Check if `mime` is text and should be buffered.
   *
   * @param {String} mime
   * @return {Boolean}
   * @api public
   */
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
function isText(mime) {
  const parts = mime.split('/');
  let type = parts[0];
  if (type) type = type.toLowerCase().trim();
  let subtype = parts[1];
  if (subtype) subtype = subtype.toLowerCase().trim();
  return type === 'text' || subtype === 'x-www-form-urlencoded';
}

// This is not a catchall, but a start. It might be useful
// in the long run to have file that includes all binary
// content types from https://www.iana.org/assignments/media-types/media-types.xhtml
function isBinary(mime) {
  let _mime$split = mime.split('/'),
    _mime$split2 = _slicedToArray(_mime$split, 2),
    registry = _mime$split2[0],
    name = _mime$split2[1];
  if (registry) registry = registry.toLowerCase().trim();
  if (name) name = name.toLowerCase().trim();
  return ['audio', 'font', 'image', 'video'].includes(registry) || ['gz', 'gzip'].includes(name);
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[/+]json($|[^-\w])/i.test(mime);
}

/**
 * Check if we should follow the redirect `code`.
 *
 * @param {Number} code
 * @return {Boolean}
 * @api private
 */

function isRedirect(code) {
  return [301, 302, 303, 305, 307, 308].includes(code);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVxdWlyZSIsInJlcXVpcmUiLCJwYXJzZSIsImZvcm1hdCIsInJlc29sdmUiLCJTdHJlYW0iLCJodHRwcyIsImh0dHAiLCJmcyIsInpsaWIiLCJ1dGlsIiwicXMiLCJtaW1lIiwibWV0aG9kcyIsIkZvcm1EYXRhIiwiZm9ybWlkYWJsZSIsImRlYnVnIiwiQ29va2llSmFyIiwic2VtdmVyR3RlIiwic2FmZVN0cmluZ2lmeSIsInV0aWxzIiwiUmVxdWVzdEJhc2UiLCJfcmVxdWlyZTIiLCJ1bnppcCIsIlJlc3BvbnNlIiwibWl4aW4iLCJoYXNPd24iLCJodHRwMiIsInByb2Nlc3MiLCJ2ZXJzaW9uIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImV4cG9ydHMiLCJSZXF1ZXN0IiwiZW5kIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibW9kdWxlIiwiYWdlbnQiLCJub29wIiwiZGVmaW5lIiwicHJvdG9jb2xzIiwic2VyaWFsaXplIiwic3RyaW5naWZ5IiwiYnVmZmVyIiwiX2luaXRIZWFkZXJzIiwicmVxdWVzdF8iLCJfaGVhZGVyIiwiaGVhZGVyIiwiY2FsbCIsIl9lbmFibGVIdHRwMiIsIkJvb2xlYW4iLCJlbnYiLCJIVFRQMl9URVNUIiwiX2FnZW50IiwiX2Zvcm1EYXRhIiwid3JpdGFibGUiLCJfcmVkaXJlY3RzIiwicmVkaXJlY3RzIiwiY29va2llcyIsIl9xdWVyeSIsInFzUmF3IiwiX3JlZGlyZWN0TGlzdCIsIl9zdHJlYW1SZXF1ZXN0IiwiX2xvb2t1cCIsInVuZGVmaW5lZCIsIm9uY2UiLCJjbGVhclRpbWVvdXQiLCJiaW5kIiwiaW5oZXJpdHMiLCJwcm90b3R5cGUiLCJib29sIiwiRXJyb3IiLCJhdHRhY2giLCJmaWVsZCIsImZpbGUiLCJvcHRpb25zIiwiX2RhdGEiLCJvIiwiZmlsZW5hbWUiLCJjcmVhdGVSZWFkU3RyZWFtIiwib24iLCJlcnJvciIsImZvcm1EYXRhIiwiX2dldEZvcm1EYXRhIiwiZW1pdCIsInBhdGgiLCJhcHBlbmQiLCJjYWxsZWQiLCJjYWxsYmFjayIsImFib3J0IiwibG9va3VwIiwidHlwZSIsInNldCIsImluY2x1ZGVzIiwiZ2V0VHlwZSIsImFjY2VwdCIsInF1ZXJ5IiwidmFsdWUiLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwid3JpdGUiLCJkYXRhIiwiZW5jb2RpbmciLCJwaXBlIiwic3RyZWFtIiwicGlwZWQiLCJfcGlwZUNvbnRpbnVlIiwicmVxIiwicmVzIiwiaXNSZWRpcmVjdCIsInN0YXR1c0NvZGUiLCJfbWF4UmVkaXJlY3RzIiwiX3JlZGlyZWN0IiwiX2VtaXRSZXNwb25zZSIsIl9hYm9ydGVkIiwiX3Nob3VsZFVuemlwIiwidW56aXBPYmplY3QiLCJjcmVhdGVVbnppcCIsImNvZGUiLCJfYnVmZmVyIiwiaGVhZGVycyIsImxvY2F0aW9uIiwicmVzdW1lIiwiZ2V0SGVhZGVycyIsIl9oZWFkZXJzIiwiY2hhbmdlc09yaWdpbiIsImhvc3QiLCJjbGVhbkhlYWRlciIsIl9lbmRDYWxsZWQiLCJfZW1pdFJlZGlyZWN0IiwiX2NhbGxiYWNrIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwiZW5jb2RlciIsInN0cmluZyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIl9hdXRoIiwiY2EiLCJjZXJ0IiwiX2NhIiwia2V5IiwiX2tleSIsInBmeCIsImlzQnVmZmVyIiwiX3BmeCIsIl9wYXNzcGhyYXNlIiwicGFzc3BocmFzZSIsIl9jZXJ0IiwiZGlzYWJsZVRMU0NlcnRzIiwiX2Rpc2FibGVUTFNDZXJ0cyIsImluZGljZXMiLCJzdHJpY3ROdWxsSGFuZGxpbmciLCJfZmluYWxpemVRdWVyeVN0cmluZyIsImVyciIsInJldHJpZXMiLCJfcmV0cmllcyIsInF1ZXJ5U3RyaW5nQmFja3RpY2tzIiwicXVlcnlTdGFydEluZGV4IiwiaW5kZXhPZiIsInF1ZXJ5U3RyaW5nIiwic2xpY2UiLCJtYXRjaCIsImkiLCJyZXBsYWNlIiwic2VhcmNoIiwicGF0aG5hbWUiLCJ0ZXN0IiwicHJvdG9jb2wiLCJzcGxpdCIsInVuaXhQYXJ0cyIsInNvY2tldFBhdGgiLCJfY29ubmVjdE92ZXJyaWRlIiwiX3VybCIsImhvc3RuYW1lIiwibmV3SG9zdCIsIm5ld1BvcnQiLCJwb3J0IiwicmVqZWN0VW5hdXRob3JpemVkIiwiTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCIsInNlcnZlcm5hbWUiLCJfdHJ1c3RMb2NhbGhvc3QiLCJtb2R1bGVfIiwic2V0UHJvdG9jb2wiLCJzZXROb0RlbGF5Iiwic2V0SGVhZGVyIiwicmVzcG9uc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGVtcG9yYXJ5SmFyIiwic2V0Q29va2llcyIsImNvb2tpZSIsImdldENvb2tpZXMiLCJDb29raWVBY2Nlc3NJbmZvIiwiQWxsIiwidG9WYWx1ZVN0cmluZyIsIl9zaG91bGRSZXRyeSIsIl9yZXRyeSIsImZuIiwiY29uc29sZSIsIndhcm4iLCJfaXNSZXNwb25zZU9LIiwibWVzc2FnZSIsIlNUQVRVU19DT0RFUyIsInN0YXR1cyIsIl9tYXhSZXRyaWVzIiwibGlzdGVuZXJzIiwiX2lzSG9zdCIsIm9iamVjdCIsImJvZHkiLCJmaWxlcyIsIl9lbmQiLCJfc2V0VGltZW91dHMiLCJfaGVhZGVyU2VudCIsImNvbnRlbnRUeXBlIiwiZ2V0SGVhZGVyIiwiX3NlcmlhbGl6ZXIiLCJpc0pTT04iLCJieXRlTGVuZ3RoIiwiX3Jlc3BvbnNlVGltZW91dFRpbWVyIiwibWF4IiwidG9Mb3dlckNhc2UiLCJ0cmltIiwibXVsdGlwYXJ0IiwicmVkaXJlY3QiLCJyZXNwb25zZVR5cGUiLCJfcmVzcG9uc2VUeXBlIiwicGFyc2VyIiwiX3BhcnNlciIsImltYWdlIiwiZm9ybSIsImlzQmluYXJ5IiwidGV4dCIsImlzVGV4dCIsIl9yZXNCdWZmZXJlZCIsInBhcnNlckhhbmRsZXNFbmQiLCJyZXNwb25zZUJ5dGVzTGVmdCIsIl9tYXhSZXNwb25zZVNpemUiLCJidWYiLCJkZXN0cm95IiwidGltZWRvdXQiLCJnZXRQcm9ncmVzc01vbml0b3IiLCJsZW5ndGhDb21wdXRhYmxlIiwidG90YWwiLCJsb2FkZWQiLCJwcm9ncmVzcyIsIlRyYW5zZm9ybSIsIl90cmFuc2Zvcm0iLCJjaHVuayIsImRpcmVjdGlvbiIsImJ1ZmZlclRvQ2h1bmtzIiwiY2h1bmtTaXplIiwiY2h1bmtpbmciLCJSZWFkYWJsZSIsInRvdGFsTGVuZ3RoIiwicmVtYWluZGVyIiwiY3V0b2ZmIiwicmVtYWluZGVyQnVmZmVyIiwiZ2V0TGVuZ3RoIiwiY29ubmVjdCIsImNvbm5lY3RPdmVycmlkZSIsInRydXN0TG9jYWxob3N0IiwidG9nZ2xlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsInNlbmQiLCJlIiwiZiIsInBhcnRzIiwic3VidHlwZSIsIl9taW1lJHNwbGl0IiwiX21pbWUkc3BsaXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJyZWdpc3RyeSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby1kZXByZWNhdGVkLWFwaVxuY29uc3QgeyBwYXJzZSwgZm9ybWF0LCByZXNvbHZlIH0gPSByZXF1aXJlKCd1cmwnKTtcbmNvbnN0IFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuY29uc3QgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHpsaWIgPSByZXF1aXJlKCd6bGliJyk7XG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgcXMgPSByZXF1aXJlKCdxcycpO1xuY29uc3QgbWltZSA9IHJlcXVpcmUoJ21pbWUnKTtcbmxldCBtZXRob2RzID0gcmVxdWlyZSgnbWV0aG9kcycpO1xuY29uc3QgRm9ybURhdGEgPSByZXF1aXJlKCdmb3JtLWRhdGEnKTtcbmNvbnN0IGZvcm1pZGFibGUgPSByZXF1aXJlKCdmb3JtaWRhYmxlJyk7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3N1cGVyYWdlbnQnKTtcbmNvbnN0IENvb2tpZUphciA9IHJlcXVpcmUoJ2Nvb2tpZWphcicpO1xuY29uc3Qgc2VtdmVyR3RlID0gcmVxdWlyZSgnc2VtdmVyL2Z1bmN0aW9ucy9ndGUnKTtcbmNvbnN0IHNhZmVTdHJpbmdpZnkgPSByZXF1aXJlKCdmYXN0LXNhZmUtc3RyaW5naWZ5Jyk7XG5cbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcbmNvbnN0IFJlcXVlc3RCYXNlID0gcmVxdWlyZSgnLi4vcmVxdWVzdC1iYXNlJyk7XG5jb25zdCB7IHVuemlwIH0gPSByZXF1aXJlKCcuL3VuemlwJyk7XG5jb25zdCBSZXNwb25zZSA9IHJlcXVpcmUoJy4vcmVzcG9uc2UnKTtcblxuY29uc3QgeyBtaXhpbiwgaGFzT3duIH0gPSB1dGlscztcblxubGV0IGh0dHAyO1xuXG5pZiAoc2VtdmVyR3RlKHByb2Nlc3MudmVyc2lvbiwgJ3YxMC4xMC4wJykpIGh0dHAyID0gcmVxdWlyZSgnLi9odHRwMndyYXBwZXInKTtcblxuZnVuY3Rpb24gcmVxdWVzdChtZXRob2QsIHVybCkge1xuICAvLyBjYWxsYmFja1xuICBpZiAodHlwZW9mIHVybCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBuZXcgZXhwb3J0cy5SZXF1ZXN0KCdHRVQnLCBtZXRob2QpLmVuZCh1cmwpO1xuICB9XG5cbiAgLy8gdXJsIGZpcnN0XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QoJ0dFVCcsIG1ldGhvZCk7XG4gIH1cblxuICByZXR1cm4gbmV3IGV4cG9ydHMuUmVxdWVzdChtZXRob2QsIHVybCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdDtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBFeHBvc2UgYFJlcXVlc3RgLlxuICovXG5cbmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogRXhwb3NlIHRoZSBhZ2VudCBmdW5jdGlvblxuICovXG5cbmV4cG9ydHMuYWdlbnQgPSByZXF1aXJlKCcuL2FnZW50Jyk7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5leHBvcnRzLlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbi8qKlxuICogRGVmaW5lIFwiZm9ybVwiIG1pbWUgdHlwZS5cbiAqL1xuXG5taW1lLmRlZmluZShcbiAge1xuICAgICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBbJ2Zvcm0nLCAndXJsZW5jb2RlZCcsICdmb3JtLWRhdGEnXVxuICB9LFxuICB0cnVlXG4pO1xuXG4vKipcbiAqIFByb3RvY29sIG1hcC5cbiAqL1xuXG5leHBvcnRzLnByb3RvY29scyA9IHtcbiAgJ2h0dHA6JzogaHR0cCxcbiAgJ2h0dHBzOic6IGh0dHBzLFxuICAnaHR0cDI6JzogaHR0cDJcbn07XG5cbi8qKlxuICogRGVmYXVsdCBzZXJpYWxpemF0aW9uIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC5zZXJpYWxpemVbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24ob2JqKXtcbiAqICAgICAgIHJldHVybiAnZ2VuZXJhdGVkIHhtbCBoZXJlJztcbiAqICAgICB9O1xuICpcbiAqL1xuXG5leHBvcnRzLnNlcmlhbGl6ZSA9IHtcbiAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHFzLnN0cmluZ2lmeSxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nOiBzYWZlU3RyaW5naWZ5XG59O1xuXG4vKipcbiAqIERlZmF1bHQgcGFyc2Vycy5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihyZXMsIGZuKXtcbiAqICAgICAgIGZuKG51bGwsIHJlcyk7XG4gKiAgICAgfTtcbiAqXG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG4vKipcbiAqIERlZmF1bHQgYnVmZmVyaW5nIG1hcC4gQ2FuIGJlIHVzZWQgdG8gc2V0IGNlcnRhaW5cbiAqIHJlc3BvbnNlIHR5cGVzIHRvIGJ1ZmZlci9ub3QgYnVmZmVyLlxuICpcbiAqICAgICBzdXBlcmFnZW50LmJ1ZmZlclsnYXBwbGljYXRpb24veG1sJ10gPSB0cnVlO1xuICovXG5leHBvcnRzLmJ1ZmZlciA9IHt9O1xuXG4vKipcbiAqIEluaXRpYWxpemUgaW50ZXJuYWwgaGVhZGVyIHRyYWNraW5nIHByb3BlcnRpZXMgb24gYSByZXF1ZXN0IGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZXEgdGhlIGluc3RhbmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX2luaXRIZWFkZXJzKHJlcXVlc3RfKSB7XG4gIHJlcXVlc3RfLl9oZWFkZXIgPSB7XG4gICAgLy8gY29lcmNlcyBoZWFkZXIgbmFtZXMgdG8gbG93ZXJjYXNlXG4gIH07XG4gIHJlcXVlc3RfLmhlYWRlciA9IHtcbiAgICAvLyBwcmVzZXJ2ZXMgaGVhZGVyIG5hbWUgY2FzZVxuICB9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlcXVlc3RgIHdpdGggdGhlIGdpdmVuIGBtZXRob2RgIGFuZCBgdXJsYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHVybCA9IGZvcm1hdCh1cmwpO1xuICB0aGlzLl9lbmFibGVIdHRwMiA9IEJvb2xlYW4ocHJvY2Vzcy5lbnYuSFRUUDJfVEVTVCk7IC8vIGludGVybmFsIG9ubHlcbiAgdGhpcy5fYWdlbnQgPSBmYWxzZTtcbiAgdGhpcy5fZm9ybURhdGEgPSBudWxsO1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIF9pbml0SGVhZGVycyh0aGlzKTtcbiAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gIHRoaXMuX3JlZGlyZWN0cyA9IDA7XG4gIHRoaXMucmVkaXJlY3RzKG1ldGhvZCA9PT0gJ0hFQUQnID8gMCA6IDUpO1xuICB0aGlzLmNvb2tpZXMgPSAnJztcbiAgdGhpcy5xcyA9IHt9O1xuICB0aGlzLl9xdWVyeSA9IFtdO1xuICB0aGlzLnFzUmF3ID0gdGhpcy5fcXVlcnk7IC8vIFVudXNlZCwgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IG9ubHlcbiAgdGhpcy5fcmVkaXJlY3RMaXN0ID0gW107XG4gIHRoaXMuX3N0cmVhbVJlcXVlc3QgPSBmYWxzZTtcbiAgdGhpcy5fbG9va3VwID0gdW5kZWZpbmVkO1xuICB0aGlzLm9uY2UoJ2VuZCcsIHRoaXMuY2xlYXJUaW1lb3V0LmJpbmQodGhpcykpO1xufVxuXG4vKipcbiAqIEluaGVyaXQgZnJvbSBgU3RyZWFtYCAod2hpY2ggaW5oZXJpdHMgZnJvbSBgRXZlbnRFbWl0dGVyYCkuXG4gKiBNaXhpbiBgUmVxdWVzdEJhc2VgLlxuICovXG51dGlsLmluaGVyaXRzKFJlcXVlc3QsIFN0cmVhbSk7XG5cbm1peGluKFJlcXVlc3QucHJvdG90eXBlLCBSZXF1ZXN0QmFzZS5wcm90b3R5cGUpO1xuXG4vKipcbiAqIEVuYWJsZSBvciBEaXNhYmxlIGh0dHAyLlxuICpcbiAqIEVuYWJsZSBodHRwMi5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QuZ2V0KCdodHRwOi8vbG9jYWxob3N0LycpXG4gKiAgIC5odHRwMigpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIHJlcXVlc3QuZ2V0KCdodHRwOi8vbG9jYWxob3N0LycpXG4gKiAgIC5odHRwMih0cnVlKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIERpc2FibGUgaHR0cDIuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0ID0gcmVxdWVzdC5odHRwMigpO1xuICogcmVxdWVzdC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3QvJylcbiAqICAgLmh0dHAyKGZhbHNlKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5hYmxlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuaHR0cDIgPSBmdW5jdGlvbiAoYm9vbCkge1xuICBpZiAoZXhwb3J0cy5wcm90b2NvbHNbJ2h0dHAyOiddID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnc3VwZXJhZ2VudDogdGhpcyB2ZXJzaW9uIG9mIE5vZGUuanMgZG9lcyBub3Qgc3VwcG9ydCBodHRwMidcbiAgICApO1xuICB9XG5cbiAgdGhpcy5fZW5hYmxlSHR0cDIgPSBib29sID09PSB1bmRlZmluZWQgPyB0cnVlIDogYm9vbDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFF1ZXVlIHRoZSBnaXZlbiBgZmlsZWAgYXMgYW4gYXR0YWNobWVudCB0byB0aGUgc3BlY2lmaWVkIGBmaWVsZGAsXG4gKiB3aXRoIG9wdGlvbmFsIGBvcHRpb25zYCAob3IgZmlsZW5hbWUpLlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCdodHRwOi8vbG9jYWxob3N0L3VwbG9hZCcpXG4gKiAgIC5hdHRhY2goJ2ZpZWxkJywgQnVmZmVyLmZyb20oJzxiPkhlbGxvIHdvcmxkPC9iPicpLCAnaGVsbG8uaHRtbCcpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQSBmaWxlbmFtZSBtYXkgYWxzbyBiZSB1c2VkOlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCdodHRwOi8vbG9jYWxob3N0L3VwbG9hZCcpXG4gKiAgIC5hdHRhY2goJ2ZpbGVzJywgJ2ltYWdlLmpwZycpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ3xmcy5SZWFkU3RyZWFtfEJ1ZmZlcn0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKGZpZWxkLCBmaWxlLCBvcHRpb25zKSB7XG4gIGlmIChmaWxlKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInN1cGVyYWdlbnQgY2FuJ3QgbWl4IC5zZW5kKCkgYW5kIC5hdHRhY2goKVwiKTtcbiAgICB9XG5cbiAgICBsZXQgbyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgbyA9IHsgZmlsZW5hbWU6IG9wdGlvbnMgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGZpbGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIW8uZmlsZW5hbWUpIG8uZmlsZW5hbWUgPSBmaWxlO1xuICAgICAgZGVidWcoJ2NyZWF0aW5nIGBmcy5SZWFkU3RyZWFtYCBpbnN0YW5jZSBmb3IgZmlsZTogJXMnLCBmaWxlKTtcbiAgICAgIGZpbGUgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKGZpbGUpO1xuICAgICAgZmlsZS5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSB0aGlzLl9nZXRGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIW8uZmlsZW5hbWUgJiYgZmlsZS5wYXRoKSB7XG4gICAgICBvLmZpbGVuYW1lID0gZmlsZS5wYXRoO1xuICAgIH1cblxuICAgIHRoaXMuX2dldEZvcm1EYXRhKCkuYXBwZW5kKGZpZWxkLCBmaWxlLCBvKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX2dldEZvcm1EYXRhID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB7XG4gICAgdGhpcy5fZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICB0aGlzLl9mb3JtRGF0YS5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICAgIGRlYnVnKCdGb3JtRGF0YSBlcnJvcicsIGVycm9yKTtcbiAgICAgIGlmICh0aGlzLmNhbGxlZCkge1xuICAgICAgICAvLyBUaGUgcmVxdWVzdCBoYXMgYWxyZWFkeSBmaW5pc2hlZCBhbmQgdGhlIGNhbGxiYWNrIHdhcyBjYWxsZWQuXG4gICAgICAgIC8vIFNpbGVudGx5IGlnbm9yZSB0aGUgZXJyb3IuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWxsYmFjayhlcnJvcik7XG4gICAgICB0aGlzLmFib3J0KCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fZm9ybURhdGE7XG59O1xuXG4vKipcbiAqIEdldHMvc2V0cyB0aGUgYEFnZW50YCB0byB1c2UgZm9yIHRoaXMgSFRUUCByZXF1ZXN0LiBUaGUgZGVmYXVsdCAoaWYgdGhpc1xuICogZnVuY3Rpb24gaXMgbm90IGNhbGxlZCkgaXMgdG8gb3B0IG91dCBvZiBjb25uZWN0aW9uIHBvb2xpbmcgKGBhZ2VudDogZmFsc2VgKS5cbiAqXG4gKiBAcGFyYW0ge2h0dHAuQWdlbnR9IGFnZW50XG4gKiBAcmV0dXJuIHtodHRwLkFnZW50fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hZ2VudCA9IGZ1bmN0aW9uIChhZ2VudCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRoaXMuX2FnZW50O1xuICB0aGlzLl9hZ2VudCA9IGFnZW50O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogR2V0cy9zZXRzIHRoZSBgbG9va3VwYCBmdW5jdGlvbiB0byB1c2UgY3VzdG9tIEROUyByZXNvbHZlci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsb29rdXBcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5sb29rdXAgPSBmdW5jdGlvbiAobG9va3VwKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdGhpcy5fbG9va3VwO1xuICB0aGlzLl9sb29rdXAgPSBsb29rdXA7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgX0NvbnRlbnQtVHlwZV8gcmVzcG9uc2UgaGVhZGVyIHBhc3NlZCB0aHJvdWdoIGBtaW1lLmdldFR5cGUoKWAuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCd4bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ2pzb24nKVxuICogICAgICAgIC5zZW5kKGpzb25zdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuc2VuZChqc29uc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiB0aGlzLnNldChcbiAgICAnQ29udGVudC1UeXBlJyxcbiAgICB0eXBlLmluY2x1ZGVzKCcvJykgPyB0eXBlIDogbWltZS5nZXRUeXBlKHR5cGUpXG4gICk7XG59O1xuXG4vKipcbiAqIFNldCBfQWNjZXB0XyByZXNwb25zZSBoZWFkZXIgcGFzc2VkIHRocm91Z2ggYG1pbWUuZ2V0VHlwZSgpYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMuanNvbiA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFjY2VwdFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiB0aGlzLnNldCgnQWNjZXB0JywgdHlwZS5pbmNsdWRlcygnLycpID8gdHlwZSA6IG1pbWUuZ2V0VHlwZSh0eXBlKSk7XG59O1xuXG4vKipcbiAqIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICByZXF1ZXN0LmdldCgnL3Nob2VzJylcbiAqICAgICAucXVlcnkoJ3NpemU9MTAnKVxuICogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhpcy5fcXVlcnkucHVzaCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnFzLCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgcmF3IGBkYXRhYCAvIGBlbmNvZGluZ2AgdG8gdGhlIHNvY2tldC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlcnxTdHJpbmd9IGRhdGFcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmNvZGluZ1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZW5jb2RpbmcpIHtcbiAgY29uc3QgcmVxdWVzdF8gPSB0aGlzLnJlcXVlc3QoKTtcbiAgaWYgKCF0aGlzLl9zdHJlYW1SZXF1ZXN0KSB7XG4gICAgdGhpcy5fc3RyZWFtUmVxdWVzdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVxdWVzdF8ud3JpdGUoZGF0YSwgZW5jb2RpbmcpO1xufTtcblxuLyoqXG4gKiBQaXBlIHRoZSByZXF1ZXN0IGJvZHkgdG8gYHN0cmVhbWAuXG4gKlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1N0cmVhbX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uIChzdHJlYW0sIG9wdGlvbnMpIHtcbiAgdGhpcy5waXBlZCA9IHRydWU7IC8vIEhBQ0suLi5cbiAgdGhpcy5idWZmZXIoZmFsc2UpO1xuICB0aGlzLmVuZCgpO1xuICByZXR1cm4gdGhpcy5fcGlwZUNvbnRpbnVlKHN0cmVhbSwgb3B0aW9ucyk7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5fcGlwZUNvbnRpbnVlID0gZnVuY3Rpb24gKHN0cmVhbSwgb3B0aW9ucykge1xuICB0aGlzLnJlcS5vbmNlKCdyZXNwb25zZScsIChyZXMpID0+IHtcbiAgICAvLyByZWRpcmVjdFxuICAgIGlmIChcbiAgICAgIGlzUmVkaXJlY3QocmVzLnN0YXR1c0NvZGUpICYmXG4gICAgICB0aGlzLl9yZWRpcmVjdHMrKyAhPT0gdGhpcy5fbWF4UmVkaXJlY3RzXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3QocmVzKSA9PT0gdGhpc1xuICAgICAgICA/IHRoaXMuX3BpcGVDb250aW51ZShzdHJlYW0sIG9wdGlvbnMpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMucmVzID0gcmVzO1xuICAgIHRoaXMuX2VtaXRSZXNwb25zZSgpO1xuICAgIGlmICh0aGlzLl9hYm9ydGVkKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5fc2hvdWxkVW56aXAocmVzKSkge1xuICAgICAgY29uc3QgdW56aXBPYmplY3QgPSB6bGliLmNyZWF0ZVVuemlwKCk7XG4gICAgICB1bnppcE9iamVjdC5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNvZGUgPT09ICdaX0JVRl9FUlJPUicpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIGVuZCBvZiBmaWxlIGlzIGlnbm9yZWQgYnkgYnJvd3NlcnMgYW5kIGN1cmxcbiAgICAgICAgICBzdHJlYW0uZW1pdCgnZW5kJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgfSk7XG4gICAgICByZXMucGlwZSh1bnppcE9iamVjdCkucGlwZShzdHJlYW0sIG9wdGlvbnMpO1xuICAgICAgLy8gZG9uJ3QgZW1pdCAnZW5kJyB1bnRpbCB1bnppcE9iamVjdCBoYXMgY29tcGxldGVkIHdyaXRpbmcgYWxsIGl0cyBkYXRhLlxuICAgICAgdW56aXBPYmplY3Qub25jZSgnZW5kJywgKCkgPT4gdGhpcy5lbWl0KCdlbmQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5waXBlKHN0cmVhbSwgb3B0aW9ucyk7XG4gICAgICByZXMub25jZSgnZW5kJywgKCkgPT4gdGhpcy5lbWl0KCdlbmQnKSk7XG4gICAgfVxuXG4gIH0pO1xuICByZXR1cm4gc3RyZWFtO1xufTtcblxuLyoqXG4gKiBFbmFibGUgLyBkaXNhYmxlIGJ1ZmZlcmluZy5cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufSBbdmFsXVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmJ1ZmZlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB0aGlzLl9idWZmZXIgPSB2YWx1ZSAhPT0gZmFsc2U7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZWRpcmVjdCB0byBgdXJsXG4gKlxuICogQHBhcmFtIHtJbmNvbWluZ01lc3NhZ2V9IHJlc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5fcmVkaXJlY3QgPSBmdW5jdGlvbiAocmVzKSB7XG4gIGxldCB1cmwgPSByZXMuaGVhZGVycy5sb2NhdGlvbjtcbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsYmFjayhuZXcgRXJyb3IoJ05vIGxvY2F0aW9uIGhlYWRlciBmb3IgcmVkaXJlY3QnKSwgcmVzKTtcbiAgfVxuXG4gIGRlYnVnKCdyZWRpcmVjdCAlcyAtPiAlcycsIHRoaXMudXJsLCB1cmwpO1xuXG4gIC8vIGxvY2F0aW9uXG4gIHVybCA9IHJlc29sdmUodGhpcy51cmwsIHVybCk7XG5cbiAgLy8gZW5zdXJlIHRoZSByZXNwb25zZSBpcyBiZWluZyBjb25zdW1lZFxuICAvLyB0aGlzIGlzIHJlcXVpcmVkIGZvciBOb2RlIHYwLjEwK1xuICByZXMucmVzdW1lKCk7XG5cbiAgbGV0IGhlYWRlcnMgPSB0aGlzLnJlcS5nZXRIZWFkZXJzID8gdGhpcy5yZXEuZ2V0SGVhZGVycygpIDogdGhpcy5yZXEuX2hlYWRlcnM7XG5cbiAgY29uc3QgY2hhbmdlc09yaWdpbiA9IHBhcnNlKHVybCkuaG9zdCAhPT0gcGFyc2UodGhpcy51cmwpLmhvc3Q7XG5cbiAgLy8gaW1wbGVtZW50YXRpb24gb2YgMzAyIGZvbGxvd2luZyBkZWZhY3RvIHN0YW5kYXJkXG4gIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMzAxIHx8IHJlcy5zdGF0dXNDb2RlID09PSAzMDIpIHtcbiAgICAvLyBzdHJpcCBDb250ZW50LSogcmVsYXRlZCBmaWVsZHNcbiAgICAvLyBpbiBjYXNlIG9mIFBPU1QgZXRjXG4gICAgaGVhZGVycyA9IHV0aWxzLmNsZWFuSGVhZGVyKGhlYWRlcnMsIGNoYW5nZXNPcmlnaW4pO1xuXG4gICAgLy8gZm9yY2UgR0VUXG4gICAgdGhpcy5tZXRob2QgPSB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnID8gJ0hFQUQnIDogJ0dFVCc7XG5cbiAgICAvLyBjbGVhciBkYXRhXG4gICAgdGhpcy5fZGF0YSA9IG51bGw7XG4gIH1cblxuICAvLyAzMDMgaXMgYWx3YXlzIEdFVFxuICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDMwMykge1xuICAgIC8vIHN0cmlwIENvbnRlbnQtKiByZWxhdGVkIGZpZWxkc1xuICAgIC8vIGluIGNhc2Ugb2YgUE9TVCBldGNcbiAgICBoZWFkZXJzID0gdXRpbHMuY2xlYW5IZWFkZXIoaGVhZGVycywgY2hhbmdlc09yaWdpbik7XG5cbiAgICAvLyBmb3JjZSBtZXRob2RcbiAgICB0aGlzLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgLy8gY2xlYXIgZGF0YVxuICAgIHRoaXMuX2RhdGEgPSBudWxsO1xuICB9XG5cbiAgLy8gMzA3IHByZXNlcnZlcyBtZXRob2RcbiAgLy8gMzA4IHByZXNlcnZlcyBtZXRob2RcbiAgZGVsZXRlIGhlYWRlcnMuaG9zdDtcblxuICBkZWxldGUgdGhpcy5yZXE7XG4gIGRlbGV0ZSB0aGlzLl9mb3JtRGF0YTtcblxuICAvLyByZW1vdmUgYWxsIGFkZCBoZWFkZXIgZXhjZXB0IFVzZXItQWdlbnRcbiAgX2luaXRIZWFkZXJzKHRoaXMpO1xuXG4gIC8vIHJlZGlyZWN0XG4gIHRoaXMucmVzID0gcmVzO1xuICB0aGlzLl9lbmRDYWxsZWQgPSBmYWxzZTtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMucXMgPSB7fTtcbiAgdGhpcy5fcXVlcnkubGVuZ3RoID0gMDtcbiAgdGhpcy5zZXQoaGVhZGVycyk7XG4gIHRoaXMuX2VtaXRSZWRpcmVjdCgpO1xuICB0aGlzLl9yZWRpcmVjdExpc3QucHVzaCh0aGlzLnVybCk7XG4gIHRoaXMuZW5kKHRoaXMuX2NhbGxiYWNrKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBdXRob3JpemF0aW9uIGZpZWxkIHZhbHVlIHdpdGggYHVzZXJgIGFuZCBgcGFzc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAuYXV0aCgndG9iaScsICdsZWFybmJvb3N0JylcbiAqICAgLmF1dGgoJ3RvYmk6bGVhcm5ib29zdCcpXG4gKiAgIC5hdXRoKCd0b2JpJylcbiAqICAgLmF1dGgoYWNjZXNzVG9rZW4sIHsgdHlwZTogJ2JlYXJlcicgfSlcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IFtwYXNzXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBvcHRpb25zIHdpdGggYXV0aG9yaXphdGlvbiB0eXBlICdiYXNpYycgb3IgJ2JlYXJlcicgKCdiYXNpYycgaXMgZGVmYXVsdClcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24gKHVzZXIsIHBhc3MsIG9wdGlvbnMpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHBhc3MgPSAnJztcbiAgaWYgKHR5cGVvZiBwYXNzID09PSAnb2JqZWN0JyAmJiBwYXNzICE9PSBudWxsKSB7XG4gICAgLy8gcGFzcyBpcyBvcHRpb25hbCBhbmQgY2FuIGJlIHJlcGxhY2VkIHdpdGggb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBwYXNzO1xuICAgIHBhc3MgPSAnJztcbiAgfVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7IHR5cGU6ICdiYXNpYycgfTtcbiAgfVxuXG4gIGNvbnN0IGVuY29kZXIgPSAoc3RyaW5nKSA9PiBCdWZmZXIuZnJvbShzdHJpbmcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcblxuICByZXR1cm4gdGhpcy5fYXV0aCh1c2VyLCBwYXNzLCBvcHRpb25zLCBlbmNvZGVyKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBjZXJ0aWZpY2F0ZSBhdXRob3JpdHkgb3B0aW9uIGZvciBodHRwcyByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7QnVmZmVyIHwgQXJyYXl9IGNlcnRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jYSA9IGZ1bmN0aW9uIChjZXJ0KSB7XG4gIHRoaXMuX2NhID0gY2VydDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgY2xpZW50IGNlcnRpZmljYXRlIGtleSBvcHRpb24gZm9yIGh0dHBzIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHtCdWZmZXIgfCBTdHJpbmd9IGNlcnRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5rZXkgPSBmdW5jdGlvbiAoY2VydCkge1xuICB0aGlzLl9rZXkgPSBjZXJ0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRoZSBrZXksIGNlcnRpZmljYXRlLCBhbmQgQ0EgY2VydHMgb2YgdGhlIGNsaWVudCBpbiBQRlggb3IgUEtDUzEyIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlciB8IFN0cmluZ30gY2VydFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnBmeCA9IGZ1bmN0aW9uIChjZXJ0KSB7XG4gIGlmICh0eXBlb2YgY2VydCA9PT0gJ29iamVjdCcgJiYgIUJ1ZmZlci5pc0J1ZmZlcihjZXJ0KSkge1xuICAgIHRoaXMuX3BmeCA9IGNlcnQucGZ4O1xuICAgIHRoaXMuX3Bhc3NwaHJhc2UgPSBjZXJ0LnBhc3NwaHJhc2U7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fcGZ4ID0gY2VydDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGNsaWVudCBjZXJ0aWZpY2F0ZSBvcHRpb24gZm9yIGh0dHBzIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHtCdWZmZXIgfCBTdHJpbmd9IGNlcnRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jZXJ0ID0gZnVuY3Rpb24gKGNlcnQpIHtcbiAgdGhpcy5fY2VydCA9IGNlcnQ7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEbyBub3QgcmVqZWN0IGV4cGlyZWQgb3IgaW52YWxpZCBUTFMgY2VydHMuXG4gKiBzZXRzIGByZWplY3RVbmF1dGhvcml6ZWQ9dHJ1ZWAuIEJlIHdhcm5lZCB0aGF0IHRoaXMgYWxsb3dzIE1JVE0gYXR0YWNrcy5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZGlzYWJsZVRMU0NlcnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9kaXNhYmxlVExTQ2VydHMgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGh0dHBbc10gcmVxdWVzdC5cbiAqXG4gKiBAcmV0dXJuIHtPdXRnb2luZ01lc3NhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuUmVxdWVzdC5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucmVxKSByZXR1cm4gdGhpcy5yZXE7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkodGhpcy5xcywge1xuICAgICAgaW5kaWNlczogZmFsc2UsXG4gICAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IHRydWVcbiAgICB9KTtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHRoaXMucXMgPSB7fTtcbiAgICAgIHRoaXMuX3F1ZXJ5LnB1c2gocXVlcnkpO1xuICAgIH1cblxuICAgIHRoaXMuX2ZpbmFsaXplUXVlcnlTdHJpbmcoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG5cbiAgbGV0IHsgdXJsIH0gPSB0aGlzO1xuICBjb25zdCByZXRyaWVzID0gdGhpcy5fcmV0cmllcztcblxuICAvLyBDYXB0dXJlIGJhY2t0aWNrcyBhcy1pcyBmcm9tIHRoZSBmaW5hbCBxdWVyeSBzdHJpbmcgYnVpbHQgYWJvdmUuXG4gIC8vIE5vdGU6IHRoaXMnbGwgb25seSBmaW5kIGJhY2t0aWNrcyBlbnRlcmVkIGluIHJlcS5xdWVyeShTdHJpbmcpXG4gIC8vIGNhbGxzLCBiZWNhdXNlIHFzLnN0cmluZ2lmeSB1bmNvbmRpdGlvbmFsbHkgZW5jb2RlcyBiYWNrdGlja3MuXG4gIGxldCBxdWVyeVN0cmluZ0JhY2t0aWNrcztcbiAgaWYgKHVybC5pbmNsdWRlcygnYCcpKSB7XG4gICAgY29uc3QgcXVlcnlTdGFydEluZGV4ID0gdXJsLmluZGV4T2YoJz8nKTtcblxuICAgIGlmIChxdWVyeVN0YXJ0SW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHVybC5zbGljZShxdWVyeVN0YXJ0SW5kZXggKyAxKTtcbiAgICAgIHF1ZXJ5U3RyaW5nQmFja3RpY2tzID0gcXVlcnlTdHJpbmcubWF0Y2goL2B8JTYwL2cpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHQgdG8gaHR0cDovL1xuICBpZiAodXJsLmluZGV4T2YoJ2h0dHAnKSAhPT0gMCkgdXJsID0gYGh0dHA6Ly8ke3VybH1gO1xuICB1cmwgPSBwYXJzZSh1cmwpO1xuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbGFkanMvc3VwZXJhZ2VudC9pc3N1ZXMvMTM2N1xuICBpZiAocXVlcnlTdHJpbmdCYWNrdGlja3MpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgdXJsLnF1ZXJ5ID0gdXJsLnF1ZXJ5LnJlcGxhY2UoLyU2MC9nLCAoKSA9PiBxdWVyeVN0cmluZ0JhY2t0aWNrc1tpKytdKTtcbiAgICB1cmwuc2VhcmNoID0gYD8ke3VybC5xdWVyeX1gO1xuICAgIHVybC5wYXRoID0gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaDtcbiAgfVxuXG4gIC8vIHN1cHBvcnQgdW5peCBzb2NrZXRzXG4gIGlmICgvXmh0dHBzP1xcK3VuaXg6Ly50ZXN0KHVybC5wcm90b2NvbCkgPT09IHRydWUpIHtcbiAgICAvLyBnZXQgdGhlIHByb3RvY29sXG4gICAgdXJsLnByb3RvY29sID0gYCR7dXJsLnByb3RvY29sLnNwbGl0KCcrJylbMF19OmA7XG5cbiAgICAvLyBnZXQgdGhlIHNvY2tldCwgcGF0aFxuICAgIGNvbnN0IHVuaXhQYXJ0cyA9IHVybC5wYXRoLm1hdGNoKC9eKFteL10rKSguKykkLyk7XG4gICAgb3B0aW9ucy5zb2NrZXRQYXRoID0gdW5peFBhcnRzWzFdLnJlcGxhY2UoLyUyRi9nLCAnLycpO1xuICAgIHVybC5wYXRoID0gdW5peFBhcnRzWzJdO1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgSVAgYWRkcmVzcyBvZiBhIGhvc3RuYW1lXG4gIGlmICh0aGlzLl9jb25uZWN0T3ZlcnJpZGUpIHtcbiAgICBjb25zdCB7IGhvc3RuYW1lIH0gPSB1cmw7XG4gICAgY29uc3QgbWF0Y2ggPVxuICAgICAgaG9zdG5hbWUgaW4gdGhpcy5fY29ubmVjdE92ZXJyaWRlXG4gICAgICAgID8gdGhpcy5fY29ubmVjdE92ZXJyaWRlW2hvc3RuYW1lXVxuICAgICAgICA6IHRoaXMuX2Nvbm5lY3RPdmVycmlkZVsnKiddO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgLy8gYmFja3VwIHRoZSByZWFsIGhvc3RcbiAgICAgIGlmICghdGhpcy5faGVhZGVyLmhvc3QpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2hvc3QnLCB1cmwuaG9zdCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBuZXdIb3N0O1xuICAgICAgbGV0IG5ld1BvcnQ7XG5cbiAgICAgIGlmICh0eXBlb2YgbWF0Y2ggPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG5ld0hvc3QgPSBtYXRjaC5ob3N0O1xuICAgICAgICBuZXdQb3J0ID0gbWF0Y2gucG9ydDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0hvc3QgPSBtYXRjaDtcbiAgICAgICAgbmV3UG9ydCA9IHVybC5wb3J0O1xuICAgICAgfVxuXG4gICAgICAvLyB3cmFwIFtpcHY2XVxuICAgICAgdXJsLmhvc3QgPSAvOi8udGVzdChuZXdIb3N0KSA/IGBbJHtuZXdIb3N0fV1gIDogbmV3SG9zdDtcbiAgICAgIGlmIChuZXdQb3J0KSB7XG4gICAgICAgIHVybC5ob3N0ICs9IGA6JHtuZXdQb3J0fWA7XG4gICAgICAgIHVybC5wb3J0ID0gbmV3UG9ydDtcbiAgICAgIH1cblxuICAgICAgdXJsLmhvc3RuYW1lID0gbmV3SG9zdDtcbiAgICB9XG4gIH1cblxuICAvLyBvcHRpb25zXG4gIG9wdGlvbnMubWV0aG9kID0gdGhpcy5tZXRob2Q7XG4gIG9wdGlvbnMucG9ydCA9IHVybC5wb3J0O1xuICBvcHRpb25zLnBhdGggPSB1cmwucGF0aDtcbiAgb3B0aW9ucy5ob3N0ID0gdXJsLmhvc3RuYW1lO1xuICBvcHRpb25zLmNhID0gdGhpcy5fY2E7XG4gIG9wdGlvbnMua2V5ID0gdGhpcy5fa2V5O1xuICBvcHRpb25zLnBmeCA9IHRoaXMuX3BmeDtcbiAgb3B0aW9ucy5jZXJ0ID0gdGhpcy5fY2VydDtcbiAgb3B0aW9ucy5wYXNzcGhyYXNlID0gdGhpcy5fcGFzc3BocmFzZTtcbiAgb3B0aW9ucy5hZ2VudCA9IHRoaXMuX2FnZW50O1xuICBvcHRpb25zLmxvb2t1cCA9IHRoaXMuX2xvb2t1cDtcbiAgb3B0aW9ucy5yZWplY3RVbmF1dGhvcml6ZWQgPVxuICAgIHR5cGVvZiB0aGlzLl9kaXNhYmxlVExTQ2VydHMgPT09ICdib29sZWFuJ1xuICAgICAgPyAhdGhpcy5fZGlzYWJsZVRMU0NlcnRzXG4gICAgICA6IHByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgIT09ICcwJztcblxuICAvLyBBbGxvd3MgcmVxdWVzdC5nZXQoJ2h0dHBzOi8vMS4yLjMuNC8nKS5zZXQoJ0hvc3QnLCAnZXhhbXBsZS5jb20nKVxuICBpZiAodGhpcy5faGVhZGVyLmhvc3QpIHtcbiAgICBvcHRpb25zLnNlcnZlcm5hbWUgPSB0aGlzLl9oZWFkZXIuaG9zdC5yZXBsYWNlKC86XFxkKyQvLCAnJyk7XG4gIH1cblxuICBpZiAoXG4gICAgdGhpcy5fdHJ1c3RMb2NhbGhvc3QgJiZcbiAgICAvXig/OmxvY2FsaG9zdHwxMjdcXC4wXFwuMFxcLlxcZCt8KDAqOikrOjAqMSkkLy50ZXN0KHVybC5ob3N0bmFtZSlcbiAgKSB7XG4gICAgb3B0aW9ucy5yZWplY3RVbmF1dGhvcml6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgY29uc3QgbW9kdWxlXyA9IHRoaXMuX2VuYWJsZUh0dHAyXG4gICAgPyBleHBvcnRzLnByb3RvY29sc1snaHR0cDI6J10uc2V0UHJvdG9jb2wodXJsLnByb3RvY29sKVxuICAgIDogZXhwb3J0cy5wcm90b2NvbHNbdXJsLnByb3RvY29sXTtcblxuICAvLyByZXF1ZXN0XG4gIHRoaXMucmVxID0gbW9kdWxlXy5yZXF1ZXN0KG9wdGlvbnMpO1xuICBjb25zdCB7IHJlcSB9ID0gdGhpcztcblxuICAvLyBzZXQgdGNwIG5vIGRlbGF5XG4gIHJlcS5zZXROb0RlbGF5KHRydWUpO1xuXG4gIGlmIChvcHRpb25zLm1ldGhvZCAhPT0gJ0hFQUQnKSB7XG4gICAgcmVxLnNldEhlYWRlcignQWNjZXB0LUVuY29kaW5nJywgJ2d6aXAsIGRlZmxhdGUnKTtcbiAgfVxuXG4gIHRoaXMucHJvdG9jb2wgPSB1cmwucHJvdG9jb2w7XG4gIHRoaXMuaG9zdCA9IHVybC5ob3N0O1xuXG4gIC8vIGV4cG9zZSBldmVudHNcbiAgcmVxLm9uY2UoJ2RyYWluJywgKCkgPT4ge1xuICAgIHRoaXMuZW1pdCgnZHJhaW4nKTtcbiAgfSk7XG5cbiAgcmVxLm9uKCdlcnJvcicsIChlcnJvcikgPT4ge1xuICAgIC8vIGZsYWcgYWJvcnRpb24gaGVyZSBmb3Igb3V0IHRpbWVvdXRzXG4gICAgLy8gYmVjYXVzZSBub2RlIHdpbGwgZW1pdCBhIGZhdXgtZXJyb3IgXCJzb2NrZXQgaGFuZyB1cFwiXG4gICAgLy8gd2hlbiByZXF1ZXN0IGlzIGFib3J0ZWQgYmVmb3JlIGEgY29ubmVjdGlvbiBpcyBtYWRlXG4gICAgaWYgKHRoaXMuX2Fib3J0ZWQpIHJldHVybjtcbiAgICAvLyBpZiBub3QgdGhlIHNhbWUsIHdlIGFyZSBpbiB0aGUgKipvbGQqKiAoY2FuY2VsbGVkKSByZXF1ZXN0LFxuICAgIC8vIHNvIG5lZWQgdG8gY29udGludWUgKHNhbWUgYXMgZm9yIGFib3ZlKVxuICAgIGlmICh0aGlzLl9yZXRyaWVzICE9PSByZXRyaWVzKSByZXR1cm47XG4gICAgLy8gaWYgd2UndmUgcmVjZWl2ZWQgYSByZXNwb25zZSB0aGVuIHdlIGRvbid0IHdhbnQgdG8gbGV0XG4gICAgLy8gYW4gZXJyb3IgaW4gdGhlIHJlcXVlc3QgYmxvdyB1cCB0aGUgcmVzcG9uc2VcbiAgICBpZiAodGhpcy5yZXNwb25zZSkgcmV0dXJuO1xuICAgIHRoaXMuY2FsbGJhY2soZXJyb3IpO1xuICB9KTtcblxuICAvLyBhdXRoXG4gIGlmICh1cmwuYXV0aCkge1xuICAgIGNvbnN0IGF1dGggPSB1cmwuYXV0aC5zcGxpdCgnOicpO1xuICAgIHRoaXMuYXV0aChhdXRoWzBdLCBhdXRoWzFdKTtcbiAgfVxuXG4gIGlmICh0aGlzLnVzZXJuYW1lICYmIHRoaXMucGFzc3dvcmQpIHtcbiAgICB0aGlzLmF1dGgodGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmIChoYXNPd24odGhpcy5oZWFkZXIsIGtleSkpIHJlcS5zZXRIZWFkZXIoa2V5LCB0aGlzLmhlYWRlcltrZXldKTtcbiAgfVxuXG4gIC8vIGFkZCBjb29raWVzXG4gIGlmICh0aGlzLmNvb2tpZXMpIHtcbiAgICBpZiAoaGFzT3duKHRoaXMuX2hlYWRlciwgJ2Nvb2tpZScpKSB7XG4gICAgICAvLyBtZXJnZVxuICAgICAgY29uc3QgdGVtcG9yYXJ5SmFyID0gbmV3IENvb2tpZUphci5Db29raWVKYXIoKTtcbiAgICAgIHRlbXBvcmFyeUphci5zZXRDb29raWVzKHRoaXMuX2hlYWRlci5jb29raWUuc3BsaXQoJzsgJykpO1xuICAgICAgdGVtcG9yYXJ5SmFyLnNldENvb2tpZXModGhpcy5jb29raWVzLnNwbGl0KCc7ICcpKTtcbiAgICAgIHJlcS5zZXRIZWFkZXIoXG4gICAgICAgICdDb29raWUnLFxuICAgICAgICB0ZW1wb3JhcnlKYXIuZ2V0Q29va2llcyhDb29raWVKYXIuQ29va2llQWNjZXNzSW5mby5BbGwpLnRvVmFsdWVTdHJpbmcoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxLnNldEhlYWRlcignQ29va2llJywgdGhpcy5jb29raWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBJbnZva2UgdGhlIGNhbGxiYWNrIHdpdGggYGVycmAgYW5kIGByZXNgXG4gKiBhbmQgaGFuZGxlIGFyaXR5IGNoZWNrLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jYWxsYmFjayA9IGZ1bmN0aW9uIChlcnJvciwgcmVzKSB7XG4gIGlmICh0aGlzLl9zaG91bGRSZXRyeShlcnJvciwgcmVzKSkge1xuICAgIHJldHVybiB0aGlzLl9yZXRyeSgpO1xuICB9XG5cbiAgLy8gQXZvaWQgdGhlIGVycm9yIHdoaWNoIGlzIGVtaXR0ZWQgZnJvbSAnc29ja2V0IGhhbmcgdXAnIHRvIGNhdXNlIHRoZSBmbiB1bmRlZmluZWQgZXJyb3Igb24gSlMgcnVudGltZS5cbiAgY29uc3QgZm4gPSB0aGlzLl9jYWxsYmFjayB8fCBub29wO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICBpZiAodGhpcy5jYWxsZWQpIHJldHVybiBjb25zb2xlLndhcm4oJ3N1cGVyYWdlbnQ6IGRvdWJsZSBjYWxsYmFjayBidWcnKTtcbiAgdGhpcy5jYWxsZWQgPSB0cnVlO1xuXG4gIGlmICghZXJyb3IpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLl9pc1Jlc3BvbnNlT0socmVzKSkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9ICdVbnN1Y2Nlc3NmdWwgSFRUUCByZXNwb25zZSc7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICBtZXNzYWdlID0gaHR0cC5TVEFUVVNfQ09ERVNbcmVzLnN0YXR1c10gfHwgbWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICBlcnJvci5zdGF0dXMgPSByZXMgPyByZXMuc3RhdHVzIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICBlcnJvci5zdGF0dXMgPSBlcnJvci5zdGF0dXMgfHwgKHJlcyA/IHJlcy5zdGF0dXMgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIGNhbGxiYWNrIGlzIGNhbGxlZCBvdXRzaWRlIHRyeS9jYXRjaFxuICAvLyB0byBhdm9pZCBkb3VibGUgY2FsbGJhY2tcbiAgaWYgKCFlcnJvcikge1xuICAgIHJldHVybiBmbihudWxsLCByZXMpO1xuICB9XG5cbiAgZXJyb3IucmVzcG9uc2UgPSByZXM7XG4gIGlmICh0aGlzLl9tYXhSZXRyaWVzKSBlcnJvci5yZXRyaWVzID0gdGhpcy5fcmV0cmllcyAtIDE7XG5cbiAgLy8gb25seSBlbWl0IGVycm9yIGV2ZW50IGlmIHRoZXJlIGlzIGEgbGlzdGVuZXJcbiAgLy8gb3RoZXJ3aXNlIHdlIGFzc3VtZSB0aGUgY2FsbGJhY2sgdG8gYC5lbmQoKWAgd2lsbCBnZXQgdGhlIGVycm9yXG4gIGlmIChlcnJvciAmJiB0aGlzLmxpc3RlbmVycygnZXJyb3InKS5sZW5ndGggPiAwKSB7XG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgfVxuXG4gIGZuKGVycm9yLCByZXMpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogaG9zdCBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlzIGEgaG9zdCBvYmplY3RcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5SZXF1ZXN0LnByb3RvdHlwZS5faXNIb3N0ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICByZXR1cm4gKFxuICAgIEJ1ZmZlci5pc0J1ZmZlcihvYmplY3QpIHx8XG4gICAgb2JqZWN0IGluc3RhbmNlb2YgU3RyZWFtIHx8XG4gICAgb2JqZWN0IGluc3RhbmNlb2YgRm9ybURhdGFcbiAgKTtcbn07XG5cbi8qKlxuICogSW5pdGlhdGUgcmVxdWVzdCwgaW52b2tpbmcgY2FsbGJhY2sgYGZuKGVyciwgcmVzKWBcbiAqIHdpdGggYW4gaW5zdGFuY2VvZiBgUmVzcG9uc2VgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuX2VtaXRSZXNwb25zZSA9IGZ1bmN0aW9uIChib2R5LCBmaWxlcykge1xuICBjb25zdCByZXNwb25zZSA9IG5ldyBSZXNwb25zZSh0aGlzKTtcbiAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXNwb25zZS5yZWRpcmVjdHMgPSB0aGlzLl9yZWRpcmVjdExpc3Q7XG4gIGlmICh1bmRlZmluZWQgIT09IGJvZHkpIHtcbiAgICByZXNwb25zZS5ib2R5ID0gYm9keTtcbiAgfVxuXG4gIHJlc3BvbnNlLmZpbGVzID0gZmlsZXM7XG4gIGlmICh0aGlzLl9lbmRDYWxsZWQpIHtcbiAgICByZXNwb25zZS5waXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcImVuZCgpIGhhcyBhbHJlYWR5IGJlZW4gY2FsbGVkLCBzbyBpdCdzIHRvbyBsYXRlIHRvIHN0YXJ0IHBpcGluZ1wiXG4gICAgICApO1xuICAgIH07XG4gIH1cblxuICB0aGlzLmVtaXQoJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG4vKipcbiAqIEVtaXQgYHJlZGlyZWN0YCBldmVudCwgcGFzc2luZyBhbiBpbnN0YW5jZW9mIGBSZXNwb25zZWAuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuX2VtaXRSZWRpcmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UodGhpcyk7XG4gIHJlc3BvbnNlLnJlZGlyZWN0cyA9IHRoaXMuX3JlZGlyZWN0TGlzdDtcbiAgdGhpcy5lbWl0KCdyZWRpcmVjdCcsIHJlc3BvbnNlKTtcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChmbikge1xuICB0aGlzLnJlcXVlc3QoKTtcbiAgZGVidWcoJyVzICVzJywgdGhpcy5tZXRob2QsIHRoaXMudXJsKTtcblxuICBpZiAodGhpcy5fZW5kQ2FsbGVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJy5lbmQoKSB3YXMgY2FsbGVkIHR3aWNlLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gc3VwZXJhZ2VudCdcbiAgICApO1xuICB9XG5cbiAgdGhpcy5fZW5kQ2FsbGVkID0gdHJ1ZTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgdGhpcy5fZW5kKCk7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5fZW5kID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fYWJvcnRlZClcbiAgICByZXR1cm4gdGhpcy5jYWxsYmFjayhcbiAgICAgIG5ldyBFcnJvcignVGhlIHJlcXVlc3QgaGFzIGJlZW4gYWJvcnRlZCBldmVuIGJlZm9yZSAuZW5kKCkgd2FzIGNhbGxlZCcpXG4gICAgKTtcblxuICBsZXQgZGF0YSA9IHRoaXMuX2RhdGE7XG4gIGNvbnN0IHsgcmVxIH0gPSB0aGlzO1xuICBjb25zdCB7IG1ldGhvZCB9ID0gdGhpcztcblxuICB0aGlzLl9zZXRUaW1lb3V0cygpO1xuXG4gIC8vIGJvZHlcbiAgaWYgKG1ldGhvZCAhPT0gJ0hFQUQnICYmICFyZXEuX2hlYWRlclNlbnQpIHtcbiAgICAvLyBzZXJpYWxpemUgc3R1ZmZcbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgY29udGVudFR5cGUgPSByZXEuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICAgIC8vIFBhcnNlIG91dCBqdXN0IHRoZSBjb250ZW50IHR5cGUgZnJvbSB0aGUgaGVhZGVyIChpZ25vcmUgdGhlIGNoYXJzZXQpXG4gICAgICBpZiAoY29udGVudFR5cGUpIGNvbnRlbnRUeXBlID0gY29udGVudFR5cGUuc3BsaXQoJzsnKVswXTtcbiAgICAgIGxldCBzZXJpYWxpemUgPSB0aGlzLl9zZXJpYWxpemVyIHx8IGV4cG9ydHMuc2VyaWFsaXplW2NvbnRlbnRUeXBlXTtcbiAgICAgIGlmICghc2VyaWFsaXplICYmIGlzSlNPTihjb250ZW50VHlwZSkpIHtcbiAgICAgICAgc2VyaWFsaXplID0gZXhwb3J0cy5zZXJpYWxpemVbJ2FwcGxpY2F0aW9uL2pzb24nXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlcmlhbGl6ZSkgZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBjb250ZW50LWxlbmd0aFxuICAgIGlmIChkYXRhICYmICFyZXEuZ2V0SGVhZGVyKCdDb250ZW50LUxlbmd0aCcpKSB7XG4gICAgICByZXEuc2V0SGVhZGVyKFxuICAgICAgICAnQ29udGVudC1MZW5ndGgnLFxuICAgICAgICBCdWZmZXIuaXNCdWZmZXIoZGF0YSkgPyBkYXRhLmxlbmd0aCA6IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlc3BvbnNlXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIHJlcS5vbmNlKCdyZXNwb25zZScsIChyZXMpID0+IHtcbiAgICBkZWJ1ZygnJXMgJXMgLT4gJXMnLCB0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHJlcy5zdGF0dXNDb2RlKTtcblxuICAgIGlmICh0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5waXBlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1heCA9IHRoaXMuX21heFJlZGlyZWN0cztcbiAgICBjb25zdCBtaW1lID0gdXRpbHMudHlwZShyZXMuaGVhZGVyc1snY29udGVudC10eXBlJ10gfHwgJycpIHx8ICd0ZXh0L3BsYWluJztcbiAgICBsZXQgdHlwZSA9IG1pbWUuc3BsaXQoJy8nKVswXTtcbiAgICBpZiAodHlwZSkgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgY29uc3QgbXVsdGlwYXJ0ID0gdHlwZSA9PT0gJ211bHRpcGFydCc7XG4gICAgY29uc3QgcmVkaXJlY3QgPSBpc1JlZGlyZWN0KHJlcy5zdGF0dXNDb2RlKTtcbiAgICBjb25zdCByZXNwb25zZVR5cGUgPSB0aGlzLl9yZXNwb25zZVR5cGU7XG5cbiAgICB0aGlzLnJlcyA9IHJlcztcblxuICAgIC8vIHJlZGlyZWN0XG4gICAgaWYgKHJlZGlyZWN0ICYmIHRoaXMuX3JlZGlyZWN0cysrICE9PSBtYXgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdChyZXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSB7XG4gICAgICB0aGlzLmVtaXQoJ2VuZCcpO1xuICAgICAgdGhpcy5jYWxsYmFjayhudWxsLCB0aGlzLl9lbWl0UmVzcG9uc2UoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gemxpYiBzdXBwb3J0XG4gICAgaWYgKHRoaXMuX3Nob3VsZFVuemlwKHJlcykpIHtcbiAgICAgIHVuemlwKHJlcSwgcmVzKTtcbiAgICB9XG5cbiAgICBsZXQgYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xuICAgIGlmIChidWZmZXIgPT09IHVuZGVmaW5lZCAmJiBtaW1lIGluIGV4cG9ydHMuYnVmZmVyKSB7XG4gICAgICBidWZmZXIgPSBCb29sZWFuKGV4cG9ydHMuYnVmZmVyW21pbWVdKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VyID0gdGhpcy5fcGFyc2VyO1xuICAgIGlmICh1bmRlZmluZWQgPT09IGJ1ZmZlciAmJiBwYXJzZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJBIGN1c3RvbSBzdXBlcmFnZW50IHBhcnNlciBoYXMgYmVlbiBzZXQsIGJ1dCBidWZmZXJpbmcgc3RyYXRlZ3kgZm9yIHRoZSBwYXJzZXIgaGFzbid0IGJlZW4gY29uZmlndXJlZC4gQ2FsbCBgcmVxLmJ1ZmZlcih0cnVlIG9yIGZhbHNlKWAgb3Igc2V0IGBzdXBlcmFnZW50LmJ1ZmZlclttaW1lXSA9IHRydWUgb3IgZmFsc2VgXCJcbiAgICAgICk7XG4gICAgICBidWZmZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghcGFyc2VyKSB7XG4gICAgICBpZiAocmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHBhcnNlciA9IGV4cG9ydHMucGFyc2UuaW1hZ2U7IC8vIEl0J3MgYWN0dWFsbHkgYSBnZW5lcmljIEJ1ZmZlclxuICAgICAgICBidWZmZXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChtdWx0aXBhcnQpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGZvcm1pZGFibGUoKTtcbiAgICAgICAgcGFyc2VyID0gZm9ybS5wYXJzZS5iaW5kKGZvcm0pO1xuICAgICAgICBidWZmZXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChpc0JpbmFyeShtaW1lKSkge1xuICAgICAgICBwYXJzZXIgPSBleHBvcnRzLnBhcnNlLmltYWdlO1xuICAgICAgICBidWZmZXIgPSB0cnVlOyAvLyBGb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgYnVmZmVyaW5nIGRlZmF1bHQgaXMgYWQtaG9jIE1JTUUtZGVwZW5kZW50XG4gICAgICB9IGVsc2UgaWYgKGV4cG9ydHMucGFyc2VbbWltZV0pIHtcbiAgICAgICAgcGFyc2VyID0gZXhwb3J0cy5wYXJzZVttaW1lXTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHBhcnNlciA9IGV4cG9ydHMucGFyc2UudGV4dDtcbiAgICAgICAgYnVmZmVyID0gYnVmZmVyICE9PSBmYWxzZTtcbiAgICAgICAgLy8gZXZlcnlvbmUgd2FudHMgdGhlaXIgb3duIHdoaXRlLWxhYmVsZWQganNvblxuICAgICAgfSBlbHNlIGlmIChpc0pTT04obWltZSkpIHtcbiAgICAgICAgcGFyc2VyID0gZXhwb3J0cy5wYXJzZVsnYXBwbGljYXRpb24vanNvbiddO1xuICAgICAgICBidWZmZXIgPSBidWZmZXIgIT09IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChidWZmZXIpIHtcbiAgICAgICAgcGFyc2VyID0gZXhwb3J0cy5wYXJzZS50ZXh0O1xuICAgICAgfSBlbHNlIGlmICh1bmRlZmluZWQgPT09IGJ1ZmZlcikge1xuICAgICAgICBwYXJzZXIgPSBleHBvcnRzLnBhcnNlLmltYWdlOyAvLyBJdCdzIGFjdHVhbGx5IGEgZ2VuZXJpYyBCdWZmZXJcbiAgICAgICAgYnVmZmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBieSBkZWZhdWx0IG9ubHkgYnVmZmVyIHRleHQvKiwganNvbiBhbmQgbWVzc2VkIHVwIHRoaW5nIGZyb20gaGVsbFxuICAgIGlmICgodW5kZWZpbmVkID09PSBidWZmZXIgJiYgaXNUZXh0KG1pbWUpKSB8fCBpc0pTT04obWltZSkpIHtcbiAgICAgIGJ1ZmZlciA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVzQnVmZmVyZWQgPSBidWZmZXI7XG4gICAgbGV0IHBhcnNlckhhbmRsZXNFbmQgPSBmYWxzZTtcbiAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAvLyBQcm90ZWN0aW9uYSBhZ2FpbnN0IHppcCBib21icyBhbmQgb3RoZXIgbnVpc2FuY2VcbiAgICAgIGxldCByZXNwb25zZUJ5dGVzTGVmdCA9IHRoaXMuX21heFJlc3BvbnNlU2l6ZSB8fCAyMDBfMDAwXzAwMDtcbiAgICAgIHJlcy5vbignZGF0YScsIChidWYpID0+IHtcbiAgICAgICAgcmVzcG9uc2VCeXRlc0xlZnQgLT0gYnVmLmJ5dGVMZW5ndGggfHwgYnVmLmxlbmd0aCA+IDAgPyBidWYubGVuZ3RoIDogMDtcbiAgICAgICAgaWYgKHJlc3BvbnNlQnl0ZXNMZWZ0IDwgMCkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCBwcm9wYWdhdGUgdGhyb3VnaCBlcnJvciBldmVudFxuICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCdNYXhpbXVtIHJlc3BvbnNlIHNpemUgcmVhY2hlZCcpO1xuICAgICAgICAgIGVycm9yLmNvZGUgPSAnRVRPT0xBUkdFJztcbiAgICAgICAgICAvLyBQYXJzZXJzIGFyZW4ndCByZXF1aXJlZCB0byBvYnNlcnZlIGVycm9yIGV2ZW50LFxuICAgICAgICAgIC8vIHNvIHdvdWxkIGluY29ycmVjdGx5IHJlcG9ydCBzdWNjZXNzXG4gICAgICAgICAgcGFyc2VySGFuZGxlc0VuZCA9IGZhbHNlO1xuICAgICAgICAgIC8vIFdpbGwgbm90IGVtaXQgZXJyb3IgZXZlbnRcbiAgICAgICAgICByZXMuZGVzdHJveShlcnJvcik7XG4gICAgICAgICAgLy8gc28gd2UgZG8gY2FsbGJhY2sgbm93XG4gICAgICAgICAgdGhpcy5jYWxsYmFjayhlcnJvciwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwYXJzZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFVuYnVmZmVyZWQgcGFyc2VycyBhcmUgc3VwcG9zZWQgdG8gZW1pdCByZXNwb25zZSBlYXJseSxcbiAgICAgICAgLy8gd2hpY2ggaXMgd2VpcmQgQlRXLCBiZWNhdXNlIHJlc3BvbnNlLmJvZHkgd29uJ3QgYmUgdGhlcmUuXG4gICAgICAgIHBhcnNlckhhbmRsZXNFbmQgPSBidWZmZXI7XG5cbiAgICAgICAgcGFyc2VyKHJlcywgKGVycm9yLCBvYmplY3QsIGZpbGVzKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudGltZWRvdXQpIHtcbiAgICAgICAgICAgIC8vIFRpbWVvdXQgaGFzIGFscmVhZHkgaGFuZGxlZCBhbGwgY2FsbGJhY2tzXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSW50ZW50aW9uYWwgKG5vbi10aW1lb3V0KSBhYm9ydCBpcyBzdXBwb3NlZCB0byBwcmVzZXJ2ZSBwYXJ0aWFsIHJlc3BvbnNlLFxuICAgICAgICAgIC8vIGV2ZW4gaWYgaXQgZG9lc24ndCBwYXJzZS5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgIXRoaXMuX2Fib3J0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocGFyc2VySGFuZGxlc0VuZCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sobnVsbCwgdGhpcy5fZW1pdFJlc3BvbnNlKG9iamVjdCwgZmlsZXMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucmVzID0gcmVzO1xuXG4gICAgLy8gdW5idWZmZXJlZFxuICAgIGlmICghYnVmZmVyKSB7XG4gICAgICBkZWJ1ZygndW5idWZmZXJlZCAlcyAlcycsIHRoaXMubWV0aG9kLCB0aGlzLnVybCk7XG4gICAgICB0aGlzLmNhbGxiYWNrKG51bGwsIHRoaXMuX2VtaXRSZXNwb25zZSgpKTtcbiAgICAgIGlmIChtdWx0aXBhcnQpIHJldHVybjsgLy8gYWxsb3cgbXVsdGlwYXJ0IHRvIGhhbmRsZSBlbmQgZXZlbnRcbiAgICAgIHJlcy5vbmNlKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgIGRlYnVnKCdlbmQgJXMgJXMnLCB0aGlzLm1ldGhvZCwgdGhpcy51cmwpO1xuICAgICAgICB0aGlzLmVtaXQoJ2VuZCcpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdGVybWluYXRpbmcgZXZlbnRzXG4gICAgcmVzLm9uY2UoJ2Vycm9yJywgKGVycm9yKSA9PiB7XG4gICAgICBwYXJzZXJIYW5kbGVzRW5kID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGxiYWNrKGVycm9yLCBudWxsKTtcbiAgICB9KTtcbiAgICBpZiAoIXBhcnNlckhhbmRsZXNFbmQpXG4gICAgICByZXMub25jZSgnZW5kJywgKCkgPT4ge1xuICAgICAgICBkZWJ1ZygnZW5kICVzICVzJywgdGhpcy5tZXRob2QsIHRoaXMudXJsKTtcbiAgICAgICAgLy8gVE9ETzogdW5sZXNzIGJ1ZmZlcmluZyBlbWl0IGVhcmxpZXIgdG8gc3RyZWFtXG4gICAgICAgIHRoaXMuZW1pdCgnZW5kJyk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sobnVsbCwgdGhpcy5fZW1pdFJlc3BvbnNlKCkpO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIHRoaXMuZW1pdCgncmVxdWVzdCcsIHRoaXMpO1xuXG4gIGNvbnN0IGdldFByb2dyZXNzTW9uaXRvciA9ICgpID0+IHtcbiAgICBjb25zdCBsZW5ndGhDb21wdXRhYmxlID0gdHJ1ZTtcbiAgICBjb25zdCB0b3RhbCA9IHJlcS5nZXRIZWFkZXIoJ0NvbnRlbnQtTGVuZ3RoJyk7XG4gICAgbGV0IGxvYWRlZCA9IDA7XG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IG5ldyBTdHJlYW0uVHJhbnNmb3JtKCk7XG4gICAgcHJvZ3Jlc3MuX3RyYW5zZm9ybSA9IChjaHVuaywgZW5jb2RpbmcsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBsb2FkZWQgKz0gY2h1bmsubGVuZ3RoO1xuICAgICAgdGhpcy5lbWl0KCdwcm9ncmVzcycsIHtcbiAgICAgICAgZGlyZWN0aW9uOiAndXBsb2FkJyxcbiAgICAgICAgbGVuZ3RoQ29tcHV0YWJsZSxcbiAgICAgICAgbG9hZGVkLFxuICAgICAgICB0b3RhbFxuICAgICAgfSk7XG4gICAgICBjYWxsYmFjayhudWxsLCBjaHVuayk7XG4gICAgfTtcblxuICAgIHJldHVybiBwcm9ncmVzcztcbiAgfTtcblxuICBjb25zdCBidWZmZXJUb0NodW5rcyA9IChidWZmZXIpID0+IHtcbiAgICBjb25zdCBjaHVua1NpemUgPSAxNiAqIDEwMjQ7IC8vIGRlZmF1bHQgaGlnaFdhdGVyTWFyayB2YWx1ZVxuICAgIGNvbnN0IGNodW5raW5nID0gbmV3IFN0cmVhbS5SZWFkYWJsZSgpO1xuICAgIGNvbnN0IHRvdGFsTGVuZ3RoID0gYnVmZmVyLmxlbmd0aDtcbiAgICBjb25zdCByZW1haW5kZXIgPSB0b3RhbExlbmd0aCAlIGNodW5rU2l6ZTtcbiAgICBjb25zdCBjdXRvZmYgPSB0b3RhbExlbmd0aCAtIHJlbWFpbmRlcjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3V0b2ZmOyBpICs9IGNodW5rU2l6ZSkge1xuICAgICAgY29uc3QgY2h1bmsgPSBidWZmZXIuc2xpY2UoaSwgaSArIGNodW5rU2l6ZSk7XG4gICAgICBjaHVua2luZy5wdXNoKGNodW5rKTtcbiAgICB9XG5cbiAgICBpZiAocmVtYWluZGVyID4gMCkge1xuICAgICAgY29uc3QgcmVtYWluZGVyQnVmZmVyID0gYnVmZmVyLnNsaWNlKC1yZW1haW5kZXIpO1xuICAgICAgY2h1bmtpbmcucHVzaChyZW1haW5kZXJCdWZmZXIpO1xuICAgIH1cblxuICAgIGNodW5raW5nLnB1c2gobnVsbCk7IC8vIG5vIG1vcmUgZGF0YVxuXG4gICAgcmV0dXJuIGNodW5raW5nO1xuICB9O1xuXG4gIC8vIGlmIGEgRm9ybURhdGEgaW5zdGFuY2UgZ290IGNyZWF0ZWQsIHRoZW4gd2Ugc2VuZCB0aGF0IGFzIHRoZSByZXF1ZXN0IGJvZHlcbiAgY29uc3QgZm9ybURhdGEgPSB0aGlzLl9mb3JtRGF0YTtcbiAgaWYgKGZvcm1EYXRhKSB7XG4gICAgLy8gc2V0IGhlYWRlcnNcbiAgICBjb25zdCBoZWFkZXJzID0gZm9ybURhdGEuZ2V0SGVhZGVycygpO1xuICAgIGZvciAoY29uc3QgaSBpbiBoZWFkZXJzKSB7XG4gICAgICBpZiAoaGFzT3duKGhlYWRlcnMsIGkpKSB7XG4gICAgICAgIGRlYnVnKCdzZXR0aW5nIEZvcm1EYXRhIGhlYWRlcjogXCIlczogJXNcIicsIGksIGhlYWRlcnNbaV0pO1xuICAgICAgICByZXEuc2V0SGVhZGVyKGksIGhlYWRlcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGF0dGVtcHQgdG8gZ2V0IFwiQ29udGVudC1MZW5ndGhcIiBoZWFkZXJcbiAgICBmb3JtRGF0YS5nZXRMZW5ndGgoKGVycm9yLCBsZW5ndGgpID0+IHtcbiAgICAgIC8vIFRPRE86IEFkZCBjaHVua2VkIGVuY29kaW5nIHdoZW4gbm8gbGVuZ3RoIChpZiBlcnIpXG4gICAgICBpZiAoZXJyb3IpIGRlYnVnKCdmb3JtRGF0YS5nZXRMZW5ndGggaGFkIGVycm9yJywgZXJyb3IsIGxlbmd0aCk7XG5cbiAgICAgIGRlYnVnKCdnb3QgRm9ybURhdGEgQ29udGVudC1MZW5ndGg6ICVzJywgbGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXEuc2V0SGVhZGVyKCdDb250ZW50LUxlbmd0aCcsIGxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIGZvcm1EYXRhLnBpcGUoZ2V0UHJvZ3Jlc3NNb25pdG9yKCkpLnBpcGUocmVxKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcbiAgICBidWZmZXJUb0NodW5rcyhkYXRhKS5waXBlKGdldFByb2dyZXNzTW9uaXRvcigpKS5waXBlKHJlcSk7XG4gIH0gZWxzZSB7XG4gICAgcmVxLmVuZChkYXRhKTtcbiAgfVxufTtcblxuLy8gQ2hlY2sgd2hldGhlciByZXNwb25zZSBoYXMgYSBub24tMC1zaXplZCBnemlwLWVuY29kZWQgYm9keVxuUmVxdWVzdC5wcm90b3R5cGUuX3Nob3VsZFVuemlwID0gKHJlcykgPT4ge1xuICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwNCB8fCByZXMuc3RhdHVzQ29kZSA9PT0gMzA0KSB7XG4gICAgLy8gVGhlc2UgYXJlbid0IHN1cHBvc2VkIHRvIGhhdmUgYW55IGJvZHlcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBoZWFkZXIgY29udGVudCBpcyBhIHN0cmluZywgYW5kIGRpc3RpbmN0aW9uIGJldHdlZW4gMCBhbmQgbm8gaW5mb3JtYXRpb24gaXMgY3J1Y2lhbFxuICBpZiAocmVzLmhlYWRlcnNbJ2NvbnRlbnQtbGVuZ3RoJ10gPT09ICcwJykge1xuICAgIC8vIFdlIGtub3cgdGhhdCB0aGUgYm9keSBpcyBlbXB0eSAodW5mb3J0dW5hdGVseSwgdGhpcyBjaGVjayBkb2VzIG5vdCBjb3ZlciBjaHVua2VkIGVuY29kaW5nKVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gIHJldHVybiAvXlxccyooPzpkZWZsYXRlfGd6aXApXFxzKiQvLnRlc3QocmVzLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXSk7XG59O1xuXG4vKipcbiAqIE92ZXJyaWRlcyBETlMgZm9yIHNlbGVjdGVkIGhvc3RuYW1lcy4gVGFrZXMgb2JqZWN0IG1hcHBpbmcgaG9zdG5hbWVzIHRvIElQIGFkZHJlc3Nlcy5cbiAqXG4gKiBXaGVuIG1ha2luZyBhIHJlcXVlc3QgdG8gYSBVUkwgd2l0aCBhIGhvc3RuYW1lIGV4YWN0bHkgbWF0Y2hpbmcgYSBrZXkgaW4gdGhlIG9iamVjdCxcbiAqIHVzZSB0aGUgZ2l2ZW4gSVAgYWRkcmVzcyB0byBjb25uZWN0LCBpbnN0ZWFkIG9mIHVzaW5nIEROUyB0byByZXNvbHZlIHRoZSBob3N0bmFtZS5cbiAqXG4gKiBBIHNwZWNpYWwgaG9zdCBgKmAgbWF0Y2hlcyBldmVyeSBob3N0bmFtZSAoa2VlcCByZWRpcmVjdHMgaW4gbWluZCEpXG4gKlxuICogICAgICByZXF1ZXN0LmNvbm5lY3Qoe1xuICogICAgICAgICd0ZXN0LmV4YW1wbGUuY29tJzogJzEyNy4wLjAuMScsXG4gKiAgICAgICAgJ2lwdjYuZXhhbXBsZS5jb20nOiAnOjoxJyxcbiAqICAgICAgfSlcbiAqL1xuUmVxdWVzdC5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChjb25uZWN0T3ZlcnJpZGUpIHtcbiAgaWYgKHR5cGVvZiBjb25uZWN0T3ZlcnJpZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhpcy5fY29ubmVjdE92ZXJyaWRlID0geyAnKic6IGNvbm5lY3RPdmVycmlkZSB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjb25uZWN0T3ZlcnJpZGUgPT09ICdvYmplY3QnKSB7XG4gICAgdGhpcy5fY29ubmVjdE92ZXJyaWRlID0gY29ubmVjdE92ZXJyaWRlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2Nvbm5lY3RPdmVycmlkZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUudHJ1c3RMb2NhbGhvc3QgPSBmdW5jdGlvbiAodG9nZ2xlKSB7XG4gIHRoaXMuX3RydXN0TG9jYWxob3N0ID0gdG9nZ2xlID09PSB1bmRlZmluZWQgPyB0cnVlIDogdG9nZ2xlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGdlbmVyYXRlIEhUVFAgdmVyYiBtZXRob2RzXG5pZiAoIW1ldGhvZHMuaW5jbHVkZXMoJ2RlbCcpKSB7XG4gIC8vIGNyZWF0ZSBhIGNvcHkgc28gd2UgZG9uJ3QgY2F1c2UgY29uZmxpY3RzIHdpdGhcbiAgLy8gb3RoZXIgcGFja2FnZXMgdXNpbmcgdGhlIG1ldGhvZHMgcGFja2FnZSBhbmRcbiAgLy8gbnBtIDMueFxuICBtZXRob2RzID0gWy4uLm1ldGhvZHNdO1xuICBtZXRob2RzLnB1c2goJ2RlbCcpO1xufVxuXG5mb3IgKGxldCBtZXRob2Qgb2YgbWV0aG9kcykge1xuICBjb25zdCBuYW1lID0gbWV0aG9kO1xuICBtZXRob2QgPSBtZXRob2QgPT09ICdkZWwnID8gJ2RlbGV0ZScgOiBtZXRob2Q7XG5cbiAgbWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gIHJlcXVlc3RbbmFtZV0gPSAodXJsLCBkYXRhLCBmbikgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3RfID0gcmVxdWVzdChtZXRob2QsIHVybCk7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmbiA9IGRhdGE7XG4gICAgICBkYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcgfHwgbWV0aG9kID09PSAnSEVBRCcpIHtcbiAgICAgICAgcmVxdWVzdF8ucXVlcnkoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXF1ZXN0Xy5zZW5kKGRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmbikgcmVxdWVzdF8uZW5kKGZuKTtcbiAgICByZXR1cm4gcmVxdWVzdF87XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG1pbWVgIGlzIHRleHQgYW5kIHNob3VsZCBiZSBidWZmZXJlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWltZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gaXNUZXh0KG1pbWUpIHtcbiAgY29uc3QgcGFydHMgPSBtaW1lLnNwbGl0KCcvJyk7XG4gIGxldCB0eXBlID0gcGFydHNbMF07XG4gIGlmICh0eXBlKSB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgbGV0IHN1YnR5cGUgPSBwYXJ0c1sxXTtcbiAgaWYgKHN1YnR5cGUpIHN1YnR5cGUgPSBzdWJ0eXBlLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuXG4gIHJldHVybiB0eXBlID09PSAndGV4dCcgfHwgc3VidHlwZSA9PT0gJ3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG59XG5cbi8vIFRoaXMgaXMgbm90IGEgY2F0Y2hhbGwsIGJ1dCBhIHN0YXJ0LiBJdCBtaWdodCBiZSB1c2VmdWxcbi8vIGluIHRoZSBsb25nIHJ1biB0byBoYXZlIGZpbGUgdGhhdCBpbmNsdWRlcyBhbGwgYmluYXJ5XG4vLyBjb250ZW50IHR5cGVzIGZyb20gaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvbWVkaWEtdHlwZXMueGh0bWxcbmZ1bmN0aW9uIGlzQmluYXJ5KG1pbWUpIHtcbiAgbGV0IFtyZWdpc3RyeSwgbmFtZV0gPSBtaW1lLnNwbGl0KCcvJyk7XG4gIGlmIChyZWdpc3RyeSkgcmVnaXN0cnkgPSByZWdpc3RyeS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgaWYgKG5hbWUpIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICByZXR1cm4gKFxuICAgIFsnYXVkaW8nLCAnZm9udCcsICdpbWFnZScsICd2aWRlbyddLmluY2x1ZGVzKHJlZ2lzdHJ5KSB8fFxuICAgIFsnZ3onLCAnZ3ppcCddLmluY2x1ZGVzKG5hbWUpXG4gICk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG1pbWVgIGlzIGpzb24gb3IgaGFzICtqc29uIHN0cnVjdHVyZWQgc3ludGF4IHN1ZmZpeC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWltZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzSlNPTihtaW1lKSB7XG4gIC8vIHNob3VsZCBtYXRjaCAvanNvbiBvciAranNvblxuICAvLyBidXQgbm90IC9qc29uLXNlcVxuICByZXR1cm4gL1svK11qc29uKCR8W14tXFx3XSkvaS50ZXN0KG1pbWUpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHdlIHNob3VsZCBmb2xsb3cgdGhlIHJlZGlyZWN0IGBjb2RlYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gY29kZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzUmVkaXJlY3QoY29kZSkge1xuICByZXR1cm4gWzMwMSwgMzAyLCAzMDMsIDMwNSwgMzA3LCAzMDhdLmluY2x1ZGVzKGNvZGUpO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFBQSxRQUFBLEdBQW1DQyxPQUFPLENBQUMsS0FBSyxDQUFDO0VBQXpDQyxLQUFLLEdBQUFGLFFBQUEsQ0FBTEUsS0FBSztFQUFFQyxNQUFNLEdBQUFILFFBQUEsQ0FBTkcsTUFBTTtFQUFFQyxPQUFPLEdBQUFKLFFBQUEsQ0FBUEksT0FBTztBQUM5QixNQUFNQyxNQUFNLEdBQUdKLE9BQU8sQ0FBQyxRQUFRLENBQUM7QUFDaEMsTUFBTUssS0FBSyxHQUFHTCxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzlCLE1BQU1NLElBQUksR0FBR04sT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUM1QixNQUFNTyxFQUFFLEdBQUdQLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDeEIsTUFBTVEsSUFBSSxHQUFHUixPQUFPLENBQUMsTUFBTSxDQUFDO0FBQzVCLE1BQU1TLElBQUksR0FBR1QsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUM1QixNQUFNVSxFQUFFLEdBQUdWLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDeEIsTUFBTVcsSUFBSSxHQUFHWCxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQzVCLElBQUlZLE9BQU8sR0FBR1osT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUNoQyxNQUFNYSxRQUFRLEdBQUdiLE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDckMsTUFBTWMsVUFBVSxHQUFHZCxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3hDLE1BQU1lLEtBQUssR0FBR2YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUM1QyxNQUFNZ0IsU0FBUyxHQUFHaEIsT0FBTyxD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