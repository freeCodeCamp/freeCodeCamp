'use strict';

var assign = require('../');
assign.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = function f() {}.name === 'f';

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Object.assign.length, 2, 'Object.assign has a length of 2');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Object.assign.name, 'assign', 'Object.assign has name "assign"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Object, 'assign'), 'Object.assign is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad object value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return Object.assign(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Object.assign(null); }, TypeError, 'null is not an object');
		st.end();
	});

	// v8 in node 0.8 and 0.10 have non-enumerable string properties
	var stringCharsAreEnumerable = isEnumerable.call('xy', 0);
	t.test('when Object.assign is present and has pending exceptions', { skip: !stringCharsAreEnumerable || !Object.preventExtensions }, function (st) {
		// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
		// which is 72% slower than our shim, and Firefox 40's native implementation.
		var thrower = Object.preventExtensions({ 1: '2' });
		var error;
		try { Object.assign(thrower, 'xy'); } catch (e) { error = e; }
		st.equal(error instanceof TypeError, true, 'error is TypeError');
		st.equal(thrower[1], '2', 'thrower[1] === "2"');

		st.end();
	});

	runTests(Object.assign, t);

	t.end();
});
