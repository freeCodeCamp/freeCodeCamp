'use strict';

var trim = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { trim(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { trim(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(trim, t);

	t.end();
});
