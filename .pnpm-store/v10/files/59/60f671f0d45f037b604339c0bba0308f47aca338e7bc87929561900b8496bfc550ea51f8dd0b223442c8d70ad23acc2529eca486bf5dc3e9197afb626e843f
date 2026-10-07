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
var hasPropertyDescriptors = require('has-property-descriptors')();
var iterate = require('iterate-iterator');

var index = require('../Iterator.prototype.drop');
var impl = require('../Iterator.prototype.drop/implementation');

var fnName = 'drop';

var isEnumerable = Object.prototype.propertyIsEnumerable;

var testIterator = require('./helpers/testIterator');

module.exports = {
	tests: function (drop, name, t) {
		t['throws'](
			function () { return new drop(); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` itself is not a constructor'
		);

		forEach(v.primitives.concat(v.objects), function (nonIterator) {
			t['throws'](
				function () { iterate(drop(nonIterator, 0)); },
				TypeError,
				debug(nonIterator) + ' is not an Object with a callable `next` method'
			);

			var badNext = { next: nonIterator };
			t['throws'](
				function () { iterate(drop(badNext, 0)); },
				TypeError,
				debug(badNext) + ' is not an Object with a callable `next` method'
			);
		});

		t.test('observable lookups', { skip: !hasPropertyDescriptors }, function (st) {
			var effects = [];

			var obj = {};
			Object.defineProperty(obj, 'next', {
				configurable: true,
				enumerable: true,
				get: function next() {
					effects.push('get next');
					return function () {
						return { done: true, value: undefined };
					};
				}
			});
			drop(obj, {
				valueOf: function valueOf() {
					effects.push('ToNumber limit');
					return 0;
				}
			});

			st.deepEqual(effects, [
				'ToNumber limit',
				'get next'
			]);
			st.end();
		});

		var arr = [1, 2, 3];

		t.test('actual iteration', { skip: !hasSymbols }, function (st) {
			var iterator = callBind(arr[Symbol.iterator], arr);

			st['throws'](
				function () { drop(iterator(), -3); },
				RangeError,
				'-3 is not >= 0'
			);

			st['throws'](
				function () { return new drop(iterator()); }, // eslint-disable-line new-cap
				TypeError,
				'`' + name + '` iterator is not a constructor'
			);
			st['throws'](
				function () { return new drop(iterator(), 0); }, // eslint-disable-line new-cap
				TypeError,
				'`' + name + '` iterator is not a constructor'
			);

			testIterator(iterator(), [1, 2, 3], st, 'original');
			testIterator(drop(iterator(), 0), [1, 2, 3], st, 'drop 0');
			testIterator(drop(iterator(), 1), [2, 3], st, 'drop 1');
			testIterator(drop(iterator(), 2), [3], st, 'drop 2');
			testIterator(drop(iterator(), 3), [], st, 'drop 3');
			testIterator(drop(iterator(), Infinity), [], st, 'drop ∞');

			st.end();
		});

		t.test('262: test/built-ins/Iterator/prototype/drop/get-return-method-throws', { skip: !hasPropertyDescriptors }, function (st) {
			var badIterator = {
				next: function next() {
					return {
						done: false,
						value: 1
					};
				}
			};

			Object.defineProperty(badIterator, 'return', {
				configurable: true,
				enumerable: true,
				get: function () { throw new SyntaxError(); }
			});

			var iter = drop(badIterator, 1);
			iter.next();

			st['throws'](
				function () { iter['return'](); },
				SyntaxError,
				'gets the `return` method, whose getter throws'
			);

			st.end();
		});

		t.test('262: test/built-ins/Iterator/prototype/drop/return-is-forwarded', function (st) {
			var returnCount = 0;

			var makeBadIterator = function makeBadIterator() {
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
			};

			var iter1 = drop(makeBadIterator(), 0);
			st.equal(returnCount, 0, 'iter1, before return()');
			iter1['return']();
			st.equal(returnCount, 1, 'iter1, after return()');

			var iter2 = drop(makeBadIterator(), 1);
			st.equal(returnCount, 1, 'iter2, before return()');
			iter2['return']();
			st.equal(returnCount, 2, 'iter2, after return()');

			// 5 drops (i wish i had pipeline)
			var iter3 = drop(
				drop(
					drop(
						drop(
							drop(
								makeBadIterator(),
								1
							),
							1
						),
						1
					),
					1
				),
				1
			);
			st.equal(returnCount, 2, 'iter3, before return()');
			iter3['return']();
			st.equal(returnCount, 3, 'iter3, after return()');

			st.end();
		});

		t.test('262: test/built-ins/Iterator/prototype/drop/return-is-not-forwarded-after-exhaustion', { skip: !hasPropertyDescriptors }, function (st) {
			var makeBadIterator = function makeBadIterator() {
				return {
					next: function next() {
						return {
							done: true,
							value: undefined
						};
					},
					'return': function () {
						throw new SyntaxError();
					}
				};
			};

			var iter1 = drop(makeBadIterator(), 0);
			st['throws'](
				function () { iter1['return'](); },
				SyntaxError,
				'iter1, return() throws'
			);
			iter1.next();
			iter1['return']();

			var iter2 = drop(makeBadIterator(), 1);
			st['throws'](
				function () { iter2['return'](); },
				SyntaxError,
				'iter2, return() throws'
			);
			iter2.next();
			iter2['return']();

			// 5 drops (i wish i had pipeline)
			var iter3 = drop(
				drop(
					drop(
						drop(
							drop(
								makeBadIterator(),
								1
							),
							1
						),
						1
					),
					1
				),
				1
			);
			st['throws'](
				function () { iter3['return'](); },
				SyntaxError,
				'iter3, return() throws'
			);
			iter3.next();
			iter3['return']();

			var iter4 = drop(makeBadIterator(), 10);
			st['throws'](
				function () { iter4['return'](); },
				SyntaxError,
				'iter4, return() throws'
			);
			iter4.next();
			iter4['return']();

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
