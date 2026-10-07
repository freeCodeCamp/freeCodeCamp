'use strict';

var sizes = {
	__proto__: null,
	md5: 16,
	sha1: 20,
	sha224: 28,
	sha256: 32,
	sha384: 48,
	sha512: 64,
	'sha512-256': 32,
	rmd160: 20,
	ripemd160: 20
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

var createHmac = require('create-hmac');
var Buffer = require('safe-buffer').Buffer;

var checkParameters = require('./precondition');
var defaultEncoding = require('./default-encoding');
var toBuffer = require('./to-buffer');

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

	var DK = Buffer.allocUnsafe(keylen);
	var block1 = Buffer.allocUnsafe(salt.length + 4);
	salt.copy(block1, 0, 0, salt.length);

	var destPos = 0;
	var hLen = size;
	var l = Math.ceil(keylen / hLen);

	for (var i = 1; i <= l; i++) {
		block1.writeUInt32BE(i, salt.length);

		var T = createHmac(mappedDigest, password).update(block1).digest();
		var U = T;

		for (var j = 1; j < iterations; j++) {
			U = createHmac(mappedDigest, password).update(U).digest();
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
