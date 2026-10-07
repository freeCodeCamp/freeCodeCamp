'use strict';

var test = require('tape');
var inspect = require('object-inspect');
var forEach = require('for-each');
var v = require('es-value-fixtures');
var availableTypedArrays = require('available-typed-arrays')();

var isArrayBuffer = require('..');

test('isArrayBuffer', function (t) {
	t.equal(typeof isArrayBuffer, 'function', 'is a function');

	/** @type {unknown[]} */
	var nonABs = [].concat(
		// @ts-expect-error TS sucks with [].concat
		v.primitives,
		v.objects,
		typeof SharedArrayBuffer === 'function' ? new SharedArrayBuffer(0) : []
	);
	forEach(nonABs, function (nonAB) {
		t.equal(isArrayBuffer(nonAB), false, inspect(nonAB) + ' is not an ArrayBuffer');
	});

	t.test('actual ArrayBuffer instances', { skip: typeof ArrayBuffer === 'undefined' }, function (st) {
		var ab = new ArrayBuffer();
		st.equal(isArrayBuffer(ab), true, inspect(ab) + ' is an ArrayBuffer');

		var ab42 = new ArrayBuffer(42);
		st.equal(isArrayBuffer(ab42), true, inspect(ab42) + ' is an ArrayBuffer');

		var dv = new DataView(ab42);
		st.equal(isArrayBuffer(dv), false, inspect(dv) + ' is not an ArrayBuffer');

		st.end();
	});

	t.test('Typed Arrays', { skip: availableTypedArrays.length === 0 }, function (st) {
		forEach(availableTypedArrays, function (TypedArray) {
			var ta = new global[TypedArray](0);
			st.equal(isArrayBuffer(ta.buffer), true, inspect(ta.buffer) + ', the TA\'s buffer, is an ArrayBuffer');
			st.equal(isArrayBuffer(ta), false, inspect(ta) + ' is not an ArrayBuffer');
		});

		st.end();
	});

	t.end();
});
