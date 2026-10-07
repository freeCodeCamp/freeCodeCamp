'use strict';

var md5 = require('create-hash/md5');
var RIPEMD160 = require('ripemd160');
var sha = require('sha.js');
var Buffer = require('safe-buffer').Buffer;

var checkParameters = require('./precondition');
var defaultEncoding = require('./default-encoding');
var toBuffer = require('./to-buffer');

var ZEROS = Buffer.alloc(128);
var sizes = {
	__proto__: null,
	md5: 16,
	sha1: 20,
	sha224: 28,
	sha256: 32,
	sha384: 48,
	sha512: 64,
	'sha512-256': 32,
	ripemd160: 20,
	rmd160: 20
};

var mapping = {
	__proto__: null,
	'sha-1': 'sha1',
	'sha-224': 'sha224',
	'sha-256': 'sha256',
	'sha-384': 'sha384',
	'sha-512': 'sha512',
	'ripemd-160': 'ripemd160'
};

function rmd160Func(data) {
	return new RIPEMD160().update(data).digest();
}

function getDigest(alg) {
	function shaFunc(data) {
		return sha(alg).update(data).digest();
	}

	if (alg === 'rmd160' || alg === 'ripemd160') {
		return rmd160Func;
	}
	if (alg === 'md5') {
		return md5;
	}
	return shaFunc;
}

function Hmac(alg, key, saltLen) {
	var hash = getDigest(alg);
	var blocksize = alg === 'sha512' || alg === 'sha384' ? 128 : 64;

	if (key.length > blocksize) {
		key = hash(key);
	} else if (key.length < blocksize) {
		key = Buffer.concat([key, ZEROS], blocksize);
	}

	var ipad = Buffer.allocUnsafe(blocksize + sizes[alg]);
	var opad = Buffer.allocUnsafe(blocksize + sizes[alg]);
	for (var i = 0; i < blocksize; i++) {
		ipad[i] = key[i] ^ 0x36;
		opad[i] = key[i] ^ 0x5C;
	}

	var ipad1 = Buffer.allocUnsafe(blocksize + saltLen + 4);
	ipad.copy(ipad1, 0, 0, blocksize);
	this.ipad1 = ipad1;
	this.ipad2 = ipad;
	this.opad = opad;
	this.alg = alg;
	this.blocksize = blocksize;
	this.hash = hash;
	this.size = sizes[alg];
}

Hmac.prototype.run = function (data, ipad) {
	data.copy(ipad, this.blocksize);
	var h = this.hash(ipad);
	h.copy(this.opad, this.blocksize);
	return this.hash(this.opad);
};

function pbkdf2(password, salt, iterations, keylen, digest) {
	checkParameters(iterations, keylen);
	password = toBuffer(password, defaultEncoding, 'Password');
	salt = toBuffer(salt, defaultEncoding, 'Salt');

	var lowerDigest = (digest || 'sha1').toLowerCase();
	var mappedDigest = mapping[lowerDigest] || lowerDigest;
	var size = sizes[mappedDigest];
	if (typeof size !== 'number' || !size) {
		throw new TypeError('Digest algorithm not supported: ' + digest);
	}

	var hmac = new Hmac(mappedDigest, password, salt.length);

	var DK = Buffer.allocUnsafe(keylen);
	var block1 = Buffer.allocUnsafe(salt.length + 4);
	salt.copy(block1, 0, 0, salt.length);

	var destPos = 0;
	var hLen = size;
	var l = Math.ceil(keylen / hLen);

	for (var i = 1; i <= l; i++) {
		block1.writeUInt32BE(i, salt.length);

		var T = hmac.run(block1, hmac.ipad1);
		var U = T;

		for (var j = 1; j < iterations; j++) {
			U = hmac.run(U, hmac.ipad2);
			for (var k = 0; k < hLen; k++) {
				T[k] ^= U[k];
			}
		}

		T.copy(DK, destPos);
		destPos += hLen;
	}

	return DK;
}

module.exports = pbkdf2;
