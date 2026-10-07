'use strict';

var test = require('tape');
var isDate = require('../');
var hasToStringTag = require('has-tostringtag/shams')();

test('not Dates', function (t) {
	// @ts-expect-error
	t.notOk(isDate(), 'undefined is not Date');
	t.notOk(isDate(null), 'null is not Date');
	t.notOk(isDate(false), 'false is not Date');
	t.notOk(isDate(true), 'true is not Date');
	t.notOk(isDate(42), 'number is not Date');
	t.notOk(isDate('foo'), 'string is not Date');
	t.notOk(isDate([]), 'array is not Date');
	t.notOk(isDate({}), 'object is not Date');
	t.notOk(isDate(function () {}), 'function is not Date');
	t.notOk(isDate(/a/g), 'regex literal is not Date');
	t.notOk(isDate(new RegExp('a', 'g')), 'regex object is not Date');
	t.end();
});

test('@@toStringTag', { skip: !hasToStringTag }, function (t) {
	var realDate = new Date();
	/** @type {{ toString(): unknown; valueOf(): unknown; [Symbol.toStringTag]?: string; }} */
	var fakeDate = {
		toString: function () { return String(realDate); },
		valueOf: function () { return realDate.getTime(); }
	};
	fakeDate[Symbol.toStringTag] = 'Date';
	t.notOk(isDate(fakeDate), 'fake Date with @@toStringTag "Date" is not Date');
	t.end();
});

test('Dates', function (t) {
	t.ok(isDate(new Date()), 'new Date() is Date');
	t.end();
});
