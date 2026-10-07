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

var StringToCodePoints = require('es-abstract/2024/StringToCodePoints');

var index = require('../Iterator.prototype.flatMap');
var impl = require('../Iterator.prototype.flatMap/implementation');

var fnName = 'flatMap';

var isEnumerable = Object.prototype.propertyIsEnumerable;

var testIterator = require('./helpers/testIterator');

module.exports = {
	tests: function (flatMap, name, t) {
		t['throws'](
			function () { return new flatMap(); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` is not a constructor'
		);

		forEach(v.primitives.concat(v.objects), function (nonIterator) {
			t['throws'](
				function () { iterate(flatMap(nonIterator, function () {})); },
				TypeError,
				debug(nonIterator) + ' is not an Object with a callable `next` method'
			);

			var badNext = { next: nonIterator };
			t['throws'](
				function () { iterate(flatMap(badNext, function () {})); },
				TypeError,
				debug(badNext) + ' is not an Object with a callable `next` method'
			);
		});

		forEach(v.nonFunctions, function (nonFunction) {
			t['throws'](
				function () { flatMap({ next: function () {} }, nonFunction); },
				TypeError,
				debug(nonFunction) + ' is not a function'
			);
		});

		t.test('actual iteration', { skip: !hasSymbols }, function (st) {
			var arr = [1, 2, 3];
			var iterator = callBind(arr[Symbol.iterator], arr);

			st['throws'](
				function () { return new flatMap(iterator()); }, // eslint-disable-line new-cap
				TypeError,
				'`' + name + '` iterator is not a constructor'
			);
			st['throws'](
				function () { return new flatMap(iterator(), function () {}); }, // eslint-disable-line new-cap
				TypeError,
				'`' + name + '` iterator is not a constructor'
			);

			testIterator(iterator(), [1, 2, 3], st, 'original');

			var nonIterableFlatMap = flatMap(iterator(), function (x) { return x; });
			st['throws'](
				function () { nonIterableFlatMap.next(); },
				TypeError,
				'non-iterable return value throws'
			);

			forEach(v.strings, function (string) {
				st['throws'](
					function () { flatMap(iterator(), function () { return string; }).next(); },
					TypeError,
					'non-object return value throws even if iterable (' + debug(string) + ')'
				);

				testIterator(
					flatMap(iterator(), function () { return Object(string); }),
					[].concat(StringToCodePoints(string), StringToCodePoints(string), StringToCodePoints(string)),
					st,
					'boxed string (' + debug(string) + ')'
				);
			});

			testIterator(flatMap(iterator(), function (x) { return [x][Symbol.iterator](); }), [1, 2, 3], st, 'identity mapper in array iterator');
			testIterator(flatMap(iterator(), function (x) { return [2 * x][Symbol.iterator](); }), [2, 4, 6], st, 'doubler mapper in array iterator');

			testIterator(flatMap(iterator(), function () { return []; }), [], st, 'empty mapper in nested array iterator');
			testIterator(flatMap(iterator(), function (x) { return [[x, x + 1]][Symbol.iterator](); }), [[1, 2], [2, 3], [3, 4]], st, 'identity mapper in nested array iterator');
			testIterator(flatMap(iterator(), function (x) { return [[2 * x, 2 * (x + 1)]][Symbol.iterator](); }), [[2, 4], [4, 6], [6, 8]], st, 'doubler mapper in nested array iterator');

			testIterator(flatMap([0, 1, 2, 3][Symbol.iterator](), function (value) {
				var result = [];
				for (var i = 0; i < value; ++i) {
					result.push(value);
				}
				return result;
			}), [1, 2, 2, 3, 3, 3], st, 'test262: test/built-ins/Iterator/prototype/flatMap/flattens-iteratable');

			testIterator(flatMap([0, 1, 2, 3][Symbol.iterator](), function (value) {
				var i = 0;
				return {
					next: function () {
						if (i < value) {
							i += 1;
							return {
								value: value,
								done: false
							};
						}
						return {
							value: undefined,
							done: true
						};

					}
				};
			}), [1, 2, 2, 3, 3, 3], st, 'test262: test/built-ins/Iterator/prototype/flatMap/flattens-iterator');

			testIterator(flatMap([0][Symbol.iterator](), function () {
				var n = [0, 1, 2][Symbol.iterator]();

				var ret = {
					next: function next() {
						return n.next();
					}
				};
				ret[Symbol.iterator] = null;
				return ret;
			}), [0, 1, 2], st, 'test262: test/built-ins/Iterator/prototype/flatMap/iterable-to-iterator-fallback');

			var counts = [];
			testIterator(flatMap(['a', 'b', 'c', 'd', 'e'][Symbol.iterator](), function (value, count) {
				counts.push(count);

				if (value === 'a' || value === 'b') {
					return [0];
				}
				if (value === 'c') {
					return [1, 2];
				}
				if (value === 'd') {
					return [3, 4, 5];
				}
				if (value === 'e') {
					return [6, 7, 8, 9];
				}

				return st.fail('got unexpected value: ' + debug(v));
			}), [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], st, 'test262: test/built-ins/Iterator/prototype/flatMap/mapper-args');
			st.deepEqual(counts, [0, 1, 2, 3, 4], 'count values are as expected');

			st.test('return protocol', function (s2t) {
				var returnCount = 0;

				var iter = flatMap([0][Symbol.iterator](), function () {
					return {
						next: function next() {
							return {
								done: false,
								value: 1
							};
						},
						'return': function () {
							returnCount += 1;
							return {};
						}
					};
				});
				s2t.equal(returnCount, 0, '`return` is not called yet');

				s2t.deepEqual(iter.next(), {
					done: false,
					value: 1
				});

				s2t.equal(returnCount, 0, '`return` is not called after first yield');

				iter['return']();
				s2t.equal(returnCount, 1, '`return` is called when iterator return is called');

				iter['return']();
				s2t.equal(returnCount, 1, '`return` is not called again when iterator return is called again');

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
