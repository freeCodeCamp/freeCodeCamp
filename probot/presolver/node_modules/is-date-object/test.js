'use strict';

var test = require('tape');
var isDate = require('./');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

test('not Dates', function (t) {
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

test('@@toStringTag', { skip: !hasSymbols || !Symbol.toStringTag }, function (t) {
	var realDate = new Date();
	var fakeDate = { toString: function () { return String(realDate); }, valueOf: function () { return realDate.getTime(); } };
	fakeDate[Symbol.toStringTag] = 'Date';
	t.notOk(isDate(fakeDate), 'fake Date with @@toStringTag "Date" is not Date');
	t.end();
});

test('Dates', function (t) {
	t.ok(isDate(new Date()), 'new Date() is Date');
	t.end();
});
