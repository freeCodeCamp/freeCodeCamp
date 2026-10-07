'use strict';

var $defineProperty = require('../');

var test = require('tape');
var gOPD = require('gopd');

test('defineProperty: supported', { skip: !$defineProperty }, function (t) {
	t.plan(4);

	t.equal(typeof $defineProperty, 'function', 'defineProperty is supported');
	if ($defineProperty && gOPD) { // this `if` check is just to shut TS up
		/** @type {{ a: number, b?: number, c?: number }} */
		var o = { a: 1 };

		$defineProperty(o, 'b', { enumerable: true, value: 2 });
		t.deepEqual(
			gOPD(o, 'b'),
			{
				configurable: false,
				enumerable: true,
				value: 2,
				writable: false
			},
			'property descriptor is as expected'
		);

		$defineProperty(o, 'c', { enumerable: false, value: 3, writable: true });
		t.deepEqual(
			gOPD(o, 'c'),
			{
				configurable: false,
				enumerable: false,
				value: 3,
				writable: true
			},
			'property descriptor is as expected'
		);
	}

	t.equal($defineProperty, Object.defineProperty, 'defineProperty is Object.defineProperty');

	t.end();
});

test('defineProperty: not supported', { skip: !!$defineProperty }, function (t) {
	t.notOk($defineProperty, 'defineProperty is not supported');

	t.match(
		typeof $defineProperty,
		/^(?:undefined|boolean)$/,
		'`typeof defineProperty` is `undefined` or `boolean`'
	);

	t.end();
});
