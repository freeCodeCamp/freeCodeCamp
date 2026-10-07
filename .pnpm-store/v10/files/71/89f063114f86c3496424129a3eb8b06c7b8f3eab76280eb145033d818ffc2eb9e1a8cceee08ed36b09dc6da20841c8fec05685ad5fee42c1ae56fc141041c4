'use strict';

var defineProperties = require('define-properties');
var test = require('tape');
var callBind = require('call-bind');
var functionsHaveNames = require('functions-have-names')();
var forEach = require('for-each');
var debug = require('object-inspect');
var v = require('es-value-fixtures');
var hasSymbols = require('has-symbols/shams')();
var mockProperty = require('mock-property');
var hasPropertyDescriptors = require('has-property-descriptors')();

var index = require('../Iterator.concat');
var impl = require('../Iterator.concat/implementation');
var from = require('../Iterator.from/polyfill')();

var isEnumerable = Object.prototype.propertyIsEnumerable;

var testIterator = require('./helpers/testIterator');

module.exports = {
	tests: function (concat, name, t) {
		t['throws'](
			function () { return new concat(); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` itself is not a constructor'
		);
		t['throws'](
			function () { return new concat({}); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` itself is not a constructor, with an argument'
		);

		forEach(v.primitives.concat(v.objects), function (nonIterator) {
			t['throws'](
				function () { concat(nonIterator); },
				TypeError,
				debug(nonIterator) + ' is not an iterable Object'
			);
		});

		t.deepEqual(concat().next(), { value: undefined, done: true }, 'no arguments -> empty iterator');

		t.test('actual iteration', { skip: !hasSymbols }, function (st) {
			forEach(v.nonFunctions, function (nonFunction) {
				var badIterable = {};
				badIterable[Symbol.iterator] = nonFunction;
				st['throws'](
					function () { concat([], badIterable, []); },
					TypeError,
					debug(badIterable) + '[Symbol.iterator] is not a function'
				);
			});

			forEach(v.primitives, function (nonObject) {
				var badIterable = {};
				badIterable[Symbol.iterator] = function () { return nonObject; };
				st['throws'](
					function () { concat([], badIterable, []).next(); },
					TypeError,
					debug(badIterable) + '[Symbol.iterator] does not return an object'
				);
			});

			forEach(v.strings, function (string) {
				st['throws'](
					function () { concat(string); },
					TypeError,
					'non-objects are not considered iterable'
				);
				var stringIt = concat(['a'], [string], ['c']);
				testIterator(stringIt, ['a', string, 'c'], st, 'string iterator: ' + debug(string));
			});

			var arrayIt = concat([1, 2, 3]);
			st.equal(typeof arrayIt.next, 'function', 'has a `next` function');

			st.test('real iterators', { skip: !hasSymbols }, function (s2t) {
				var iter = [1, 2][Symbol.iterator]();
				testIterator(concat(iter, [3]), [1, 2, 3], s2t, 'array iterator + array yields combined results');

				s2t.end();
			});

			st.test('observability in a replaced String iterator', function (s2t) {
				var originalStringIterator = String.prototype[Symbol.iterator];
				var observedType;
				s2t.teardown(mockProperty(String.prototype, Symbol.iterator, {
					get: function () {
						'use strict'; // eslint-disable-line strict, lines-around-directive

						observedType = typeof this;
						return originalStringIterator;
					}
				}));

				concat(from(''));
				s2t.equal(observedType, 'string', 'string primitive -> primitive receiver in Symbol.iterator getter');
				concat(from(Object('')));
				s2t.equal(observedType, 'object', 'boxed string -> boxed string in Symbol.iterator getter');

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/arguments-checked-in-order', { skip: !hasPropertyDescriptors }, function (s2t) {
				var getIterator = 0;

				var iterable1 = {};
				Object.defineProperty(iterable1, Symbol.iterator, {
					get: function () {
						getIterator += 1;
						return function () {
							throw new EvalError();
						};
					}
				});

				var iterable2 = {};
				Object.defineProperty(iterable2, Symbol.iterator, {
					get: function () {
						throw new EvalError();
					}
				});

				s2t.equal(getIterator, 0);

				s2t['throws'](function () { concat(iterable1, null, iterable2); }, TypeError);

				s2t.equal(getIterator, 1);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/fresh-iterator-result', function (s2t) {
				var oldIterResult = {
					done: false,
					value: 123
				};

				var testIterator1 = {
					next: function () {
						return oldIterResult;
					}
				};

				var iterable = {};
				iterable[Symbol.iterator] = function () {
					return testIterator1;
				};

				var iterator = concat(iterable);

				var iterResult = iterator.next();

				s2t.equal(iterResult.done, false);
				s2t.equal(iterResult.value, 123);

				s2t.notEqual(iterResult, oldIterResult);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/get-iterator-method-only-once', { skip: !hasPropertyDescriptors }, function (s2t) {
				var iteratorGets = 0;
				var iteratorCalls = 0;
				var array = [1, 2, 3];

				function CountingIterable() {}
				Object.defineProperty(
					CountingIterable.prototype,
					Symbol.iterator,
					{
						get: function () {
							iteratorGets += 1;

							return function () {
								iteratorCalls += 1;
								return array[Symbol.iterator]();
							};
						}
					}
				);

				var iterable = new CountingIterable();

				s2t.equal(iteratorGets, 0);
				s2t.equal(iteratorCalls, 0);

				var iter = concat(iterable);

				s2t.equal(iteratorGets, 1);
				s2t.equal(iteratorCalls, 0);

				testIterator(iter, array, s2t, 'iterating over the iterator calls the iterator function once');

				s2t.equal(iteratorGets, 1);
				s2t.equal(iteratorCalls, 1);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/get-iterator-method-throws', { skip: !hasPropertyDescriptors }, function (s2t) {
				var iterable = {};
				Object.defineProperty(iterable, Symbol.iterator, {
					get: function () {
						throw new EvalError();
					}
				});

				s2t['throws'](function () { concat(iterable); }, EvalError);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/inner-iterator-created-in-order', function (s2t) {
				var calledIterator = [];

				var iterable1 = {};
				iterable1[Symbol.iterator] = function () {
					calledIterator.push('iterable1');
					return [1][Symbol.iterator]();
				};

				var iterable2 = {};
				iterable2[Symbol.iterator] = function () {
					calledIterator.push('iterable2');
					return [2][Symbol.iterator]();
				};

				var iterator = concat(iterable1, iterable2);

				s2t.deepEqual(calledIterator, []);

				s2t.deepEqual(iterator.next(), { done: false, value: 1 });

				s2t.deepEqual(calledIterator, ['iterable1']);

				s2t.deepEqual(iterator.next(), { done: false, value: 2 });

				s2t.deepEqual(calledIterator, ['iterable1', 'iterable2']);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/next-method-called-with-zero-arguments', function (s2t) {
				var nextCalled = 0;

				var testIterator1 = {
					next: function () {
						nextCalled += 1;
						s2t.equal(arguments.length, 0);

						return {
							done: false,
							value: 0
						};
					}
				};

				var iterable = {};
				iterable[Symbol.iterator] = function () {
					return testIterator1;
				};

				var iterator = concat(iterable);
				s2t.equal(nextCalled, 0);

				iterator.next();
				s2t.equal(nextCalled, 1);

				iterator.next(1);
				s2t.equal(nextCalled, 2);

				iterator.next(1, 2);
				s2t.equal(nextCalled, 3);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/next-method-returns-non-object', function (s2t) {
				var nonObjectIterator = {
					next: function () {
						return null;
					}
				};

				var iterable = {};
				iterable[Symbol.iterator] = function () {
					return nonObjectIterator;
				};

				var iterator = concat(iterable);

				s2t['throws'](function () { iterator.next(); }, TypeError);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/next-method-returns-throwing-done', { skip: !hasPropertyDescriptors }, function (s2t) {
				var throwingIterator = {
					next: function () {
						var result = { done: null, value: 1 };
						Object.defineProperty(result, 'done', {
							get: function () {
								throw new EvalError();
							}
						});
						return result;
					},
					'return': function () {
						throw new Error();
					}
				};

				var iterable = {};
				iterable[Symbol.iterator] = function () {
					return throwingIterator;
				};

				var iterator = concat(iterable);

				s2t['throws'](function () { iterator.next(); }, EvalError);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/next-method-returns-throwing-value-done', { skip: !hasPropertyDescriptors }, function (s2t) {
				function ReturnCalledError() {}
				function ValueGetterError() {}

				var throwingIterator = {
					next: function () {
						var result = { value: null, done: true };
						Object.defineProperty(result, 'value', {
							get: function () {
								throw new ValueGetterError();
							}
						});
						return result;
					},
					'return': function () {
						throw new ReturnCalledError();
					}
				};

				var iterable = {};
				iterable[Symbol.iterator] = function () {
					return throwingIterator;
				};

				var iterator = concat(iterable);

				var iterResult = iterator.next();

				s2t.equal(iterResult.done, true);
				s2t.equal(iterResult.value, undefined);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/next-method-returns-throwing-value', { skip: !hasPropertyDescriptors }, function (s2t) {
				var throwingIterator = {
					next: function () {
						var result = { value: null, done: false };
						Object.defineProperty(result, 'value', {
							get: function () {
								throw new EvalError();
							}
						});
						return result;
					},
					'return': function () {
						throw new Error();
					}
				};

				var iterable = {};
				iterable[Symbol.iterator] = function () {
					return throwingIterator;
				};

				var iterator = concat(iterable);

				s2t['throws'](function () { iterator.next(); }, EvalError);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/next-method-throws', function (s2t) {
				var throwingIterator = {
					next: function () {
						throw new EvalError();
					}
				};

				var iterable = {};
				iterable[Symbol.iterator] = function () {
					return throwingIterator;
				};

				var iterator = concat(iterable);

				s2t['throws'](function () { iterator.next(); }, EvalError);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/return-is-not-forwarded-after-exhaustion', function (s2t) {
				var testIterator1 = {
					next: function () {
						return {
							done: true,
							value: undefined
						};
					},
					'return': function () {
						throw new EvalError();
					}
				};

				var iterable = {};
				iterable[Symbol.iterator] = function () {
					return testIterator1;
				};

				var iterator = concat(iterable);
				iterator.next();
				iterator['return']();

				s2t.end();
			});

			t.test('test262: test/built-ins/Iterator/concat/return-is-not-forwarded-before-initial-start', function (s2t) {
				var testIterator1 = {
					next: function () {
						return {
							done: false,
							value: 1
						};
					},
					'return': function () {
						throw new EvalError();
					}
				};

				var iterable = {};
				iterable[Symbol.iterator] = function () {
					return testIterator1;
				};

				var iterator = concat(iterable);
				iterator['return']();
				iterator.next();
				iterator['return']();

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/return-method-called-with-zero-arguments', function (s2t) {
				var returnCalled = 0;

				var testIterator1 = {
					next: function () {
						return { done: false };
					},
					'return': function () {
						returnCalled += 1;
						s2t.equal(arguments.length, 0);
						return { done: true };
					}
				};

				var iterable = {};
				iterable[Symbol.iterator] = function () {
					return testIterator1;
				};

				var iterator;

				// Call with zero arguments.
				iterator = concat(iterable);
				iterator.next();
				s2t.equal(returnCalled, 0);

				iterator['return']();
				s2t.equal(returnCalled, 1);

				// Call with one argument.
				iterator = concat(iterable);
				iterator.next();
				s2t.equal(returnCalled, 1);

				iterator['return'](1);
				s2t.equal(returnCalled, 2);

				// Call with two arguments.
				iterator = concat(iterable);
				iterator.next();
				s2t.equal(returnCalled, 2);

				iterator['return'](1, 2);
				s2t.equal(returnCalled, 3);

				s2t.end();
			});

			st.test('test262: test/built-ins/Iterator/concat/throws-typeerror-when-generator-is-running-next', function (s2t) {
				var enterCount = 0;

				var iterator;

				var testIterator1 = {
					next: function () {
						enterCount += 1;
						iterator.next();
						return { done: false };
					}
				};

				var iterable = {};
				iterable[Symbol.iterator] = function () {
					return testIterator1;
				};

				iterator = concat(iterable);

				s2t.equal(enterCount, 0);

				s2t['throws'](function () { iterator.next(); }, TypeError);

				s2t.equal(enterCount, 1);

				s2t.end();
			});

			st.end();
		});
	},
	index: function () {
		test('Iterator.concat: index', function (t) {
			module.exports.tests(index, 'Iterator.concat', t);

			t.end();
		});
	},
	implementation: function () {
		test('Iterator.concat: implementation', function (t) {
			module.exports.tests(impl, 'Iterator.concat', t);

			t.end();
		});
	},
	shimmed: function () {
		test('Iterator.concat: shimmed', function (t) {
			t.test('Function name', { skip: !functionsHaveNames }, function (st) {
				st.equal(Iterator.concat.name, 'concat', 'Iterator.concat has name "concat"');
				st.end();
			});

			t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
				et.equal(false, isEnumerable.call(Iterator, 'concat'), 'Iterator.concat is not enumerable');
				et.end();
			});

			t.equal(Iterator.concat.length, 0, 'Iterator.concat has length 0');

			module.exports.tests(callBind(Iterator.concat, Iterator), 'Iterator.concat', t);

			t.end();
		});
	}
};
