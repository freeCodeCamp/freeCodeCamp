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
var generators = require('make-generator-function')();
var iterate = require('iterate-iterator');

var index = require('../Iterator.prototype.map');
var impl = require('../Iterator.prototype.map/implementation');

var fnName = 'map';

var isEnumerable = Object.prototype.propertyIsEnumerable;

var testIterator = require('./helpers/testIterator');

module.exports = {
	tests: function (map, name, t) {
		t['throws'](
			function () { return new map(); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` itself is not a constructor'
		);

		forEach(v.primitives.concat(v.objects), function (nonIterator) {
			t['throws'](
				function () { iterate(map(nonIterator, function () {})); },
				TypeError,
				debug(nonIterator) + ' is not an Object with a callable `next` method'
			);

			var badNext = { next: nonIterator };
			t['throws'](
				function () { iterate(map(badNext, function () {})); },
				TypeError,
				debug(badNext) + ' is not an Object with a callable `next` method'
			);
		});

		forEach(v.nonFunctions, function (nonFunction) {
			t['throws'](
				function () { map({ next: function () {} }, nonFunction); },
				TypeError,
				debug(nonFunction) + ' is not a function'
			);
		});

		var sentinel = {};
		var done = false;
		var fakeIterator = {
			next: function () {
				try {
					return {
						done: !!done,
						value: sentinel
					};
				} finally {
					done = done === false ? null : true;
				}
			}
		};
		var result = {};
		testIterator(
			map(fakeIterator, function (x, i) {
				result.value = x;
				result.counter = i;
				result.receiver = this; // eslint-disable-line no-invalid-this
				result.args = arguments.length;
				return fakeIterator;
			}),
			[fakeIterator, fakeIterator],
			t,
			'fake iterator, mapped, runs as expected'
		);
		t.deepEqual(
			result,
			{ value: sentinel, counter: 1, receiver: undefined, args: 2 },
			'callback is called with the correct arguments'
		);

		t.test('actual iteration', { skip: !hasSymbols }, function (st) {
			var arr = [1, 2, 3];
			var iterator = callBind(arr[Symbol.iterator], arr);

			st['throws'](
				function () { return new map(iterator()); }, // eslint-disable-line new-cap
				TypeError,
				'`' + name + '` iterator is not a constructor'
			);
			st['throws'](
				function () { return new map(iterator(), function () {}); }, // eslint-disable-line new-cap
				TypeError,
				'`' + name + '` iterator is not a constructor'
			);

			testIterator(iterator(), [1, 2, 3], st, 'original');
			testIterator(map(iterator(), function (x) { return x; }), [1, 2, 3], st, 'identity mapper');
			testIterator(map(iterator(), function (x) { return 2 * x; }), [2, 4, 6], st, 'doubler mapper');

			st.test('generators', { skip: generators.length === 0 }, function (s2t) {
				forEach(generators, function (gen) {
					s2t.doesNotThrow(
						function () { map(gen(), function () {}); },
						'generator function ' + debug(gen) + ' does not need to be from-wrapped first'
					);
				});

				s2t.end();
			});

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
			t.equal(typeof Iterator.prototype[fnName], 'function', 'exists and is a function');

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
