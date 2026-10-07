'use strict';

var flatten = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](flatten.bind(null, undefined, function () {}), TypeError, 'undefined is not an object');
		st['throws'](flatten.bind(null, null, function () {}), TypeError, 'null is not an object');
		st.end();
	});

	runTests(flatten, t);

	t.end();
});
