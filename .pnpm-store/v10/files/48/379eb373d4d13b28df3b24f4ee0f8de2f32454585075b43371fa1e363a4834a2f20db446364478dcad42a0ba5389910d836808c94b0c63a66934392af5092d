'use strict';

var defineProperties = require('define-properties');
var test = require('tape');
var hasSymbols = require('has-symbols')();
var hasToStringTag = require('has-tostringtag');
var functionsHaveNames = require('functions-have-names')();
var functionsHaveConfigurableNames = require('functions-have-names').functionsHaveConfigurableNames();

var index = require('../Iterator.prototype');
var impl = require('../Iterator.prototype/implementation');

var isEnumerable = Object.prototype.propertyIsEnumerable;

var $Iterator = require('../Iterator/implementation');

module.exports = {
	tests: function (proto, name, t) {
		t.notEqual(proto, null, 'is not null');
		t.equal(typeof proto, 'object', 'is an object');

		t.test('Symbol.iterator', { skip: !hasSymbols }, function (st) {
			st.equal(typeof proto[Symbol.iterator], 'function', 'has a `Symbol.iterator` method');
			st.equal(
				proto[Symbol.iterator].name,
				'[Symbol.iterator]',
				'has name "[Symbol.iterator]"',
				{ skip: functionsHaveNames && !functionsHaveConfigurableNames }
			);
			st.equal(proto[Symbol.iterator](), proto, 'function returns proto');
			st.equal(proto[Symbol.iterator].call($Iterator), $Iterator, 'function returns receiver');

			st.end();
		});

		t.test(
			'Symbol.toStringTag',
			{ skip: !hasToStringTag || 'temporarily skipped pending https://bugs.chromium.org/p/chromium/issues/detail?id=1477372' },
			function (st) {
				st.equal(proto[Symbol.toStringTag], 'Iterator', 'has a `Symbol.toStringTag` property');

				st.end();
			}
		);
	},
	index: function () {
		test('Iterator.prototype: index', function (t) {
			module.exports.tests(index, 'Iterator.prototype', t);

			t.end();
		});
	},
	implementation: function () {
		test('Iterator.prototype: implementation', function (t) {
			module.exports.tests(impl, 'Iterator.prototype', t);

			t.end();
		});
	},
	shimmed: function () {
		test('Iterator.prototype: shimmed', function (t) {
			t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
				et.equal(false, isEnumerable.call(Iterator, 'prototype'), 'Iterator.prototype is not enumerable');
				et.end();
			});

			module.exports.tests(Iterator.prototype, 'Iterator.prototype', t);

			t.end();
		});
	}
};
