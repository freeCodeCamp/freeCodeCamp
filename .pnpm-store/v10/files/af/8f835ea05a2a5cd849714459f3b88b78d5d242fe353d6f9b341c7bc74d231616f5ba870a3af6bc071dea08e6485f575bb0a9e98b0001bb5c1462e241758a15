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

var index = require('../Iterator.zipKeyed');
var impl = require('../Iterator.zipKeyed/implementation');
var from = require('../Iterator.from/polyfill')();

var testIterator = require('./helpers/testIterator');

var isEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = {
	tests: function (zipKeyed, name, t) {
		t['throws'](
			function () { return new zipKeyed(); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` itself is not a constructor'
		);
		t['throws'](
			function () { return new zipKeyed({}); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` itself is not a constructor, with an argument'
		);

		forEach(v.primitives, function (primitive) {
			t['throws'](
				function () { zipKeyed(primitive); },
				TypeError,
				debug(primitive) + ' is not an Object'
			);
			if (primitive != null) {
				t['throws'](
					function () { zipKeyed({ a: primitive }); },
					TypeError,
					'key "a" on iterables object is ' + debug(primitive) + ' which is not an iterable Object'
				);
			}
		});

		forEach(v.objects, function (nonIterator) {
			t.doesNotThrow(function () { zipKeyed({ a: nonIterator }); }, 'does not throw until `.next()`');

			t['throws'](
				function () { zipKeyed({ a: nonIterator }).next(); },
				TypeError,
				'key "a" on iterables object is ' + debug(nonIterator) + ' which is not an iterable Object'
			);
		});

		t.test('actual iteration', { skip: !hasSymbols }, function (st) {
			forEach(v.nonFunctions, function (nonFunction) {
				if (nonFunction != null) {
					var badIterable = {};
					badIterable[Symbol.iterator] = nonFunction;
					st['throws'](
						function () { zipKeyed({ a: [], b: badIterable, c: [] }).next(); },
						TypeError,
						'key "b" on iterables object is ' + debug(badIterable) + ' is not a function'
					);
				}
			});

			forEach(v.strings, function (string) {
				st['throws'](
					function () { zipKeyed({ a: string }); },
					TypeError,
					'key "a" on iterables object is an iterable primitive, but non-objects are not considered iterable'
				);
			});

			st.test('real iterators', { skip: !hasSymbols }, function (s2t) {
				var iter = [['a', 1], ['b', 2]][Symbol.iterator]();
				var iterator = zipKeyed({ a: iter, b: ['a', 3], c: ['b', 4] });

				testIterator(
					iterator,
					[
						{ __proto__: null, a: ['a', 1], b: 'a', c: 'b' },
						{ __proto__: null, a: ['b', 2], b: 3, c: 4 }
					],
					s2t,
					'array iterator + array yields combined results'
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

				zipKeyed([from('')]);
				s2t.equal(observedType, 'string', 'string primitive -> primitive receiver in Symbol.iterator getter');
				zipKeyed([from(Object(''))]);
				s2t.equal(observedType, 'object', 'boxed string -> boxed string in Symbol.iterator getter');

				s2t.end();
			});

			st.end();
		});
	},
	index: function () {
		test('Iterator.zipKeyed: index', function (t) {
			module.exports.tests(index, 'Iterator.zipKeyed', t);

			t.end();
		});
	},
	implementation: function () {
		test('Iterator.zipKeyed: implementation', function (t) {
			module.exports.tests(impl, 'Iterator.zipKeyed', t);

			t.end();
		});
	},
	shimmed: function () {
		test('Iterator.zipKeyed: shimmed', function (t) {
			t.test('Function name', { skip: !functionsHaveNames }, function (st) {
				st.equal(Iterator.zipKeyed.name, 'zipKeyed', 'Iterator.zipKeyed has name "zipKeyed"');
				st.end();
			});

			t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
				et.equal(false, isEnumerable.call(Iterator, 'zipKeyed'), 'Iterator.zipKeyed is not enumerable');
				et.end();
			});

			module.exports.tests(callBind(Iterator.zipKeyed, Iterator), 'Iterator.zipKeyed', t);

			t.end();
		});
	}
};
