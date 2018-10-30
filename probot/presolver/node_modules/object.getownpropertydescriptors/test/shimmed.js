'use strict';

var getDescriptors = require('../');
getDescriptors.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var runTests = require('./tests');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = function f() {}.name === 'f';

test('shimmed', function (t) {
	t.equal(Object.getOwnPropertyDescriptors.length, 1, 'Object.getOwnPropertyDescriptors has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Object.getOwnPropertyDescriptors.name, 'getOwnPropertyDescriptors', 'Object.getOwnPropertyDescriptors has name "getOwnPropertyDescriptors"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Object, 'getOwnPropertyDescriptors'), 'Object.getOwnPropertyDescriptors is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad object/this value', { skip: !supportsStrictMode }, function (st) {
		st.throws(function () { return getDescriptors(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st.throws(function () { return getDescriptors(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(Object.getOwnPropertyDescriptors, t);

	t.end();
});
