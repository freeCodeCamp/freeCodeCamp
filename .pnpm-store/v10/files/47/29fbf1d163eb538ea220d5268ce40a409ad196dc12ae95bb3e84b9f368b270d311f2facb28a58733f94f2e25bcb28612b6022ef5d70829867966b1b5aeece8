'use strict';

var test = require('tape');

var getSideChannel = require('../');

test('getSideChannel', function (t) {
	t.test('export', function (st) {
		st.equal(typeof getSideChannel, 'function', 'is a function');

		st.equal(getSideChannel.length, 0, 'takes no arguments');

		var channel = getSideChannel();
		st.ok(channel, 'is truthy');
		st.equal(typeof channel, 'object', 'is an object');
		st.end();
	});

	t.test('assert', function (st) {
		var channel = getSideChannel();
		st['throws'](
			function () { channel.assert({}); },
			TypeError,
			'nonexistent value throws'
		);

		var o = {};
		channel.set(o, 'data');
		st.doesNotThrow(function () { channel.assert(o); }, 'existent value noops');

		st.end();
	});

	t.test('has', function (st) {
		var channel = getSideChannel();
		/** @type {unknown[]} */ var o = [];

		st.equal(channel.has(o), false, 'nonexistent value yields false');

		channel.set(o, 'foo');
		st.equal(channel.has(o), true, 'existent value yields true');

		st.equal(channel.has('abc'), false, 'non object value non existent yields false');

		channel.set('abc', 'foo');
		st.equal(channel.has('abc'), true, 'non object value that exists yields true');

		st.end();
	});

	t.test('get', function (st) {
		var channel = getSideChannel();
		var o = {};
		st.equal(channel.get(o), undefined, 'nonexistent value yields undefined');

		var data = {};
		channel.set(o, data);
		st.equal(channel.get(o), data, '"get" yields data set by "set"');

		st.end();
	});

	t.test('set', function (st) {
		var channel = getSideChannel();
		var o = function () {};
		st.equal(channel.get(o), undefined, 'value not set');

		channel.set(o, 42);
		st.equal(channel.get(o), 42, 'value was set');

		channel.set(o, Infinity);
		st.equal(channel.get(o), Infinity, 'value was set again');

		var o2 = {};
		channel.set(o2, 17);
		st.equal(channel.get(o), Infinity, 'o is not modified');
		st.equal(channel.get(o2), 17, 'o2 is set');

		channel.set(o, 14);
		st.equal(channel.get(o), 14, 'o is modified');
		st.equal(channel.get(o2), 17, 'o2 is not modified');

		st.end();
	});

	t.test('delete', function (st) {
		var channel = getSideChannel();
		var o = {};
		st.equal(channel['delete']({}), false, 'nonexistent value yields false');

		channel.set(o, 42);
		st.equal(channel.has(o), true, 'value is set');

		st.equal(channel['delete']({}), false, 'nonexistent value still yields false');

		st.equal(channel['delete'](o), true, 'deleted value yields true');

		st.equal(channel.has(o), false, 'value is no longer set');

		st.end();
	});

	t.end();
});
