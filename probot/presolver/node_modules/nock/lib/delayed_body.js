'use strict';

/**
 * Creates a stream which becomes the response body of the interceptor when a
 * delay is set. The stream outputs the intended body and EOF after the delay.
 *
 * @param  {String|Buffer|Stream} body - the body to write/pipe out
 * @param  {Integer} ms - The delay in milliseconds
 * @constructor
 */
module.exports = DelayedBody;

var Transform = require('stream').Transform;
var EventEmitter = require('events').EventEmitter;
var noop = function () {};
var util = require('util');
var common = require('./common');

if (!Transform) {
  // for barebones compatibility for node < 0.10
  var FakeTransformStream = function () {
    EventEmitter.call(this);
  };
  util.inherits(FakeTransformStream, EventEmitter);
  FakeTransformStream.prototype.pause = noop;
  FakeTransformStream.prototype.resume = noop;
  FakeTransformStream.prototype.setEncoding = noop;
  FakeTransformStream.prototype.write = function (chunk, encoding) {
    var self = this;
    process.nextTick(function () {
      self.emit('data', chunk, encoding);
    });
  };
  FakeTransformStream.prototype.end = function (chunk) {
    var self = this;
    if (chunk) {
      self.write(chunk);
    }
    process.nextTick(function () {
      self.emit('end');
    });
  };

  Transform = FakeTransformStream;
}

function DelayedBody(ms, body) {
  Transform.call(this);

  var self = this;
  var data = '';
  var ended = false;

  if (common.isStream(body)) {
    body.on('data', function (chunk) {
      data += Buffer.isBuffer(chunk) ? chunk.toString() : chunk;
    });

    body.once('end', function () {
      ended = true;
    });

    body.resume();
  }

  setTimeout(function () {
    if (common.isStream(body) && !ended) {
      body.once('end', function () {
        self.end(data);
      });
    } else {
      self.end(data || body);
    }
  }, ms);
}
util.inherits(DelayedBody, Transform);

DelayedBody.prototype._transform = function (chunk, encoding, cb) {
  this.push(chunk);
  process.nextTick(cb);
};
