"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Module dependencies.
 */

// eslint-disable-next-line node/no-deprecated-api
const _require = require('url'),
  parse = _require.parse;
const _require2 = require('cookiejar'),
  CookieJar = _require2.CookieJar;
const _require3 = require('cookiejar'),
  CookieAccessInfo = _require3.CookieAccessInfo;
const methods = require('methods');
const request = require('../..');
const AgentBase = require('../agent-base');

/**
 * Expose `Agent`.
 */

module.exports = Agent;

/**
 * Initialize a new `Agent`.
 *
 * @api public
 */

function Agent(options) {
  if (!(this instanceof Agent)) {
    return new Agent(options);
  }
  AgentBase.call(this);
  this.jar = new CookieJar();
  if (options) {
    if (options.ca) {
      this.ca(options.ca);
    }
    if (options.key) {
      this.key(options.key);
    }
    if (options.pfx) {
      this.pfx(options.pfx);
    }
    if (options.cert) {
      this.cert(options.cert);
    }
    if (options.rejectUnauthorized === false) {
      this.disableTLSCerts();
    }
  }
}
Agent.prototype = Object.create(AgentBase.prototype);

/**
 * Save the cookies in the given `res` to
 * the agent's cookie jar for persistence.
 *
 * @param {Response} res
 * @api private
 */

Agent.prototype._saveCookies = function (res) {
  const cookies = res.headers['set-cookie'];
  if (cookies) {
    var _res$request;
    const url = parse(((_res$request = res.request) === null || _res$request === void 0 ? void 0 : _res$request.url) || '');
    this.jar.setCookies(cookies, url.hostname, url.pathname);
  }
};

/**
 * Attach cookies when available to the given `req`.
 *
 * @param {Request} req
 * @api private
 */

