'use strict';

var test = require('tape');

var $Object = require('../');
var isObject = require('../isObject');
var ToObject = require('../ToObject');
var RequireObjectCoercible = require('..//RequireObjectCoercible');

test('errors', function (t) {
	t.equal($Object, Object);
	// @ts-expect-error
	t['throws'](function () { ToObject(null); }, TypeError);
	// @ts-expect-error
	t['throws'](function () { ToObject(undefined); }, TypeError);
	// @ts-expect-error
	t['throws'](function () { RequireObjectCoercible(null); }, TypeError);
	// @ts-expect-error
	t['throws'](function () { RequireObjectCoercible(undefined); }, TypeError);

	t.deepEqual(RequireObjectCoercible(true), true);
	t.deepEqual(ToObject(true), Object(true));
	t.deepEqual(ToObject(42), Object(42));
	var f = function () {};
	t.equal(ToObject(f), f);

	t.equal(isObject(undefined), false);
	t.equal(isObject(null), false);
	t.equal(isObject({}), true);
	t.equal(isObject([]), true);
	t.equal(isObject(function () {}), true);

	var obj = {};
	t.equal(RequireObjectCoercible(obj), obj);
	t.equal(ToObject(obj), obj);

	t.end();
});
