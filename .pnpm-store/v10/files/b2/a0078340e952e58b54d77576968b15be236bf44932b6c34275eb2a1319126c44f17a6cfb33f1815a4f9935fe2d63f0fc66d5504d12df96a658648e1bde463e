'use strict';

var callBind = require('call-bind');
var test = require('tape');
var hasStrictMode = require('has-strict-mode')();

var implementation = require('../implementation');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', { skip: !hasStrictMode }, function (st) {
		/* eslint no-useless-call: 0 */
		st['throws'](function () { implementation.call(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { implementation.call(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(implementation), t);

	t.end();
});
