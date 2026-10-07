'use strict';

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;

var missing = {};
var theGlobal = typeof globalThis === 'object' ? globalThis : missing;

var runTests = require('./tests');

test('native', { todo: theGlobal === missing }, function (t) {
	if (theGlobal !== missing) {
		t.equal(typeof theGlobal, 'object', 'globalThis is an object');
		t.equal('globalThis' in theGlobal, true, 'globalThis is in globalThis');

		t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
			et.equal(false, isEnumerable.call(theGlobal, 'globalThis'), 'globalThis is not enumerable');
			et.end();
		});

		runTests(theGlobal, t);
	}

	t.end();
});
