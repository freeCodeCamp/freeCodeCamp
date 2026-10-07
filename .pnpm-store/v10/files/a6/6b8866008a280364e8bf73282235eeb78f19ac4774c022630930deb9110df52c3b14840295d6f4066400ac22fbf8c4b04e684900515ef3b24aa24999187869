'use strict';

var flags = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { flags(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { flags(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(flags, t);

	t.end();
});
