'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var bind = require('function-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = function f() {}.name === 'f';

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Array.prototype.flat.length, 0, 'Array#flat has a length of 0');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Array.prototype.flat.name, 'flat', 'Array#flat has name "flat"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Array.prototype, 'flat'), 'Array#flat is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad array/this value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return Array.prototype.flat.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Array.prototype.flat.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(bind.call(Function.call, Array.prototype.flat), t);

	t.end();
});
