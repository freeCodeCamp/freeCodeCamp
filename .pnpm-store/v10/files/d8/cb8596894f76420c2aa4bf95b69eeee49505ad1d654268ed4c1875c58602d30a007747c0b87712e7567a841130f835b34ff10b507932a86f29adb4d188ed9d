'use strict';

var test = require('tape');
var debug = require('object-inspect');
var forEach = require('for-each');

var isWeakMap = require('..');

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
		t.equal(isWeakMap(nonCollection), false, debug(nonCollection) + ' is not a WeakMap');
	});

	t.end();
});

test('Maps', { skip: typeof Map !== 'function' }, function (t) {
	var m = new Map();
	t.equal(isWeakMap(m), false, debug(m) + ' is not a WeakMap');

	t.end();
});

test('Sets', { skip: typeof Set !== 'function' }, function (t) {
	var s = new Set();
	t.equal(isWeakMap(s), false, debug(s) + ' is not a WeakMap');

	t.end();
});

test('WeakMaps', { skip: typeof WeakMap !== 'function' }, function (t) {
	var wm = new WeakMap();
	t.equal(isWeakMap(wm), true, debug(wm) + ' is a WeakMap');

	t.end();
});

test('WeakSets', { skip: typeof WeakSet !== 'function' }, function (t) {
	var ws = new WeakSet();
	t.equal(isWeakMap(ws), false, debug(ws) + ' is not a WeakMap');

	t.end();
});
