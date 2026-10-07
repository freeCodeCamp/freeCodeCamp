'use strict';

var test = require('tape');
var inspect = require('object-inspect');
var hasBigInts = require('has-bigints')();
var hasToStringTag = require('has-tostringtag/shams')();
var forEach = require('for-each');
var v = require('es-value-fixtures');

var isBigInt = require('../');

test('non-BigInt values', function (t) {
	/** @type {(typeof v.primitives[number] | object)[]} */
	var nonBigInts = v.nonBigInts.concat(
		Object(true),
		Object(false),
		// @ts-expect-error TS sucks with concat
		{},
		[],
		/a/g,
		new Date(),
		function () {},
		NaN,
		v.symbols
	);
	t.plan(nonBigInts.length);
	forEach(nonBigInts, function (nonBigInt) {
		t.equal(false, isBigInt(nonBigInt), inspect(nonBigInt) + ' is not a BigInt');
	});
	t.end();
});

test('faked BigInt values', function (t) {
	t.test('real BigInt valueOf', { skip: !hasBigInts }, function (st) {
		var fakeBigInt = { valueOf: function () { return BigInt(42); } };
		st.equal(false, isBigInt(fakeBigInt), 'object with valueOf returning a BigInt is not a BigInt');
		st.end();
	});

	t.test('faked @@toStringTag', { skip: !hasBigInts || !hasToStringTag }, function (st) {
		/** @type {{ valueOf(): unknown; [Symbol.toStringTag]?: unknown }} */
		var fakeBigInt = { valueOf: function () { return BigInt(42); } };
		fakeBigInt[Symbol.toStringTag] = 'BigInt';
		st.equal(false, isBigInt(fakeBigInt), 'object with fake BigInt @@toStringTag and valueOf returning a BigInt is not a BigInt');

		/** @type {{ valueOf(): unknown; [Symbol.toStringTag]?: unknown }} */
		var notSoFakeBigInt = { valueOf: function () { return 42; } };
		notSoFakeBigInt[Symbol.toStringTag] = 'BigInt';
		st.equal(false, isBigInt(notSoFakeBigInt), 'object with fake BigInt @@toStringTag and valueOf not returning a BigInt is not a BigInt');
		st.end();
	});

	var fakeBigIntString = { toString: function () { return '42n'; } };
	t.equal(false, isBigInt(fakeBigIntString), 'object with toString returning 42n is not a BigInt');

	t.end();
});

test('BigInt support', { skip: !hasBigInts }, function (t) {
	forEach(v.bigints.concat(Object(BigInt(42))), function (bigInt) {
		t.equal(true, isBigInt(bigInt), inspect(bigInt) + ' is a BigInt');
	});

	t.end();
});
