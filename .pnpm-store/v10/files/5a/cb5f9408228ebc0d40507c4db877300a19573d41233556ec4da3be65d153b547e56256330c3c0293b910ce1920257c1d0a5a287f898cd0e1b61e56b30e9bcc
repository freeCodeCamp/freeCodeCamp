'use strict';

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
 * in FIPS PUB 180-1
 * This source code is derived from sha1.js of the same repository.
 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
 * operation was added.
 */

var inherits = require('inherits');
var Hash = require('./hash');
var Buffer = require('safe-buffer').Buffer;

var K = [
	0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
];

var W = new Array(80);

function Sha() {
	this.init();
	this._w = W;

	Hash.call(this, 64, 56);
}

inherits(Sha, Hash);

Sha.prototype.init = function () {
	this._a = 0x67452301;
	this._b = 0xefcdab89;
	this._c = 0x98badcfe;
	this._d = 0x10325476;
	this._e = 0xc3d2e1f0;

	return this;
};

function rotl5(num) {
	return (num << 5) | (num >>> 27);
}

function rotl30(num) {
	return (num << 30) | (num >>> 2);
}

function ft(s, b, c, d) {
	if (s === 0) {
		return (b & c) | (~b & d);
	}
	if (s === 2) {
		return (b & c) | (b & d) | (c & d);
	}
	return b ^ c ^ d;
}

Sha.prototype._update = function (M) {
	var w = this._w;

	var a = this._a | 0;
	var b = this._b | 0;
	var c = this._c | 0;
	var d = this._d | 0;
	var e = this._e | 0;

	for (var i = 0; i < 16; ++i) {
		w[i] = M.readInt32BE(i * 4);
	}
	for (; i < 80; ++i) {
		w[i] = w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16];
	}

	for (var j = 0; j < 80; ++j) {
		var s = ~~(j / 20);
		var t = (rotl5(a) + ft(s, b, c, d) + e + w[j] + K[s]) | 0;

		e = d;
		d = c;
		c = rotl30(b);
		b = a;
		a = t;
	}

	this._a = (a + this._a) | 0;
	this._b = (b + this._b) | 0;
	this._c = (c + this._c) | 0;
	this._d = (d + this._d) | 0;
	this._e = (e + this._e) | 0;
};

Sha.prototype._hash = function () {
	var H = Buffer.allocUnsafe(20);

	H.writeInt32BE(this._a | 0, 0);
	H.writeInt32BE(this._b | 0, 4);
	H.writeInt32BE(this._c | 0, 8);
	H.writeInt32BE(this._d | 0, 12);
	H.writeInt32BE(this._e | 0, 16);

	return H;
};

module.exports = Sha;
