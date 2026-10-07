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

var index = require('../Iterator.zip');
var impl = require('../Iterator.zip/implementation');
var from = require('../Iterator.from/polyfill')();

var isEnumerable = Object.prototype.propertyIsEnumerable;

var testIterator = require('./helpers/testIterator');

module.exports = {
	tests: function (zip, name, t) {
		t['throws'](
			function () { return new zip(); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` itself is not a constructor'
		);
		t['throws'](
			function () { return new zip({}); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` itself is not a constructor, with an argument'
		);

		forEach(v.primitives.concat(v.objects), function (nonIterator) {
			t['throws'](
				function () { zip(nonIterator, []); },
				TypeError,
				debug(nonIterator) + ' is not an iterable Object'
			);
		});

		t.test('actual iteration', { skip: !hasSymbols }, function (st) {
			forEach(v.nonFunctions, function (nonFunction) {
				if (nonFunction != null) {
					var badIterable = {};
					badIterable[Symbol.iterator] = nonFunction;
					st['throws'](
						function () { zip([[], badIterable, []]).next(); },
						TypeError,
						debug(badIterable) + ' is not a function'
					);
				}
			});

			forEach(v.strings, function (string) {
				st['throws'](
					function () { zip([string]); },
					TypeError,
					'non-objects are not considered iterable'
				);
			});

			var arrayIt = zip([[1, 2, 3]]);
			st.equal(typeof arrayIt.next, 'function', 'has a `next` function');

			st.test('real iterators', { skip: !hasSymbols }, function (s2t) {
				var iter = [1, 2][Symbol.iterator]();
				testIterator(zip([iter, [3, 4]]), [[1, 3], [2, 4]], s2t, 'array iterator + array yields combined results');

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

				zip([from('')]);
				s2t.equal(observedType, 'string', 'string primitive -> primitive receiver in Symbol.iterator getter');
				zip([from(Object(''))]);
				s2t.equal(observedType, 'object', 'boxed string -> boxed string in Symbol.iterator getter');

				s2t.end();
			});

			st.end();
		});
	},
	index: function () {
		test('Iterator.zip: index', function (t) {
			module.exports.tests(index, 'Iterator.zip', t);

			t.end();
		});
	},
	implementation: function () {
		test('Iterator.zip: implementation', function (t) {
			module.exports.tests(impl, 'Iterator.zip', t);

			t.end();
		});
	},
	shimmed: function () {
		test('Iterator.zip: shimmed', function (t) {
			t.test('Function name', { skip: !functionsHaveNames }, function (st) {
				st.equal(Iterator.zip.name, 'zip', 'Iterator.zip has name "zip"');
				st.end();
			});

			t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
				et.equal(false, isEnumerable.call(Iterator, 'zip'), 'Iterator.zip is not enumerable');
				et.end();
			});

			module.exports.tests(callBind(Iterator.zip, Iterator), 'Iterator.zip', t);

			t.end();
		});
	}
};
