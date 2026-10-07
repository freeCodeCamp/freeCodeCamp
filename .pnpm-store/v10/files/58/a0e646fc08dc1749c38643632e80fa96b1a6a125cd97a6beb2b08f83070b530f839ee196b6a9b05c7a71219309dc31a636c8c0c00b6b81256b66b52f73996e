'use strict';

var test = require('tape');

var getDunderProto = require('../get');

test('getDunderProto', { skip: !getDunderProto }, function (t) {
	if (!getDunderProto) {
		throw 'should never happen; this is just for type narrowing'; // eslint-disable-line no-throw-literal
	}

	// @ts-expect-error
	t['throws'](function () { getDunderProto(); }, TypeError, 'throws if no argument');
	// @ts-expect-error
	t['throws'](function () { getDunderProto(undefined); }, TypeError, 'throws with undefined');
	// @ts-expect-error
	t['throws'](function () { getDunderProto(null); }, TypeError, 'throws with null');

	t.equal(getDunderProto({}), Object.prototype);
	t.equal(getDunderProto([]), Array.prototype);
	t.equal(getDunderProto(function () {}), Function.prototype);
	t.equal(getDunderProto(/./g), RegExp.prototype);
	t.equal(getDunderProto(42), Number.prototype);
	t.equal(getDunderProto(true), Boolean.prototype);
	t.equal(getDunderProto('foo'), String.prototype);

	t.end();
});

test('no dunder proto', { skip: !!getDunderProto }, function (t) {
	t.notOk('__proto__' in Object.prototype, 'no __proto__ in Object.prototype');

	t.end();
});
