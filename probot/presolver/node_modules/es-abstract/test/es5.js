'use strict';

var ES = require('../').ES5;
var test = require('tape');

var forEach = require('foreach');
var is = require('object-is');

var coercibleObject = { valueOf: function () { return '3'; }, toString: function () { return 42; } };
var coercibleFnObject = {
	valueOf: function () { return function valueOfFn() {}; },
	toString: function () { return 42; }
};
var valueOfOnlyObject = { valueOf: function () { return 4; }, toString: function () { return {}; } };
var toStringOnlyObject = { valueOf: function () { return {}; }, toString: function () { return 7; } };
var uncoercibleObject = { valueOf: function () { return {}; }, toString: function () { return {}; } };
var uncoercibleFnObject = {
	valueOf: function () { return function valueOfFn() {}; },
	toString: function () { return function toStrFn() {}; }
};
var objects = [{}, coercibleObject, toStringOnlyObject, valueOfOnlyObject];
var numbers = [0, -0, Infinity, -Infinity, 42];
var nonNullPrimitives = [true, false, 'foo', ''].concat(numbers);
var primitives = [undefined, null].concat(nonNullPrimitives);

test('ToPrimitive', function (t) {
	t.test('primitives', function (st) {
		var testPrimitive = function (primitive) {
			st.ok(is(ES.ToPrimitive(primitive), primitive), primitive + ' is returned correctly');
		};
		forEach(primitives, testPrimitive);
		st.end();
	});

	t.test('objects', function (st) {
		st.equal(ES.ToPrimitive(coercibleObject), coercibleObject.valueOf(), 'coercibleObject coerces to valueOf');
		st.equal(ES.ToPrimitive(coercibleObject, Number), coercibleObject.valueOf(), 'coercibleObject with hint Number coerces to valueOf');
		st.equal(ES.ToPrimitive(coercibleObject, String), coercibleObject.toString(), 'coercibleObject with hint String coerces to toString');
		st.equal(ES.ToPrimitive(coercibleFnObject), coercibleFnObject.toString(), 'coercibleFnObject coerces to toString');
		st.equal(ES.ToPrimitive(toStringOnlyObject), toStringOnlyObject.toString(), 'toStringOnlyObject returns toString');
		st.equal(ES.ToPrimitive(valueOfOnlyObject), valueOfOnlyObject.valueOf(), 'valueOfOnlyObject returns valueOf');
		st.equal(ES.ToPrimitive({}), '[object Object]', '{} with no hint coerces to Object#toString');
		st.equal(ES.ToPrimitive({}, String), '[object Object]', '{} with hint String coerces to Object#toString');
		st.equal(ES.ToPrimitive({}, Number), '[object Object]', '{} with hint Number coerces to Object#toString');
		st['throws'](function () { return ES.ToPrimitive(uncoercibleObject); }, TypeError, 'uncoercibleObject throws a TypeError');
		st['throws'](function () { return ES.ToPrimitive(uncoercibleFnObject); }, TypeError, 'uncoercibleFnObject throws a TypeError');
		st.end();
	});

	t.end();
});

test('ToBoolean', function (t) {
	t.equal(false, ES.ToBoolean(undefined), 'undefined coerces to false');
	t.equal(false, ES.ToBoolean(null), 'null coerces to false');
	t.equal(false, ES.ToBoolean(false), 'false returns false');
	t.equal(true, ES.ToBoolean(true), 'true returns true');
	forEach([0, -0, NaN], function (falsyNumber) {
		t.equal(false, ES.ToBoolean(falsyNumber), 'falsy number ' + falsyNumber + ' coerces to false');
	});
	forEach([Infinity, 42, 1, -Infinity], function (truthyNumber) {
		t.equal(true, ES.ToBoolean(truthyNumber), 'truthy number ' + truthyNumber + ' coerces to true');
	});
	t.equal(false, ES.ToBoolean(''), 'empty string coerces to false');
	t.equal(true, ES.ToBoolean('foo'), 'nonempty string coerces to true');
	forEach(objects, function (obj) {
		t.equal(true, ES.ToBoolean(obj), 'object coerces to true');
	});
	t.equal(true, ES.ToBoolean(uncoercibleObject), 'uncoercibleObject coerces to true');
	t.end();
});

