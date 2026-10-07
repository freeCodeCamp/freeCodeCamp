'use strict';

var test = require('tape');
var hasToStringTag = require('has-tostringtag/shams')();
var hasOwn = require('hasown');

var setToStringTag = require('../');

test('setToStringTag', function (t) {
	t.equal(typeof setToStringTag, 'function', 'is a function');

	/** @type {{ [Symbol.toStringTag]?: typeof sentinel }} */
	var obj = {};
	var sentinel = {};

	setToStringTag(obj, sentinel);

	t['throws'](
		// @ts-expect-error
		function () { setToStringTag(obj, sentinel, { force: 'yes' }); },
		TypeError,
		'throws if options is not an object'
	);

	t.test('has Symbol.toStringTag', { skip: !hasToStringTag }, function (st) {
		st.ok(hasOwn(obj, Symbol.toStringTag), 'has toStringTag property');

		st.equal(obj[Symbol.toStringTag], sentinel, 'toStringTag property is as expected');

		st.equal(String(obj), '[object Object]', 'toStringTag works');

		/** @type {{ [Symbol.toStringTag]?: string }} */
		var tagged = {};
		tagged[Symbol.toStringTag] = 'already tagged';
		st.equal(String(tagged), '[object already tagged]', 'toStringTag works');

		setToStringTag(tagged, 'new tag');
		st.equal(String(tagged), '[object already tagged]', 'toStringTag is unchanged');

		setToStringTag(tagged, 'new tag', { force: true });
		st.equal(String(tagged), '[object new tag]', 'toStringTag is changed with force: true');

		st.deepEqual(
			Object.getOwnPropertyDescriptor(tagged, Symbol.toStringTag),
			{
				configurable: true,
				enumerable: false,
				value: 'new tag',
				writable: false
			},
			'has expected property descriptor'
		);

		setToStringTag(tagged, 'new tag', { force: true, nonConfigurable: true });
		st.deepEqual(
			Object.getOwnPropertyDescriptor(tagged, Symbol.toStringTag),
			{
				configurable: false,
				enumerable: false,
				value: 'new tag',
				writable: false
			},
			'is nonconfigurable'
		);

		st.end();
	});

	t.test('does not have Symbol.toStringTag', { skip: hasToStringTag }, function (st) {
		var passed = true;
		for (var key in obj) { // eslint-disable-line no-restricted-syntax
			if (hasOwn(obj, key)) {
				st.fail('object has own key ' + key);
				passed = false;
			}
		}
		if (passed) {
			st.ok(true, 'object has no enumerable own keys');
		}

		st.end();
	});

	t.end();
});
