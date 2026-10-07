'use strict';

var test = require('tape');
var inspect = require('object-inspect');
var forEach = require('for-each');
var v = require('es-value-fixtures');
var availableTypedArrays = require('available-typed-arrays')();

var isSharedArrayBuffer = require('..');

test('isSharedArrayBuffer', function (t) {
	t.equal(typeof isSharedArrayBuffer, 'function', 'is a function');

	// @ts-expect-error TS sucks with concat
	var nonSABs = [].concat(v.primitives, v.objects);
	forEach(nonSABs, function (nonSAB) {
		t.equal(isSharedArrayBuffer(nonSAB), false, inspect(nonSAB) + ' is not a SharedArrayBuffer');
	});

	t.test('actual SharedArrayBuffer instances', { skip: typeof SharedArrayBuffer === 'undefined' }, function (st) {
		var sab = new SharedArrayBuffer(0);

		st.equal(isSharedArrayBuffer(sab), true, inspect(sab) + ' is a SharedArrayBuffer');

		st.end();
	});

	t.test('Typed Arrays', { skip: availableTypedArrays.length === 0 }, function (st) {
		forEach(availableTypedArrays, function (TypedArray) {
			var ta = new global[TypedArray](0);
			st.equal(isSharedArrayBuffer(ta.buffer), false, inspect(ta.buffer) + ', the TA\'s buffer, is not a SharedArrayBuffer');
			st.equal(isSharedArrayBuffer(ta), false, inspect(ta) + ' is not a SharedArrayBuffer');
		});

		st.end();
	});

	t.end();
});
