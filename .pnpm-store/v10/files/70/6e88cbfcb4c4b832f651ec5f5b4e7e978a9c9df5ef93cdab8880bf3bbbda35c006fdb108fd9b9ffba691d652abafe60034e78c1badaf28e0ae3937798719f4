'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = function f() {}.name === 'f';

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Array.prototype.flatMap.length, 1, 'Array#flatMap has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Array.prototype.flatMap.name, 'flatMap', 'Array#flatMap has name "flatMap"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Array.prototype, 'flatMap'), 'Array#flatMap is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad array/this value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return Array.prototype.flatMap.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Array.prototype.flatMap.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(Array.prototype.flatMap), t);

	t.end();
});
