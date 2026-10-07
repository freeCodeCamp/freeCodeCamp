'use strict';

var includes = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { includes(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { includes(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(includes, t);

	t.end();
});
