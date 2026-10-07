'use strict';

var test = require('tape');
var isNumber = require('../');
var hasToStringTag = require('has-tostringtag/shams')();

test('not Numbers', function (t) {
	// @ts-expect-error
	t.notOk(isNumber(), 'undefined is not Number');
	t.notOk(isNumber(null), 'null is not Number');
	t.notOk(isNumber(false), 'false is not Number');
	t.notOk(isNumber(true), 'true is not Number');
	t.notOk(isNumber('foo'), 'string is not Number');
	t.notOk(isNumber([]), 'array is not Number');
	t.notOk(isNumber({}), 'object is not Number');
	t.notOk(isNumber(function () {}), 'function is not Number');
	t.notOk(isNumber(/a/g), 'regex literal is not Number');
	t.notOk(isNumber(new RegExp('a', 'g')), 'regex object is not Number');
	t.notOk(isNumber(new Date()), 'new Date() is not Number');
	t.end();
});

test('@@toStringTag', { skip: !hasToStringTag }, function (t) {
	/** @type {{ toString(): string; valueOf(): number; [Symbol.toStringTag]?: string; }} */
	var fakeNumber = {
		toString: function () { return '7'; },
		valueOf: function () { return 42; }
	};
	fakeNumber[Symbol.toStringTag] = 'Number';
	t.notOk(isNumber(fakeNumber), 'fake Number with @@toStringTag "Number" is not Number');
	t.end();
});

test('Numbers', function (t) {
	t.ok(isNumber(42), 'number is Number');
	t.ok(isNumber(Object(42)), 'number object is Number');
	t.ok(isNumber(NaN), 'NaN is Number');
	t.ok(isNumber(Infinity), 'Infinity is Number');
	t.end();
});
