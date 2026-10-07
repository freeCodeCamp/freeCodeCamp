'use strict';

var implementation = require('../implementation');
var callBind = require('call-bind');
var test = require('tape');
var hasStrictMode = require('has-strict-mode')();
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad first arg/receiver', { skip: !hasStrictMode }, function (st) {
		st['throws'](function () { implementation(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { implementation(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(implementation, Object), t);

	t.end();
});
