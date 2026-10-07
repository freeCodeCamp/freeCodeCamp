'use strict';

var Buffer = require('buffer').Buffer;
var inherits = require('inherits');
var HashBase = require('hash-base');

var ARRAY16 = new Array(16);

var zl = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
	7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
	3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
	1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
	4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
];

var zr = [
	5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
	6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
	15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
	8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
	12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
];

var sl = [
	11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
	7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
	11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
	11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
	9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
];

var sr = [
	8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
	9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
	9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
	15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
	8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
];

var hl = [0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e];
var hr = [0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x00000000];

function rotl(x, n) {
	return (x << n) | (x >>> (32 - n));
}

function fn1(a, b, c, d, e, m, k, s) {
	return (rotl((a + (b ^ c ^ d) + m + k) | 0, s) + e) | 0;
}

function fn2(a, b, c, d, e, m, k, s) {
	return (rotl((a + ((b & c) | (~b & d)) + m + k) | 0, s) + e) | 0;
}

function fn3(a, b, c, d, e, m, k, s) {
	return (rotl((a + ((b | ~c) ^ d) + m + k) | 0, s) + e) | 0;
}

function fn4(a, b, c, d, e, m, k, s) {
	return (rotl((a + ((b & d) | (c & ~d)) + m + k) | 0, s) + e) | 0;
}

function fn5(a, b, c, d, e, m, k, s) {
	return (rotl((a + (b ^ (c | ~d)) + m + k) | 0, s) + e) | 0;
}

function RIPEMD160() {
	HashBase.call(this, 64);

	// state
	this._a = 0x67452301;
	this._b = 0xefcdab89;
	this._c = 0x98badcfe;
	this._d = 0x10325476;
	this._e = 0xc3d2e1f0;
}

inherits(RIPEMD160, HashBase);

RIPEMD160.prototype._update = function () {
	var words = ARRAY16;
	for (var j = 0; j < 16; ++j) {
		words[j] = this._block.readInt32LE(j * 4);
	}

	var al = this._a | 0;
	var bl = this._b | 0;
	var cl = this._c | 0;
	var dl = this._d | 0;
	var el = this._e | 0;

	var ar = this._a | 0;
	var br = this._b | 0;
	var cr = this._c | 0;
	var dr = this._d | 0;
	var er = this._e | 0;

	// computation
	for (var i = 0; i < 80; i += 1) {
		var tl;
		var tr;
		if (i < 16) {
			tl = fn1(al, bl, cl, dl, el, words[zl[i]], hl[0], sl[i]);
			tr = fn5(ar, br, cr, dr, er, words[zr[i]], hr[0], sr[i]);
		} else if (i < 32) {
			tl = fn2(al, bl, cl, dl, el, words[zl[i]], hl[1], sl[i]);
			tr = fn4(ar, br, cr, dr, er, words[zr[i]], hr[1], sr[i]);
		} else if (i < 48) {
			tl = fn3(al, bl, cl, dl, el, words[zl[i]], hl[2], sl[i]);
			tr = fn3(ar, br, cr, dr, er, words[zr[i]], hr[2], sr[i]);
		} else if (i < 64) {
			tl = fn4(al, bl, cl, dl, el, words[zl[i]], hl[3], sl[i]);
			tr = fn2(ar, br, cr, dr, er, words[zr[i]], hr[3], sr[i]);
		} else { // if (i<80) {
			tl = fn5(al, bl, cl, dl, el, words[zl[i]], hl[4], sl[i]);
			tr = fn1(ar, br, cr, dr, er, words[zr[i]], hr[4], sr[i]);
		}

		al = el;
		el = dl;
		dl = rotl(cl, 10);
		cl = bl;
		bl = tl;

		ar = er;
		er = dr;
		dr = rotl(cr, 10);
		cr = br;
		br = tr;
	}

	// update state
	var t = (this._b + cl + dr) | 0;
	this._b = (this._c + dl + er) | 0;
	this._c = (this._d + el + ar) | 0;
	this._d = (this._e + al + br) | 0;
	this._e = (this._a + bl + cr) | 0;
	this._a = t;
};

RIPEMD160.prototype._digest = function () {
	// create padding and handle blocks
	this._block[this._blockOffset] = 0x80;
	this._blockOffset += 1;
	if (this._blockOffset > 56) {
		this._block.fill(0, this._blockOffset, 64);
		this._update();
		this._blockOffset = 0;
	}

	this._block.fill(0, this._blockOffset, 56);
	this._block.writeUInt32LE(this._length[0], 56);
	this._block.writeUInt32LE(this._length[1], 60);
	this._update();

	// produce result
	var buffer = Buffer.alloc ? Buffer.alloc(20) : new Buffer(20); // eslint-disable-line no-buffer-constructor
	buffer.writeInt32LE(this._a, 0);
	buffer.writeInt32LE(this._b, 4);
	buffer.writeInt32LE(this._c, 8);
	buffer.writeInt32LE(this._d, 12);
	buffer.writeInt32LE(this._e, 16);
	return buffer;
};

module.exports = RIPEMD160;
