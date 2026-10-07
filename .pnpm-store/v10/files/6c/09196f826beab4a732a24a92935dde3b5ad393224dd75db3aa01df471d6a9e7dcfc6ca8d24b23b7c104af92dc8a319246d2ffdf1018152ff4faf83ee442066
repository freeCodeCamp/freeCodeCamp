'use strict';

var implementation = require('../implementation');
var callBind = require('call-bind');
var test = require('tape');
var hasStrictMode = require('has-strict-mode')();
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('ArrayBuffer support', { skip: typeof ArrayBuffer === 'undefined' }, function (st) {
		st.test('bad array/this value', { skip: !hasStrictMode }, function (s2t) {
		/* eslint no-useless-call: 0 */
			s2t['throws'](function () { implementation.call(undefined); }, TypeError, 'undefined is not an object');
			s2t['throws'](function () { implementation.call(null); }, TypeError, 'null is not an object');
			s2t.end();
		});

		runTests(callBind(implementation), st);

		st.end();
	});

	t.test('no ArrayBuffer support', { skip: typeof ArrayBuffer !== 'undefined' }, function (st) {
		st['throws'](
			function () { implementation.call({}); },
			SyntaxError,
			'ArrayBuffer is not supported'
		);
	});

	t.end();
});
