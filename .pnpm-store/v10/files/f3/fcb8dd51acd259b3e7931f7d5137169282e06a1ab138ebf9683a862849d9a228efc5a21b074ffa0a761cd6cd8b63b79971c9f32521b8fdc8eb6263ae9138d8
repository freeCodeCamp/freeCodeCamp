'use strict';

var repeat = require('../');
repeat.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var bind = require('function-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(String.prototype.repeat.length, 1, 'String#repeat has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.prototype.repeat.name, 'repeat', 'String#repeat has name "repeat"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (st) {
		st.equal(false, isEnumerable.call(String.prototype, 'repeat'), 'String#repeat is not enumerable');
		st.end();
	});

	runTests(bind.call(Function.call, String.prototype.repeat), t);

	t.end();
});
