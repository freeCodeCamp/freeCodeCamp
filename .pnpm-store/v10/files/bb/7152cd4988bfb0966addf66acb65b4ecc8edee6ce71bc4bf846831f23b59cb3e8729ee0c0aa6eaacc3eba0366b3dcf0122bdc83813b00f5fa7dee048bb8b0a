'use strict';

module.exports = function (getPrototypeOf, t) {
	t.test('nullish value', function (st) {
		st['throws'](function () { return getPrototypeOf(undefined); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return getPrototypeOf(null); }, TypeError, 'null is not an object');
		st.end();
	});

	t['throws'](function () { getPrototypeOf(true); }, 'throws for true');
	t['throws'](function () { getPrototypeOf(false); }, 'throws for false');
	t['throws'](function () { getPrototypeOf(42); }, 'throws for 42');
	t['throws'](function () { getPrototypeOf(NaN); }, 'throws for NaN');
	t['throws'](function () { getPrototypeOf(0); }, 'throws for +0');
	t['throws'](function () { getPrototypeOf(-0); }, 'throws for -0');
	t['throws'](function () { getPrototypeOf(Infinity); }, 'throws for ∞');
	t['throws'](function () { getPrototypeOf(-Infinity); }, 'throws for -∞');
	t['throws'](function () { getPrototypeOf(''); }, 'throws for empty string');
	t['throws'](function () { getPrototypeOf('foo'); }, 'throws for non-empty string');
	t.equal(getPrototypeOf(/a/g), RegExp.prototype);
	t.equal(getPrototypeOf(new Date()), Date.prototype);
	t.equal(getPrototypeOf(function () {}), Function.prototype);
	t.equal(getPrototypeOf([]), Array.prototype);
	t.equal(getPrototypeOf({}), Object.prototype);

	var obj = { __proto__: null };
	if ('toString' in obj) {
		t.comment('no null objects in this engine');
		t.equal(getPrototypeOf(obj), Object.prototype, '"null" object has Object.prototype as [[Prototype]]');
	} else {
		t.equal(getPrototypeOf(obj), null, 'null object has null [[Prototype]]');
	}
};
