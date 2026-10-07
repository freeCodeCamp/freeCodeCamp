'use strict';

var forEach = require('for-each');
var has = Object.prototype.hasOwnProperty;
var assign = require('object.assign');
var define = require('define-properties');
var entries = require('object.entries');
var inspect = require('object-inspect');

var hasSticky = typeof (/a/).sticky === 'boolean';
var hasGroups = 'groups' in (/a/).exec('a');

var groups = function groups(matchObject) {
	return hasGroups ? assign(matchObject, { groups: matchObject.groups }, matchObject) : matchObject;
};

var arraySpread = function arraySpread(iterator) {
	if (Array.isArray(iterator)) { return iterator; }
	var result;
	var values = [];
	do {
		result = iterator.next();
		values.push(result);
	} while (!result.done);
	return values;
};

var testResults = function (t, iterator, expectedResults, item) {
	var prefix = arguments.length > 3 ? inspect(item) + ': ' : '';
	var results = arraySpread(iterator);
	var expecteds = arraySpread(expectedResults);
	t.test(prefix + 'actual vs expected result lengths', function (st) {
		st.equal(results.length, expecteds.length, 'actual and expected result counts are the same');
		st.end();
	});
	t.test(prefix + 'actual vs expected results', { skip: results.length !== expecteds.length }, function (st) {
		forEach(expecteds, function (expected, index) {
			var result = results.shift();
			st.equal(result.done, expected.done, 'result ' + (index + 1) + ' is ' + (expected.done ? '' : 'not ') + 'done');
			st.test('result ' + (index + 1), { skip: result.done !== expected.done }, function (s2t) {
				if (expected.done) {
					s2t.equal(result.value, undefined, 'result ' + (index + 1) + ' value is undefined');
				} else {
					s2t.equal(Array.isArray(result.value), true, 'result ' + (index + 1) + ' value is an array');
					s2t.deepEqual(entries(result.value || {}), entries(expected.value || {}), 'result ' + (index + 1) + ' has the same entries');
					s2t.deepEqual(result.value, expected.value, 'result ' + (index + 1) + ' value is expected value');
				}
				s2t.end();
			});
		});
	});
};

