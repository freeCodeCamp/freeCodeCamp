'use strict';

var test = require('tape');

var getProto = require('../');

test('getProto', function (t) {
	t.equal(typeof getProto, 'function', 'is a function');

	t.test('can get', { skip: !getProto }, function (st) {
		if (getProto) { // TS doesn't understand tape's skip
			var proto = { b: 2 };
			st.equal(getProto(proto), Object.prototype, 'proto: returns the [[Prototype]]');

			st.test('nullish value', function (s2t) {
			// @ts-expect-error
				s2t['throws'](function () { return getProto(undefined); }, TypeError, 'undefined is not an object');
				// @ts-expect-error
				s2t['throws'](function () { return getProto(null); }, TypeError, 'null is not an object');
				s2t.end();
			});

			// @ts-expect-error
			st['throws'](function () { getProto(true); }, 'throws for true');
			// @ts-expect-error
			st['throws'](function () { getProto(false); }, 'throws for false');
			// @ts-expect-error
			st['throws'](function () { getProto(42); }, 'throws for 42');
			// @ts-expect-error
			st['throws'](function () { getProto(NaN); }, 'throws for NaN');
			// @ts-expect-error
			st['throws'](function () { getProto(0); }, 'throws for +0');
			// @ts-expect-error
			st['throws'](function () { getProto(-0); }, 'throws for -0');
			// @ts-expect-error
			st['throws'](function () { getProto(Infinity); }, 'throws for ∞');
			// @ts-expect-error
			st['throws'](function () { getProto(-Infinity); }, 'throws for -∞');
			// @ts-expect-error
			st['throws'](function () { getProto(''); }, 'throws for empty string');
			// @ts-expect-error
			st['throws'](function () { getProto('foo'); }, 'throws for non-empty string');
			st.equal(getProto(/a/g), RegExp.prototype);
			st.equal(getProto(new Date()), Date.prototype);
			st.equal(getProto(function () {}), Function.prototype);
			st.equal(getProto([]), Array.prototype);
			st.equal(getProto({}), Object.prototype);

			var nullObject = { __proto__: null };
			if ('toString' in nullObject) {
				st.comment('no null objects in this engine');
				st.equal(getProto(nullObject), Object.prototype, '"null" object has Object.prototype as [[Prototype]]');
			} else {
				st.equal(getProto(nullObject), null, 'null object has null [[Prototype]]');
			}
		}

		st.end();
	});

	t.test('can not get', { skip: !!getProto }, function (st) {
		st.equal(getProto, null);

		st.end();
	});

	t.end();
});
