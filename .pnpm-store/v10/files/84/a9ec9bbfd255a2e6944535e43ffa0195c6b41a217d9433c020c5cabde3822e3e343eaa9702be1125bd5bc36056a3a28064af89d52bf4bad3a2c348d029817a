'use strict';

require('es5-shim');
require('es6-shim');
require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var hasSymbols = require('has-symbols')();
var mockProperty = require('mock-property');

var regexMatchAll = require('../regexp-matchall');

var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();
var functionNamesConfigurable = require('functions-have-names').functionsHaveConfigurableNames();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(String.prototype.matchAll.length, 1, 'String#matchAll has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.prototype.matchAll.name, 'matchAll', 'String#matchAll has name "matchAll"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(String.prototype, 'matchAll'), 'String#matchAll is not enumerable');
		et.end();
	});

	t.test('Symbol.matchAll', { skip: !hasSymbols }, function (st) {
		st.equal(typeof Symbol.matchAll, 'symbol', 'Symbol.matchAll is a symbol');

		st.equal(typeof RegExp.prototype[Symbol.matchAll], 'function', 'Symbol.matchAll function is on RegExp.prototype');

		st.test('Function name', { skip: !functionsHaveNames }, function (s2t) {
			if (functionNamesConfigurable) {
				s2t.equal(RegExp.prototype[Symbol.matchAll].name, '[Symbol.matchAll]', 'RegExp.prototype[Symbol.matchAll] has name "[Symbol.matchAll]"');
			} else {
				s2t.equal(RegExp.prototype[Symbol.matchAll].name, 'SymbolMatchAll', 'RegExp.prototype[Symbol.matchAll] has best guess name "SymbolMatchAll"');
			}
			s2t.end();
		});

		st.test('no symbol present', function (s2t) {
			s2t.doesNotThrow(function () { 'abc'.matchAll('b'); }, 'does not throw on string input, with the symbol on regex prototype');

			s2t.teardown(mockProperty(RegExp.prototype, Symbol.matchAll, {
				nonEnumerable: true,
				value: undefined,
				nonWritable: false
			}));

			s2t['throws'](function () { 'abc'.matchAll('b'); }, 'throws on string input, without the symbol on regex prototype');

			s2t.end();
		});

		st.end();
	});

	runTests(
		callBind(String.prototype.matchAll),
		callBind(hasSymbols ? RegExp.prototype[Symbol.matchAll] : regexMatchAll),
		t
	);

	t.end();
});
