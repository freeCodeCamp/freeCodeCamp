'use strict';

require('../auto');

var test = require('tape');
var keys = require('object-keys');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = function f() {}.name === 'f';

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Object.fromEntries.length, 1, 'Object.fromEntries has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Object.fromEntries.name, 'fromEntries', 'Object.fromEntries has name "fromEntries"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Object, 'fromEntries'), 'Object.fromEntries is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad object value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return Object.fromEntries(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Object.fromEntries(null); }, TypeError, 'null is not an object');
		st.end();
	});

	t.test('does not mutate global method', function (st) {
		st.deepEqual(keys(Object.fromEntries), [], 'no enumerable keys');
		st.equal('shim' in Object.fromEntries, false, '"shim" is not present');
		st.equal('getPolyfill' in Object.fromEntries, false, '"getPolyfill" is not present');
		st.equal('implementation' in Object.fromEntries, false, '"implementation" is not present');
		st.end();
	});

	runTests(Object.fromEntries, t);

	t.end();
});
