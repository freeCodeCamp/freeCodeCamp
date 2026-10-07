'use strict';

require('es5-shim');

var numberIsNaN = require('../');
numberIsNaN.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Number.isNaN.length, 1, 'Number.isNaN has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Number.isNaN.name, 'isNaN', 'Number.isNaN has name "isNaN"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Number, 'isNaN'), 'Number.isNaN is not enumerable');
		et.end();
	});

	runTests(Number.isNaN, t);

	t.end();
});
