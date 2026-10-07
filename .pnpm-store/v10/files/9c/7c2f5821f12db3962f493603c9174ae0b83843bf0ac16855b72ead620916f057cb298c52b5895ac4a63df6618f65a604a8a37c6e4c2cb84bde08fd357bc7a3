'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');

var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();
var hasStrictMode = require('has-strict-mode')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.test('ArrayBuffer support', { skip: typeof ArrayBuffer === 'undefined' }, function (st) {
		var method = ArrayBuffer.prototype.slice;

		st.equal(method.length, 2, 'ArrayBuffer#slice has a length of 2');

		st.test('Function name', { skip: !functionsHaveNames }, function (s2t) {
			s2t.equal(method.name, 'slice', 'ArrayBuffer#slice name "slice"');
			s2t.end();
		});

		st.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
			et.equal(false, isEnumerable.call(ArrayBuffer.prototype, 'slice'), 'ArrayBuffer#slice is not enumerable');
			et.end();
		});

		st.test('bad array/this value', { skip: !hasStrictMode }, function (s2t) {
			/* eslint no-useless-call: 0 */
			s2t['throws'](function () { return method.call(undefined); }, TypeError, 'undefined is not an object');
			s2t['throws'](function () { return method.call(null); }, TypeError, 'null is not an object');
			s2t.end();
		});

		t.test('has the correct descriptor', { skip: !Object.getOwnPropertyDescriptor }, function (s2t) {
			var descriptor = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'slice');

			s2t.equal(descriptor.configurable, true);
			s2t.equal(descriptor.enumerable, false);
			s2t.equal(typeof descriptor.value, 'function');
			s2t.equal(descriptor.writable, true);
			s2t.end();
		});

		runTests(callBind(method), st);

		st.end();
	});

	t.end();
});
