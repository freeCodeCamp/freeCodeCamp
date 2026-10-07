'use strict';

var values = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { values(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { values(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(values, t);

	t.end();
});
