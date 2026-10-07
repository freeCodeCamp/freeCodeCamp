'use strict';

require('../auto');

var runTests = require('./tests');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

test('shimmed', function (t) {
	t.equal(String.prototype.trimStart.length, 0, 'String#trimStart has a length of 0');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal((/^(?:trimLeft|trimStart)$/).test(String.prototype.trimStart.name), true, 'String#trimStart has name "trimLeft" or "trimStart"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(String.prototype, 'trimStart'), 'String#trimStart is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad string/this value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return String.prototype.trimStart.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return String.prototype.trimStart.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(String.prototype.trimStart), t);

	t.end();
});
