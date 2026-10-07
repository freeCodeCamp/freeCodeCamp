'use strict';

var test = require('tape');
var crypto = require('../');
var randomBytes = require('randombytes');
var entries = require('object.entries');

var randomBytesFunctions = {
	randomBytes: randomBytes,
	pseudoRandomBytes: crypto.pseudoRandomBytes
};

// Both randomBytes and pseudoRandomBytes should provide the same interface
entries(randomBytesFunctions).forEach(function (entry) {
	var randomBytesName = entry[0];
	var randomBytesFn = entry[1];

	test('get error message', function (t) {
		try {
			var b = randomBytesFn(10);
			t.ok(Buffer.isBuffer(b));
			t.end();
		} catch (err) {
			t.ok((/not supported/).test(err.message), '"not supported" is in error message');
			t.end();
		}
	});

	test(randomBytesName, function (t) {
		t.plan(5);
		t.equal(randomBytesFn(10).length, 10);
		t.ok(Buffer.isBuffer(randomBytesFn(10)));
		randomBytesFn(10, function (ex, bytes) {
			t.error(ex);
			t.equal(bytes.length, 10);
			t.ok(Buffer.isBuffer(bytes));
			t.end();
		});
	});

	test(randomBytesName + ' seem random', function (t) {
		var L = 1000;
		var buffer = randomBytesFn(L);

		var mean = Array.prototype.reduce.call(buffer, function (a, b) { return a + b; }, 0) / L;

		// test that the random numbers are plausably random.
		// Math.random() will pass this, but this will catch
		// terrible mistakes such as this blunder:
		// https://github.com/browserify/crypto-browserify/commit/3267955e1df7edd1680e52aeede9a89506ed2464#commitcomment-7916835

		// this doesn't check that the bytes are in a random *order*
		// but it's better than nothing.

		var expected = 256 / 2;
		var smean = Math.sqrt(mean);

		// console.log doesn't work right on testling, *grumble grumble*
		console.log(JSON.stringify([expected - smean, mean, expected + smean]));
		t.ok(mean < expected + smean);
		t.ok(mean > expected - smean);

		t.end();
	});
});
