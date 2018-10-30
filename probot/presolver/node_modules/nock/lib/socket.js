'use strict';

var EventEmitter = require('events').EventEmitter;
var debug        = require('debug')('nock.socket');
var util = require('util');

module.exports = Socket;

function Socket(options) {
  if (!(this instanceof Socket)) {
    return new Socket(options);
  }

  EventEmitter.apply(this);

  options = options || {};

  if (options.proto === 'https') {
    this.authorized = true;
  }

  this.writable = true;
  this.readable = true;
  this.destroyed = false;
  this.connecting = false;

  this.setNoDelay = noop;
  this.setKeepAlive = noop;
  this.resume = noop;

  // totalDelay that has already been applied to the current
  // request/connection, timeout error will be generated if
  // it is timed-out.
  this.totalDelayMs = 0;
  // Maximum allowed delay. Null means unlimited.
  this.timeoutMs = null;
}
util.inherits(Socket, EventEmitter);

Socket.prototype.setTimeout = function setTimeout(timeoutMs, fn) {
  this.timeoutMs = timeoutMs;
  this.timeoutFunction = fn;
};

Socket.prototype.applyDelay = function applyDelay(delayMs) {
  this.totalDelayMs += delayMs;

  if (this.timeoutMs && this.totalDelayMs > this.timeoutMs) {
    debug('socket timeout');
    if (this.timeoutFunction) {
      this.timeoutFunction();
    }
    else {
      this.emit('timeout');
    }
  }

};

Socket.prototype.getPeerCertificate = function getPeerCertificate() {
  return Buffer.from((Math.random() * 10000 + Date.now()).toString()).toString('base64');
};

Socket.prototype.destroy = function destroy() {
  this.destroyed = true;
  this.readable = this.writable = false;
};

function noop() {}

