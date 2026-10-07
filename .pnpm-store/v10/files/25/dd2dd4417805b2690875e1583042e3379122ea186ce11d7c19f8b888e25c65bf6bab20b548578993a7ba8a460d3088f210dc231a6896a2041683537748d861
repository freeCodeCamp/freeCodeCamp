'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(typeof globalThis, 'object', 'globalThis is an object');
	t.equal('globalThis' in globalThis, true, 'globalThis is in globalThis');

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(globalThis, 'globalThis'), 'globalThis.globalThis is not enumerable');
		et.end();
	});

	t.test('writability', { skip: !defineProperties.supportsDescriptors }, function (wt) {
		var desc = Object.getOwnPropertyDescriptor(globalThis, 'globalThis');
		wt.equal(desc.writable, true, 'globalThis.globalThis is writable');
		wt.end();
	});

	runTests(globalThis.globalThis, t);

	t.end();
});