test('ToNumber', function (t) {
	t.ok(is(NaN, ES.ToNumber(undefined)), 'undefined coerces to NaN');
	t.ok(is(ES.ToNumber(null), 0), 'null coerces to +0');
	t.ok(is(ES.ToNumber(false), 0), 'false coerces to +0');
	t.equal(1, ES.ToNumber(true), 'true coerces to 1');
	t.ok(is(NaN, ES.ToNumber(NaN)), 'NaN returns itself');
	forEach([0, -0, 42, Infinity, -Infinity], function (num) {
		t.equal(num, ES.ToNumber(num), num + ' returns itself');
	});
	forEach(['foo', '0', '4a', '2.0', 'Infinity', '-Infinity'], function (numString) {
		t.ok(is(+numString, ES.ToNumber(numString)), '"' + numString + '" coerces to ' + Number(numString));
	});
	forEach(objects, function (object) {
		t.ok(is(ES.ToNumber(object), ES.ToNumber(ES.ToPrimitive(object))), 'object ' + object + ' coerces to same as ToPrimitive of object does');
	});
	t['throws'](function () { return ES.ToNumber(uncoercibleObject); }, TypeError, 'uncoercibleObject throws');
	t.end();
});

test('ToInteger', function (t) {
	t.ok(is(0, ES.ToInteger(NaN)), 'NaN coerces to +0');
	forEach([0, Infinity, 42], function (num) {
		t.ok(is(num, ES.ToInteger(num)), num + ' returns itself');
		t.ok(is(-num, ES.ToInteger(-num)), '-' + num + ' returns itself');
	});
	t.equal(3, ES.ToInteger(Math.PI), 'pi returns 3');
	t['throws'](function () { return ES.ToInteger(uncoercibleObject); }, TypeError, 'uncoercibleObject throws');
	t.end();
});

test('ToInt32', function (t) {
	t.ok(is(0, ES.ToInt32(NaN)), 'NaN coerces to +0');
	forEach([0, Infinity], function (num) {
		t.ok(is(0, ES.ToInt32(num)), num + ' returns +0');
		t.ok(is(0, ES.ToInt32(-num)), '-' + num + ' returns +0');
	});
	t['throws'](function () { return ES.ToInt32(uncoercibleObject); }, TypeError, 'uncoercibleObject throws');
	t.ok(is(ES.ToInt32(0x100000000), 0), '2^32 returns +0');
	t.ok(is(ES.ToInt32(0x100000000 - 1), -1), '2^32 - 1 returns -1');
	t.ok(is(ES.ToInt32(0x80000000), -0x80000000), '2^31 returns -2^31');
	t.ok(is(ES.ToInt32(0x80000000 - 1), 0x80000000 - 1), '2^31 - 1 returns 2^31 - 1');
	forEach([0, Infinity, NaN, 0x100000000, 0x80000000, 0x10000, 0x42], function (num) {
		t.ok(is(ES.ToInt32(num), ES.ToInt32(ES.ToUint32(num))), 'ToInt32(x) === ToInt32(ToUint32(x)) for 0x' + num.toString(16));
		t.ok(is(ES.ToInt32(-num), ES.ToInt32(ES.ToUint32(-num))), 'ToInt32(x) === ToInt32(ToUint32(x)) for -0x' + num.toString(16));
	});
	t.end();
});

test('ToUint32', function (t) {
	t.ok(is(0, ES.ToUint32(NaN)), 'NaN coerces to +0');
	forEach([0, Infinity], function (num) {
		t.ok(is(0, ES.ToUint32(num)), num + ' returns +0');
		t.ok(is(0, ES.ToUint32(-num)), '-' + num + ' returns +0');
	});
	t['throws'](function () { return ES.ToUint32(uncoercibleObject); }, TypeError, 'uncoercibleObject throws');
	t.ok(is(ES.ToUint32(0x100000000), 0), '2^32 returns +0');
	t.ok(is(ES.ToUint32(0x100000000 - 1), 0x100000000 - 1), '2^32 - 1 returns 2^32 - 1');
	t.ok(is(ES.ToUint32(0x80000000), 0x80000000), '2^31 returns 2^31');
	t.ok(is(ES.ToUint32(0x80000000 - 1), 0x80000000 - 1), '2^31 - 1 returns 2^31 - 1');
	forEach([0, Infinity, NaN, 0x100000000, 0x80000000, 0x10000, 0x42], function (num) {
		t.ok(is(ES.ToUint32(num), ES.ToUint32(ES.ToInt32(num))), 'ToUint32(x) === ToUint32(ToInt32(x)) for 0x' + num.toString(16));
		t.ok(is(ES.ToUint32(-num), ES.ToUint32(ES.ToInt32(-num))), 'ToUint32(x) === ToUint32(ToInt32(x)) for -0x' + num.toString(16));
	});
	t.end();
});

