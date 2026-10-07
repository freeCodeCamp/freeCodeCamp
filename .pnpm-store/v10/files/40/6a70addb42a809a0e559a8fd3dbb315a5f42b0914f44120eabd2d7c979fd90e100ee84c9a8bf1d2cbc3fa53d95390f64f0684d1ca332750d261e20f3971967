'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(String.prototype.trim.length, 0, 'String#trim has a length of 0');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.prototype.trim.name, 'trim', 'String#trim has name "trim"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(String.prototype, 'trim'), 'String#trim is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad string/this value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return String.prototype.trim.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return String.prototype.trim.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(String.prototype.trim), t);

	t.end();
});
