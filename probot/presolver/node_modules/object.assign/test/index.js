'use strict';

var assign = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { assign(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { assign(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(assign, t);

	t.end();
});
