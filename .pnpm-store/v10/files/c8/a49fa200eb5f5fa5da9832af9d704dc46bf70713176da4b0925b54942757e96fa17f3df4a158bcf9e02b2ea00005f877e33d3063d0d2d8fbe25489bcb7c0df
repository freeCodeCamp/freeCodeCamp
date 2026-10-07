'use strict';

var flatMap = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		/* eslint no-useless-call: 0 */
		st['throws'](function () { flatMap.call(undefined, function () {}); }, TypeError, 'undefined is not an object');
		st['throws'](function () { flatMap.call(null, function () {}); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(flatMap, t);

	t.end();
});
