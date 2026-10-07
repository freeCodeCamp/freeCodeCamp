'use strict';

var hasSymbols = require('has-symbols')();

module.exports = function runTests(is, t) {
	t.test('works with primitives', function (st) {
		st.ok(is(), 'two absent args are the same');
		st.ok(is(undefined), 'undefined & one absent arg are the same');
		st.ok(is(undefined, undefined), 'undefined is undefined');
		st.ok(is(null, null), 'null is null');
		st.ok(is(true, true), 'true is true');
		st.ok(is(false, false), 'false is false');
		st.notOk(is(true, false), 'true is not false');
		st.end();
	});

	t.test('works with NaN', function (st) {
		st.ok(is(NaN, NaN), 'NaN is NaN');
		st.end();
	});

	t.test('differentiates zeroes', function (st) {
		st.ok(is(0, 0), '+0 is +0');
		st.ok(is(-0, -0), '-0 is -0');
		st.notOk(is(0, -0), '+0 is not -0');
		st.end();
	});

	t.test('nonzero numbers', function (st) {
		st.ok(is(Infinity, Infinity), 'infinity is infinity');
		st.ok(is(-Infinity, -Infinity), 'infinity is infinity');
		st.ok(is(42, 42), '42 is 42');
		st.notOk(is(42, -42), '42 is not -42');
		st.end();
	});

	t.test('strings', function (st) {
		st.ok(is('', ''), 'empty string is empty string');
		st.ok(is('foo', 'foo'), 'string is string');
		st.notOk(is('foo', 'bar'), 'string is not different string');
		st.end();
	});

	t.test('objects', function (st) {
		var obj = {};
		st.ok(is(obj, obj), 'object is same object');
		st.notOk(is(obj, {}), 'object is not different object');
		st.end();
	});

	t.test('Symbols', { skip: !hasSymbols }, function (st) {
		st.ok(is(Symbol.iterator, Symbol.iterator), 'Symbol.iterator is itself');
		st.notOk(is(Symbol(), Symbol()), 'different Symbols are not equal');
		st.notOk(is(Symbol.iterator, Object(Symbol.iterator)), 'Symbol.iterator is not boxed form of itself');
		st.end();
	});
};
