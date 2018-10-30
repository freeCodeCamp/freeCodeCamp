'use strict';

/**
 * Module dependencies.
 */

const util = require('util');
const Stream = require('stream');
const ResponseBase = require('../response-base');

/**
 * Expose `Response`.
 */

module.exports = Response;

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * @param {Request} req
 * @param {Object} options
 * @constructor
 * @extends {Stream}
 * @implements {ReadableStream}
 * @api private
 */

function Response(req) {
  Stream.call(this);
  const res = (this.res = req.res);
  this.request = req;
  this.req = req.req;
  this.text = res.text;
  this.body = res.body !== undefined ? res.body : {};
  this.files = res.files || {};
  this.buffered = 'string' == typeof this.text;
  this.header = this.headers = res.headers;
  this._setStatusProperties(res.statusCode);
  this._setHeaderProperties(this.header);
  this.setEncoding = res.setEncoding.bind(res);
  res.on('data', this.emit.bind(this, 'data'));
  res.on('end', this.emit.bind(this, 'end'));
  res.on('close', this.emit.bind(this, 'close'));
  res.on('error', this.emit.bind(this, 'error'));
}

/**
 * Inherit from `Stream`.
 */

util.inherits(Response, Stream);
ResponseBase(Response.prototype);

/**
 * Implements methods of a `ReadableStream`
 */

Response.prototype.destroy = function(err){
  this.res.destroy(err);
};

/**
 * Pause.
 */

Response.prototype.pause = function(){
  this.res.pause();
};

/**
 * Resume.
 */

Response.prototype.resume = function(){
  this.res.resume();
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function() {
  const req = this.req;
  const method = req.method;
  const path = req.path;

  const msg = `cannot ${method} ${path} (${this.status})`;
  const err = new Error(msg);
  err.status = this.status;
  err.text = this.text;
  err.method = method;
  err.path = path;

  return err;
};


Response.prototype.setStatusProperties = function(status){
  console.warn("In superagent 2.x setStatusProperties is a private method");
  return this._setStatusProperties(status);
};

/**
 * To json.
 *
 * @return {Object}
 * @api public
 */

Response.prototype.toJSON = function() {
  return {
    req: this.request.toJSON(),
    header: this.header,
    status: this.status,
    text: this.text,
  };
};
