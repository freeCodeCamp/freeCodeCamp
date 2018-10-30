'use strict';

var test = require('tape');
var toPrimitive = require('../es5');
var is = require('object-is');
var forEach = require('foreach');
var functionName = require('function.prototype.name');
var debug = require('object-inspect');

test('function properties', function (t) {
	t.equal(toPrimitive.length, 1, 'length is 1');
	t.equal(functionName(toPrimitive), 'ToPrimitive', 'name is ToPrimitive');

	t.end();
});

var primitives = [null, undefined, true, false, 0, -0, 42, NaN, Infinity, -Infinity, '', 'abc'];

test('primitives', function (t) {
	forEach(primitives, function (i) {
		t.ok(is(toPrimitive(i), i), 'toPrimitive(' + debug(i) + ') returns the same value');
		t.ok(is(toPrimitive(i, String), i), 'toPrimitive(' + debug(i) + ', String) returns the same value');
		t.ok(is(toPrimitive(i, Number), i), 'toPrimitive(' + debug(i) + ', Number) returns the same value');
	});
	t.end();
});

test('Arrays', function (t) {
	var arrays = [[], ['a', 'b'], [1, 2]];
	forEach(arrays, function (arr) {
		t.ok(is(toPrimitive(arr), arr.toString()), 'toPrimitive(' + debug(arr) + ') returns toString of the array');
		t.equal(toPrimitive(arr, String), arr.toString(), 'toPrimitive(' + debug(arr) + ') returns toString of the array');
		t.ok(is(toPrimitive(arr, Number), arr.toString()), 'toPrimitive(' + debug(arr) + ') returns toString of the array');
	});
	t.end();
});

test('Dates', function (t) {
	var dates = [new Date(), new Date(0), new Date(NaN)];
	forEach(dates, function (date) {
		t.equal(toPrimitive(date), date.toString(), 'toPrimitive(' + debug(date) + ') returns toString of the date');
		t.equal(toPrimitive(date, String), date.toString(), 'toPrimitive(' + debug(date) + ') returns toString of the date');
		t.ok(is(toPrimitive(date, Number), date.valueOf()), 'toPrimitive(' + debug(date) + ') returns valueOf of the date');
	});
	t.end();
});

var coercibleObject = { valueOf: function () { return 3; }, toString: function () { return 42; } };
var valueOfOnlyObject = { valueOf: function () { return 4; }, toString: function () { return {}; } };
var toStringOnlyObject = { valueOf: function () { return {}; }, toString: function () { return 7; } };
var coercibleFnObject = {
	valueOf: function () { return function valueOfFn() {}; },
	toString: function () { return 42; }
};
var uncoercibleObject = { valueOf: function () { return {}; }, toString: function () { return {}; } };
var uncoercibleFnObject = {
	valueOf: function () { return function valueOfFn() {}; },
	toString: function () { return function toStrFn() {}; }
};

test('Objects', function (t) {
	t.equal(toPrimitive(coercibleObject), coercibleObject.valueOf(), 'coercibleObject with no hint coerces to valueOf');
	t.equal(toPrimitive(coercibleObject, String), coercibleObject.toString(), 'coercibleObject with hint String coerces to toString');
	t.equal(toPrimitive(coercibleObject, Number), coercibleObject.valueOf(), 'coercibleObject with hint Number coerces to valueOf');

	t.equal(toPrimitive(coercibleFnObject), coercibleFnObject.toString(), 'coercibleFnObject coerces to toString');
	t.equal(toPrimitive(coercibleFnObject, String), coercibleFnObject.toString(), 'coercibleFnObject with hint String coerces to toString');
	t.equal(toPrimitive(coercibleFnObject, Number), coercibleFnObject.toString(), 'coercibleFnObject with hint Number coerces to toString');

	t.ok(is(toPrimitive({}), '[object Object]'), '{} with no hint coerces to Object#toString');
	t.equal(toPrimitive({}, String), '[object Object]', '{} with hint String coerces to Object#toString');
	t.ok(is(toPrimitive({}, Number), '[object Object]'), '{} with hint Number coerces to Object#toString');

	t.equal(toPrimitive(toStringOnlyObject), toStringOnlyObject.toString(), 'toStringOnlyObject returns toString');
	t.equal(toPrimitive(toStringOnlyObject, String), toStringOnlyObject.toString(), 'toStringOnlyObject with hint String returns toString');
	t.equal(toPrimitive(toStringOnlyObject, Number), toStringOnlyObject.toString(), 'toStringOnlyObject with hint Number returns toString');

	t.equal(toPrimitive(valueOfOnlyObject), valueOfOnlyObject.valueOf(), 'valueOfOnlyObject returns valueOf');
	t.equal(toPrimitive(valueOfOnlyObject, String), valueOfOnlyObject.valueOf(), 'valueOfOnlyObject with hint String returns valueOf');
	t.equal(toPrimitive(valueOfOnlyObject, Number), valueOfOnlyObject.valueOf(), 'valueOfOnlyObject with hint Number returns valueOf');

	t.test('exceptions', function (st) {
		st['throws'](toPrimitive.bind(null, uncoercibleObject), TypeError, 'uncoercibleObject throws a TypeError');
		st['throws'](toPrimitive.bind(null, uncoercibleObject, String), TypeError, 'uncoercibleObject with hint String throws a TypeError');
		st['throws'](toPrimitive.bind(null, uncoercibleObject, Number), TypeError, 'uncoercibleObject with hint Number throws a TypeError');

		st['throws'](toPrimitive.bind(null, uncoercibleFnObject), TypeError, 'uncoercibleFnObject throws a TypeError');
		st['throws'](toPrimitive.bind(null, uncoercibleFnObject, String), TypeError, 'uncoercibleFnObject with hint String throws a TypeError');
		st['throws'](toPrimitive.bind(null, uncoercibleFnObject, Number), TypeError, 'uncoercibleFnObject with hint Number throws a TypeError');
		st.end();
	});

	t.end();
});
