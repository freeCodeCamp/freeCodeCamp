'use strict';

var defineProperties = require('define-properties');
var test = require('tape');
var callBind = require('call-bind');
var functionsHaveNames = require('functions-have-names')();
var hasProto = require('has-proto')();
var forEach = require('for-each');
var debug = require('object-inspect');
var v = require('es-value-fixtures');
var hasSymbols = require('has-symbols/shams')();
var mockProperty = require('mock-property');

var index = require('../Iterator.from');
var impl = require('../Iterator.from/implementation');

var isEnumerable = Object.prototype.propertyIsEnumerable;

var testIterator = require('./helpers/testIterator');

var $Iterator = require('../Iterator/implementation');
var iterProto = require('iterator.prototype');

var getCodePoints = function getCodePoints(str) {
	var chars = [];
	for (var i = 0; i < str.length; i++) {
		var c1 = str.charCodeAt(i);
		if (c1 >= 0xD800 && c1 < 0xDC00 && i + 1 < str.length) {
			var c2 = str.charCodeAt(i + 1);
			if (c2 >= 0xDC00 && c2 < 0xE000) {
				chars.push(str.charAt(i) + str.charAt(i + 1));
				i += 1;
				continue; // eslint-disable-line no-continue, no-restricted-syntax
			}
		}
		chars.push(str.charAt(i));
	}
	return chars;
};

module.exports = {
	tests: function (from, name, t) {
		t['throws'](
			function () { return new from(); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` itself is not a constructor'
		);
		t['throws'](
			function () { return new from({}); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` itself is not a constructor, with an argument'
		);

		forEach(v.primitives.concat(v.objects), function (nonIterator) {
			if (typeof nonIterator !== 'string') {
				t['throws'](
					function () { from(nonIterator).next(); },
					TypeError,
					debug(nonIterator) + ' is not an iterable Object'
				);
			}
		});

		t.test('actual iteration', { skip: !hasSymbols }, function (st) {
			forEach(v.nonFunctions, function (nonFunction) {
				var badIterable = {};
				badIterable[Symbol.iterator] = nonFunction;
				st['throws'](
					function () { from(badIterable).next(); },
					TypeError,
					debug(badIterable) + ' is not a function'
				);
			});

			// st['throws'](
			// 	function () { return new from([]); }, // eslint-disable-line new-cap
			// 	RangeError,
			// 	'`' + name + '` iterator is not a constructor'
			// );

			forEach(v.strings, function (string) {
				var stringIt = from(string);
				testIterator(stringIt, getCodePoints(string), st, 'string iterator: ' + debug(string));
			});

			var arrayIt = from([1, 2, 3]);
			st.equal(typeof arrayIt.next, 'function', 'has a `next` function');

			st.test('__proto__ is Iterator.prototype', { skip: !hasProto }, function (s2t) {
				var fakeIterator = {
					__proto__: iterProto,
					next: function () {}
				};
				s2t.ok(fakeIterator instanceof $Iterator, 'is an instanceof Iterator');
				s2t.equal(typeof fakeIterator.next, 'function', 'fake iterator `.next` is a function');
				s2t.equal(from(fakeIterator), fakeIterator, 'returns input when it is an instanceof Iterator');

				s2t.end();
			});

			st.test('real iterators', { skip: !hasSymbols }, function (s2t) {
				var iter = [][Symbol.iterator]();
				// eslint-disable-next-line no-proto
				var arrayIterHasIterProto = hasProto && iter.__proto__.__proto__ !== Object.prototype;
				s2t.equal(
					from(iter),
					iter,
					'array iterator becomes itself',
					{ skip: !arrayIterHasIterProto && 'node 0.12 - 3 do not have Iterator.prototype in the proto chains' }
				);

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

				from('');
				s2t.equal(observedType, 'string', 'string primitive -> primitive receiver in Symbol.iterator getter');
				from(Object(''));
				s2t.equal(observedType, 'object', 'boxed string -> boxed string in Symbol.iterator getter');

				s2t.end();
			});

			st.end();
		});
	},
	index: function () {
		test('Iterator.from: index', function (t) {
			module.exports.tests(index, 'Iterator.from', t);

			t.end();
		});
	},
	implementation: function () {
		test('Iterator.from: implementation', function (t) {
			module.exports.tests(impl, 'Iterator.from', t);

			t.end();
		});
	},
	shimmed: function () {
		test('Iterator.from: shimmed', function (t) {
			t.test('Function name', { skip: !functionsHaveNames }, function (st) {
				st.equal(Iterator.from.name, 'from', 'Iterator.from has name "from"');
				st.end();
			});

			t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
				et.equal(false, isEnumerable.call(Iterator, 'from'), 'Iterator.from is not enumerable');
				et.end();
			});

			module.exports.tests(callBind(Iterator.from, Iterator), 'Iterator.from', t);

			t.end();
		});
	}
};
