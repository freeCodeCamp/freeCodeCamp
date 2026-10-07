'use strict';

var test = require('tape');
var inspect = require('object-inspect');
var is = require('object-is');
var forEach = require('for-each');
var v = require('es-value-fixtures');

var unboxPrimitive = require('..');

test('primitives', function (t) {
	forEach([null, undefined], function (nullValue) {
		t['throws'](
			// @ts-expect-error
			function () { unboxPrimitive(nullValue); },
			TypeError,
			inspect(nullValue) + ' is not a primitive'
		);
	});

	// eslint-disable-next-line no-extra-parens
	forEach(/** @type {typeof v.nonNullPrimitives} */ ([].concat(
		// @ts-expect-error TS sucks with concat
		v.nonNullPrimitives,
		v.zeroes,
		v.infinities,
		NaN
	)), function (primitive) {
		var obj = Object(primitive);
		t.ok(
			is(unboxPrimitive(obj), primitive),
			inspect(obj) + 'unboxes to ' + inspect(primitive)
		);
	});

	t.end();
});

test('objects', function (t) {
	// eslint-disable-next-line no-extra-parens
	forEach(/** @type {typeof v.objects} */ (/** @type {unknown} */ ([].concat(
		// @ts-expect-error TS sucks with concat
		v.objects,
		{},
		[],
		function () {},
		/a/g,
		new Date()
	))), function (object) {
		t['throws'](
			// @ts-expect-error
			function () { unboxPrimitive(object); },
			TypeError,
			inspect(object) + ' is not a primitive'
		);
	});

	t.end();
});
