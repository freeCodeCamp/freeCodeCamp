'use strict';

var test = require('tape');
var inspect = require('object-inspect');
var forEach = require('for-each');

var isWeakRef = require('..');

test('isWeakRef', function (t) {
	t.equal(typeof isWeakRef, 'function', 'is a function');

	var nonWeakRefs = [undefined, null, true, false, 42, 0, Infinity, NaN, /a/g, function () {}, {}, []];
	forEach(nonWeakRefs, function (nonWeakRef) {
		t.equal(isWeakRef(nonWeakRef), false, inspect(nonWeakRef) + ' is not a WeakRef');
	});

	t.test('actual WeakRefs', { skip: typeof WeakRef === 'undefined' }, function (st) {
		var ref = new WeakRef({});

		st.equal(isWeakRef(ref), true, inspect(ref) + ' is a WeakRef');

		st.end();
	});

	t.end();
});