test('ToUint16', function (t) {
	t.ok(is(0, ES.ToUint16(NaN)), 'NaN coerces to +0');
	forEach([0, Infinity], function (num) {
		t.ok(is(0, ES.ToUint16(num)), num + ' returns +0');
		t.ok(is(0, ES.ToUint16(-num)), '-' + num + ' returns +0');
	});
	t['throws'](function () { return ES.ToUint16(uncoercibleObject); }, TypeError, 'uncoercibleObject throws');
	t.ok(is(ES.ToUint16(0x100000000), 0), '2^32 returns +0');
	t.ok(is(ES.ToUint16(0x100000000 - 1), 0x10000 - 1), '2^32 - 1 returns 2^16 - 1');
	t.ok(is(ES.ToUint16(0x80000000), 0), '2^31 returns +0');
	t.ok(is(ES.ToUint16(0x80000000 - 1), 0x10000 - 1), '2^31 - 1 returns 2^16 - 1');
	t.ok(is(ES.ToUint16(0x10000), 0), '2^16 returns +0');
	t.ok(is(ES.ToUint16(0x10000 - 1), 0x10000 - 1), '2^16 - 1 returns 2^16 - 1');
	t.end();
});

test('ToString', function (t) {
	t['throws'](function () { return ES.ToString(uncoercibleObject); }, TypeError, 'uncoercibleObject throws');
	t.end();
});

test('ToObject', function (t) {
	t['throws'](function () { return ES.ToObject(undefined); }, TypeError, 'undefined throws');
	t['throws'](function () { return ES.ToObject(null); }, TypeError, 'null throws');
	forEach(numbers, function (number) {
		var obj = ES.ToObject(number);
		t.equal(typeof obj, 'object', 'number ' + number + ' coerces to object');
		t.equal(true, obj instanceof Number, 'object of ' + number + ' is Number object');
		t.ok(is(obj.valueOf(), number), 'object of ' + number + ' coerces to ' + number);
	});
	t.end();
});

test('CheckObjectCoercible', function (t) {
	t['throws'](function () { return ES.CheckObjectCoercible(undefined); }, TypeError, 'undefined throws');
	t['throws'](function () { return ES.CheckObjectCoercible(null); }, TypeError, 'null throws');
	var checkCoercible = function (value) {
		t.doesNotThrow(function () { return ES.CheckObjectCoercible(value); }, '"' + value + '" does not throw');
	};
	forEach(objects.concat(nonNullPrimitives), checkCoercible);
	t.end();
});

test('IsCallable', function (t) {
	t.equal(true, ES.IsCallable(function () {}), 'function is callable');
	var nonCallables = [/a/g, {}, Object.prototype, NaN].concat(primitives);
	forEach(nonCallables, function (nonCallable) {
		t.equal(false, ES.IsCallable(nonCallable), nonCallable + ' is not callable');
	});
	t.end();
});

test('SameValue', function (t) {
	t.equal(true, ES.SameValue(NaN, NaN), 'NaN is SameValue as NaN');
	t.equal(false, ES.SameValue(0, -0), '+0 is not SameValue as -0');
	forEach(objects.concat(primitives), function (val) {
		t.equal(val === val, ES.SameValue(val, val), '"' + val + '" is SameValue to itself');
	});
	t.end();
});

test('Type', function (t) {
	t.equal(ES.Type(), 'Undefined', 'Type() is Undefined');
	t.equal(ES.Type(undefined), 'Undefined', 'Type(undefined) is Undefined');
	t.equal(ES.Type(null), 'Null', 'Type(null) is Null');
	t.equal(ES.Type(true), 'Boolean', 'Type(true) is Boolean');
	t.equal(ES.Type(false), 'Boolean', 'Type(false) is Boolean');
	t.equal(ES.Type(0), 'Number', 'Type(0) is Number');
	t.equal(ES.Type(NaN), 'Number', 'Type(NaN) is Number');
	t.equal(ES.Type('abc'), 'String', 'Type("abc") is String');
	t.equal(ES.Type(function () {}), 'Object', 'Type(function () {}) is Object');
	t.equal(ES.Type({}), 'Object', 'Type({}) is Object');
	t.end();
});

