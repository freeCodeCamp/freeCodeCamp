var test = require('tape');
var shimmedKeys = require('../index.js');
var is = require('is');
var keys = require('../shim.js');
var forEach = require('foreach');
var indexOf = require('indexof');

var obj = {
	"str": "boz",
	"obj": {},
	"arr": [],
	"bool": true,
	"num": 42,
	"aNull": null,
	"undef": undefined
};
var objKeys = ['str', 'obj', 'arr', 'bool', 'num', 'aNull', 'undef'];

test('exports a function', function (t) {
	if (Object.keys) {
		t.equal(Object.keys, shimmedKeys, 'Object.keys is supported and exported');
	} else {
		t.equal(keys, shimmedKeys, 'Object.keys is not supported; shim is exported');
	}
	t.end();
});

test('working with actual shim', function (t) {
	t.notEqual(Object.keys, keys, 'keys shim is not native Object.keys');
	t.end();
});

test('works with an object literal', function (t) {
	var theKeys = keys(obj);
	t.equal(is.array(theKeys), true, 'returns an array');
	t.deepEqual(theKeys, objKeys, 'Object has expected keys');
	t.end();
});

test('works with an array', function (t) {
	var arr = [1, 2, 3];
	var theKeys = keys(arr);
	t.equal(is.array(theKeys), true, 'returns an array');
	t.deepEqual(theKeys, ['0', '1', '2'], 'Array has expected keys');
	t.end();
});

test('works with a function', function (t) {
	var foo = function () {};
	foo.a = true;

	t.doesNotThrow(function () { return keys(foo); }, 'does not throw an error');
	t.deepEqual(keys(foo), ['a'], 'returns expected keys');
	t.end();
});

test('returns names which are own properties', function (t) {
	forEach(keys(obj), function (name) {
		t.equal(obj.hasOwnProperty(name), true, name + ' should be returned');
	});
	t.end();
});

test('returns names which are enumerable', function (t) {
	var k, loopedValues = [];
	for (k in obj) {
		loopedValues.push(k);
	}
	forEach(keys(obj), function (name) {
		t.notEqual(indexOf(loopedValues, name), -1, name + ' is not enumerable');
	});
	t.end();
});

test('throws an error for a non-object', function (t) {
	t.throws(
		function () { return keys(42); },
		new TypeError('Object.keys called on a non-object'),
		'throws on a non-object'
	);
	t.end();
});

test('works with an object instance', function (t) {
	var Prototype = function () {};
	Prototype.prototype.foo = true;
	var obj = new Prototype();
	obj.bar = true;
	var theKeys = keys(obj);
	t.equal(is.array(theKeys), true, 'returns an array');
	t.deepEqual(theKeys, ['bar'], 'Instance has expected keys');
	t.end();
});

test('works in iOS 5 mobile Safari', function (t) {
	var Foo = function () {};
	Foo.a = function () {};

	// the bug is keys(Foo) => ['a', 'prototype'] instead of ['a']
	t.deepEqual(keys(Foo), ['a'], 'has expected keys');
	t.end();
});

test('works in environments with the dontEnum bug (IE < 9)', function (t) {
	var Foo = function () {};
	Foo.prototype.a = function () {};

	// the bug is keys(Foo.prototype) => ['a', 'constructor'] instead of ['a']
	t.deepEqual(keys(Foo.prototype), ['a'], 'has expected keys');
	t.end();
});

test('shadowed properties', function (t) {
	var shadowedProps = [
		'dummyControlProp', /* just to be sure */
		'constructor',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'toLocaleString',
		'toString',
		'valueOf'
	];
	shadowedProps.sort();
	var shadowedObject = {};
	forEach(shadowedProps, function (value, index) {
		shadowedObject[value] = index;
	});
	var shadowedObjectKeys = keys(shadowedObject);
	shadowedObjectKeys.sort();
	t.deepEqual(shadowedObjectKeys, shadowedProps, 'troublesome shadowed properties are keys of object literals');
	t.end();
});

