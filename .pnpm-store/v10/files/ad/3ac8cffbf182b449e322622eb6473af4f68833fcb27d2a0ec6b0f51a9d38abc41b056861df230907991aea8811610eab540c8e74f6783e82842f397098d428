'use strict';

var test = require('tape');
var hasToStringTag = require('has-tostringtag/shams')();
var inspect = require('object-inspect');

var isBoolean = require('../');

test('not Booleans', function (t) {
	t.test('primitives', function (st) {
		// @ts-expect-error
		st.notOk(isBoolean(), 'undefined is not Boolean');
		st.notOk(isBoolean(null), 'null is not Boolean');
		st.notOk(isBoolean(0), '0 is not Boolean');
		st.notOk(isBoolean(NaN), 'NaN is not Boolean');
		st.notOk(isBoolean(Infinity), 'Infinity is not Boolean');
		st.notOk(isBoolean('foo'), 'string is not Boolean');
		st.end();
	});

	t.test('objects', function (st) {
		st.notOk(isBoolean(Object(42)), 'number object is not Boolean');
		st.notOk(isBoolean([]), 'array is not Boolean');
		st.notOk(isBoolean({}), 'object is not Boolean');
		st.notOk(isBoolean(function () {}), 'function is not Boolean');
		st.notOk(isBoolean(/a/g), 'regex literal is not Boolean');
		st.notOk(isBoolean(new RegExp('a', 'g')), 'regex object is not Boolean');
		st.notOk(isBoolean(new Date()), 'new Date() is not Boolean');
		st.end();
	});

	t.end();
});

test('@@toStringTag', { skip: !hasToStringTag }, function (t) {
	/** @type {{ toString(): unknown; valueOf(): unknown; [Symbol.toStringTag]?: string; }} */
	var fakeBoolean = {
		toString: function () { return 'true'; },
		valueOf: function () { return true; }
	};
	fakeBoolean[Symbol.toStringTag] = 'Boolean';
	t.notOk(isBoolean(fakeBoolean), 'fake Boolean with @@toStringTag "Boolean" is not Boolean');
	t.end();
});

test('Booleans', function (t) {
	t.ok(isBoolean(true), 'true is Boolean');
	t.ok(isBoolean(false), 'false is Boolean');
	t.ok(isBoolean(Object(true)), 'Object(true) is Boolean');
	t.ok(isBoolean(Object(false)), 'Object(false) is Boolean');
	t.end();
});

test('Proxy', { skip: typeof Proxy !== 'function' || !hasToStringTag }, function (t) {
	/** @type {Record<PropertyKey, unknown>} */
	var target = {};
	target[Symbol.toStringTag] = 'Boolean';
	var fake = new Proxy(target, { has: function () { return false; } });

	t.equal(
		isBoolean(target),
		false,
		inspect(target) + ' is not a Boolean'
	);

	t.equal(
		isBoolean(fake),
		false,
		inspect(fake) + ' is not a Boolean'
	);

	t.end();
});
