'use strict';

var test = require('tape');
var inspect = require('object-inspect');
var forEach = require('for-each');

var SLOT = require('../');

test('assert', function (t) {
	forEach([null, undefined, true, false, 'foo', '', 42, 0], function (primitive) {
		t['throws'](
			// @ts-expect-error
			function () { SLOT.assert(primitive, ''); },
			TypeError,
			inspect(primitive) + ' is not an Object'
		);
	});

	forEach([null, undefined, true, false, 42, 0, {}, [], function () {}, /a/g], function (nonString) {
		t['throws'](
			// @ts-expect-error
			function () { SLOT.assert({}, nonString); },
			TypeError,
			inspect(nonString) + ' is not a String'
		);
	});

	t['throws'](
		function () { SLOT.assert({}, '[[whatever]]'); },
		TypeError,
		'nonexistent slot throws'
	);

	var o = {};
	SLOT.set(o, 'x');
	t.doesNotThrow(function () { SLOT.assert(o, 'x'); }, 'existent slot noops');
	t['throws'](function () { SLOT.assert(o, 'y'); }, 'thing with a slot throws on a nonexistent slot');

	t.end();
});

test('has', function (t) {
	forEach([null, undefined, true, false, 'foo', '', 42, 0], function (primitive) {
		t['throws'](
			// @ts-expect-error
			function () { SLOT.has(primitive, ''); },
			TypeError,
			inspect(primitive) + ' is not an Object'
		);
	});

	forEach([null, undefined, true, false, 42, 0, {}, [], function () {}, /a/g], function (nonString) {
		t['throws'](
			// @ts-expect-error
			function () { SLOT.has({}, nonString); },
			TypeError,
			inspect(nonString) + ' is not a String'
		);
	});

	var o = {};

	t.equal(SLOT.has(o, '[[nonexistent]]'), false, 'nonexistent slot yields false');

	SLOT.set(o, 'foo');
	t.equal(SLOT.has(o, 'foo'), true, 'existent slot yields true');

	t.end();
});

test('get', function (t) {
	forEach([null, undefined, true, false, 'foo', '', 42, 0], function (primitive) {
		t['throws'](
			// @ts-expect-error
			function () { SLOT.get(primitive, ''); },
			TypeError,
			inspect(primitive) + ' is not an Object'
		);
	});

	forEach([null, undefined, true, false, 42, 0, {}, [], function () {}, /a/g], function (nonString) {
		t['throws'](
			// @ts-expect-error
			function () { SLOT.get({}, nonString); },
			TypeError,
			inspect(nonString) + ' is not a String'
		);
	});

	var o = {};
	t.equal(SLOT.get(o, 'nonexistent'), undefined, 'nonexistent slot is undefined');

	var v = {};
	SLOT.set(o, 'f', v);
	t.equal(SLOT.get(o, 'f'), v, '"get" retrieves value set by "set"');

	t.end();
});

test('set', function (t) {
	forEach([null, undefined, true, false, 'foo', '', 42, 0], function (primitive) {
		t['throws'](
			// @ts-expect-error
			function () { SLOT.set(primitive, ''); },
			TypeError,
			inspect(primitive) + ' is not an Object'
		);
	});

	forEach([null, undefined, true, false, 42, 0, {}, [], function () {}, /a/g], function (nonString) {
		t['throws'](
			// @ts-expect-error
			function () { SLOT.set({}, nonString); },
			TypeError,
			inspect(nonString) + ' is not a String'
		);
	});

	var o = function () {};
	t.equal(SLOT.get(o, 'f'), undefined, 'slot not set');

	SLOT.set(o, 'f', 42);
	t.equal(SLOT.get(o, 'f'), 42, 'slot was set');

	SLOT.set(o, 'f', Infinity);
	t.equal(SLOT.get(o, 'f'), Infinity, 'slot was set again');

	t.end();
});
