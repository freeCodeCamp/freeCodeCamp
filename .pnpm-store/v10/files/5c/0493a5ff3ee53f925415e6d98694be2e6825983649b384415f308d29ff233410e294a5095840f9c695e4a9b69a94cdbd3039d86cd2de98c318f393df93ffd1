'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');

var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Reflect.getPrototypeOf.length, 1, 'Reflect.getPrototypeOf has length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Reflect.getPrototypeOf.name, 'getPrototypeOf', 'Reflect.getPrototypeOf has name "getPrototypeOf"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Reflect, 'getPrototypeOf'), 'Reflect.getPrototypeOf is not enumerable');
		et.end();
	});

	runTests(Reflect.getPrototypeOf, t);

	t.end();
});
