'use strict';

var define = require('../');
var test = require('tape');
var keys = require('object-keys');

var arePropertyDescriptorsSupported = function () {
	var obj = { a: 1 };
	try {
		Object.defineProperty(obj, 'x', { value: obj });
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var descriptorsSupported = !!Object.defineProperty && arePropertyDescriptorsSupported();

var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

test('defineProperties', function (dt) {
	dt.test('with descriptor support', { skip: !descriptorsSupported }, function (t) {
		var getDescriptor = function (value) {
			return {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			};
		};

		var obj = {
			a: 1,
			b: 2,
			c: 3
		};
		t.deepEqual(keys(obj), ['a', 'b', 'c'], 'all literal-set keys start enumerable');
		define(obj, {
			b: 3,
			c: 4,
			d: 5
		});
		t.deepEqual(obj, {
			a: 1,
			b: 2,
			c: 3
		}, 'existing properties were not overridden');
		t.deepEqual(Object.getOwnPropertyDescriptor(obj, 'd'), getDescriptor(5), 'new property "d" was added and is not enumerable');
		t.deepEqual(['a', 'b', 'c'], keys(obj), 'new keys are not enumerable');

		define(obj, {
			a: 2,
			b: 3,
			c: 4
		}, {
			a: function () { return true; },
			b: function () { return false; }
		});
		t.deepEqual(obj, {
			b: 2,
			c: 3
		}, 'properties only overriden when predicate exists and returns true');
		t.deepEqual(Object.getOwnPropertyDescriptor(obj, 'd'), getDescriptor(5), 'existing property "d" remained and is not enumerable');
		t.deepEqual(Object.getOwnPropertyDescriptor(obj, 'a'), getDescriptor(2), 'existing property "a" was overridden and is not enumerable');
		t.deepEqual(['b', 'c'], keys(obj), 'overridden keys are not enumerable');

		t.end();
	});

	dt.test('without descriptor support', { skip: descriptorsSupported }, function (t) {
		var obj = {
			a: 1,
			b: 2,
			c: 3
		};
		define(obj, {
			b: 3,
			c: 4,
			d: 5
		});
		t.deepEqual(obj, {
			a: 1,
			b: 2,
			c: 3,
			d: 5
		}, 'existing properties were not overridden, new properties were added');

		define(obj, {
			a: 2,
			b: 3,
			c: 4
		}, {
			a: function () { return true; },
			b: function () { return false; }
		});
		t.deepEqual(obj, {
			a: 2,
			b: 2,
			c: 3,
			d: 5
		}, 'properties only overriden when predicate exists and returns true');

		t.end();
	});

	dt.end();
});

test('symbols', { skip: !hasSymbols }, function (t) {
	var sym = Symbol('foo');
	var obj = {};
	var aValue = {};
	var bValue = {};
	var properties = { a: aValue };
	properties[sym] = bValue;

	define(obj, properties);

	t.deepEqual(Object.keys(obj), [], 'object has no enumerable keys');
	t.deepEqual(Object.getOwnPropertyNames(obj), ['a'], 'object has non-enumerable "a" key');
	t.deepEqual(Object.getOwnPropertySymbols(obj), [sym], 'object has non-enumerable symbol key');
	t.equal(obj.a, aValue, 'string keyed value is defined');
	t.equal(obj[sym], bValue, 'symbol keyed value is defined');

	t.end();
});
