/* eslint no-restricted-syntax: 0, no-with: 0, strict: 0 */

var test = require('tape');

var shimUnscopables = require('../');

test('`with` statement', { skip: typeof Symbol !== 'function' || !Symbol.unscopables }, function (t) {
	// @ts-expect-error this variable is declared in case unscopables doesn't work
	var entries;
	// @ts-expect-error this variable is declared in case unscopables doesn't work
	var concat;
	// @ts-expect-error `with` unsupported
	with ([]) {
		t.equal(concat, Array.prototype.concat, 'concat is dynamically bound');
		t.notEqual(entries, Array.prototype.entries, 'entries is not dynamically bound');
	}

	/** @type {Record<PropertyKey, unknown>} */
	var obj = {
		foo: 1,
		bar: 2
	};
	// @ts-expect-error this variable is declared in case unscopables doesn't work
	var foo;
	// @ts-expect-error this variable is declared in case unscopables doesn't work
	var bar;
	obj[Symbol.unscopables] = { foo: true };
	// @ts-expect-error `with` unsupported
	with (obj) {
		t.equal(foo, undefined);
		t.equal(bar, obj.bar);
	}

	shimUnscopables('concat');

	// @ts-expect-error `with` unsupported
	with ([]) {
		t.notEqual(concat, Array.prototype.concat, 'concat is no longer dynamically bound');
		t.notEqual(entries, Array.prototype.entries, 'entries is still not dynamically bound');
	}

	t.end();
});
