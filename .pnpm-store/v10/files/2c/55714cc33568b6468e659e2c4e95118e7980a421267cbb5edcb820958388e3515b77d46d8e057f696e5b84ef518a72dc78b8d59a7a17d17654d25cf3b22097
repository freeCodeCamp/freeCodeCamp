'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names');

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Object.entries.length, 1, 'Object.entries has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Object.entries.name, 'entries', 'Object.entries has name "entries"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Object, 'entries'), 'Object.entries is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad object value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return Object.entries(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Object.entries(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(Object.entries, t);

	t.end();
});
