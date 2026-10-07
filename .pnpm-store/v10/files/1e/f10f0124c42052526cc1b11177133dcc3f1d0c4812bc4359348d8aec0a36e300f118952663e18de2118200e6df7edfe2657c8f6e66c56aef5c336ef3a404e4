'use strict';

var entries = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { entries(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { entries(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(entries, t);

	t.end();
});
