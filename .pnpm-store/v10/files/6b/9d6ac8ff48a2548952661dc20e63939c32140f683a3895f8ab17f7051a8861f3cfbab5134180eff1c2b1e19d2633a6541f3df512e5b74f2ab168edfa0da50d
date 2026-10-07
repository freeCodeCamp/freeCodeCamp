'use strict';

var orig = Array.prototype.includes;

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.comment('shimmed: ' + (orig === Array.prototype.includes ? 'no' : 'yes'));
	t.equal(Array.prototype.includes.length, 1, 'Array#includes has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Array.prototype.includes.name, 'includes', 'Array#includes has name "includes"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Array.prototype, 'includes'), 'Array#includes is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad array/this value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return Array.prototype.includes.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Array.prototype.includes.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(Array.prototype.includes), t);

	t.end();
});
