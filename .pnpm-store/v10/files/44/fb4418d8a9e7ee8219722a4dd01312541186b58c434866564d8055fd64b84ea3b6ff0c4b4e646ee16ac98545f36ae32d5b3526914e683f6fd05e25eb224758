'use strict';

var trimEnd = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { trimEnd(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { trimEnd(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(trimEnd, t);

	t.end();
});