var bothDescriptor = function () {
	return { '[[Get]]': function () {}, '[[Value]]': true };
};
var accessorDescriptor = function () {
	return {
		'[[Get]]': function () {},
		'[[Enumerable]]': true,
		'[[Configurable]]': true
	};
};
var mutatorDescriptor = function () {
	return {
		'[[Set]]': function () {},
		'[[Enumerable]]': true,
		'[[Configurable]]': true
	};
};
var dataDescriptor = function () {
	return {
		'[[Value]]': 42,
		'[[Writable]]': false,
		'[[Configurable]]': false
	};
};
var genericDescriptor = function () {
	return {
		'[[Configurable]]': true,
		'[[Enumerable]]': false
	};
};

test('IsPropertyDescriptor', function (t) {
	forEach(primitives, function (primitive) {
		t.equal(ES.IsPropertyDescriptor(primitive), false, primitive + ' is not a Property Descriptor');
	});

	t.equal(ES.IsPropertyDescriptor({ invalid: true }), false, 'invalid keys not allowed on a Property Descriptor');

	t.equal(ES.IsPropertyDescriptor({}), true, 'empty object is an incomplete Property Descriptor');

	t.equal(ES.IsPropertyDescriptor(accessorDescriptor()), true, 'accessor descriptor is a Property Descriptor');
	t.equal(ES.IsPropertyDescriptor(mutatorDescriptor()), true, 'mutator descriptor is a Property Descriptor');
	t.equal(ES.IsPropertyDescriptor(dataDescriptor()), true, 'data descriptor is a Property Descriptor');
	t.equal(ES.IsPropertyDescriptor(genericDescriptor()), true, 'generic descriptor is a Property Descriptor');

	t['throws'](function () {
		ES.IsPropertyDescriptor(bothDescriptor());
	}, TypeError, 'a Property Descriptor can not be both a Data and an Accessor Descriptor');

	t.end();
});

test('IsAccessorDescriptor', function (t) {
	forEach(nonNullPrimitives.concat(null), function (primitive) {
		t['throws'](function () { ES.IsAccessorDescriptor(primitive); }, TypeError, primitive + ' is not a Property Descriptor');
	});

	t.equal(ES.IsAccessorDescriptor(), false, 'no value is not an Accessor Descriptor');
	t.equal(ES.IsAccessorDescriptor(undefined), false, 'undefined value is not an Accessor Descriptor');

	t.equal(ES.IsAccessorDescriptor(accessorDescriptor()), true, 'accessor descriptor is an Accessor Descriptor');
	t.equal(ES.IsAccessorDescriptor(mutatorDescriptor()), true, 'mutator descriptor is an Accessor Descriptor');
	t.equal(ES.IsAccessorDescriptor(dataDescriptor()), false, 'data descriptor is not an Accessor Descriptor');
	t.equal(ES.IsAccessorDescriptor(genericDescriptor()), false, 'generic descriptor is not an Accessor Descriptor');

	t.end();
});

test('IsDataDescriptor', function (t) {
	forEach(nonNullPrimitives.concat(null), function (primitive) {
		t['throws'](function () { ES.IsDataDescriptor(primitive); }, TypeError, primitive + ' is not a Property Descriptor');
	});

	t.equal(ES.IsDataDescriptor(), false, 'no value is not a Data Descriptor');
	t.equal(ES.IsDataDescriptor(undefined), false, 'undefined value is not a Data Descriptor');

	t.equal(ES.IsDataDescriptor(accessorDescriptor()), false, 'accessor descriptor is not a Data Descriptor');
	t.equal(ES.IsDataDescriptor(mutatorDescriptor()), false, 'mutator descriptor is not a Data Descriptor');
	t.equal(ES.IsDataDescriptor(dataDescriptor()), true, 'data descriptor is a Data Descriptor');
	t.equal(ES.IsDataDescriptor(genericDescriptor()), false, 'generic descriptor is not a Data Descriptor');

	t.end();
});

