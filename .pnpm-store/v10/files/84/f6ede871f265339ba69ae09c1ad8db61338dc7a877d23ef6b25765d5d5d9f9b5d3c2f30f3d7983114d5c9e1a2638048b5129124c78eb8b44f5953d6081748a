'use strict';

/**
 * Module dependencies.
 */

const { agent: Agent } = require('superagent');
const methods = require('methods');
const http = require('http');
let http2;
try {
  http2 = require('http2'); // eslint-disable-line global-require
} catch (_) {
  // eslint-disable-line no-empty
}
const Test = require('./test.js');

/**
 * Initialize a new `TestAgent`.
 *
 * @param {Function|Server} app
 * @param {Object} options
 * @api public
 */

function TestAgent(app, options = {}) {
  if (!(this instanceof TestAgent)) return new TestAgent(app, options);

  Agent.call(this, options);
  this._options = options;

  if (typeof app === 'function') {
    if (options.http2) {
      if (!http2) {
        throw new Error(
          'supertest: this version of Node.js does not support http2'
        );
      }
      app = http2.createServer(app); // eslint-disable-line no-param-reassign
    } else {
      app = http.createServer(app); // eslint-disable-line no-param-reassign
    }
  }
  this.app = app;
}

/**
 * Inherits from `Agent.prototype`.
 */

Object.setPrototypeOf(TestAgent.prototype, Agent.prototype);

// set a host name
TestAgent.prototype.host = function(host) {
  this._host = host;
  return this;
};

// override HTTP verb methods
methods.forEach(function(method) {
  TestAgent.prototype[method] = function(url, fn) { // eslint-disable-line no-unused-vars
    const req = new Test(this.app, method.toUpperCase(), url);
    if (this._options.http2) {
      req.http2();
    }

    if (this._host) {
      req.set('host', this._host);
    }

    req.on('response', this._saveCookies.bind(this));
    req.on('redirect', this._saveCookies.bind(this));
    req.on('redirect', this._attachCookies.bind(this, req));
    this._setDefaults(req);
    this._attachCookies(req);

    return req;
  };
});

TestAgent.prototype.del = TestAgent.prototype.delete;

/**
 * Expose `Agent`.
 */

module.exports = TestAgent;
