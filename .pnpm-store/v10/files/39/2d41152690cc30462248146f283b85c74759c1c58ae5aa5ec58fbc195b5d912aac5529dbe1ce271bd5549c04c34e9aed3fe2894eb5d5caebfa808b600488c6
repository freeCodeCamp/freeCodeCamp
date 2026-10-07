'use strict';

require('../auto');

var runTests = require('./tests');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

test('shimmed', function (t) {
	t.equal(Object.is.length, 2, 'Object.is has a length of 2');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Object.is.name, 'is', 'Object.is has name "is"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Object, 'is'), 'Object.is is not enumerable');
		et.end();
	});

	runTests(callBind(Object.is, Object), t);

	t.end();
});
