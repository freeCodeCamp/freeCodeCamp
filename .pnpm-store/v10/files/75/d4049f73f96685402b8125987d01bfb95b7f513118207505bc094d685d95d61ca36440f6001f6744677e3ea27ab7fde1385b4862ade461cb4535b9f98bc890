'use strict';

var trimStart = require('../');
var test = require('tape');

var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { trimStart(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { trimStart(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(trimStart, t);

	t.end();
});
