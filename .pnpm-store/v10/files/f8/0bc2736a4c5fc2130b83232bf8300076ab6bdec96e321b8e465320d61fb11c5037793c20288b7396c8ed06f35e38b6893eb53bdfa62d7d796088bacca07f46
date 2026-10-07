'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Object.values.length, 1, 'Object.values has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Object.values.name, 'values', 'Object.values has name "values"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Object, 'values'), 'Object.values is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad object value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return Object.values(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Object.values(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(Object.values, t);

	t.end();
});
