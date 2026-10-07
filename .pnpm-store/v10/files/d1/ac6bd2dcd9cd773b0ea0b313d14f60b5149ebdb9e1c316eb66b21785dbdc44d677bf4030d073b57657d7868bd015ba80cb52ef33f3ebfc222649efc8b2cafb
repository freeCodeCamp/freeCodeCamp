'use strict';

var test = require('tape');
var debug = require('object-inspect');
var forEach = require('for-each');

var isWeakSet = require('..');

test('non-collections', function (t) {
	forEach([
		null,
		undefined,
		true,
		false,
		42,
		0,
		-0,
		NaN,
		Infinity,
		'',
		'foo',
		/a/g,
		[],
		{},
		function () {}
	], function (nonCollection) {
		t.equal(isWeakSet(nonCollection), false, debug(nonCollection) + ' is not a WeakSet');
	});

	t.end();
});

test('Maps', { skip: typeof Map !== 'function' }, function (t) {
	var m = new Map();
	t.equal(isWeakSet(m), false, debug(m) + ' is not a WeakSet');

	t.end();
});

test('Sets', { skip: typeof Set !== 'function' }, function (t) {
	var s = new Set();
	t.equal(isWeakSet(s), false, debug(s) + ' is not a WeakSet');

	t.end();
});

test('WeakMaps', { skip: typeof WeakMap !== 'function' }, function (t) {
	var wm = new WeakMap();
	t.equal(isWeakSet(wm), false, debug(wm) + ' is not a WeakSet');

	t.end();
});

test('WeakSets', { skip: typeof WeakSet !== 'function' }, function (t) {
	var ws = new WeakSet();
	t.equal(isWeakSet(ws), true, debug(ws) + ' is a WeakSet');

	t.end();
});
