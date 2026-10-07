'use strict';

var Buffer = require('safe-buffer').Buffer;
var toBuffer = require('./to-buffer');
var Transform = require('readable-stream').Transform;
var inherits = require('inherits');

function HashBase(blockSize) {
	Transform.call(this);

	this._block = Buffer.allocUnsafe(blockSize);
	this._blockSize = blockSize;
	this._blockOffset = 0;
	this._length = [0, 0, 0, 0];

	this._finalized = false;
}

inherits(HashBase, Transform);

HashBase.prototype._transform = function (chunk, encoding, callback) {
	var error = null;
	try {
		this.update(chunk, encoding);
	} catch (err) {
		error = err;
	}

	callback(error);
};

HashBase.prototype._flush = function (callback) {
	var error = null;
	try {
		this.push(this.digest());
	} catch (err) {
		error = err;
	}

	callback(error);
};

HashBase.prototype.update = function (data, encoding) {
	if (this._finalized) {
		throw new Error('Digest already called');
	}

	var dataBuffer = toBuffer(data, encoding); // asserts correct input type

	// consume data
	var block = this._block;
	var offset = 0;
	while (this._blockOffset + dataBuffer.length - offset >= this._blockSize) {
		for (var i = this._blockOffset; i < this._blockSize;) {
			block[i] = dataBuffer[offset];
			i += 1;
			offset += 1;
		}
		this._update();
		this._blockOffset = 0;
	}
	while (offset < dataBuffer.length) {
		block[this._blockOffset] = dataBuffer[offset];
		this._blockOffset += 1;
		offset += 1;
	}

	// update length
	for (var j = 0, carry = dataBuffer.length * 8; carry > 0; ++j) {
		this._length[j] += carry;
		carry = (this._length[j] / 0x0100000000) | 0;
		if (carry > 0) {
			this._length[j] -= 0x0100000000 * carry;
		}
	}

	return this;
};

HashBase.prototype._update = function () {
	throw new Error('_update is not implemented');
};

HashBase.prototype.digest = function (encoding) {
	if (this._finalized) {
		throw new Error('Digest already called');
	}
	this._finalized = true;

	var digest = this._digest();
	if (encoding !== undefined) {
		digest = digest.toString(encoding);
	}

	// reset state
	this._block.fill(0);
	this._blockOffset = 0;
	for (var i = 0; i < 4; ++i) {
		this._length[i] = 0;
	}

	return digest;
};

HashBase.prototype._digest = function () {
	throw new Error('_digest is not implemented');
};

module.exports = HashBase;
