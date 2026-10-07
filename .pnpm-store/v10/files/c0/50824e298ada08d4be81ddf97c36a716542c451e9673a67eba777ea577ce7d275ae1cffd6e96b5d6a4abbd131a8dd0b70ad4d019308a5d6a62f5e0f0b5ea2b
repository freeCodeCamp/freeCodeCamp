'use strict';

var test = require('tape');
var debug = require('object-inspect');
var forEach = require('for-each');

var isMap = require('..');

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
		t.equal(isMap(nonCollection), false, debug(nonCollection) + ' is not a Map');
	});

	t.end();
});

test('Maps', { skip: typeof Map !== 'function' }, function (t) {
	var m = new Map();
	t.equal(isMap(m), true, debug(m) + ' is a Map');

	t.end();
});

test('Sets', { skip: typeof Set !== 'function' }, function (t) {
	var s = new Set();
	t.equal(isMap(s), false, debug(s) + ' is not a Map');

	t.end();
});

test('WeakMaps', { skip: typeof WeakMap !== 'function' }, function (t) {
	var wm = new WeakMap();
	t.equal(isMap(wm), false, debug(wm) + ' is not a Map');

	t.end();
});

test('WeakSets', { skip: typeof WeakSet !== 'function' }, function (t) {
	var ws = new WeakSet();
	t.equal(isMap(ws), false, debug(ws) + ' is not a Map');

	t.end();
});
