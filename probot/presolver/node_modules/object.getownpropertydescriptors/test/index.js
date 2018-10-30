'use strict';

var getDescriptors = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad object/this value', function (st) {
		st.throws(function () { return getDescriptors(undefined); }, TypeError, 'undefined is not an object');
		st.throws(function () { return getDescriptors(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(getDescriptors, t);

	t.end();
});
