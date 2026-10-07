'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var hasStrictMode = require('has-strict-mode')();
var functionsHaveNames = require('functions-have-names')();

var isEnumerable = Object.prototype.propertyIsEnumerable;

var runTests = require('./tests');

test('shimmed', function (t) {
	var fn = Array.prototype.toSorted;
	t.equal(fn.length, 1, 'Array#toSorted has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(fn.name, 'toSorted', 'Array#toSorted has name "toSorted"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Array.prototype, 'toSorted'), 'Array#toSorted is not enumerable');
		et.end();
	});

	t.test('bad array/this value', { skip: !hasStrictMode }, function (st) {
		/* eslint no-useless-call: 0 */
		st['throws'](function () { return fn.call(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return fn.call(null); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(fn), t);

	t.end();
});
