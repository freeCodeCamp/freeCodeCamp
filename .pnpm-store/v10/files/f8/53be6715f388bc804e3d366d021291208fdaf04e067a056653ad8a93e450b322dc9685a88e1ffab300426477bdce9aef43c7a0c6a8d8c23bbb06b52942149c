'use strict';

var test = require('tape');
var isString = require('../');
var hasToStringTag = require('has-tostringtag/shams')();

test('not Strings', function (t) {
	// @ts-expect-error
	t.notOk(isString(), 'undefined is not String');
	t.notOk(isString(null), 'null is not String');
	t.notOk(isString(false), 'false is not String');
	t.notOk(isString(true), 'true is not String');
	t.notOk(isString([]), 'array is not String');
	t.notOk(isString({}), 'object is not String');
	t.notOk(isString(function () {}), 'function is not String');
	t.notOk(isString(/a/g), 'regex literal is not String');
	t.notOk(isString(new RegExp('a', 'g')), 'regex object is not String');
	t.notOk(isString(new Date()), 'new Date() is not String');
	t.notOk(isString(42), 'number is not String');
	t.notOk(isString(Object(42)), 'number object is not String');
	t.notOk(isString(NaN), 'NaN is not String');
	t.notOk(isString(Infinity), 'Infinity is not String');
	t.end();
});

test('@@toStringTag', { skip: !hasToStringTag }, function (t) {
	/** @type {{ toString(): unknown; valueOf(): unknown; [Symbol.toStringTag]?: string; }} */
	var fakeString = {
		toString: function () { return '7'; },
		valueOf: function () { return '42'; }
	};
	fakeString[Symbol.toStringTag] = 'String';
	t.notOk(isString(fakeString), 'fake String with @@toStringTag "String" is not String');
	t.end();
});

test('Strings', function (t) {
	t.ok(isString('foo'), 'string primitive is String');
	t.ok(isString(Object('foo')), 'string object is String');
	t.end();
});