test('IsGenericDescriptor', function (t) {
	forEach(nonNullPrimitives.concat(null), function (primitive) {
		t['throws'](
			function () { ES.IsGenericDescriptor(primitive); },
			TypeError,
			primitive + ' is not a Property Descriptor'
		);
	});

	t.equal(ES.IsGenericDescriptor(), false, 'no value is not a Data Descriptor');
	t.equal(ES.IsGenericDescriptor(undefined), false, 'undefined value is not a Data Descriptor');

	t.equal(ES.IsGenericDescriptor(accessorDescriptor()), false, 'accessor descriptor is not a generic Descriptor');
	t.equal(ES.IsGenericDescriptor(mutatorDescriptor()), false, 'mutator descriptor is not a generic Descriptor');
	t.equal(ES.IsGenericDescriptor(dataDescriptor()), false, 'data descriptor is not a generic Descriptor');

	t.equal(ES.IsGenericDescriptor(genericDescriptor()), true, 'generic descriptor is a generic Descriptor');

	t.end();
});

test('FromPropertyDescriptor', function (t) {
	t.equal(ES.FromPropertyDescriptor(), undefined, 'no value begets undefined');
	t.equal(ES.FromPropertyDescriptor(undefined), undefined, 'undefined value begets undefined');

	forEach(nonNullPrimitives.concat(null), function (primitive) {
		t['throws'](
			function () { ES.FromPropertyDescriptor(primitive); },
			TypeError,
			primitive + ' is not a Property Descriptor'
		);
	});

	var accessor = accessorDescriptor();
	t.deepEqual(ES.FromPropertyDescriptor(accessor), {
		get: accessor['[[Get]]'],
		set: accessor['[[Set]]'],
		enumerable: !!accessor['[[Enumerable]]'],
		configurable: !!accessor['[[Configurable]]']
	});

	var mutator = mutatorDescriptor();
	t.deepEqual(ES.FromPropertyDescriptor(mutator), {
		get: mutator['[[Get]]'],
		set: mutator['[[Set]]'],
		enumerable: !!mutator['[[Enumerable]]'],
		configurable: !!mutator['[[Configurable]]']
	});
	var data = dataDescriptor();
	t.deepEqual(ES.FromPropertyDescriptor(data), {
		value: data['[[Value]]'],
		writable: data['[[Writable]]'],
		enumerable: !!data['[[Enumerable]]'],
		configurable: !!data['[[Configurable]]']
	});

	t['throws'](
		function () { ES.FromPropertyDescriptor(genericDescriptor()); },
		TypeError,
		'a complete Property Descriptor is required'
	);

	t.end();
});

test('ToPropertyDescriptor', function (t) {
	forEach(nonNullPrimitives.concat(null), function (primitive) {
		t['throws'](
			function () { ES.ToPropertyDescriptor(primitive); },
			TypeError,
			primitive + ' is not an Object'
		);
	});

	var accessor = accessorDescriptor();
	t.deepEqual(ES.ToPropertyDescriptor({
		get: accessor['[[Get]]'],
		enumerable: !!accessor['[[Enumerable]]'],
		configurable: !!accessor['[[Configurable]]']
	}), accessor);

	var mutator = mutatorDescriptor();
	t.deepEqual(ES.ToPropertyDescriptor({
		set: mutator['[[Set]]'],
		enumerable: !!mutator['[[Enumerable]]'],
		configurable: !!mutator['[[Configurable]]']
	}), mutator);

	var data = dataDescriptor();
	t.deepEqual(ES.ToPropertyDescriptor({
		value: data['[[Value]]'],
		writable: data['[[Writable]]'],
		configurable: !!data['[[Configurable]]']
	}), data);

	var both = bothDescriptor();
	t['throws'](
		function () {
			ES.ToPropertyDescriptor({ get: both['[[Get]]'], value: both['[[Value]]'] });
		},
		TypeError,
		'data and accessor descriptors are mutually exclusive'
	);

	t['throws'](
		function () { ES.ToPropertyDescriptor({ get: 'not callable' }); },
		TypeError,
		'"get" must be undefined or callable'
	);

	t['throws'](
		function () { ES.ToPropertyDescriptor({ set: 'not callable' }); },
		TypeError,
		'"set" must be undefined or callable'
	);

	t.end();
});