Agent.prototype._attachCookies = function (request_) {
  const url = parse(request_.url);
  const access = new CookieAccessInfo(url.hostname, url.pathname, url.protocol === 'https:');
  const cookies = this.jar.getCookies(access).toValueString();
  request_.cookies = cookies;
};
var _iterator = _createForOfIteratorHelper(methods),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    const name = _step.value;
    const method = name.toUpperCase();
    Agent.prototype[name] = function (url, fn) {
      const request_ = new request.Request(method, url);
      request_.on('response', this._saveCookies.bind(this));
      request_.on('redirect', this._saveCookies.bind(this));
      request_.on('redirect', this._attachCookies.bind(this, request_));
      this._setDefaults(request_);
      this._attachCookies(request_);
      if (fn) {
        request_.end(fn);
      }
      return request_;
    };
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
Agent.prototype.del = Agent.prototype.delete;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVxdWlyZSIsInJlcXVpcmUiLCJwYXJzZSIsIl9yZXF1aXJlMiIsIkNvb2tpZUphciIsIl9yZXF1aXJlMyIsIkNvb2tpZUFjY2Vzc0luZm8iLCJtZXRob2RzIiwicmVxdWVzdCIsIkFnZW50QmFzZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJBZ2VudCIsIm9wdGlvbnMiLCJjYWxsIiwiamFyIiwiY2EiLCJrZXkiLCJwZngiLCJjZXJ0IiwicmVqZWN0VW5hdXRob3JpemVkIiwiZGlzYWJsZVRMU0NlcnRzIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiX3NhdmVDb29raWVzIiwicmVzIiwiY29va2llcyIsImhlYWRlcnMiLCJfcmVzJHJlcXVlc3QiLCJ1cmwiLCJzZXRDb29raWVzIiwiaG9zdG5hbWUiLCJwYXRobmFtZSIsIl9hdHRhY2hDb29raWVzIiwicmVxdWVzdF8iLCJhY2Nlc3MiLCJwcm90b2NvbCIsImdldENvb2tpZXMiLCJ0b1ZhbHVlU3RyaW5nIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm5hbWUiLCJ2YWx1ZSIsIm1ldGhvZCIsInRvVXBwZXJDYXNlIiwiZm4iLCJSZXF1ZXN0Iiwib24iLCJiaW5kIiwiX3NldERlZmF1bHRzIiwiZW5kIiwiZXJyIiwiZSIsImYiLCJkZWwiLCJkZWxldGUiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbm9kZS9hZ2VudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tZGVwcmVjYXRlZC1hcGlcbmNvbnN0IHsgcGFyc2UgfSA9IHJlcXVpcmUoJ3VybCcpO1xuY29uc3QgeyBDb29raWVKYXIgfSA9IHJlcXVpcmUoJ2Nvb2tpZWphcicpO1xuY29uc3QgeyBDb29raWVBY2Nlc3NJbmZvIH0gPSByZXF1aXJlKCdjb29raWVqYXInKTtcbmNvbnN0IG1ldGhvZHMgPSByZXF1aXJlKCdtZXRob2RzJyk7XG5jb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnLi4vLi4nKTtcbmNvbnN0IEFnZW50QmFzZSA9IHJlcXVpcmUoJy4uL2FnZW50LWJhc2UnKTtcblxuLyoqXG4gKiBFeHBvc2UgYEFnZW50YC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFnZW50O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEFnZW50YC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEFnZW50KG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEFnZW50KSkge1xuICAgIHJldHVybiBuZXcgQWdlbnQob3B0aW9ucyk7XG4gIH1cblxuICBBZ2VudEJhc2UuY2FsbCh0aGlzKTtcbiAgdGhpcy5qYXIgPSBuZXcgQ29va2llSmFyKCk7XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5jYSkge1xuICAgICAgdGhpcy5jYShvcHRpb25zLmNhKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5rZXkpIHtcbiAgICAgIHRoaXMua2V5KG9wdGlvbnMua2V5KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wZngpIHtcbiAgICAgIHRoaXMucGZ4KG9wdGlvbnMucGZ4KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jZXJ0KSB7XG4gICAgICB0aGlzLmNlcnQob3B0aW9ucy5jZXJ0KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5yZWplY3RVbmF1dGhvcml6ZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmRpc2FibGVUTFNDZXJ0cygpO1xuICAgIH1cbiAgfVxufVxuXG5BZ2VudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFnZW50QmFzZS5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFNhdmUgdGhlIGNvb2tpZXMgaW4gdGhlIGdpdmVuIGByZXNgIHRvXG4gKiB0aGUgYWdlbnQncyBjb29raWUgamFyIGZvciBwZXJzaXN0ZW5jZS5cbiAqXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkFnZW50LnByb3RvdHlwZS5fc2F2ZUNvb2tpZXMgPSBmdW5jdGlvbiAocmVzKSB7XG4gIGNvbnN0IGNvb2tpZXMgPSByZXMuaGVhZGVyc1snc2V0LWNvb2tpZSddO1xuICBpZiAoY29va2llcykge1xuICAgIGNvbnN0IHVybCA9IHBhcnNlKHJlcy5yZXF1ZXN0Py51cmwgfHwgJycpXG4gICAgdGhpcy5qYXIuc2V0Q29va2llcyhjb29raWVzLCB1cmwuaG9zdG5hbWUsIHVybC5wYXRobmFtZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQXR0YWNoIGNvb2tpZXMgd2hlbiBhdmFpbGFibGUgdG8gdGhlIGdpdmVuIGByZXFgLlxuICpcbiAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5BZ2VudC5wcm90b3R5cGUuX2F0dGFjaENvb2tpZXMgPSBmdW5jdGlvbiAocmVxdWVzdF8pIHtcbiAgY29uc3QgdXJsID0gcGFyc2UocmVxdWVzdF8udXJsKTtcbiAgY29uc3QgYWNjZXNzID0gbmV3IENvb2tpZUFjY2Vzc0luZm8oXG4gICAgdXJsLmhvc3RuYW1lLFxuICAgIHVybC5wYXRobmFtZSxcbiAgICB1cmwucHJvdG9jb2wgPT09ICdodHRwczonXG4gICk7XG4gIGNvbnN0IGNvb2tpZXMgPSB0aGlzLmphci5nZXRDb29raWVzKGFjY2VzcykudG9WYWx1ZVN0cmluZygpO1xuICByZXF1ZXN0Xy5jb29raWVzID0gY29va2llcztcbn07XG5cbmZvciAoY29uc3QgbmFtZSBvZiBtZXRob2RzKSB7XG4gIGNvbnN0IG1ldGhvZCA9IG5hbWUudG9VcHBlckNhc2UoKTtcbiAgQWdlbnQucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24gKHVybCwgZm4pIHtcbiAgICBjb25zdCByZXF1ZXN0XyA9IG5ldyByZXF1ZXN0LlJlcXVlc3QobWV0aG9kLCB1cmwpO1xuXG4gICAgcmVxdWVzdF8ub24oJ3Jlc3BvbnNlJywgdGhpcy5fc2F2ZUNvb2tpZXMuYmluZCh0aGlzKSk7XG4gICAgcmVxdWVzdF8ub24oJ3JlZGlyZWN0JywgdGhpcy5fc2F2ZUNvb2tpZXMuYmluZCh0aGlzKSk7XG4gICAgcmVxdWVzdF8ub24oJ3JlZGlyZWN0JywgdGhpcy5fYXR0YWNoQ29va2llcy5iaW5kKHRoaXMsIHJlcXVlc3RfKSk7XG4gICAgdGhpcy5fc2V0RGVmYXVsdHMocmVxdWVzdF8pO1xuICAgIHRoaXMuX2F0dGFjaENvb2tpZXMocmVxdWVzdF8pO1xuXG4gICAgaWYgKGZuKSB7XG4gICAgICByZXF1ZXN0Xy5lbmQoZm4pO1xuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0XztcbiAgfTtcbn1cblxuQWdlbnQucHJvdG90eXBlLmRlbCA9IEFnZW50LnByb3RvdHlwZS5kZWxldGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBQUEsUUFBQSxHQUFrQkMsT0FBTyxDQUFDLEtBQUssQ0FBQztFQUF4QkMsS0FBSyxHQUFBRixRQUFBLENBQUxFLEtBQUs7QUFDYixNQUFBQyxTQUFBLEdBQXNCRixPQUFPLENBQUMsV0FBVyxDQUFDO0VBQWxDRyxTQUFTLEdBQUFELFNBQUEsQ0FBVEMsU0FBUztBQUNqQixNQUFBQyxTQUFBLEdBQTZCSixPQUFPLENBQUMsV0FBVyxDQUFDO0VBQXpDSyxnQkFBZ0IsR0FBQUQsU0FBQSxDQUFoQkMsZ0JBQWdCO0FBQ3hCLE1BQU1DLE9BQU8sR0FBR04sT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUNsQyxNQUFNTyxPQUFPLEdBQUdQLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDaEMsTUFBTVEsU0FBUyxHQUFHUixPQUFPLENBQUMsZUFBZSxDQUFDOztBQUUxQztBQUNBO0FBQ0E7O0FBRUFTLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHQyxLQUFLOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNB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