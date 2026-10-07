'use strict';

require('../auto');

var test = require('tape');
var supportsDescriptors = require('define-properties').supportsDescriptors;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var runTests = require('./tests');

test('shimmed', function (t) {
	t.test('enumerability', { skip: !supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Function.prototype, 'name'), 'Function#name is not enumerable');
		et.equal(false, isEnumerable.call(function foo() {}, 'name'), 'a function’s name is not enumerable');
		et.end();
	});

	runTests(function (fn) { return fn.name; }, t);

	t.end();
});
