'use strict';

var GetIntrinsic = require('../');

var test = require('tape');
var forEach = require('for-each');
var debug = require('object-inspect');
var generatorFns = require('make-generator-function')();
var asyncFns = require('make-async-function').list();
var asyncGenFns = require('make-async-generator-function')();
var mockProperty = require('mock-property');

var callBound = require('call-bound');
var v = require('es-value-fixtures');
var $gOPD = require('gopd');
var DefinePropertyOrThrow = require('es-abstract/2023/DefinePropertyOrThrow');

var $isProto = callBound('%Object.prototype.isPrototypeOf%');

test('export', function (t) {
	t.equal(typeof GetIntrinsic, 'function', 'it is a function');
	t.equal(GetIntrinsic.length, 2, 'function has length of 2');

	t.end();
});

test('throws', function (t) {
	t['throws'](
		function () { GetIntrinsic('not an intrinsic'); },
		SyntaxError,
		'nonexistent intrinsic throws a syntax error'
	);

	t['throws'](
		function () { GetIntrinsic(''); },
		TypeError,
		'empty string intrinsic throws a type error'
	);

	t['throws'](
		function () { GetIntrinsic('.'); },
		SyntaxError,
		'"just a dot" intrinsic throws a syntax error'
	);

	t['throws'](
		function () { GetIntrinsic('%String'); },
		SyntaxError,
		'Leading % without trailing % throws a syntax error'
	);

	t['throws'](
		function () { GetIntrinsic('String%'); },
		SyntaxError,
		'Trailing % without leading % throws a syntax error'
	);

	t['throws'](
		function () { GetIntrinsic("String['prototype]"); },
		SyntaxError,
		'Dynamic property access is disallowed for intrinsics (unterminated string)'
	);

	t['throws'](
		function () { GetIntrinsic('%Proxy.prototype.undefined%'); },
		TypeError,
		"Throws when middle part doesn't exist (%Proxy.prototype.undefined%)"
	);

	t['throws'](
		function () { GetIntrinsic('%Array.prototype%garbage%'); },
		SyntaxError,
		'Throws with extra percent signs'
	);

	t['throws'](
		function () { GetIntrinsic('%Array.prototype%push%'); },
		SyntaxError,
		'Throws with extra percent signs, even on an existing intrinsic'
	);

	forEach(v.nonStrings, function (nonString) {
		t['throws'](
			function () { GetIntrinsic(nonString); },
			TypeError,
			debug(nonString) + ' is not a String'
		);
	});

	forEach(v.nonBooleans, function (nonBoolean) {
		t['throws'](
			function () { GetIntrinsic('%', nonBoolean); },
			TypeError,
			debug(nonBoolean) + ' is not a Boolean'
		);
	});

	forEach([
		'toString',
		'propertyIsEnumerable',
		'hasOwnProperty'
	], function (objectProtoMember) {
		t['throws'](
			function () { GetIntrinsic(objectProtoMember); },
			SyntaxError,
			debug(objectProtoMember) + ' is not an intrinsic'
		);
	});

	t.end();
});

test('base intrinsics', function (t) {
	t.equal(GetIntrinsic('%Object%'), Object, '%Object% yields Object');
	t.equal(GetIntrinsic('Object'), Object, 'Object yields Object');
	t.equal(GetIntrinsic('%Array%'), Array, '%Array% yields Array');
	t.equal(GetIntrinsic('Array'), Array, 'Array yields Array');

	t.end();
});

test('dotted paths', function (t) {
	t.equal(GetIntrinsic('%Object.prototype.toString%'), Object.prototype.toString, '%Object.prototype.toString% yields Object.prototype.toString');
	t.equal(GetIntrinsic('Object.prototype.toString'), Object.prototype.toString, 'Object.prototype.toString yields Object.prototype.toString');
	t.equal(GetIntrinsic('%Array.prototype.push%'), Array.prototype.push, '%Array.prototype.push% yields Array.prototype.push');
	t.equal(GetIntrinsic('Array.prototype.push'), Array.prototype.push, 'Array.prototype.push yields Array.prototype.push');

	test('underscore paths are aliases for dotted paths', { skip: !Object.isFrozen || Object.isFrozen(Object.prototype) }, function (st) {
		var original = GetIntrinsic('%ObjProto_toString%');

		forEach([
			'%Object.prototype.toString%',
			'Object.prototype.toString',
			'%ObjectPrototype.toString%',
			'ObjectPrototype.toString',
			'%ObjProto_toString%',
			'ObjProto_toString'
		], function (name) {
			DefinePropertyOrThrow(Object.prototype, 'toString', {
				'[[Value]]': function toString() {
					return original.apply(this, arguments);
				}
			});
			st.equal(GetIntrinsic(name), original, name + ' yields original Object.prototype.toString');
		});

		DefinePropertyOrThrow(Object.prototype, 'toString', { '[[Value]]': original });
		st.end();
	});

	test('dotted paths cache', { skip: !Object.isFrozen || Object.isFrozen(Object.prototype) }, function (st) {
		var original = GetIntrinsic('%Object.prototype.propertyIsEnumerable%');

		forEach([
			'%Object.prototype.propertyIsEnumerable%',
			'Object.prototype.propertyIsEnumerable',
			'%ObjectPrototype.propertyIsEnumerable%',
			'ObjectPrototype.propertyIsEnumerable'
		], function (name) {
			var restore = mockProperty(Object.prototype, 'propertyIsEnumerable', {
				value: function propertyIsEnumerable() {
					return original.apply(this, arguments);
				}
			});
			st.equal(GetIntrinsic(name), original, name + ' yields cached Object.prototype.propertyIsEnumerable');

			restore();
		});

		st.end();
	});

	test('dotted path reports correct error', function (st) {
		st['throws'](function () {
			GetIntrinsic('%NonExistentIntrinsic.prototype.property%');
		}, /%NonExistentIntrinsic%/, 'The base intrinsic of %NonExistentIntrinsic.prototype.property% is %NonExistentIntrinsic%');

		st['throws'](function () {
			GetIntrinsic('%NonExistentIntrinsicPrototype.property%');
		}, /%NonExistentIntrinsicPrototype%/, 'The base intrinsic of %NonExistentIntrinsicPrototype.property% is %NonExistentIntrinsicPrototype%');

		st.end();
	});

	t.end();
});

