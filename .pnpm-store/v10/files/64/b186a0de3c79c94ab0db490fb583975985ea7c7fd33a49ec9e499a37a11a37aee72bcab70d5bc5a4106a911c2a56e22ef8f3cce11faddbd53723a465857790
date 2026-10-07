'use strict';

var defineProperties = require('define-properties');
var test = require('tape');
var callBind = require('call-bind');
var functionsHaveNames = require('functions-have-names')();
var hasStrictMode = require('has-strict-mode')();
var forEach = require('for-each');
var debug = require('object-inspect');
var v = require('es-value-fixtures');
var hasSymbols = require('has-symbols/shams')();
var iterate = require('iterate-iterator');

var index = require('../Iterator.prototype.reduce');
var impl = require('../Iterator.prototype.reduce/implementation');

var fnName = 'reduce';

var isEnumerable = Object.prototype.propertyIsEnumerable;

var testIterator = require('./helpers/testIterator');

module.exports = {
	tests: function (reduce, name, t) {
		t['throws'](
			function () { return new reduce(); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` is not a constructor'
		);

		forEach(v.primitives.concat(v.objects), function (nonIterator) {
			t['throws'](
				function () { iterate(reduce(nonIterator, function () {})); },
				TypeError,
				debug(nonIterator) + ' is not an Object with a callable `next` method'
			);

			var badNext = { next: nonIterator };
			t['throws'](
				function () { iterate(reduce(badNext, function () {})); },
				TypeError,
				debug(badNext) + ' is not an Object with a callable `next` method'
			);
		});

		forEach(v.nonFunctions, function (nonFunction) {
			t['throws'](
				function () { reduce({ next: function () {} }, nonFunction); },
				TypeError,
				debug(nonFunction) + ' is not a function'
			);
		});

		t.test('actual iteration', { skip: !hasSymbols }, function (st) {
			var arr = [1, 2, 3];
			var iterator = callBind(arr[Symbol.iterator], arr);

			st['throws'](
				function () { return new reduce(iterator()); }, // eslint-disable-line new-cap
				TypeError,
				'`' + name + '` iterator is not a constructor'
			);
			st['throws'](
				function () { return new reduce(iterator(), function () {}); }, // eslint-disable-line new-cap
				TypeError,
				'`' + name + '` iterator is not a constructor'
			);

			testIterator(iterator(), [1, 2, 3], st, 'original');

			var results = [];
			var ret = reduce(
				iterator(),
				function (acc, x, i) {
					// eslint-disable-next-line no-invalid-this
					results.push({ acc: acc, value: x, count: i, 'this': this, args: arguments.length });
					return acc + x;
				}
			);
			st.equal(ret, 6, 'returns sum of all numbers');
			st.deepEqual(
				results,
				[
					{ acc: 1, value: 2, count: 1, 'this': undefined, args: 3 },
					{ acc: 3, value: 3, count: 2, 'this': undefined, args: 3 }
				],
				'reduce callback receives the expected values without initialValue'
			);

			var results2 = [];
			var ret2 = reduce(
				iterator(),
				function (acc, x, i) {
					// eslint-disable-next-line no-invalid-this
					results2.push({ acc: acc, value: x, count: i, 'this': this, args: arguments.length });
					return acc + x;
				},
				10
			);
			st.equal(ret2, 16, 'returns sum of all numbers plus initialValue');
			st.deepEqual(
				results2,
				[
					{ acc: 10, value: 1, count: 0, 'this': undefined, args: 3 },
					{ acc: 11, value: 2, count: 1, 'this': undefined, args: 3 },
					{ acc: 13, value: 3, count: 2, 'this': undefined, args: 3 }
				],
				'reduce callback receives the expected values with initialValue'
			);

			st.end();
		});
	},
	index: function () {
		test('Iterator.prototype.' + fnName + ': index', function (t) {
			module.exports.tests(index, 'Iterator.prototype.' + fnName, t);

			t.end();
		});
	},
	implementation: function () {
		test('Iterator.prototype.' + fnName + ': implementation', function (t) {
			module.exports.tests(callBind(impl), 'Iterator.prototype.' + fnName, t);

			t.end();
		});
	},
	shimmed: function () {
		test('Iterator.prototype.' + fnName + ': shimmed', function (t) {
			t.test('Function name', { skip: !functionsHaveNames }, function (st) {
				st.equal(Iterator.prototype[fnName].name, fnName, 'Iterator#' + fnName + ' has name "' + fnName + '"');
				st.end();
			});

			t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
				et.equal(false, isEnumerable.call(Iterator.prototype, fnName), 'Iterator#' + fnName + ' is not enumerable');
				et.end();
			});

			t.test('bad string/this value', { skip: !hasStrictMode }, function (st) {
				st['throws'](function () { return Iterator.prototype[fnName].call(undefined, 'a'); }, TypeError, 'undefined is not an object');
				st['throws'](function () { return Iterator.prototype[fnName].call(null, 'a'); }, TypeError, 'null is not an object');
				st.end();
			});

			module.exports.tests(callBind(Iterator.prototype[fnName]), 'Iterator.prototype.' + fnName, t);

			t.end();
		});
	}
};
