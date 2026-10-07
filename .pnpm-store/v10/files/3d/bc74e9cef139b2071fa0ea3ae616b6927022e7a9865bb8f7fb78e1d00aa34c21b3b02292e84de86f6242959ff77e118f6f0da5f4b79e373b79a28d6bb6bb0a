'use strict';

var test = require('tape');
var inspect = require('object-inspect');
var forEach = require('for-each');
var v = require('es-value-fixtures');

var whichBoxedPrimitive = require('../');

var objects = [
	/a/g,
	new Date(),
	function () {},
	[],
	{}
].concat(v.objects);

test('isBoxedPrimitive', function (t) {
	t.test('unboxed primitives', function (st) {
		forEach(v.primitives, function (primitive) {
			st.equal(null, whichBoxedPrimitive(primitive), inspect(primitive) + ' is a primitive, but not a boxed primitive');
		});
		st.end();
	});

	t.test('boxed primitives', function (st) {
		forEach(v.primitives, function (primitive) {
			if (primitive != null) { // eslint-disable-line eqeqeq
				var boxed = Object(primitive);
				var expected = boxed.constructor.name;
				st.equal(typeof expected, 'string', 'expected is string');
				st.equal(whichBoxedPrimitive(boxed), expected, inspect(boxed) + ' is a boxed primitive: ' + expected);
			}
		});
		st.end();
	});

	t.test('non-primitive objects', function (st) {
		forEach(objects, function (object) {
			st.equal(undefined, whichBoxedPrimitive(object), inspect(object) + ' is not a primitive, boxed or otherwise');
		});
		st.end();
	});

	t.end();
});
