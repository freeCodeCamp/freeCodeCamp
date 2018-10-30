'use strict';

var stream = require('readable-stream');
var util = require('util');

var Readable = stream.Readable;

module.exports = ReaddirpReadable;

util.inherits(ReaddirpReadable, Readable);

function ReaddirpReadable (opts) {
  if (!(this instanceof ReaddirpReadable)) return new ReaddirpReadable(opts);

  opts = opts || {};

  opts.objectMode = true;
  Readable.call(this, opts);

  // backpressure not implemented at this point
  this.highWaterMark = Infinity;

  this._destroyed = false;
  this._paused = false;
  this._warnings = [];
  this._errors = [];

  this._pauseResumeErrors();
}

var proto = ReaddirpReadable.prototype;

proto._pauseResumeErrors = function () {
  var self = this;
  self.on('pause', function () { self._paused = true });
  self.on('resume', function () {
    if (self._destroyed) return;
    self._paused = false;

    self._warnings.forEach(function (err) { self.emit('warn', err) });
    self._warnings.length = 0;

    self._errors.forEach(function (err) { self.emit('error', err) });
    self._errors.length = 0;
  })
}

// called for each entry
proto._processEntry = function (entry) {
  if (this._destroyed) return;
  this.push(entry);
}

proto._read = function () { }

proto.destroy = function () {
  // when stream is destroyed it will emit nothing further, not even errors or warnings
  this.push(null);
  this.readable = false;
  this._destroyed = true;
  this.emit('close');
}

proto._done = function () {
  this.push(null);
}

// we emit errors and warnings async since we may handle errors like invalid args
// within the initial event loop before any event listeners subscribed
proto._handleError = function (err) {
  var self = this;
  setImmediate(function () {
    if (self._paused) return self._warnings.push(err);
    if (!self._destroyed) self.emit('warn', err);
  });
}

proto._handleFatalError = function (err) {
  var self = this;
  setImmediate(function () {
    if (self._paused) return self._errors.push(err);
    if (!self._destroyed) self.emit('error', err);
  });
}

function createStreamAPI () {
  var stream = new ReaddirpReadable();

  return {
      stream           :  stream
    , processEntry     :  stream._processEntry.bind(stream)
    , done             :  stream._done.bind(stream)
    , handleError      :  stream._handleError.bind(stream)
    , handleFatalError :  stream._handleFatalError.bind(stream)
  };
}

module.exports = createStreamAPI;
