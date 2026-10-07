'use strict';

/* globals window */

var test = require('tape');
var isAsyncFunction = require('../index');
var generatorFuncs = require('make-generator-function')();
var asyncFuncs = require('make-async-function').list();
var hasToStringTag = require('has-tostringtag/shams')();

var forEach = function (arr, func) {
	var i;
	for (i = 0; i < arr.length; ++i) {
		func(arr[i], i, arr);
	}
};

test('returns false for non-functions', function (t) {
	var nonFuncs = [
		true,
		false,
		null,
		undefined,
		{},
		[],
		/a/g,
		'string',
		42,
		new Date()
	];
	t.plan(nonFuncs.length);
	forEach(nonFuncs, function (nonFunc) {
		t.notOk(isAsyncFunction(nonFunc), nonFunc + ' is not a function');
	});
	t.end();
});

test('returns false for non-async functions', function (t) {
	var func = function () {};
	t.notOk(isAsyncFunction(func), 'anonymous function is not an async function');

	var namedFunc = function foo() {};
	t.notOk(isAsyncFunction(namedFunc), 'named function is not an async function');

	if (typeof window === 'undefined') {
		t.skip('window.alert is not an async function');
	} else {
		t.notOk(isAsyncFunction(window.alert), 'window.alert is not an async function');
	}
	t.end();
});

var fakeToString = function () { return 'async function () { return "TOTALLY REAL I SWEAR!"; }'; };

test('returns false for non-async function with faked toString', function (t) {
	var func = function () {};
	func.toString = fakeToString;

	t.notEqual(String(func), Function.prototype.toString.apply(func), 'faked toString is not real toString');
	t.notOk(isAsyncFunction(func), 'anonymous function with faked toString is not an async function');
	t.end();
});

test('returns false for generator functions', function (t) {
	if (generatorFuncs.length > 0) {
		forEach(generatorFuncs, function (generatorFunc) {
			t.notOk(isAsyncFunction(generatorFunc), generatorFunc + ' is not async function');
		});
	} else {
		t.skip('generator function is not async function - this environment does not support ES6 generator functions. Please use an engine that supports them.');
	}
	t.end();
});

test('returns false for non-async function with faked @@toStringTag', { skip: !hasToStringTag || asyncFuncs.length === 0 }, function (t) {
	var asyncFunc = asyncFuncs[0];
	var fakeAsyncFunction = {
		toString: function () { return String(asyncFunc); },
		valueOf: function () { return asyncFunc; }
	};
	fakeAsyncFunction[Symbol.toStringTag] = 'AsyncFunction';
	t.notOk(isAsyncFunction(fakeAsyncFunction), 'fake AsyncFunction with @@toStringTag "AsyncFunction" is not an async function');
	t.end();
});

test('returns true for async functions', function (t) {
	if (asyncFuncs.length > 0) {
		forEach(asyncFuncs, function (asyncFunc) {
			t.ok(isAsyncFunction(asyncFunc), asyncFunc + ' is async function');
		});
	} else {
		t.skip('async function is async function - this environment does not support ES2018 async functions. Please use an engine that supports them.');
	}
	t.end();
});
