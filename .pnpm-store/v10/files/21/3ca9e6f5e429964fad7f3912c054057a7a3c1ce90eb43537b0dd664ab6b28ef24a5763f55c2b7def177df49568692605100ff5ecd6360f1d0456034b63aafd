'use strict';

var orig = Array.prototype.findLastIndex;

require('../auto');

var test = require('tape');
var hasOwn = require('hasown');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var supportsStrictMode = require('has-strict-mode')();
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.comment('shimmed: ' + (orig === Array.prototype.findLastIndex ? 'no' : 'yes'));

	t.equal(Array.prototype.findLastIndex.length, 1, 'Array#findLastIndex has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Array.prototype.findLastIndex.name, 'findLastIndex', 'Array#findLastIndex has name "findLastIndex"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Array.prototype, 'findLastIndex'), 'Array#findLastIndex is not enumerable');
		et.end();
	});

	t.test('bad array/this value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return Array.prototype.findLastIndex.call(undefined, function () {}); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Array.prototype.findLastIndex.call(null, function () {}); }, TypeError, 'null is not an object');
		st.end();
	});

	t.test('Symbol.unscopables', { skip: typeof Symbol !== 'function' || typeof Symbol.unscopables !== 'symbol' }, function (st) {
		st.ok(hasOwn(Array.prototype[Symbol.unscopables], 'findLastIndex'), 'Array.prototype[Symbol.unscopables] has own `findLastIndex` property');
		st.equal(Array.prototype[Symbol.unscopables].findLastIndex, true, 'Array.prototype[Symbol.unscopables].findLastIndex is true');
		st.end();
	});

	runTests(callBind(Array.prototype.findLastIndex), t);

	t.end();
});
