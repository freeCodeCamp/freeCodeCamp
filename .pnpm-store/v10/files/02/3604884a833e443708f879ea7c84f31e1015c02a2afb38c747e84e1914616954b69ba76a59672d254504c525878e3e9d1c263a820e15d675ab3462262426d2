'use strict';

var index = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('ArrayBuffer support', { skip: typeof ArrayBuffer === 'undefined' }, function (st) {
		st.test('bad array/this value', function (s2t) {
			s2t['throws'](function () { index(undefined); }, TypeError, 'undefined is not an object');
			s2t['throws'](function () { index(null); }, TypeError, 'null is not an object');
			s2t.end();
		});

		runTests(index, st);

		st.end();
	});

	t.test('no ArrayBuffer support', { skip: typeof ArrayBuffer !== 'undefined' }, function (st) {
		st['throws'](
			function () { index({}); },
			SyntaxError,
			'ArrayBuffer is not supported'
		);
	});

	t.end();
});
