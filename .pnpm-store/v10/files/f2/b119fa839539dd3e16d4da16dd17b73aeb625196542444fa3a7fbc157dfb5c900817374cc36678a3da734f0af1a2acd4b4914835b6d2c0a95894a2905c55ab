'use strict';

var Buffer = require('safe-buffer').Buffer;
var createHash = require('create-hash');
var stream = require('readable-stream');
var inherits = require('inherits');
var sign = require('./sign');
var verify = require('./verify');

var algorithms = require('./algorithms.json');
Object.keys(algorithms).forEach(function (key) {
  algorithms[key].id = Buffer.from(algorithms[key].id, 'hex');
  algorithms[key.toLowerCase()] = algorithms[key];
});

function Sign(algorithm) {
  stream.Writable.call(this);

  var data = algorithms[algorithm];
  if (!data) { throw new Error('Unknown message digest'); }

  this._hashType = data.hash;
  this._hash = createHash(data.hash);
  this._tag = data.id;
  this._signType = data.sign;
}
inherits(Sign, stream.Writable);

Sign.prototype._write = function _write(data, _, done) {
  this._hash.update(data);
  done();
};

Sign.prototype.update = function update(data, enc) {
  this._hash.update(typeof data === 'string' ? Buffer.from(data, enc) : data);

  return this;
};

Sign.prototype.sign = function signMethod(key, enc) {
  this.end();
  var hash = this._hash.digest();
  var sig = sign(hash, key, this._hashType, this._signType, this._tag);

  return enc ? sig.toString(enc) : sig;
};

function Verify(algorithm) {
  stream.Writable.call(this);

  var data = algorithms[algorithm];
  if (!data) { throw new Error('Unknown message digest'); }

  this._hash = createHash(data.hash);
  this._tag = data.id;
  this._signType = data.sign;
}
inherits(Verify, stream.Writable);

Verify.prototype._write = function _write(data, _, done) {
  this._hash.update(data);
  done();
};

Verify.prototype.update = function update(data, enc) {
  this._hash.update(typeof data === 'string' ? Buffer.from(data, enc) : data);

  return this;
};

Verify.prototype.verify = function verifyMethod(key, sig, enc) {
  var sigBuffer = typeof sig === 'string' ? Buffer.from(sig, enc) : sig;

  this.end();
  var hash = this._hash.digest();
  return verify(sigBuffer, hash, key, this._signType, this._tag);
};

function createSign(algorithm) {
  return new Sign(algorithm);
}

function createVerify(algorithm) {
  return new Verify(algorithm);
}

module.exports = {
  Sign: createSign,
  Verify: createVerify,
  createSign: createSign,
  createVerify: createVerify
};
