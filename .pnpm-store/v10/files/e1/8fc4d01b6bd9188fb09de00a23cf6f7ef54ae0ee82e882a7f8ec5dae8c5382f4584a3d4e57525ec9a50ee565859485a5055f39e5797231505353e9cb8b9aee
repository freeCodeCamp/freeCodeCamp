'use strict';

var Buffer = require('safe-buffer').Buffer;

var checkParameters = require('./precondition');
var defaultEncoding = require('./default-encoding');
var sync = require('./sync');
var toBuffer = require('./to-buffer');

var ZERO_BUF;
var subtle = global.crypto && global.crypto.subtle;
var toBrowser = {
	sha: 'SHA-1',
	'sha-1': 'SHA-1',
	sha1: 'SHA-1',
	sha256: 'SHA-256',
	'sha-256': 'SHA-256',
	sha384: 'SHA-384',
	'sha-384': 'SHA-384',
	'sha-512': 'SHA-512',
	sha512: 'SHA-512'
};
var checks = [];
var nextTick;
function getNextTick() {
	if (nextTick) {
		return nextTick;
	}
	if (global.process && global.process.nextTick) {
		nextTick = global.process.nextTick;
	} else if (global.queueMicrotask) {
		nextTick = global.queueMicrotask;
	} else if (global.setImmediate) {
		nextTick = global.setImmediate;
	} else {
		nextTick = global.setTimeout;
	}
	return nextTick;
}
function browserPbkdf2(password, salt, iterations, length, algo) {
	return subtle.importKey('raw', password, { name: 'PBKDF2' }, false, ['deriveBits']).then(function (key) {
		return subtle.deriveBits({
			name: 'PBKDF2',
			salt: salt,
			iterations: iterations,
			hash: {
				name: algo
			}
		}, key, length << 3);
	}).then(function (res) {
		return Buffer.from(res);
	});
}
function checkNative(algo) {
	if (global.process && !global.process.browser) {
		return Promise.resolve(false);
	}
	if (!subtle || !subtle.importKey || !subtle.deriveBits) {
		return Promise.resolve(false);
	}
	if (checks[algo] !== undefined) {
		return checks[algo];
	}
	ZERO_BUF = ZERO_BUF || Buffer.alloc(8);
	var prom = browserPbkdf2(ZERO_BUF, ZERO_BUF, 10, 128, algo)
		.then(
			function () { return true; },
			function () { return false; }
		);
	checks[algo] = prom;
	return prom;
}

function resolvePromise(promise, callback) {
	promise.then(function (out) {
		getNextTick()(function () {
			callback(null, out);
		});
	}, function (e) {
		getNextTick()(function () {
			callback(e);
		});
	});
}
module.exports = function (password, salt, iterations, keylen, digest, callback) {
	if (typeof digest === 'function') {
		callback = digest;
		digest = undefined;
	}

	checkParameters(iterations, keylen);
	password = toBuffer(password, defaultEncoding, 'Password');
	salt = toBuffer(salt, defaultEncoding, 'Salt');
	if (typeof callback !== 'function') {
		throw new Error('No callback provided to pbkdf2');
	}

	digest = digest || 'sha1';
	var algo = toBrowser[digest.toLowerCase()];

	if (!algo || typeof global.Promise !== 'function') {
		getNextTick()(function () {
			var out;
			try {
				out = sync(password, salt, iterations, keylen, digest);
			} catch (e) {
				callback(e);
				return;
			}
			callback(null, out);
		});
		return;
	}

	resolvePromise(checkNative(algo).then(function (resp) {
		if (resp) {
			return browserPbkdf2(password, salt, iterations, keylen, algo);
		}

		return sync(password, salt, iterations, keylen, digest);
	}), callback);
};
