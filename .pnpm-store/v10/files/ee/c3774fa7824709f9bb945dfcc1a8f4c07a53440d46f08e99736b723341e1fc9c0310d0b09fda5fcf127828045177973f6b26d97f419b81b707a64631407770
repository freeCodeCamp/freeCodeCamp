'use strict';

var test = require('tape');
var hasBigInts = require('..');

test('interface', function (t) {
	t.equal(typeof hasBigInts, 'function', 'is a function');
	t.equal(typeof hasBigInts(), 'boolean', 'returns a boolean');
	t.end();
});

test('BigInts are supported', { skip: !hasBigInts() }, function (t) {
	t.equal(typeof BigInt, 'function', 'global BigInt is a function');
	if (typeof BigInt !== 'function') {
		return;
	}

	t.equal(BigInt(42), BigInt(42), '42n === 42n');
	t['throws'](
		function () { BigInt(NaN); },
		RangeError,
		'NaN is not an integer; BigInt(NaN) throws'
	);

	t['throws'](
		function () { BigInt(Infinity); },
		RangeError,
		'Infinity is not an integer; BigInt(Infinity) throws'
	);

	t['throws'](
		function () { BigInt(1.1); },
		RangeError,
		'1.1 is not an integer; BigInt(1.1) throws'
	);

	t.end();
});

test('BigInts are not supported', { skip: hasBigInts() }, function (t) {
	t.equal(typeof BigInt, 'undefined', 'global BigInt is undefined');

	t.end();
});
