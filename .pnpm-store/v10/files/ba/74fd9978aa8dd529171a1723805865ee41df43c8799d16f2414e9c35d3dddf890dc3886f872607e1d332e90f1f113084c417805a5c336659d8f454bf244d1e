'use strict';

var test = require('tape');
var v = require('es-value-fixtures');
var forEach = require('for-each');
var inspect = require('object-inspect');

var regexTester = require('../');

test('regex tester', function (t) {
	t.equal(typeof regexTester, 'function', 'is a function');

	t.test('non-regexes', function (st) {
		forEach([].concat(
			// @ts-expect-error TS sucks with concat
			v.primitives,
			v.objects
		), function (val) {
			st['throws'](
				function () { regexTester(val); },
				TypeError,
				inspect(val) + ' is not a regex'
			);
		});

		st.end();
	});

	t.test('regexes', function (st) {
		var tester = regexTester(/a/);

		st.equal(typeof tester, 'function', 'returns a function');
		st.equal(tester('a'), true, 'returns true for a match');
		st.equal(tester('b'), false, 'returns false for a non-match');
		st.equal(tester('a'), true, 'returns true for a match again');

		st.end();
	});

	t.end();
});
