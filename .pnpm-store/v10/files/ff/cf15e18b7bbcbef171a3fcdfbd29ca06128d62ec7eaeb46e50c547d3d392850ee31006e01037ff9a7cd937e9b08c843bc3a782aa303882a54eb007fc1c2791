'use strict';

var test = require('tape');
var inspect = require('object-inspect');
var forEach = require('for-each');

var isFinalizationRegistry = require('..');

test('isFinalizationRegistry', function (t) {
	t.equal(typeof isFinalizationRegistry, 'function', 'is a function');

	var nonFinalizationRegistries = [undefined, null, true, false, 42, 0, Infinity, NaN, /a/g, function () {}, {}, []];
	forEach(nonFinalizationRegistries, function (nonFinalizationRegistry) {
		t.equal(isFinalizationRegistry(nonFinalizationRegistry), false, inspect(nonFinalizationRegistry) + ' is not a FinalizationRegistry');
	});

	t.test('actual FinalizationRegistry instances', { skip: typeof FinalizationRegistry === 'undefined' }, function (st) {
		var registry = new FinalizationRegistry(function () {});

		st.equal(isFinalizationRegistry(registry), true, inspect(registry) + ' is a FinalizationRegistry');

		st.end();
	});

	t.end();
});
