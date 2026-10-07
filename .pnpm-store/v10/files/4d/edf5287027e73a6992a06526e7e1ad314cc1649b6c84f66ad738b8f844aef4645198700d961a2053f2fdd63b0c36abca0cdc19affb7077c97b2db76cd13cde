'use strict';

var includes = require('../');
includes.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(String.prototype.includes.length, 1, 'String#includes has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.prototype.includes.name, 'includes', 'String#includes has name "includes"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (st) {
		st.equal(false, isEnumerable.call(String.prototype, 'includes'), 'String#includes is not enumerable');
		st.end();
	});

	runTests(callBind(String.prototype.includes), t);

	t.end();
});
