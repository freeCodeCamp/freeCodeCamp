'use strict';

var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { Object.entries(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { Object.entries(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(Object.entries, t);

	t.end();
});
