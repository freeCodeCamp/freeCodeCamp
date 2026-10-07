'use strict';

var test = require('tape');

var setProto = require('../');

var isPrototypeOf = Object.prototype.isPrototypeOf;

test('setProto', function (t) {
	t.equal(typeof setProto, 'function', 'is a function');

	t.test('can set', { skip: !setProto }, function (st) {
		var obj = { a: 1 };
		var proto = { b: 2 };

		st.ok(isPrototypeOf.call(Object.prototype, obj), 'Object.prototype is isPrototypeOf obj');
		st.notOk(isPrototypeOf.call(proto, obj), 'proto is not isPrototypeOf obj');
		st.ok('a' in obj, 'a is in obj');
		st.notOk('b' in obj, 'b is not in obj');

		// eslint-disable-next-line no-extra-parens
		st.equal(/** @type {NonNullable<typeof setProto>} */ (setProto)(obj, proto), obj, 'returns the object');

		st.ok(isPrototypeOf.call(Object.prototype, obj), 'Object.prototype is isPrototypeOf obj');
		st.ok(isPrototypeOf.call(proto, obj), 'proto is isPrototypeOf obj');
		st.ok('a' in obj, 'a is in obj');
		st.ok('b' in obj, 'b is in obj');

		st.equal(Object.getPrototypeOf(obj), proto, 'sets the prototype');
		st.end();
	});

	t.test('can not set', { skip: !!setProto }, function (st) {
		st.equal(setProto, null);

		st.end();
	});

	t.end();
});
