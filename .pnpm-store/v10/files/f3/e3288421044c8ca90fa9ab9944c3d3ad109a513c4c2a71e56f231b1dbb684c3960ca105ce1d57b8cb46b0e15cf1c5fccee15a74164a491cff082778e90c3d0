'use strict';

var hasToStringTag = require('has-tostringtag/shams')();
var forEach = require('for-each');
var test = require('tape');
var isRegex = require('..');

test('not regexes', function (t) {
	// @ts-expect-error
	t.notOk(isRegex(), 'undefined is not regex');
	t.notOk(isRegex(null), 'null is not regex');
	t.notOk(isRegex(false), 'false is not regex');
	t.notOk(isRegex(true), 'true is not regex');
	t.notOk(isRegex(42), 'number is not regex');
	t.notOk(isRegex('foo'), 'string is not regex');
	t.notOk(isRegex([]), 'array is not regex');
	t.notOk(isRegex({}), 'object is not regex');
	t.notOk(isRegex(function () {}), 'function is not regex');
	t.end();
});

test('@@toStringTag', { skip: !hasToStringTag }, function (t) {
	var regex = /a/g;
	/** @type {{ toString(): string, valueOf(): RegExp, [Symbol.toStringTag]?: string}} */
	var fakeRegex = {
		toString: function () { return String(regex); },
		valueOf: function () { return regex; }
	};
	fakeRegex[Symbol.toStringTag] = 'RegExp';
	t.notOk(isRegex(fakeRegex), 'fake RegExp with @@toStringTag "RegExp" is not regex');
	t.end();
});

test('regexes', function (t) {
	t.ok(isRegex(/a/g), 'regex literal is regex');
	t.ok(isRegex(new RegExp('a', 'g')), 'regex object is regex');
	t.end();
});

test('does not mutate regexes', function (t) {
	t.test('lastIndex is a marker object', function (st) {
		var regex = /a/;
		var marker = {};
		// @ts-expect-error
		regex.lastIndex = marker;
		st.equal(regex.lastIndex, marker, 'lastIndex is the marker object');
		st.ok(isRegex(regex), 'is regex');
		st.equal(regex.lastIndex, marker, 'lastIndex is the marker object after isRegex');
		st.end();
	});

	t.test('lastIndex is nonzero', function (st) {
		var regex = /a/;
		regex.lastIndex = 3;
		st.equal(regex.lastIndex, 3, 'lastIndex is 3');
		st.ok(isRegex(regex), 'is regex');
		st.equal(regex.lastIndex, 3, 'lastIndex is 3 after isRegex');
		st.end();
	});

	t.end();
});

test('does not perform operations observable to Proxies', { skip: typeof Proxy !== 'function' }, function (t) {
	/** @constructor */
	function Handler() {
		/** @type (keyof Reflect)[]} */
		this.trapCalls = [];
	}

	// eslint-disable-next-line no-extra-parens
	forEach(/** @const @type {(keyof Reflect)[]} */ ([
		'defineProperty',
		'deleteProperty',
		'get',
		'getOwnPropertyDescriptor',
		'getPrototypeOf',
		'has',
		'isExtensible',
		'ownKeys',
		'preventExtensions',
		'set',
		'setPrototypeOf'
	]), function (trapName) {
		Handler.prototype[trapName] = function () {
			this.trapCalls.push(trapName);
			// @ts-expect-error TODO: not sure why this is erroring
			return Reflect[trapName].apply(Reflect, arguments);
		};
	});

	t.test('proxy of object', function (st) {
		var handler = new Handler();
		// @ts-expect-error Proxy handlers can be any object
		var proxy = new Proxy({ lastIndex: 0 }, handler);

		st.equal(isRegex(proxy), false, 'proxy of plain object is not regex');
		st.deepEqual(
			handler.trapCalls,
			handler.trapCalls.length > 0 ? ['getOwnPropertyDescriptor'] : [],
			'no unexpected proxy traps were triggered'
		);
		st.end();
	});

	t.test('proxy of RegExp instance', function (st) {
		var handler = new Handler();
		// @ts-expect-error Proxy handlers can be any object
		var proxy = new Proxy(/a/, handler);

		st.equal(isRegex(proxy), false, 'proxy of RegExp instance is not regex');
		st.deepEqual(
			handler.trapCalls,
			handler.trapCalls.length > 0 ? ['getOwnPropertyDescriptor'] : [],
			'no unexpected proxy traps were triggered'
		);
		st.end();
	});

	t.end();
});