module.exports = function (matchAll, regexMatchAll, t) {
	t.test('non-regexes', function (st) {
		var notRegexes = [
			[null, [{ value: undefined, done: true }]],
			[undefined, [
				{ value: assign([''], groups({ index: 0, input: 'abc' })), done: false },
				{ value: assign([''], groups({ index: 1, input: 'abc' })), done: false },
				{ value: assign([''], groups({ index: 2, input: 'abc' })), done: false },
				{ value: assign([''], groups({ index: 3, input: 'abc' })), done: false },
				{ value: undefined, done: true }
			]],
			[NaN, [{ value: undefined, done: true }]],
			[42, [{ value: undefined, done: true }]],
			[new Date(), [{ value: undefined, done: true }]],
			[{}, [
				{ value: assign(['b'], groups({ index: 1, input: 'abc' })), done: false },
				{ value: assign(['c'], groups({ index: 2, input: 'abc' })), done: false },
				{ value: undefined, done: true }
			]],
			[[], [
				{ value: assign([''], groups({ index: 0, input: 'abc' })), done: false },
				{ value: assign([''], groups({ index: 1, input: 'abc' })), done: false },
				{ value: assign([''], groups({ index: 2, input: 'abc' })), done: false },
				{ value: assign([''], groups({ index: 3, input: 'abc' })), done: false },
				{ value: undefined, done: true }
			]]
		];
		var str = 'abc';
		forEach(notRegexes, function (notRegex) {
			testResults(st, matchAll(str, notRegex[0]), notRegex[1], notRegex[0]);
		});
		st.end();
	});

	t.test('passing a string instead of a regex', function (st) {
		var str = 'aabcaba';
		testResults(st, matchAll(str, 'a'), matchAll(str, /a/g));
		st.end();
	});

	t.test('ToString-able objects', function (st) {
		var str = 'aabc';
		var strObj = { toString: function () { return str; } };
		var regex = /[ac]/g;
		var expectedResults = [
			{ value: assign(['a'], groups({ index: 0, input: str })), done: false },
			{ value: assign(['a'], groups({ index: 1, input: str })), done: false },
			{ value: assign(['c'], groups({ index: 3, input: str })), done: false },
			{ value: undefined, done: true }
		];
		testResults(st, matchAll(strObj, regex), expectedResults);
		st.end();
	});

	t.test('#flags', function (st) {
		st.test('without a flags property', function (s2t) {
			var str = 'aabc';
			var regex = /[ac]/g;
			if (define.supportsDescriptors) {
				Object.defineProperty(regex, 'flags', { value: undefined });
			}
			s2t.equal(regex.flags, undefined, 'regex has an undefined "flags" property');
			s2t['throws'](
				function () { matchAll(str, regex); },
				'undefined flags throws'
			);
			s2t.end();
		});

		st.test('with a static flags property', function (s2t) {
			var str = 'AaBC';
			var regex = /[ac]/;
			define(regex, { flags: 'ig' }, { flags: function () { return true; } });
			try {
				define(regex, { global: true }, { global: function () { return true; } });
				s2t.equal(regex.global, true);
			} catch (e) {
				s2t.comment('# SKIP in node < 6, `global` is not configurable on regexes');
				return s2t.end();
			}
			s2t.equal(regex.flags, 'ig');
			var expectedResults = [
				{ value: assign(['A'], groups({ index: 0, input: str })), done: false },
				{ value: assign(['a'], groups({ index: 1, input: str })), done: false },
				{ value: assign(['C'], groups({ index: 3, input: str })), done: false },
				{ value: undefined, done: true }
			];
			testResults(s2t, matchAll(str, regex), expectedResults);
			return s2t.end();
		});

		st.test('respects flags', function (s2t) {
			var str = 'A\na\nb\nC';
			var regex = /^[ac]/img;
			var expectedResults = [
				{ value: assign(['A'], groups({ index: 0, input: str })), done: false },
				{ value: assign(['a'], groups({ index: 2, input: str })), done: false },
				{ value: assign(['C'], groups({ index: 6, input: str })), done: false },
				{ value: undefined, done: true }
			];
			testResults(s2t, matchAll(str, regex), expectedResults);
			s2t.end();
		});

		st.test('throws with a non-global regex', function (s2t) {
			var str = 'AaBbCc';
			var regex = /[bc]/i;
			s2t['throws'](
				function () { matchAll(str, regex); },
				TypeError,
				'a non-global regex throws'
			);
			s2t.end();
		});

		st.test('works with a global non-sticky regex', function (s2t) {
			var str = 'AaBbCc';
			var regex = /[bc]/gi;
			var expectedResults = [
				{ value: assign(['B'], groups({ index: 2, input: str })), done: false },
				{ value: assign(['b'], groups({ index: 3, input: str })), done: false },
				{ value: assign(['C'], groups({ index: 4, input: str })), done: false },
				{ value: assign(['c'], groups({ index: 5, input: str })), done: false },
				{ value: undefined, done: true }
			];
			testResults(s2t, matchAll(str, regex), expectedResults);
			s2t.end();
		});
	});

	t.test('returns an iterator', function (st) {
		var str = 'aabc';
		var iterator = matchAll(str, /[ac]/g);
		st.ok(iterator, 'iterator is truthy');
		st.equal(has.call(iterator, 'next'), false, 'iterator does not have own property "next"');
		for (var key in iterator) {
			st.fail('iterator has enumerable properties: ' + key);
		}
		var expectedResults = [
			{ value: assign(['a'], groups({ index: 0, input: str })), done: false },
			{ value: assign(['a'], groups({ index: 1, input: str })), done: false },
			{ value: assign(['c'], groups({ index: 3, input: str })), done: false },
			{ value: undefined, done: true }
		];
		testResults(st, iterator, expectedResults);
		st.end();
	});

	t.test('zero-width matches', function (st) {
		var str = 'abcde';

		st.test('global', function (s2t) {
			var expectedResults = [
				{ value: assign([''], groups({ index: 1, input: str })), done: false },
				{ value: assign([''], groups({ index: 2, input: str })), done: false },
				{ value: assign([''], groups({ index: 3, input: str })), done: false },
				{ value: assign([''], groups({ index: 4, input: str })), done: false },
				{ value: undefined, done: true }
			];
			testResults(s2t, matchAll(str, /\B/g), expectedResults);
			s2t.end();
		});

		st.test('sticky', { skip: !hasSticky }, function (s2t) {
			var expectedResults = [
				{ value: undefined, done: true }
			];

			/* eslint no-invalid-regexp: [2, { "allowConstructorFlags": ["y"] }] */
			var regex = new RegExp('\\B', 'y');
			s2t['throws'](
				function () { matchAll(str, regex); },
				TypeError,
				'non-global sticky regex throws'
			);

			/* eslint no-invalid-regexp: [2, { "allowConstructorFlags": ["y"] }] */
			testResults(s2t, matchAll(str, new RegExp('\\B', 'gy')), expectedResults);

			s2t.end();
		});

		st.test('unflagged', function (s2t) {
			s2t['throws'](
				function () { matchAll(str, /\B/); },
				TypeError,
				'unflagged regex throws'
			);
			s2t.end();
		});

		st.end();
	});
};
