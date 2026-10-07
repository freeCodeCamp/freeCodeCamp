'use strict';

var orig = Array.prototype.findLast;

require('../auto');

var test = require('tape');
var hasOwn = require('hasown');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = function f() {}.name === 'f';

var runTests = require('./tests');

test('shimmed', function (t) {
	t.comment('shimmed: ' + (orig === Array.prototype.findLast ? 'no' : 'yes'));

	t.equal(Array.prototype.findLast.length, 1, 'Array#findLast has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Array.prototype.findLast.name, 'findLast', 'Array#findLast has name "findLast"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Array.prototype, 'findLast'), 'Array#findLast is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad array/this value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return Array.prototype.findLast.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Array.prototype.findLast.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	t.test('Symbol.unscopables', { skip: typeof Symbol !== 'function' || typeof Symbol.unscopables !== 'symbol' }, function (st) {
		st.ok(hasOwn(Array.prototype[Symbol.unscopables], 'findLast'), 'Array.prototype[Symbol.unscopables] has own `findLast` property');
		st.equal(Array.prototype[Symbol.unscopables].findLast, true, 'Array.prototype[Symbol.unscopables].findLast is true');
		st.end();
	});

	runTests(callBind(Array.prototype.findLast), t);

	t.end();
});
