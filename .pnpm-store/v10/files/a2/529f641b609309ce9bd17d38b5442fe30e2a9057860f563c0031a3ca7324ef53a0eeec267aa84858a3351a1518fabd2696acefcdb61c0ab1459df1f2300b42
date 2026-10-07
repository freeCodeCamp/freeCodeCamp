'use strict';

var test = require('tape');
var debug = require('object-inspect');
var forEach = require('for-each');

var isSet = require('..');

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
		t.equal(isSet(nonCollection), false, debug(nonCollection) + ' is not a Set');
	});

	t.end();
});

test('Maps', { skip: typeof Map !== 'function' }, function (t) {
	var m = new Map();
	t.equal(isSet(m), false, debug(m) + ' is not a Set');

	t.end();
});

test('Sets', { skip: typeof Set !== 'function' }, function (t) {
	var s = new Set();
	t.equal(isSet(s), true, debug(s) + ' is a Set');

	t.end();
});

test('WeakMaps', { skip: typeof WeakMap !== 'function' }, function (t) {
	var wm = new WeakMap();
	t.equal(isSet(wm), false, debug(wm) + ' is not a Set');

	t.end();
});

test('WeakSets', { skip: typeof WeakSet !== 'function' }, function (t) {
	var ws = new WeakSet();
	t.equal(isSet(ws), false, debug(ws) + ' is not a Set');

	t.end();
});
