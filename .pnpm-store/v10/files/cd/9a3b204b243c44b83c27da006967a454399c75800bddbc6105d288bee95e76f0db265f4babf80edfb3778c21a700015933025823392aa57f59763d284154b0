'use strict';

var test = require('tape');

var setDunderProto = require('../set');

test('setDunderProto', { skip: !setDunderProto }, function (t) {
	if (!setDunderProto) {
		throw 'should never happen; this is just for type narrowing'; // eslint-disable-line no-throw-literal
	}

	// @ts-expect-error
	t['throws'](function () { setDunderProto(); }, TypeError, 'throws if no arguments');
	// @ts-expect-error
	t['throws'](function () { setDunderProto(undefined); }, TypeError, 'throws with undefined and nothing');
	// @ts-expect-error
	t['throws'](function () { setDunderProto(undefined, undefined); }, TypeError, 'throws with undefined and undefined');
	// @ts-expect-error
	t['throws'](function () { setDunderProto(null); }, TypeError, 'throws with null and undefined');
	// @ts-expect-error
	t['throws'](function () { setDunderProto(null, undefined); }, TypeError, 'throws with null and undefined');

	/** @type {{ inherited?: boolean }} */
	var obj = {};
	t.ok('toString' in obj, 'object initially has toString');

	setDunderProto(obj, null);
	t.notOk('toString' in obj, 'object no longer has toString');

	t.notOk('inherited' in obj, 'object lacks inherited property');
	setDunderProto(obj, { inherited: true });
	t.equal(obj.inherited, true, 'object has inherited property');

	t.end();
});

test('no dunder proto', { skip: !!setDunderProto }, function (t) {
	if ('__proto__' in Object.prototype) {
		t['throws'](
			// @ts-expect-error
			function () { ({}).__proto__ = null; }, // eslint-disable-line no-proto
			Error,
			'throws when setting Object.prototype.__proto__'
		);
	} else {
		t.notOk('__proto__' in Object.prototype, 'no __proto__ in Object.prototype');
	}

	t.end();
});
