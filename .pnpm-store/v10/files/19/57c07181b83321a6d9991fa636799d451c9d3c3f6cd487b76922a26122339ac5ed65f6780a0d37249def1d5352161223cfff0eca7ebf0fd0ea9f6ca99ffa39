'use strict';

var fromEntries = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { fromEntries(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { fromEntries(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(fromEntries, t);

	t.end();
});
