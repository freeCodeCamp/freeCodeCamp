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

var index = require('../Iterator.prototype.take');
var impl = require('../Iterator.prototype.take/implementation');

var fnName = 'take';

var isEnumerable = Object.prototype.propertyIsEnumerable;

var testIterator = require('./helpers/testIterator');

module.exports = {
	tests: function (take, name, t) {
		t['throws'](
			function () { return new take(); }, // eslint-disable-line new-cap
			TypeError,
			'`' + name + '` itself is not a constructor'
		);

		forEach(v.primitives.concat(v.objects), function (nonIterator) {
			t['throws'](
				function () { iterate(take(nonIterator, 1)); },
				TypeError,
				debug(nonIterator) + ' is not an Object with a callable `next` method'
			);

			if (nonIterator != null && typeof nonIterator !== 'string') {
				var badNext = { next: nonIterator };
				t['throws'](
					function () { iterate(take(badNext, 1)); },
					TypeError,
					debug(badNext) + ' is not an Object with a callable `next` method'
				);
			}
		});

		var arr = [1, 2, 3];

		t.test('actual iteration', { skip: !hasSymbols }, function (st) {
			var iterator = callBind(arr[Symbol.iterator], arr);

			st['throws'](
				function () { take(iterator(), -3); },
				RangeError,
				'-3 is not >= 0'
			);

			st['throws'](
				function () { return new take(iterator()); }, // eslint-disable-line new-cap
				TypeError,
				'`' + name + '` iterator is not a constructor'
			);
			st['throws'](
				function () { return new take(iterator(), 0); }, // eslint-disable-line new-cap
				TypeError,
				'`' + name + '` iterator is not a constructor'
			);

			testIterator(iterator(), [1, 2, 3], st, 'original');
			testIterator(take(iterator(), 0), [], st, 'take 0');
			testIterator(take(iterator(), 1), [1], st, 'take 1');
			testIterator(take(iterator(), 2), [1, 2], st, 'take 2');
			testIterator(take(iterator(), 3), [1, 2, 3], st, 'take 3');
			testIterator(take(iterator(), Infinity), [1, 2, 3], st, 'take ∞');

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
