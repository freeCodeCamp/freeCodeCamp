'use strict';

var trim = require('../implementation');
var test = require('tape');
var hasStrictMode = require('has-strict-mode')();
var callBind = require('call-bind');

var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', { skip: !hasStrictMode }, function (st) {
		/* eslint no-useless-call: 0 */
		st['throws'](function () { trim.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { trim.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(trim), t);

	t.end();
});
