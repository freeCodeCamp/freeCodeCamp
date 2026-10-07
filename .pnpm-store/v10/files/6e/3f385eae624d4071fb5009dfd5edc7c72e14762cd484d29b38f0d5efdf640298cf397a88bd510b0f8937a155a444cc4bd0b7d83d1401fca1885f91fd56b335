"use strict";

const semver = require('semver');

/**
 * Module of mixed-in functions shared between node and client code
 */
const _require = require('./utils'),
  isObject = _require.isObject,
  hasOwn = _require.hasOwn;

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase() {}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function () {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  clearTimeout(this._uploadTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  delete this._uploadTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function (fn) {
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function (value) {
  this._responseType = value;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function (fn) {
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 * - upload is the time  since last bit of data was sent or received. This timeout works only if deadline timeout is off
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function (options) {
  if (!options || typeof options !== 'object') {
    this._timeout = options;
    this._responseTimeout = 0;
    this._uploadTimeout = 0;
    return this;
  }
  for (const option in options) {
    if (hasOwn(options, option)) {
      switch (option) {
        case 'deadline':
          this._timeout = options.deadline;
          break;
        case 'response':
          this._responseTimeout = options.response;
          break;
        case 'upload':
          this._uploadTimeout = options.upload;
          break;
        default:
          console.warn('Unknown timeout option', option);
      }
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function (count, fn) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

//
// NOTE: we do not include ESOCKETTIMEDOUT because that is from `request` package
//       <https://github.com/sindresorhus/got/pull/537>
//
// NOTE: we do not include EADDRINFO because it was removed from libuv in 2014
//       <https://github.com/libuv/libuv/commit/02e1ebd40b807be5af46343ea873331b2ee4e9c1>
//       <https://github.com/request/request/search?q=ESOCKETTIMEDOUT&unscoped_q=ESOCKETTIMEDOUT>
//
//
// TODO: expose these as configurable defaults
//
const ERROR_CODES = new Set(['ETIMEDOUT', 'ECONNRESET', 'EADDRINUSE', 'ECONNREFUSED', 'EPIPE', 'ENOTFOUND', 'ENETUNREACH', 'EAI_AGAIN']);
const STATUS_CODES = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);

// TODO: we would need to make this easily configurable before adding it in (e.g. some might want to add POST)
// const METHODS = new Set(['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE']);

/**
 * Determine if a request should be retried.
 * (Inspired by https://github.com/sindresorhus/got#retry)
 *
 * @param {Error} err an error
 * @param {Response} [res] response
 * @returns {Boolean} if segment should be retried
 */
RequestBase.prototype._shouldRetry = function (error, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      const override = this._retryCallback(error, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch (err) {
      console.error(err);
    }
  }

  // TODO: we would need to make this easily configurable before adding it in (e.g. some might want to add POST)
  /*
  if (
    this.req &&
    this.req.method &&
    !METHODS.has(this.req.method.toUpperCase())
  )
    return false;
  */
  if (res && res.status && STATUS_CODES.has(res.status)) return true;
  if (error) {
    if (error.code && ERROR_CODES.has(error.code)) return true;
    // Superagent timeout
    if (error.timeout && error.code === 'ECONNABORTED') return true;
    if (error.crossDomain) return true;
  }
  return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function () {
  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }
  this._aborted = false;
  this.timedout = false;
  this.timedoutError = null;
  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function (resolve, reject) {
  if (!this._fullfilledPromise) {
    const self = this;
    if (this._endCalled) {
      console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
    }
    this._fullfilledPromise = new Promise((resolve, reject) => {
      self.on('abort', () => {
        if (this._maxRetries && this._maxRetries > this._retries) {
          return;
        }
        if (this.timedout && this.timedoutError) {
          reject(this.timedoutError);
          return;
        }
        const error = new Error('Aborted');
        error.code = 'ABORTED';
        error.status = this.status;
        error.method = this.method;
        error.url = this.url;
        reject(error);
      });
      self.end((error, res) => {
        if (error) reject(error);else resolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};
RequestBase.prototype.catch = function (callback) {
  return this.then(undefined, callback);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function (fn) {
  fn(this);
  return this;
};
RequestBase.prototype.ok = function (callback) {
  if (typeof callback !== 'function') throw new Error('Callback required');
  this._okCallback = callback;
  return this;
};
RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }
  if (this._okCallback) {
    return this._okCallback(res);
  }
  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function (field, value) {
  if (isObject(field)) {
    for (const key in field) {
      if (hasOwn(field, key)) this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = value;
  this.header[field] = value;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field field name
 */
RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name name of field
 * @param {String|Blob|File|Buffer|fs.ReadStream} val value of field
 * @param {String} options extra options, e.g. 'blob'
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function (name, value, options) {
  // name should be either a string or an object.
  if (name === null || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }
  if (this._data) {
    throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }
  if (isObject(name)) {
    for (const key in name) {
      if (hasOwn(name, key)) this.field(key, name[key]);
    }
    return this;
  }
  if (Array.isArray(value)) {
    for (const i in value) {
      if (hasOwn(value, i)) this.field(name, value[i]);
    }
    return this;
  }

  // val should be defined now
  if (value === null || undefined === value) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if (typeof value === 'boolean') {
    value = String(value);
  }

  // fix https://github.com/ladjs/superagent/issues/1680
  if (options) this._getFormData().append(name, value, options);else this._getFormData().append(name, value);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request} request
 * @api public
 */
RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  if (this.xhr) this.xhr.abort(); // browser
  if (this.req) {
    // Node v13 has major differences in `abort()`
    // https://github.com/nodejs/node/blob/v12.x/lib/internal/streams/end-of-stream.js
    // https://github.com/nodejs/node/blob/v13.x/lib/internal/streams/end-of-stream.js
    // https://github.com/nodejs/node/blob/v14.x/lib/internal/streams/end-of-stream.js
    // (if you run a diff across these you will see the differences)
    //
    // References:
    // <https://github.com/nodejs/node/issues/31630>
    // <https://github.com/ladjs/superagent/pull/1084/commits/dc18679a7c5ccfc6046d882015e5126888973bc8>
    //
    // Thanks to @shadowgate15 and @niftylettuce
    if (semver.gte(process.version, 'v13.0.0') && semver.lt(process.version, 'v14.0.0')) {
      // Note that the reason this doesn't work is because in v13 as compared to v14
      // there is no `callback = nop` set in end-of-stream.js above
      throw new Error('Superagent does not work in v13 properly with abort() due to Node.js core changes');
    }
    this.req.abort(); // node
  }

  this.clearTimeout();
  this.emit('abort');
  return this;
};
RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', `Basic ${base64Encoder(`${user}:${pass}`)}`);
      break;
    case 'auto':
      this.username = user;
      this.password = pass;
      break;
    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', `Bearer ${user}`);
      break;
    default:
      break;
  }
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 * @param {Boolean} [on=true] - Set 'withCredentials' state
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on === undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does nothing in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n number of bytes
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Invalid argument');
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

// eslint-disable-next-line complexity
RequestBase.prototype.send = function (data) {
  const isObject_ = isObject(data);
  let type = this._header['content-type'];
  if (this._formData) {
    throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }
  if (isObject_ && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw new Error("Can't merge these send calls");
  }

  // merge
  if (isObject_ && isObject(this._data)) {
    for (const key in data) {
      if (typeof data[key] == 'bigint' && !data[key].toJSON) throw new Error('Cannot serialize BigInt value to json');
      if (hasOwn(data, key)) this._data[key] = data[key];
    }
  } else if (typeof data === 'bigint') throw new Error("Cannot send value of type BigInt");else if (typeof data === 'string') {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if (type) type = type.toLowerCase().trim();
    if (type === 'application/x-www-form-urlencoded') {
      this._data = this._data ? `${this._data}&${data}` : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }
  if (!isObject_ || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function () {
  const query = this._query.join('&');
  if (query) {
    this.url += (this.url.includes('?') ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    const index = this.url.indexOf('?');
    if (index >= 0) {
      const queryArray = this.url.slice(index + 1).split('&');
      if (typeof this._sort === 'function') {
        queryArray.sort(this._sort);
      } else {
        queryArray.sort();
      }
      this.url = this.url.slice(0, index) + '?' + queryArray.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = () => {
  console.warn('Unsupported');
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }
  const error = new Error(`${reason + timeout}ms exceeded`);
  error.timeout = timeout;
  error.code = 'ECONNABORTED';
  error.errno = errno;
  this.timedout = true;
  this.timedoutError = error;
  this.abort();
  this.callback(error);
};
RequestBase.prototype._setTimeouts = function () {
  const self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(() => {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }

  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(() => {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzZW12ZXIiLCJyZXF1aXJlIiwiX3JlcXVpcmUiLCJpc09iamVjdCIsImhhc093biIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZXF1ZXN0QmFzZSIsInByb3RvdHlwZSIsImNsZWFyVGltZW91dCIsIl90aW1lciIsIl9yZXNwb25zZVRpbWVvdXRUaW1lciIsIl91cGxvYWRUaW1lb3V0VGltZXIiLCJwYXJzZSIsImZuIiwiX3BhcnNlciIsInJlc3BvbnNlVHlwZSIsInZhbHVlIiwiX3Jlc3BvbnNlVHlwZSIsInNlcmlhbGl6ZSIsIl9zZXJpYWxpemVyIiwidGltZW91dCIsIm9wdGlvbnMiLCJfdGltZW91dCIsIl9yZXNwb25zZVRpbWVvdXQiLCJfdXBsb2FkVGltZW91dCIsIm9wdGlvbiIsImRlYWRsaW5lIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJjb25zb2xlIiwid2FybiIsInJldHJ5IiwiY291bnQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJfbWF4UmV0cmllcyIsIl9yZXRyaWVzIiwiX3JldHJ5Q2FsbGJhY2siLCJFUlJPUl9DT0RFUyIsIlNldCIsIlNUQVRVU19DT0RFUyIsIl9zaG91bGRSZXRyeSIsImVycm9yIiwicmVzIiwib3ZlcnJpZGUiLCJlcnIiLCJzdGF0dXMiLCJoYXMiLCJjb2RlIiwiY3Jvc3NEb21haW4iLCJfcmV0cnkiLCJyZXEiLCJyZXF1ZXN0IiwiX2Fib3J0ZWQiLCJ0aW1lZG91dCIsInRpbWVkb3V0RXJyb3IiLCJfZW5kIiwidGhlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfZnVsbGZpbGxlZFByb21pc2UiLCJzZWxmIiwiX2VuZENhbGxlZCIsIlByb21pc2UiLCJvbiIsIkVycm9yIiwibWV0aG9kIiwidXJsIiwiZW5kIiwiY2F0Y2giLCJjYWxsYmFjayIsInVuZGVmaW5lZCIsInVzZSIsIm9rIiwiX29rQ2FsbGJhY2siLCJfaXNSZXNwb25zZU9LIiwiZ2V0IiwiZmllbGQiLCJfaGVhZGVyIiwidG9Mb3dlckNhc2UiLCJnZXRIZWFkZXIiLCJzZXQiLCJrZXkiLCJoZWFkZXIiLCJ1bnNldCIsIm5hbWUiLCJfZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJTdHJpbmciLCJfZ2V0Rm9ybURhdGEiLCJhcHBlbmQiLCJhYm9ydCIsInhociIsImd0ZSIsInByb2Nlc3MiLCJ2ZXJzaW9uIiwibHQiLCJlbWl0IiwiX2F1dGgiLCJ1c2VyIiwicGFzcyIsImJhc2U2NEVuY29kZXIiLCJ0eXBlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIndpdGhDcmVkZW50aWFscyIsIl93aXRoQ3JlZGVudGlhbHMiLCJyZWRpcmVjdHMiLCJuIiwiX21heFJlZGlyZWN0cyIsIm1heFJlc3BvbnNlU2l6ZSIsIlR5cGVFcnJvciIsIl9tYXhSZXNwb25zZVNpemUiLCJ0b0pTT04iLCJkYXRhIiwiaGVhZGVycyIsInNlbmQiLCJpc09iamVjdF8iLCJfZm9ybURhdGEiLCJfaXNIb3N0IiwidHJpbSIsInNvcnRRdWVyeSIsInNvcnQiLCJfc29ydCIsIl9maW5hbGl6ZVF1ZXJ5U3RyaW5nIiwicXVlcnkiLCJfcXVlcnkiLCJqb2luIiwiaW5jbHVkZXMiLCJpbmRleCIsImluZGV4T2YiLCJxdWVyeUFycmF5Iiwic2xpY2UiLCJzcGxpdCIsIl9hcHBlbmRRdWVyeVN0cmluZyIsIl90aW1lb3V0RXJyb3IiLCJyZWFzb24iLCJlcnJubyIsIl9zZXRUaW1lb3V0cyIsInNldFRpbWVvdXQiXSwic291cmNlcyI6WyIuLi9zcmMvcmVxdWVzdC1iYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlbXZlciA9IHJlcXVpcmUoJ3NlbXZlcicpO1xuXG4vKipcbiAqIE1vZHVsZSBvZiBtaXhlZC1pbiBmdW5jdGlvbnMgc2hhcmVkIGJldHdlZW4gbm9kZSBhbmQgY2xpZW50IGNvZGVcbiAqL1xuY29uc3QgeyBpc09iamVjdCwgaGFzT3duIH0gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qKlxuICogRXhwb3NlIGBSZXF1ZXN0QmFzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0QmFzZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0QmFzZWAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0QmFzZSgpIHt9XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyKTtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3VwbG9hZFRpbWVvdXRUaW1lcik7XG4gIGRlbGV0ZSB0aGlzLl90aW1lcjtcbiAgZGVsZXRlIHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyO1xuICBkZWxldGUgdGhpcy5fdXBsb2FkVGltZW91dFRpbWVyO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCByZXNwb25zZSBib2R5IHBhcnNlclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gY29udmVydCBpbmNvbWluZyBkYXRhIGludG8gcmVxdWVzdC5ib2R5XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuX3BhcnNlciA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGZvcm1hdCBvZiBiaW5hcnkgcmVzcG9uc2UgYm9keS5cbiAqIEluIGJyb3dzZXIgdmFsaWQgZm9ybWF0cyBhcmUgJ2Jsb2InIGFuZCAnYXJyYXlidWZmZXInLFxuICogd2hpY2ggcmV0dXJuIEJsb2IgYW5kIEFycmF5QnVmZmVyLCByZXNwZWN0aXZlbHkuXG4gKlxuICogSW4gTm9kZSBhbGwgdmFsdWVzIHJlc3VsdCBpbiBCdWZmZXIuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAucmVzcG9uc2VUeXBlKCdibG9iJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB0aGlzLl9yZXNwb25zZVR5cGUgPSB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE92ZXJyaWRlIGRlZmF1bHQgcmVxdWVzdCBib2R5IHNlcmlhbGl6ZXJcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHRvIGNvbnZlcnQgZGF0YSBzZXQgdmlhIC5zZW5kIG9yIC5hdHRhY2ggaW50byBwYXlsb2FkIHRvIHNlbmRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2VyaWFsaXplID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuX3NlcmlhbGl6ZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aW1lb3V0cy5cbiAqXG4gKiAtIHJlc3BvbnNlIHRpbWVvdXQgaXMgdGltZSBiZXR3ZWVuIHNlbmRpbmcgcmVxdWVzdCBhbmQgcmVjZWl2aW5nIHRoZSBmaXJzdCBieXRlIG9mIHRoZSByZXNwb25zZS4gSW5jbHVkZXMgRE5TIGFuZCBjb25uZWN0aW9uIHRpbWUuXG4gKiAtIGRlYWRsaW5lIGlzIHRoZSB0aW1lIGZyb20gc3RhcnQgb2YgdGhlIHJlcXVlc3QgdG8gcmVjZWl2aW5nIHJlc3BvbnNlIGJvZHkgaW4gZnVsbC4gSWYgdGhlIGRlYWRsaW5lIGlzIHRvbyBzaG9ydCBsYXJnZSBmaWxlcyBtYXkgbm90IGxvYWQgYXQgYWxsIG9uIHNsb3cgY29ubmVjdGlvbnMuXG4gKiAtIHVwbG9hZCBpcyB0aGUgdGltZSAgc2luY2UgbGFzdCBiaXQgb2YgZGF0YSB3YXMgc2VudCBvciByZWNlaXZlZC4gVGhpcyB0aW1lb3V0IHdvcmtzIG9ubHkgaWYgZGVhZGxpbmUgdGltZW91dCBpcyBvZmZcbiAqXG4gKiBWYWx1ZSBvZiAwIG9yIGZhbHNlIG1lYW5zIG5vIHRpbWVvdXQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSBtcyBvciB7cmVzcG9uc2UsIGRlYWRsaW5lfVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIHRoaXMuX3RpbWVvdXQgPSBvcHRpb25zO1xuICAgIHRoaXMuX3Jlc3BvbnNlVGltZW91dCA9IDA7XG4gICAgdGhpcy5fdXBsb2FkVGltZW91dCA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmb3IgKGNvbnN0IG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgaWYgKGhhc093bihvcHRpb25zLCBvcHRpb24pKSB7XG4gICAgICBzd2l0Y2ggKG9wdGlvbikge1xuICAgICAgICBjYXNlICdkZWFkbGluZSc6XG4gICAgICAgICAgdGhpcy5fdGltZW91dCA9IG9wdGlvbnMuZGVhZGxpbmU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgICAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXQgPSBvcHRpb25zLnJlc3BvbnNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd1cGxvYWQnOlxuICAgICAgICAgIHRoaXMuX3VwbG9hZFRpbWVvdXQgPSBvcHRpb25zLnVwbG9hZDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1Vua25vd24gdGltZW91dCBvcHRpb24nLCBvcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgbnVtYmVyIG9mIHJldHJ5IGF0dGVtcHRzIG9uIGVycm9yLlxuICpcbiAqIEZhaWxlZCByZXF1ZXN0cyB3aWxsIGJlIHJldHJpZWQgJ2NvdW50JyB0aW1lcyBpZiB0aW1lb3V0IG9yIGVyci5jb2RlID49IDUwMC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUucmV0cnkgPSBmdW5jdGlvbiAoY291bnQsIGZuKSB7XG4gIC8vIERlZmF1bHQgdG8gMSBpZiBubyBjb3VudCBwYXNzZWQgb3IgdHJ1ZVxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCB8fCBjb3VudCA9PT0gdHJ1ZSkgY291bnQgPSAxO1xuICBpZiAoY291bnQgPD0gMCkgY291bnQgPSAwO1xuICB0aGlzLl9tYXhSZXRyaWVzID0gY291bnQ7XG4gIHRoaXMuX3JldHJpZXMgPSAwO1xuICB0aGlzLl9yZXRyeUNhbGxiYWNrID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIE5PVEU6IHdlIGRvIG5vdCBpbmNsdWRlIEVTT0NLRVRUSU1FRE9VVCBiZWNhdXNlIHRoYXQgaXMgZnJvbSBgcmVxdWVzdGAgcGFja2FnZVxuLy8gICAgICAgPGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvZ290L3B1bGwvNTM3PlxuLy9cbi8vIE5PVEU6IHdlIGRvIG5vdCBpbmNsdWRlIEVBRERSSU5GTyBiZWNhdXNlIGl0IHdhcyByZW1vdmVkIGZyb20gbGlidXYgaW4gMjAxNFxuLy8gICAgICAgPGh0dHBzOi8vZ2l0aHViLmNvbS9saWJ1di9saWJ1di9jb21taXQvMDJlMWViZDQwYjgwN2JlNWFmNDYzNDNlYTg3MzMzMWIyZWU0ZTljMT5cbi8vICAgICAgIDxodHRwczovL2dpdGh1Yi5jb20vcmVxdWVzdC9yZXF1ZXN0L3NlYXJjaD9xPUVTT0NLRVRUSU1FRE9VVCZ1bnNjb3BlZF9xPUVTT0NLRVRUSU1FRE9VVD5cbi8vXG4vL1xuLy8gVE9ETzogZXhwb3NlIHRoZXNlIGFzIGNvbmZpZ3VyYWJsZSBkZWZhdWx0c1xuLy9cbmNvbnN0IEVSUk9SX0NPREVTID0gbmV3IFNldChbXG4gICdFVElNRURPVVQnLFxuICAnRUNPTk5SRVNFVCcsXG4gICdFQUREUklOVVNFJyxcbiAgJ0VDT05OUkVGVVNFRCcsXG4gICdFUElQRScsXG4gICdFTk9URk9VTkQnLFxuICAnRU5FVFVOUkVBQ0gnLFxuICAnRUFJX0FHQUlOJ1xuXSk7XG5cbmNvbnN0IFNUQVRVU19DT0RFUyA9IG5ldyBTZXQoW1xuICA0MDgsIDQxMywgNDI5LCA1MDAsIDUwMiwgNTAzLCA1MDQsIDUyMSwgNTIyLCA1MjRcbl0pO1xuXG4vLyBUT0RPOiB3ZSB3b3VsZCBuZWVkIHRvIG1ha2UgdGhpcyBlYXNpbHkgY29uZmlndXJhYmxlIGJlZm9yZSBhZGRpbmcgaXQgaW4gKGUuZy4gc29tZSBtaWdodCB3YW50IHRvIGFkZCBQT1NUKVxuLy8gY29uc3QgTUVUSE9EUyA9IG5ldyBTZXQoWydHRVQnLCAnUFVUJywgJ0hFQUQnLCAnREVMRVRFJywgJ09QVElPTlMnLCAnVFJBQ0UnXSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgcmVxdWVzdCBzaG91bGQgYmUgcmV0cmllZC5cbiAqIChJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2dvdCNyZXRyeSlcbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgYW4gZXJyb3JcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IFtyZXNdIHJlc3BvbnNlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaWYgc2VnbWVudCBzaG91bGQgYmUgcmV0cmllZFxuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3Nob3VsZFJldHJ5ID0gZnVuY3Rpb24gKGVycm9yLCByZXMpIHtcbiAgaWYgKCF0aGlzLl9tYXhSZXRyaWVzIHx8IHRoaXMuX3JldHJpZXMrKyA+PSB0aGlzLl9tYXhSZXRyaWVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuX3JldHJ5Q2FsbGJhY2spIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3ZlcnJpZGUgPSB0aGlzLl9yZXRyeUNhbGxiYWNrKGVycm9yLCByZXMpO1xuICAgICAgaWYgKG92ZXJyaWRlID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChvdmVycmlkZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIHVuZGVmaW5lZCBmYWxscyBiYWNrIHRvIGRlZmF1bHRzXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLy8gVE9ETzogd2Ugd291bGQgbmVlZCB0byBtYWtlIHRoaXMgZWFzaWx5IGNvbmZpZ3VyYWJsZSBiZWZvcmUgYWRkaW5nIGl0IGluIChlLmcuIHNvbWUgbWlnaHQgd2FudCB0byBhZGQgUE9TVClcbiAgLypcbiAgaWYgKFxuICAgIHRoaXMucmVxICYmXG4gICAgdGhpcy5yZXEubWV0aG9kICYmXG4gICAgIU1FVEhPRFMuaGFzKHRoaXMucmVxLm1ldGhvZC50b1VwcGVyQ2FzZSgpKVxuICApXG4gICAgcmV0dXJuIGZhbHNlO1xuICAqL1xuICBpZiAocmVzICYmIHJlcy5zdGF0dXMgJiYgU1RBVFVTX0NPREVTLmhhcyhyZXMuc3RhdHVzKSkgcmV0dXJuIHRydWU7XG4gIGlmIChlcnJvcikge1xuICAgIGlmIChlcnJvci5jb2RlICYmIEVSUk9SX0NPREVTLmhhcyhlcnJvci5jb2RlKSkgcmV0dXJuIHRydWU7XG4gICAgLy8gU3VwZXJhZ2VudCB0aW1lb3V0XG4gICAgaWYgKGVycm9yLnRpbWVvdXQgJiYgZXJyb3IuY29kZSA9PT0gJ0VDT05OQUJPUlRFRCcpIHJldHVybiB0cnVlO1xuICAgIGlmIChlcnJvci5jcm9zc0RvbWFpbikgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJldHJ5IHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fcmV0cnkgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG5cbiAgLy8gbm9kZVxuICBpZiAodGhpcy5yZXEpIHtcbiAgICB0aGlzLnJlcSA9IG51bGw7XG4gICAgdGhpcy5yZXEgPSB0aGlzLnJlcXVlc3QoKTtcbiAgfVxuXG4gIHRoaXMuX2Fib3J0ZWQgPSBmYWxzZTtcbiAgdGhpcy50aW1lZG91dCA9IGZhbHNlO1xuICB0aGlzLnRpbWVkb3V0RXJyb3IgPSBudWxsO1xuXG4gIHJldHVybiB0aGlzLl9lbmQoKTtcbn07XG5cbi8qKlxuICogUHJvbWlzZSBzdXBwb3J0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3JlamVjdF1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGlmICghdGhpcy5fZnVsbGZpbGxlZFByb21pc2UpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5fZW5kQ2FsbGVkKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdXYXJuaW5nOiBzdXBlcmFnZW50IHJlcXVlc3Qgd2FzIHNlbnQgdHdpY2UsIGJlY2F1c2UgYm90aCAuZW5kKCkgYW5kIC50aGVuKCkgd2VyZSBjYWxsZWQuIE5ldmVyIGNhbGwgLmVuZCgpIGlmIHlvdSB1c2UgcHJvbWlzZXMnXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2VsZi5vbignYWJvcnQnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9tYXhSZXRyaWVzICYmIHRoaXMuX21heFJldHJpZXMgPiB0aGlzLl9yZXRyaWVzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGltZWRvdXQgJiYgdGhpcy50aW1lZG91dEVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KHRoaXMudGltZWRvdXRFcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoJ0Fib3J0ZWQnKTtcbiAgICAgICAgZXJyb3IuY29kZSA9ICdBQk9SVEVEJztcbiAgICAgICAgZXJyb3Iuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gICAgICAgIGVycm9yLm1ldGhvZCA9IHRoaXMubWV0aG9kO1xuICAgICAgICBlcnJvci51cmwgPSB0aGlzLnVybDtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgICAgc2VsZi5lbmQoKGVycm9yLCByZXMpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSByZWplY3QoZXJyb3IpO1xuICAgICAgICBlbHNlIHJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIChmbikge1xuICBmbih0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUub2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayByZXF1aXJlZCcpO1xuICB0aGlzLl9va0NhbGxiYWNrID0gY2FsbGJhY2s7XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9pc1Jlc3BvbnNlT0sgPSBmdW5jdGlvbiAocmVzKSB7XG4gIGlmICghcmVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuX29rQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5fb2tDYWxsYmFjayhyZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDA7XG59O1xuXG4vKipcbiAqIEdldCByZXF1ZXN0IGhlYWRlciBgZmllbGRgLlxuICogQ2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICByZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqIFRoaXMgaXMgYSBkZXByZWNhdGVkIGludGVybmFsIEFQSS4gVXNlIGAuZ2V0KGZpZWxkKWAgaW5zdGVhZC5cbiAqXG4gKiAoZ2V0SGVhZGVyIGlzIG5vIGxvbmdlciB1c2VkIGludGVybmFsbHkgYnkgdGhlIHN1cGVyYWdlbnQgY29kZSBiYXNlKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKiBAZGVwcmVjYXRlZFxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXRIZWFkZXIgPSBSZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGZpZWxkLCB2YWx1ZSkge1xuICBpZiAoaXNPYmplY3QoZmllbGQpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGQpIHtcbiAgICAgIGlmIChoYXNPd24oZmllbGQsIGtleSkpIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKiBDYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAudW5zZXQoJ1VzZXItQWdlbnQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZCBmaWVsZCBuYW1lXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3RcbiAqIGZvciBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCh7IGZvbzogJ2JhcicsIGJhejogJ3F1eCcgfSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG5hbWUgbmFtZSBvZiBmaWVsZFxuICogQHBhcmFtIHtTdHJpbmd8QmxvYnxGaWxlfEJ1ZmZlcnxmcy5SZWFkU3RyZWFtfSB2YWwgdmFsdWUgb2YgZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zIGV4dHJhIG9wdGlvbnMsIGUuZy4gJ2Jsb2InXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAvLyBuYW1lIHNob3VsZCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LlxuICBpZiAobmFtZSA9PT0gbnVsbCB8fCB1bmRlZmluZWQgPT09IG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJy5maWVsZChuYW1lLCB2YWwpIG5hbWUgY2FuIG5vdCBiZSBlbXB0eScpO1xuICB9XG5cbiAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIi5maWVsZCgpIGNhbid0IGJlIHVzZWQgaWYgLnNlbmQoKSBpcyB1c2VkLiBQbGVhc2UgdXNlIG9ubHkgLnNlbmQoKSBvciBvbmx5IC5maWVsZCgpICYgLmF0dGFjaCgpXCJcbiAgICApO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmFtZSkge1xuICAgICAgaWYgKGhhc093bihuYW1lLCBrZXkpKSB0aGlzLmZpZWxkKGtleSwgbmFtZVtrZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAoY29uc3QgaSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKGhhc093bih2YWx1ZSwgaSkpIHRoaXMuZmllbGQobmFtZSwgdmFsdWVbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdmFsIHNob3VsZCBiZSBkZWZpbmVkIG5vd1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdW5kZWZpbmVkID09PSB2YWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignLmZpZWxkKG5hbWUsIHZhbCkgdmFsIGNhbiBub3QgYmUgZW1wdHknKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgfVxuXG4gIC8vIGZpeCBodHRwczovL2dpdGh1Yi5jb20vbGFkanMvc3VwZXJhZ2VudC9pc3N1ZXMvMTY4MFxuICBpZiAob3B0aW9ucykgdGhpcy5fZ2V0Rm9ybURhdGEoKS5hcHBlbmQobmFtZSwgdmFsdWUsIG9wdGlvbnMpO1xuICBlbHNlIHRoaXMuX2dldEZvcm1EYXRhKCkuYXBwZW5kKG5hbWUsIHZhbHVlKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWJvcnQgdGhlIHJlcXVlc3QsIGFuZCBjbGVhciBwb3RlbnRpYWwgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9hYm9ydGVkKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aGlzLl9hYm9ydGVkID0gdHJ1ZTtcbiAgaWYgKHRoaXMueGhyKSB0aGlzLnhoci5hYm9ydCgpOyAvLyBicm93c2VyXG4gIGlmICh0aGlzLnJlcSkge1xuICAgIC8vIE5vZGUgdjEzIGhhcyBtYWpvciBkaWZmZXJlbmNlcyBpbiBgYWJvcnQoKWBcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi92MTIueC9saWIvaW50ZXJuYWwvc3RyZWFtcy9lbmQtb2Ytc3RyZWFtLmpzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvdjEzLngvbGliL2ludGVybmFsL3N0cmVhbXMvZW5kLW9mLXN0cmVhbS5qc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL3YxNC54L2xpYi9pbnRlcm5hbC9zdHJlYW1zL2VuZC1vZi1zdHJlYW0uanNcbiAgICAvLyAoaWYgeW91IHJ1biBhIGRpZmYgYWNyb3NzIHRoZXNlIHlvdSB3aWxsIHNlZSB0aGUgZGlmZmVyZW5jZXMpXG4gICAgLy9cbiAgICAvLyBSZWZlcmVuY2VzOlxuICAgIC8vIDxodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzMxNjMwPlxuICAgIC8vIDxodHRwczovL2dpdGh1Yi5jb20vbGFkanMvc3VwZXJhZ2VudC9wdWxsLzEwODQvY29tbWl0cy9kYzE4Njc5YTdjNWNjZmM2MDQ2ZDg4MjAxNWU1MTI2ODg4OTczYmM4PlxuICAgIC8vXG4gICAgLy8gVGhhbmtzIHRvIEBzaGFkb3dnYXRlMTUgYW5kIEBuaWZ0eWxldHR1Y2VcbiAgICBpZiAoXG4gICAgICBzZW12ZXIuZ3RlKHByb2Nlc3MudmVyc2lvbiwgJ3YxMy4wLjAnKSAmJlxuICAgICAgc2VtdmVyLmx0KHByb2Nlc3MudmVyc2lvbiwgJ3YxNC4wLjAnKVxuICAgICkge1xuICAgICAgLy8gTm90ZSB0aGF0IHRoZSByZWFzb24gdGhpcyBkb2Vzbid0IHdvcmsgaXMgYmVjYXVzZSBpbiB2MTMgYXMgY29tcGFyZWQgdG8gdjE0XG4gICAgICAvLyB0aGVyZSBpcyBubyBgY2FsbGJhY2sgPSBub3BgIHNldCBpbiBlbmQtb2Ytc3RyZWFtLmpzIGFib3ZlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdTdXBlcmFnZW50IGRvZXMgbm90IHdvcmsgaW4gdjEzIHByb3Blcmx5IHdpdGggYWJvcnQoKSBkdWUgdG8gTm9kZS5qcyBjb3JlIGNoYW5nZXMnXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMucmVxLmFib3J0KCk7IC8vIG5vZGVcbiAgfVxuXG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2F1dGggPSBmdW5jdGlvbiAodXNlciwgcGFzcywgb3B0aW9ucywgYmFzZTY0RW5jb2Rlcikge1xuICBzd2l0Y2ggKG9wdGlvbnMudHlwZSkge1xuICAgIGNhc2UgJ2Jhc2ljJzpcbiAgICAgIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgYEJhc2ljICR7YmFzZTY0RW5jb2RlcihgJHt1c2VyfToke3Bhc3N9YCl9YCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXI7XG4gICAgICB0aGlzLnBhc3N3b3JkID0gcGFzcztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYmVhcmVyJzogLy8gdXNhZ2Ugd291bGQgYmUgLmF1dGgoYWNjZXNzVG9rZW4sIHsgdHlwZTogJ2JlYXJlcicgfSlcbiAgICAgIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke3VzZXJ9YCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW5hYmxlIHRyYW5zbWlzc2lvbiBvZiBjb29raWVzIHdpdGggeC1kb21haW4gcmVxdWVzdHMuXG4gKlxuICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmsgdGhlIG9yaWdpbiBtdXN0IG5vdCBiZVxuICogdXNpbmcgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiB3aXRoIGEgd2lsZGNhcmQsXG4gKiBhbmQgYWxzbyBtdXN0IHNldCBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCJcbiAqIHRvIFwidHJ1ZVwiLlxuICogQHBhcmFtIHtCb29sZWFufSBbb249dHJ1ZV0gLSBTZXQgJ3dpdGhDcmVkZW50aWFscycgc3RhdGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24gKG9uKSB7XG4gIC8vIFRoaXMgaXMgYnJvd3Nlci1vbmx5IGZ1bmN0aW9uYWxpdHkuIE5vZGUgc2lkZSBpcyBuby1vcC5cbiAgaWYgKG9uID09PSB1bmRlZmluZWQpIG9uID0gdHJ1ZTtcbiAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1heCByZWRpcmVjdHMgdG8gYG5gLiBEb2VzIG5vdGhpbmcgaW4gYnJvd3NlciBYSFIgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUucmVkaXJlY3RzID0gZnVuY3Rpb24gKG4pIHtcbiAgdGhpcy5fbWF4UmVkaXJlY3RzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE1heGltdW0gc2l6ZSBvZiBidWZmZXJlZCByZXNwb25zZSBib2R5LCBpbiBieXRlcy4gQ291bnRzIHVuY29tcHJlc3NlZCBzaXplLlxuICogRGVmYXVsdCAyMDBNQi5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbiBudW1iZXIgb2YgYnl0ZXNcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUubWF4UmVzcG9uc2VTaXplID0gZnVuY3Rpb24gKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQnKTtcbiAgfVxuXG4gIHRoaXMuX21heFJlc3BvbnNlU2l6ZSA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHRvIGEgcGxhaW4gamF2YXNjcmlwdCBvYmplY3QgKG5vdCBKU09OIHN0cmluZykgb2Ygc2NhbGFyIHByb3BlcnRpZXMuXG4gKiBOb3RlIGFzIHRoaXMgbWV0aG9kIGlzIGRlc2lnbmVkIHRvIHJldHVybiBhIHVzZWZ1bCBub24tdGhpcyB2YWx1ZSxcbiAqIGl0IGNhbm5vdCBiZSBjaGFpbmVkLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gZGVzY3JpYmluZyBtZXRob2QsIHVybCwgYW5kIGRhdGEgb2YgdGhpcyByZXF1ZXN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICB1cmw6IHRoaXMudXJsLFxuICAgIGRhdGE6IHRoaXMuX2RhdGEsXG4gICAgaGVhZGVyczogdGhpcy5faGVhZGVyXG4gIH07XG59O1xuXG4vKipcbiAqIFNlbmQgYGRhdGFgIGFzIHRoZSByZXF1ZXN0IGJvZHksIGRlZmF1bHRpbmcgdGhlIGAudHlwZSgpYCB0byBcImpzb25cIiB3aGVuXG4gKiBhbiBvYmplY3QgaXMgZ2l2ZW4uXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICAgLy8gbWFudWFsIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnanNvbicpXG4gKiAgICAgICAgIC5zZW5kKCd7XCJuYW1lXCI6XCJ0alwifScpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoJ25hbWU9dGonKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBkZWZhdWx0cyB0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoJ25hbWU9dG9iaScpXG4gKiAgICAgICAgLnNlbmQoJ3NwZWNpZXM9ZmVycmV0JylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnN0IGlzT2JqZWN0XyA9IGlzT2JqZWN0KGRhdGEpO1xuICBsZXQgdHlwZSA9IHRoaXMuX2hlYWRlclsnY29udGVudC10eXBlJ107XG5cbiAgaWYgKHRoaXMuX2Zvcm1EYXRhKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCIuc2VuZCgpIGNhbid0IGJlIHVzZWQgaWYgLmF0dGFjaCgpIG9yIC5maWVsZCgpIGlzIHVzZWQuIFBsZWFzZSB1c2Ugb25seSAuc2VuZCgpIG9yIG9ubHkgLmZpZWxkKCkgJiAuYXR0YWNoKClcIlxuICAgICk7XG4gIH1cblxuICBpZiAoaXNPYmplY3RfICYmICF0aGlzLl9kYXRhKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc0hvc3QoZGF0YSkpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGF0YSAmJiB0aGlzLl9kYXRhICYmIHRoaXMuX2lzSG9zdCh0aGlzLl9kYXRhKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IG1lcmdlIHRoZXNlIHNlbmQgY2FsbHNcIik7XG4gIH1cblxuICAvLyBtZXJnZVxuICBpZiAoaXNPYmplY3RfICYmIGlzT2JqZWN0KHRoaXMuX2RhdGEpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2tleV0gPT0gJ2JpZ2ludCcgJiYgIWRhdGFba2V5XS50b0pTT04pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNlcmlhbGl6ZSBCaWdJbnQgdmFsdWUgdG8ganNvbicpO1xuICAgICAgaWYgKGhhc093bihkYXRhLCBrZXkpKSB0aGlzLl9kYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnYmlnaW50JykgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHNlbmQgdmFsdWUgb2YgdHlwZSBCaWdJbnRcIik7XG4gIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIC8vIGRlZmF1bHQgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2Zvcm0nKTtcbiAgICB0eXBlID0gdGhpcy5faGVhZGVyWydjb250ZW50LXR5cGUnXTtcbiAgICBpZiAodHlwZSkgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgaWYgKHR5cGUgPT09ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YSA/IGAke3RoaXMuX2RhdGF9JiR7ZGF0YX1gIDogZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9ICh0aGlzLl9kYXRhIHx8ICcnKSArIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICB9XG5cbiAgaWYgKCFpc09iamVjdF8gfHwgdGhpcy5faXNIb3N0KGRhdGEpKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBkZWZhdWx0IHRvIGpzb25cbiAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2pzb24nKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNvcnQgYHF1ZXJ5c3RyaW5nYCBieSB0aGUgc29ydCBmdW5jdGlvblxuICpcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBkZWZhdWx0IG9yZGVyXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3VzZXInKVxuICogICAgICAgICAucXVlcnkoJ25hbWU9TmljaycpXG4gKiAgICAgICAgIC5xdWVyeSgnc2VhcmNoPU1hbm55JylcbiAqICAgICAgICAgLnNvcnRRdWVyeSgpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gY3VzdG9taXplZCBzb3J0IGZ1bmN0aW9uXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3VzZXInKVxuICogICAgICAgICAucXVlcnkoJ25hbWU9TmljaycpXG4gKiAgICAgICAgIC5xdWVyeSgnc2VhcmNoPU1hbm55JylcbiAqICAgICAgICAgLnNvcnRRdWVyeShmdW5jdGlvbihhLCBiKXtcbiAqICAgICAgICAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAqICAgICAgICAgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc29ydFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5zb3J0UXVlcnkgPSBmdW5jdGlvbiAoc29ydCkge1xuICAvLyBfc29ydCBkZWZhdWx0IHRvIHRydWUgYnV0IG90aGVyd2lzZSBjYW4gYmUgYSBmdW5jdGlvbiBvciBib29sZWFuXG4gIHRoaXMuX3NvcnQgPSB0eXBlb2Ygc29ydCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogc29ydDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENvbXBvc2UgcXVlcnlzdHJpbmcgdG8gYXBwZW5kIHRvIHJlcS51cmxcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9maW5hbGl6ZVF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBxdWVyeSA9IHRoaXMuX3F1ZXJ5LmpvaW4oJyYnKTtcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgdGhpcy51cmwgKz0gKHRoaXMudXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPycpICsgcXVlcnk7XG4gIH1cblxuICB0aGlzLl9xdWVyeS5sZW5ndGggPSAwOyAvLyBNYWtlcyB0aGUgY2FsbCBpZGVtcG90ZW50XG5cbiAgaWYgKHRoaXMuX3NvcnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudXJsLmluZGV4T2YoJz8nKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgY29uc3QgcXVlcnlBcnJheSA9IHRoaXMudXJsLnNsaWNlKGluZGV4ICsgMSkuc3BsaXQoJyYnKTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fc29ydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBxdWVyeUFycmF5LnNvcnQodGhpcy5fc29ydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWVyeUFycmF5LnNvcnQoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cmwgPSB0aGlzLnVybC5zbGljZSgwLCBpbmRleCkgKyAnPycgKyBxdWVyeUFycmF5LmpvaW4oJyYnKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0IG9ubHlcblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fYXBwZW5kUXVlcnlTdHJpbmcgPSAoKSA9PiB7XG4gIGNvbnNvbGUud2FybignVW5zdXBwb3J0ZWQnKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggdGltZW91dCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3RpbWVvdXRFcnJvciA9IGZ1bmN0aW9uIChyZWFzb24sIHRpbWVvdXQsIGVycm5vKSB7XG4gIGlmICh0aGlzLl9hYm9ydGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYCR7cmVhc29uICsgdGltZW91dH1tcyBleGNlZWRlZGApO1xuICBlcnJvci50aW1lb3V0ID0gdGltZW91dDtcbiAgZXJyb3IuY29kZSA9ICdFQ09OTkFCT1JURUQnO1xuICBlcnJvci5lcnJubyA9IGVycm5vO1xuICB0aGlzLnRpbWVkb3V0ID0gdHJ1ZTtcbiAgdGhpcy50aW1lZG91dEVycm9yID0gZXJyb3I7XG4gIHRoaXMuYWJvcnQoKTtcbiAgdGhpcy5jYWxsYmFjayhlcnJvcik7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3NldFRpbWVvdXRzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICAvLyBkZWFkbGluZVxuICBpZiAodGhpcy5fdGltZW91dCAmJiAhdGhpcy5fdGltZXIpIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2VsZi5fdGltZW91dEVycm9yKCdUaW1lb3V0IG9mICcsIHNlbGYuX3RpbWVvdXQsICdFVElNRScpO1xuICAgIH0sIHRoaXMuX3RpbWVvdXQpO1xuICB9XG5cbiAgLy8gcmVzcG9uc2UgdGltZW91dFxuICBpZiAodGhpcy5fcmVzcG9uc2VUaW1lb3V0ICYmICF0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lcikge1xuICAgIHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZWxmLl90aW1lb3V0RXJyb3IoXG4gICAgICAgICdSZXNwb25zZSB0aW1lb3V0IG9mICcsXG4gICAgICAgIHNlbGYuX3Jlc3BvbnNlVGltZW91dCxcbiAgICAgICAgJ0VUSU1FRE9VVCdcbiAgICAgICk7XG4gICAgfSwgdGhpcy5fcmVzcG9uc2VUaW1lb3V0KTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxRQUFRLENBQUM7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLE1BQUFDLFFBQUEsR0FBNkJELE9BQU8sQ0FBQyxTQUFTLENBQUM7RUFBdkNFLFFBQVEsR0FBQUQsUUFBQSxDQUFSQyxRQUFRO0VBQUVDLE1BQU0sR0FBQUYsUUFBQSxDQUFORSxNQUFNOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHQyxXQUFXOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVdBLENBQUEsRUFBRyxDQUFDOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDQyxZQUFZLEdBQUcsWUFBWTtFQUMvQ0EsWUFBWSxDQUFDLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0VBQ3pCRCxZQUFZLENBQUMsSUFBSSxDQUFDRSxxQkFBcUIsQ0FBQztFQUN4Q0YsWUFBWSxDQUFDLElBQUksQ0FBQ0csbUJBQW1CLENBQUM7RUFDdEMsT0FBTyxJQUFJLENBQUNGLE1BQU07RUFDbEIsT0FBTyxJQUFJLENBQUNDLHFCQUFxQjtFQUNqQyxPQUFPLElBQUksQ0FBQ0MsbUJBQW1CO0VBQy9CLE9BQU8sSUFBSTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUwsV0FBVyxDQUFDQyxTQUFTLENBQUNLLEtBQUssR0FBRyxVQUFVQyxFQUFFLEVBQUU7RUFDMUMsSUFBSSxDQUFDQyxPQUFPLEdBQUdELEVBQUU7RUFDakIsT0FBTyxJQUFJO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBUCxXQUFXLENBQUNDLFNBQVMsQ0FBQ1EsWUFBWSxHQUFHLFVBQVVDLEtBQUssRUFBRTtFQUNwRCxJQUFJLENBQUNDLGFBQWEsR0FBR0QsS0FBSztFQUMxQixPQUFPLElBQUk7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFWLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDVyxTQUFTLEdBQUcsVUFBVUwsRUFBRSxFQUFFO0VBQzlDLElBQUksQ0FBQ00sV0FBVyxHQUFHTixFQUFFO0VBQ3JCLE9BQU8sSUFBSTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFQLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDYSxPQUFPLEdBQUcsVUFBVUMsT0FBTyxFQUFFO0VBQ2pELElBQUksQ0FBQ0EsT0FBTyxJQUFJLE9BQU9BLE9BQU8sS0FBSyxRQUFRLEVBQUU7SUFDM0MsSUFBSSxDQUFDQyxRQUFRLEdBQUdELE9BQU87SUFDdkIsSUFBSSxDQUFDRSxnQkFBZ0IsR0FBRyxDQUFDO0lBQ3pCLElBQUksQ0FBQ0MsY0FBYyxHQUFHLENBQUM7SUFDdkIsT0FBTyxJQUFJO0VBQ2I7RUFFQSxLQUFLLE1BQU1DLE1BQU0sSUFBSUosT0FBTyxFQUFFO0lBQzVCLElBQUlsQixNQUFNLENBQUNrQixPQUFPLEVBQUVJLE1BQU0sQ0FBQyxFQUFFO01BQzNCLFFBQVFBLE1BQU07UUFDWixLQUFLLFVBQVU7VUFDYixJQUFJLENBQUNILFFBQVEsR0FBR0QsT0FBTyxDQUFDSyxRQUFRO1VBQ2hDO1FBQ0YsS0FBSyxVQUFVO1VBQ2IsSUFBSSxDQUFDSCxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFDTSxRQUFRO1VBQ3hDO1FBQ0YsS0FBSyxRQUFRO1VBQ1gsSUFBSSxDQUFDSCxjQUFjLEdBQUdILE9BQU8sQ0FBQ08sTUFBTTtVQUNwQztRQUNGO1VBQ0VDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHdCQUF3QixFQUFFTCxNQUFNLENBQUM7TUFDbEQ7SUFDRjtFQUNGO0VBRUEsT0FBTyxJQUFJO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQW5CLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDd0IsS0FBSyxHQUFHLFVBQVVDLEtBQUssRUFBRW5CLEVBQUUsRUFBRTtFQUNqRDtFQUNBLElBQUlvQixTQUFTLENBQUNDLE1BQU0sS0FBSyxDQUFDLElBQUlGLEtBQUssS0FBSyxJQUFJLEVBQUVBLEtBQUssR0FBRyxDQUFDO0VBQ3ZELElBQUlBLEtBQUssSUFBSSxDQUFDLEVBQUVBLEtBQUssR0FBRyxDQUFDO0VBQ3pCLElBQUksQ0FBQ0csV0FBVyxHQUFHSCxLQUFLO0VBQ3hCLElBQUksQ0FBQ0ksUUFBUSxHQUFHLENBQUM7RUFDakIsSUFBSSxDQUFDQyxjQUFjLEdBQUd4QixFQUFFO0VBQ3hCLE9BQU8sSUFBSTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU15QixXQUFXLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQzFCLFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLGNBQWMsRUFDZCxPQUFPLEVBQ1AsV0FBVyxFQUNYLGFBQWEsRUFDYixXQUFXLENBQ1osQ0FBQztBQUVGLE1BQU1DLFlBQVksR0FBRyxJQUFJRCxHQUFHLENBQUMsQ0FDM0IsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUNqRCxDQUFDOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBakMsV0FBVyxDQUFDQyxTQUFTLENBQUNrQyxZQUFZLEdBQUcsVUFBVUMsS0FBSyxFQUFFQyxHQUFHLEVBQUU7RUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQ1IsV0FBVyxJQUFJLElBQUksQ0FBQ0MsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDRCxXQUFXLEVBQUU7SUFDNUQsT0FBTyxLQUFLO0VBQ2Q7RUFFQSxJQUFJLElBQUksQ0FBQ0UsY0FBYyxFQUFFO0lBQ3ZCLElBQUk7TUFDRixNQUFNTyxRQUFRLEdBQUcsSUFBSSxDQUFDUCxjQUFjLENBQUNLLEtBQUssRUFBRUMsR0FBRyxDQUFDO01BQ2hELElBQUlDLFFBQVEsS0FBSyxJQUFJLEVBQUUsT0FBTyxJQUFJO01BQ2xDLElBQUlBLFFBQVEsS0FBSyxLQUFLLEVBQUUsT0FBTyxLQUFLO01BQ3BDO0lBQ0YsQ0FBQyxDQUFDLE9BQU9DLEdBQUcsRUFBRTtNQUNaaEIsT0FBTyxDQUFDYSxLQUFLLENBQUNHLEdBQUcsQ0FBQztJQUNwQjtFQUNGOztFQUVBO0VBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFLElBQUlGLEdBQUcsSUFBSUEsR0FBRyxDQUFDRyxNQUFNLElBQUlOLFlBQVksQ0FBQ08sR0FBRyxDQUFDSixHQUFHLENBQUNHLE1BQU0sQ0FBQyxFQUFFLE9BQU8sSUFBSTtFQUNsRSxJQUFJSixLQUFLLEVBQUU7SUFDVCxJQUFJQSxLQUFLLENBQUNNLElBQUksSUFBSVYsV0FBVyxDQUFDUyxHQUFHLENBQUNMLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJO0lBQzFEO0lBQ0EsSUFBSU4sS0FBSyxDQUFDdEIsT0FBTyxJQUFJc0IsS0FBSyxDQUFDTSxJQUFJLEtBQUssY0FBYyxFQUFFLE9BQU8sSUFBSTtJQUMvRCxJQUFJTixLQUFLLENBQUNPLFdBQVcsRUFBRSxPQUFPLElBQUk7RUFDcEM7RUFFQSxPQUFPLEtBQUs7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTNDLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDMkMsTUFBTSxHQUFHLFlBQVk7RUFDekMsSUFBSSxDQUFDMUMsWUFBWSxDQUFDLENBQUM7O0VBRW5CO0VBQ0EsSUFBSSxJQUFJLENBQUMyQyxHQUFHLEVBQUU7SUFDWixJQUFJLENBQUNBLEdBQUcsR0FBRyxJQUFJO0lBQ2YsSUFBSSxDQUFDQSxHQUFHLEdBQUcsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztFQUMzQjtFQUVBLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEtBQUs7RUFDckIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsS0FBSztFQUNyQixJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJO0VBRXpCLE9BQU8sSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBbEQsV0FBVyxDQUFDQyxTQUFTLENBQUNrRCxJQUFJLEdBQUcsVUFBVUMsT0FBTyxFQUFFQyxNQUFNLEVBQUU7RUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUU7SUFDNUIsTUFBTUMsSUFBSSxHQUFHLElBQUk7SUFDakIsSUFBSSxJQUFJLENBQUNDLFVBQVUsRUFBRTtNQUNuQmpDLE9BQU8sQ0FBQ0MsSUFBSSxDQUNWLGdJQUNGLENBQUM7SUFDSDtJQUVBLElBQUksQ0FBQzhCLGtCQUFrQixHQUFHLElBQUlHLE9BQU8sQ0FBQyxDQUFDTCxPQUFPLEVBQUVDLE1BQU0sS0FBSztNQUN6REUsSUFBSSxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU07UUFDckIsSUFBSSxJQUFJLENBQUM3QixXQUFXLElBQUksSUFBSSxDQUFDQSxXQUFXLEdBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQUU7VUFDeEQ7UUFDRjtRQUVBLElBQUksSUFBSSxDQUFDa0IsUUFBUSxJQUFJLElBQUksQ0FBQ0MsYUFBYSxFQUFFO1VBQ3ZDSSxNQUFNLENBQUMsSUFBSSxDQUFDSixhQUFhLENBQUM7VUFDMUI7UUFDRjtRQUVBLE1BQU1iLEtBQUssR0FBRyxJQUFJdUIsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNsQ3ZCLEtBQUssQ0FBQ00sSUFBSSxHQUFHLFNBQVM7UUFDdEJOLEtBQUssQ0FBQ0ksTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTTtRQUMxQkosS0FBSyxDQUFDd0IsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTTtRQUMxQnhCLEtBQUssQ0FBQ3lCLEdBQUcsR0FBRyxJQUFJLENBQUNBLEdBQUc7UUFDcEJSLE1BQU0sQ0FBQ2pCLEtBQUssQ0FBQztNQUNmLENBQUMsQ0FBQztNQUNGbUIsSUFBSSxDQUFDTyxHQUFHLENBQUMsQ0FBQzFCLEtBQUssRUFBRUMsR0FBRyxLQUFLO1FBQ3ZCLElBQUlELEtBQUssRUFBRWlCLE1BQU0sQ0FBQ2pCLEtBQUssQ0FBQyxDQUFDLEtBQ3BCZ0IsT0FBTyxDQUFDZixHQUFHLENBQUM7TUFDbkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQSxPQUFPLElBQUksQ0FBQ2lCLGtCQUFrQixDQUFDSCxJQUFJLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxDQUFDO0FBQ3RELENBQUM7QUFFRHJELFdBQVcsQ0FBQ0MsU0FBUyxDQUFDOEQsS0FBSyxHQUFHLFVBQVVDLFFBQVEsRUFBRTtFQUNoRCxPQUFPLElBQUksQ0FBQ2IsSUFBSSxDQUFDYyxTQUFTLEVBQUVELFFBQVEsQ0FBQztBQUN2QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQWhFLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDaUUsR0FBRyxHQUFHLFVBQVUzRCxFQUFFLEVBQUU7RUFDeENBLEVBQUUsQ0FBQyxJQUFJLENBQUM7RUFDUixPQUFPLElBQUk7QUFDYixDQUFDO0FBRURQLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDa0UsRUFBRSxHQUFHLFVBQVVILFFBQVEsRUFBRTtFQUM3QyxJQUFJLE9BQU9BLFFBQVEsS0FBSyxVQUFVLEVBQUUsTUFBTSxJQUFJTCxLQUFLLENBQUMsbUJBQW1CLENBQUM7RUFDeEUsSUFBSSxDQUFDUyxXQUFXLEdBQUdKLFFBQVE7RUFDM0IsT0FBTyxJQUFJO0FBQ2IsQ0FBQztBQUVEaEUsV0FBVyxDQUFDQyxTQUFTLENBQUNvRSxhQUFhLEdBQUcsVUFBVWhDLEdBQUcsRUFBRTtFQUNuRCxJQUFJLENBQUNBLEdBQUcsRUFBRTtJQUNSLE9BQU8sS0FBSztFQUNkO0VBRUEsSUFBSSxJQUFJLENBQUMrQixXQUFXLEVBQUU7SUFDcEIsT0FBTyxJQUFJLENBQUNBLFdBQVcsQ0FBQy9CLEdBQUcsQ0FBQztFQUM5QjtFQUVBLE9BQU9BLEdBQUcsQ0FBQ0csTUFBTSxJQUFJLEdBQUcsSUFBSUgsR0FBRyxDQUFDRyxNQUFNLEdBQUcsR0FBRztBQUM5QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUF4QyxXQUFXLENBQUNDLFNBQVMsQ0FBQ3FFLEdBQUcsR0FBRyxVQUFVQyxLQUFLLEVBQUU7RUFDM0MsT0FBTyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzFDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXpFLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDeUUsU0FBUyxHQUFHMUUsV0FBVyxDQUFDQyxTQUFTLENBQUNxRSxHQUFHOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBdEUsV0FBVyxDQUFDQyxTQUFTLENBQUMwRSxHQUFHLEdBQUcsVUFBVUosS0FBSyxFQUFFN0QsS0FBSyxFQUFFO0VBQ2xELElBQUlkLFFBQVEsQ0FBQzJFLEtBQUssQ0FBQyxFQUFFO0lBQ25CLEtBQUssTUFBTUssR0FBRyxJQUFJTCxLQUFLLEVBQUU7TUFDdkIsSUFBSTFFLE1BQU0sQ0FBQzBFLEtBQUssRUFBRUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDRCxHQUFHLENBQUNDLEdBQUcsRUFBRUwsS0FBSyxDQUFDSyxHQUFHLENBQUMsQ0FBQztJQUNuRDtJQUVBLE9BQU8sSUFBSTtFQUNiO0VBRUEsSUFBSSxDQUFDSixPQUFPLENBQUNELEtBQUssQ0FBQ0UsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHL0QsS0FBSztFQUN6QyxJQUFJLENBQUNtRSxNQUFNLENBQUNOLEtBQUssQ0FBQyxHQUFHN0QsS0FBSztFQUMxQixPQUFPLElBQUk7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBVixXQUFXLENBQUNDLFNBQVMsQ0FBQzZFLEtBQUssR0FBRyxVQUFVUCxLQUFLLEVBQUU7RUFDN0MsT0FBTyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0VBQ3hDLE9BQU8sSUFBSSxDQUFDSSxNQUFNLENBQUNOLEtBQUssQ0FBQztFQUN6QixPQUFPLElBQUk7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXZFLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDc0UsS0FBSyxHQUFHLFVBQVVRLElBQUksRUFBRXJFLEtBQUssRUFBRUssT0FBTyxFQUFFO0VBQzVEO0VBQ0EsSUFBSWdFLElBQUksS0FBSyxJQUFJLElBQUlkLFNBQVMsS0FBS2MsSUFBSSxFQUFFO0lBQ3ZDLE1BQU0sSUFBSXBCLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQztFQUM1RDtFQUVBLElBQUksSUFBSSxDQUFDcUIsS0FBSyxFQUFFO0lBQ2QsTUFBTSxJQUFJckIsS0FBSyxDQUNiLGlHQUNGLENBQUM7RUFDSDtFQUVBLElBQUkvRCxRQUFRLENBQUNtRixJQUFJLENBQUMsRUFBRTtJQUNsQixLQUFLLE1BQU1ILEdBQUcsSUFBSUcsSUFBSSxFQUFFO01BQ3RCLElBQUlsRixNQUFNLENBQUNrRixJQUFJLEVBQUVILEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQ0wsS0FBSyxDQUFDSyxHQUFHLEVBQUVHLElBQUksQ0FBQ0gsR0FBRyxDQUFDLENBQUM7SUFDbkQ7SUFFQSxPQUFPLElBQUk7RUFDYjtFQUVBLElBQUlLLEtBQUssQ0FBQ0MsT0FBTyxDQUFDeEUsS0FBSyxDQUFDLEVBQUU7SUFDeEIsS0FBSyxNQUFNeUUsQ0FBQyxJQUFJekUsS0FBSyxFQUFFO01BQ3JCLElBQUliLE1BQU0sQ0FBQ2EsS0FBSyxFQUFFeUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDWixLQUFLLENBQUNRLElBQUksRUFBRXJFLEtBQUssQ0FBQ3lFLENBQUMsQ0FBQyxDQUFDO0lBQ2xEO0lBRUEsT0FBTyxJQUFJO0VBQ2I7O0VBRUE7RUFDQSxJQUFJekUsS0FBSyxLQUFLLElBQUksSUFBSXVELFNBQVMsS0FBS3ZELEtBQUssRUFBRTtJQUN6QyxNQUFNLElBQUlpRCxLQUFLLENBQUMsd0NBQXdDLENBQUM7RUFDM0Q7RUFFQSxJQUFJLE9BQU9qRCxLQUFLLEtBQUssU0FBUyxFQUFFO0lBQzlCQSxLQUFLLEdBQUcwRSxNQUFNLENBQUMxRSxLQUFLLENBQUM7RUFDdkI7O0VBRUE7RUFDQSxJQUFJSyxPQUFPLEVBQUUsSUFBSSxDQUFDc0UsWUFBWSxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUCxJQUFJLEVBQUVyRSxLQUFLLEVBQUVLLE9BQU8sQ0FBQyxDQUFDLEtBQ3pELElBQUksQ0FBQ3NFLFlBQVksQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ1AsSUFBSSxFQUFFckUsS0FBSyxDQUFDO0VBRTVDLE9BQU8sSUFBSTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FWLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDc0YsS0FBSyxHQUFHLFlBQVk7RUFDeEMsSUFBSSxJQUFJLENBQUN4QyxRQUFRLEVBQUU7SUFDakIsT0FBTyxJQUFJO0VBQ2I7RUFFQSxJQUFJLENBQUNBLFFBQVEsR0FBRyxJQUFJO0VBQ3BCLElBQUksSUFBSSxDQUFDeUMsR0FBRyxFQUFFLElBQUksQ0FBQ0EsR0FBRyxDQUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDaEMsSUFBSSxJQUFJLENBQUMxQyxHQUFHLEVBQUU7SUFDWjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFDRXBELE1BQU0sQ0FBQ2dHLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLEVBQUUsU0FBUyxDQUFDLElBQ3RDbEcsTUFBTSxDQUFDbUcsRUFBRSxDQUFDRixPQUFPLENBQUNDLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFDckM7TUFDQTtNQUNBO01BQ0EsTUFBTSxJQUFJaEMsS0FBSyxDQUNiLG1GQUNGLENBQUM7SUFDSDtJQUVBLElBQUksQ0FBQ2QsR0FBRyxDQUFDMEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCOztFQUVBLElBQUksQ0FBQ3JGLFlBQVksQ0FBQyxDQUFDO0VBQ25CLElBQUksQ0FBQzJGLElBQUksQ0FBQyxPQUFPLENBQUM7RUFDbEIsT0FBTyxJQUFJO0FBQ2IsQ0FBQztBQUVEN0YsV0FBVyxDQUFDQyxTQUFTLENBQUM2RixLQUFLLEdBQUcsVUFBVUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVqRixPQUFPLEVBQUVrRixhQUFhLEVBQUU7RUFDMUUsUUFBUWxGLE9BQU8sQ0FBQ21GLElBQUk7SUFDbEIsS0FBSyxPQUFPO01BQ1YsSUFBSSxDQUFDdkIsR0FBRyxDQUFDLGVBQWUsRUFBRyxTQUFRc0IsYUFBYSxDQUFFLEdBQUVGLElBQUssSUFBR0MsSUFBSyxFQUFDLENBQUUsRUFBQyxDQUFDO01BQ3RFO0lBRUYsS0FBSyxNQUFNO01BQ1QsSUFBSSxDQUFDRyxRQUFRLEdBQUdKLElBQUk7TUFDcEIsSUFBSSxDQUFDSyxRQUFRLEdBQUdKLElBQUk7TUFDcEI7SUFFRixLQUFLLFFBQVE7TUFBRTtNQUNiLElBQUksQ0FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUcsVUFBU29CLElBQUssRUFBQyxDQUFDO01BQzNDO0lBQ0Y7TUFDRTtFQUNKO0VBRUEsT0FBTyxJQUFJO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBL0YsV0FBVyxDQUFDQyxTQUFTLENBQUNvRyxlQUFlLEdBQUcsVUFBVTNDLEVBQUUsRUFBRTtFQUNwRDtFQUNBLElBQUlBLEVBQUUsS0FBS08sU0FBUyxFQUFFUCxFQUFFLEdBQUcsSUFBSTtFQUMvQixJQUFJLENBQUM0QyxnQkFBZ0IsR0FBRzVDLEVBQUU7RUFDMUIsT0FBTyxJQUFJO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTFELFdBQVcsQ0FBQ0MsU0FBUyxDQUFDc0csU0FBUyxHQUFHLFVBQVVDLENBQUMsRUFBRTtFQUM3QyxJQUFJLENBQUNDLGFBQWEsR0FBR0QsQ0FBQztFQUN0QixPQUFPLElBQUk7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0F4RyxXQUFXLENBQUNDLFNBQVMsQ0FBQ3lHLGVBQWUsR0FBRyxVQUFVRixDQUFDLEVBQUU7RUFDbkQsSUFBSSxPQUFPQSxDQUFDLEtBQUssUUFBUSxFQUFFO0lBQ3pCLE1BQU0sSUFBSUcsU0FBUyxDQUFDLGtCQUFrQixDQUFDO0VBQ3pDO0VBRUEsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0osQ0FBQztFQUN6QixPQUFPLElBQUk7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUF4RyxXQUFXLENBQUNDLFNBQVMsQ0FBQzRHLE1BQU0sR0FBRyxZQUFZO0VBQ3pDLE9BQU87SUFDTGpELE1BQU0sRUFBRSxJQUFJLENBQUNBLE1BQU07SUFDbkJDLEdBQUcsRUFBRSxJQUFJLENBQUNBLEdBQUc7SUFDYmlELElBQUksRUFBRSxJQUFJLENBQUM5QixLQUFLO0lBQ2hCK0IsT0FBTyxFQUFFLElBQUksQ0FBQ3ZDO0VBQ2hCLENBQUM7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBeEUsV0FBVyxDQUFDQyxTQUFTLENBQUMrRyxJQUFJLEdBQUcsVUFBVUYsSUFBSSxFQUFFO0VBQzNDLE1BQU1HLFNBQVMsR0FBR3JILFFBQVEsQ0FBQ2tILElBQUksQ0FBQztFQUNoQyxJQUFJWixJQUFJLEdBQUcsSUFBSSxDQUFDMUIsT0FBTyxDQUFDLGNBQWMsQ0FBQztFQUV2QyxJQUFJLElBQUksQ0FBQzBDLFNBQVMsRUFBRTtJQUNsQixNQUFNLElBQUl2RCxLQUFLLENBQ2IsOEdBQ0YsQ0FBQztFQUNIO0VBRUEsSUFBSXNELFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQ2pDLEtBQUssRUFBRTtJQUM1QixJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQzRCLElBQUksQ0FBQyxFQUFFO01BQ3ZCLElBQUksQ0FBQzlCLEtBQUssR0FBRyxFQUFFO0lBQ2pCLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDbUMsT0FBTyxDQUFDTCxJQUFJLENBQUMsRUFBRTtNQUM5QixJQUFJLENBQUM5QixLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCO0VBQ0YsQ0FBQyxNQUFNLElBQUk4QixJQUFJLElBQUksSUFBSSxDQUFDOUIsS0FBSyxJQUFJLElBQUksQ0FBQ21DLE9BQU8sQ0FBQyxJQUFJLENBQUNuQyxLQUFLLENBQUMsRUFBRTtJQUN6RCxNQUFNLElBQUlyQixLQUFLLENBQUMsOEJBQThCLENBQUM7RUFDakQ7O0VBRUE7RUFDQSxJQUFJc0QsU0FBUyxJQUFJckgsUUFBUSxDQUFDLElBQUksQ0FBQ29GLEtBQUssQ0FBQyxFQUFFO0lBQ3JDLEtBQUssTUFBTUosR0FBRyxJQUFJa0MsSUFBSSxFQUFFO01BQ3RCLElBQUksT0FBT0EsSUFBSSxDQUFDbEMsR0FBRyxDQUFDLElBQUksUUFBUSxJQUFJLENBQUNrQyxJQUFJLENBQUNsQyxHQUFHLENBQUMsQ0FBQ2lDLE1BQU0sRUFDbkQsTUFBTSxJQUFJbEQsS0FBSyxDQUFDLHVDQUF1QyxDQUFDO01BQzFELElBQUk5RCxNQUFNLENBQUNpSCxJQUFJLEVBQUVsQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUNJLEtBQUssQ0FBQ0osR0FBRyxDQUFDLEdBQUdrQyxJQUFJLENBQUNsQyxHQUFHLENBQUM7SUFDcEQ7RUFDRixDQUFDLE1BQ0ksSUFBSSxPQUFPa0MsSUFBSSxLQUFLLFFBQVEsRUFBRSxNQUFNLElBQUluRCxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxLQUNsRixJQUFJLE9BQU9tRCxJQUFJLEtBQUssUUFBUSxFQUFFO0lBQ2pDO0lBQ0EsSUFBSSxDQUFDWixJQUFJLEVBQUUsSUFBSSxDQUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzVCQSxJQUFJLEdBQUcsSUFBSSxDQUFDMUIsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUNuQyxJQUFJMEIsSUFBSSxFQUFFQSxJQUFJLEdBQUdBLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQyxDQUFDLENBQUMyQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxJQUFJbEIsSUFBSSxLQUFLLG1DQUFtQyxFQUFFO01BQ2hELElBQUksQ0FBQ2xCLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUssR0FBSSxHQUFFLElBQUksQ0FBQ0EsS0FBTSxJQUFHOEIsSUFBSyxFQUFDLEdBQUdBLElBQUk7SUFDMUQsQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDOUIsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDQSxLQUFLLElBQUksRUFBRSxJQUFJOEIsSUFBSTtJQUN4QztFQUNGLENBQUMsTUFBTTtJQUNMLElBQUksQ0FBQzlCLEtBQUssR0FBRzhCLElBQUk7RUFDbkI7RUFFQSxJQUFJLENBQUNHLFNBQVMsSUFBSSxJQUFJLENBQUNFLE9BQU8sQ0FBQ0wsSUFBSSxDQUFDLEVBQUU7SUFDcEMsT0FBTyxJQUFJO0VBQ2I7O0VBRUE7RUFDQSxJQUFJLENBQUNaLElBQUksRUFBRSxJQUFJLENBQUNBLElBQUksQ0FBQyxNQUFNLENBQUM7RUFDNUIsT0FBTyxJQUFJO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFsRyxXQUFXLENBQUNDLFNBQVMsQ0FBQ29ILFNBQVMsR0FBRyxVQUFVQyxJQUFJLEVBQUU7RUFDaEQ7RUFDQSxJQUFJLENBQUNDLEtBQUssR0FBRyxPQUFPRCxJQUFJLEtBQUssV0FBVyxHQUFHLElBQUksR0FBR0EsSUFBSTtFQUN0RCxPQUFPLElBQUk7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXRILFdBQVcsQ0FBQ0MsU0FBUyxDQUFDdUgsb0JBQW9CLEdBQUcsWUFBWTtFQUN2RCxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDbkMsSUFBSUYsS0FBSyxFQUFFO0lBQ1QsSUFBSSxDQUFDNUQsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDQSxHQUFHLENBQUMrRCxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSUgsS0FBSztFQUMxRDtFQUVBLElBQUksQ0FBQ0MsTUFBTSxDQUFDOUYsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOztFQUV4QixJQUFJLElBQUksQ0FBQzJGLEtBQUssRUFBRTtJQUNkLE1BQU1NLEtBQUssR0FBRyxJQUFJLENBQUNoRSxHQUFHLENBQUNpRSxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ25DLElBQUlELEtBQUssSUFBSSxDQUFDLEVBQUU7TUFDZCxNQUFNRSxVQUFVLEdBQUcsSUFBSSxDQUFDbEUsR0FBRyxDQUFDbUUsS0FBSyxDQUFDSCxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUNJLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFDdkQsSUFBSSxPQUFPLElBQUksQ0FBQ1YsS0FBSyxLQUFLLFVBQVUsRUFBRTtRQUNwQ1EsVUFBVSxDQUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUM7TUFDN0IsQ0FBQyxNQUFNO1FBQ0xRLFVBQVUsQ0FBQ1QsSUFBSSxDQUFDLENBQUM7TUFDbkI7TUFFQSxJQUFJLENBQUN6RCxHQUFHLEdBQUcsSUFBSSxDQUFDQSxHQUFHLENBQUNtRSxLQUFLLENBQUMsQ0FBQyxFQUFFSCxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUdFLFVBQVUsQ0FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsRTtFQUNGO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBM0gsV0FBVyxDQUFDQyxTQUFTLENBQUNpSSxrQkFBa0IsR0FBRyxNQUFNO0VBQy9DM0csT0FBTyxDQUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQzdCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXhCLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDa0ksYUFBYSxHQUFHLFVBQVVDLE1BQU0sRUFBRXRILE9BQU8sRUFBRXVILEtBQUssRUFBRTtFQUN0RSxJQUFJLElBQUksQ0FBQ3RGLFFBQVEsRUFBRTtJQUNqQjtFQUNGO0VBRUEsTUFBTVgsS0FBSyxHQUFHLElBQUl1QixLQUFLLENBQUUsR0FBRXlFLE1BQU0sR0FBR3RILE9BQVEsYUFBWSxDQUFDO0VBQ3pEc0IsS0FBSyxDQUFDdEIsT0FBTyxHQUFHQSxPQUFPO0VBQ3ZCc0IsS0FBSyxDQUFDTSxJQUFJLEdBQUcsY0FBYztFQUMzQk4sS0FBSyxDQUFDaUcsS0FBSyxHQUFHQSxLQUFLO0VBQ25CLElBQUksQ0FBQ3JGLFFBQVEsR0FBRyxJQUFJO0VBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHYixLQUFLO0VBQzFCLElBQUksQ0FBQ21ELEtBQUssQ0FBQyxDQUFDO0VBQ1osSUFBSSxDQUFDdkIsUUFBUSxDQUFDNUIsS0FBSyxDQUFDO0FBQ3RCLENBQUM7QUFFRHBDLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDcUksWUFBWSxHQUFHLFlBQVk7RUFDL0MsTUFBTS9FLElBQUksR0FBRyxJQUFJOztFQUVqQjtFQUNBLElBQUksSUFBSSxDQUFDdkMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDYixNQUFNLEVBQUU7SUFDakMsSUFBSSxDQUFDQSxNQUFNLEdBQUdvSSxVQUFVLENBQUMsTUFBTTtNQUM3QmhGLElBQUksQ0FBQzRFLGFBQWEsQ0FBQyxhQUFhLEVBQUU1RSxJQUFJLENBQUN2QyxRQUFRLEVBQUUsT0FBTyxDQUFDO0lBQzNELENBQUMsRUFBRSxJQUFJLENBQUNBLFFBQVEsQ0FBQztFQUNuQjs7RUFFQTtFQUNBLElBQUksSUFBSSxDQUFDQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQ2IscUJBQXFCLEVBQUU7SUFDeEQsSUFBSSxDQUFDQSxxQkFBcUIsR0FBR21JLFVBQVUsQ0FBQyxNQUFNO01BQzVDaEYsSUFBSSxDQUFDNEUsYUFBYSxDQUNoQixzQkFBc0IsRUFDdEI1RSxJQUFJLENBQUN0QyxnQkFBZ0IsRUFDckIsV0FDRixDQUFDO0lBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUM7RUFDM0I7QUFDRixDQUFDIn0=