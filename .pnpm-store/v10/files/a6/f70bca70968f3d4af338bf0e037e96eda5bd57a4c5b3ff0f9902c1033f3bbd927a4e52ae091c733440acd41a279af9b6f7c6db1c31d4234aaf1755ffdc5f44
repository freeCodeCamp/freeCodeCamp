'use strict';

var test = require('tape');
var hasStrictMode = require('has-strict-mode')();

var bound = require('../');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', { skip: !hasStrictMode }, function (st) {
		/* eslint no-useless-call: 0 */
		st['throws'](function () { return bound.call(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return bound.call(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(bound, t);

	t.end();
});