test('accessors', { skip: !$gOPD || typeof Map !== 'function' }, function (t) {
	var actual = $gOPD(Map.prototype, 'size');
	t.ok(actual, 'Map.prototype.size has a descriptor');
	t.equal(typeof actual.get, 'function', 'Map.prototype.size has a getter function');
	t.equal(GetIntrinsic('%Map.prototype.size%'), actual.get, '%Map.prototype.size% yields the getter for it');
	t.equal(GetIntrinsic('Map.prototype.size'), actual.get, 'Map.prototype.size yields the getter for it');

	t.end();
});

test('generator functions', { skip: !generatorFns.length }, function (t) {
	var $GeneratorFunction = GetIntrinsic('%GeneratorFunction%');
	var $GeneratorFunctionPrototype = GetIntrinsic('%Generator%');
	var $GeneratorPrototype = GetIntrinsic('%GeneratorPrototype%');

	forEach(generatorFns, function (genFn) {
		var fnName = genFn.name;
		fnName = fnName ? "'" + fnName + "'" : 'genFn';

		t.ok(genFn instanceof $GeneratorFunction, fnName + ' instanceof %GeneratorFunction%');
		t.ok($isProto($GeneratorFunctionPrototype, genFn), '%Generator% is prototype of ' + fnName);
		t.ok($isProto($GeneratorPrototype, genFn.prototype), '%GeneratorPrototype% is prototype of ' + fnName + '.prototype');
	});

	t.end();
});

test('async functions', { skip: !asyncFns.length }, function (t) {
	var $AsyncFunction = GetIntrinsic('%AsyncFunction%');
	var $AsyncFunctionPrototype = GetIntrinsic('%AsyncFunctionPrototype%');

	forEach(asyncFns, function (asyncFn) {
		var fnName = asyncFn.name;
		fnName = fnName ? "'" + fnName + "'" : 'asyncFn';

		t.ok(asyncFn instanceof $AsyncFunction, fnName + ' instanceof %AsyncFunction%');
		t.ok($isProto($AsyncFunctionPrototype, asyncFn), '%AsyncFunctionPrototype% is prototype of ' + fnName);
	});

	t.end();
});

test('async generator functions', { skip: asyncGenFns.length === 0 }, function (t) {
	var $AsyncGeneratorFunction = GetIntrinsic('%AsyncGeneratorFunction%');
	var $AsyncGeneratorFunctionPrototype = GetIntrinsic('%AsyncGenerator%');
	var $AsyncGeneratorPrototype = GetIntrinsic('%AsyncGeneratorPrototype%');

	forEach(asyncGenFns, function (asyncGenFn) {
		var fnName = asyncGenFn.name;
		fnName = fnName ? "'" + fnName + "'" : 'asyncGenFn';

		t.ok(asyncGenFn instanceof $AsyncGeneratorFunction, fnName + ' instanceof %AsyncGeneratorFunction%');
		t.ok($isProto($AsyncGeneratorFunctionPrototype, asyncGenFn), '%AsyncGenerator% is prototype of ' + fnName);
		t.ok($isProto($AsyncGeneratorPrototype, asyncGenFn.prototype), '%AsyncGeneratorPrototype% is prototype of ' + fnName + '.prototype');
	});

	t.end();
});

test('%ThrowTypeError%', function (t) {
	var $ThrowTypeError = GetIntrinsic('%ThrowTypeError%');

	t.equal(typeof $ThrowTypeError, 'function', 'is a function');
	t['throws'](
		$ThrowTypeError,
		TypeError,
		'%ThrowTypeError% throws a TypeError'
	);

	t.end();
});

test('allowMissing', { skip: asyncGenFns.length > 0 }, function (t) {
	t['throws'](
		function () { GetIntrinsic('%AsyncGeneratorPrototype%'); },
		TypeError,
		'throws when missing'
	);

	t.equal(
		GetIntrinsic('%AsyncGeneratorPrototype%', true),
		undefined,
		'does not throw when allowMissing'
	);

	t.end();
});
