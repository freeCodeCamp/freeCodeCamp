'use strict';

var hasSymbols = require('has-symbols/shams')();
var forEach = require('for-each');
var hasOwn = require('hasown');
var mockProperty = require('mock-property');

module.exports = function (assign, t) {
	t.test('error cases', function (st) {
		st['throws'](function () { assign(null); }, TypeError, 'target must be an object');
		st['throws'](function () { assign(undefined); }, TypeError, 'target must be an object');
		st['throws'](function () { assign(null, {}); }, TypeError, 'target must be an object');
		st['throws'](function () { assign(undefined, {}); }, TypeError, 'target must be an object');
		st.end();
	});

	t.test('non-object target, no sources', function (st) {
		var bool = assign(true);
		st.equal(typeof bool, 'object', 'bool is object');
		st.equal(Boolean.prototype.valueOf.call(bool), true, 'bool coerces to `true`');

		var number = assign(1);
		st.equal(typeof number, 'object', 'number is object');
		st.equal(Number.prototype.valueOf.call(number), 1, 'number coerces to `1`');

		var string = assign('1');
		st.equal(typeof string, 'object', 'number is object');
		st.equal(String.prototype.valueOf.call(string), '1', 'number coerces to `"1"`');

		st.end();
	});

	t.test('non-object target, with sources', function (st) {
		var signal = {};

		st.test('boolean', function (st2) {
			var bool = assign(true, { a: signal });
			st2.equal(typeof bool, 'object', 'bool is object');
			st2.equal(Boolean.prototype.valueOf.call(bool), true, 'bool coerces to `true`');
			st2.equal(bool.a, signal, 'source properties copied');
			st2.end();
		});

		st.test('number', function (st2) {
			var number = assign(1, { a: signal });
			st2.equal(typeof number, 'object', 'number is object');
			st2.equal(Number.prototype.valueOf.call(number), 1, 'number coerces to `1`');
			st2.equal(number.a, signal, 'source properties copied');
			st2.end();
		});

		st.test('string', function (st2) {
			var string = assign('1', { a: signal });
			st2.equal(typeof string, 'object', 'number is object');
			st2.equal(String.prototype.valueOf.call(string), '1', 'number coerces to `"1"`');
			st2.equal(string.a, signal, 'source properties copied');
			st2.end();
		});

		st.end();
	});

	t.test('non-object sources', function (st) {
		st.deepEqual(assign({ a: 1 }, null, { b: 2 }), { a: 1, b: 2 }, 'ignores null source');
		st.deepEqual(assign({ a: 1 }, { b: 2 }, undefined), { a: 1, b: 2 }, 'ignores undefined source');
		st.end();
	});

	t.test('returns the modified target object', function (st) {
		var target = {};
		var returned = assign(target, { a: 1 });
		st.equal(returned, target, 'returned object is the same reference as the target object');
		st.end();
	});

	t.test('has the right length', function (st) {
		st.equal(assign.length, 2, 'length is 2 => 2 required arguments');
		st.end();
	});

	t.test('merge two objects', function (st) {
		var target = { a: 1 };
		var returned = assign(target, { b: 2 });
		st.deepEqual(returned, { a: 1, b: 2 }, 'returned object has properties from both');
		st.end();
	});

	t.test('works with functions', function (st) {
		var target = function () {};
		target.a = 1;
		var returned = assign(target, { b: 2 });
		st.equal(target, returned, 'returned object is target');
		st.equal(returned.a, 1);
		st.equal(returned.b, 2);
		st.end();
	});

	t.test('works with primitives', function (st) {
		var target = 2;
		var source = { b: 42 };
		var returned = assign(target, source);
		st.equal(Object.prototype.toString.call(returned), '[object Number]', 'returned is object form of number primitive');
		st.equal(Number(returned), target, 'returned and target have same valueOf');
		st.equal(returned.b, source.b);
		st.end();
	});

	/* globals window */
	t.test('works with window.location', { skip: typeof window === 'undefined' }, function (st) {
		var target = {};
		assign(target, window.location);
		for (var prop in window.location) {
			if (hasOwn(window.location, prop)) {
				st.deepEqual(target[prop], window.location[prop], prop + ' is copied');
			}
		}
		st.end();
	});

	t.test('merge N objects', function (st) {
		var target = { a: 1 };
		var source1 = { b: 2 };
		var source2 = { c: 3 };
		var returned = assign(target, source1, source2);
		st.deepEqual(returned, { a: 1, b: 2, c: 3 }, 'returned object has properties from all sources');
		st.end();
	});

	t.test('only iterates over own keys', function (st) {
		var Foo = function () {};
		Foo.prototype.bar = true;
		var foo = new Foo();
		foo.baz = true;
		var target = { a: 1 };
		var returned = assign(target, foo);
		st.equal(returned, target, 'returned object is the same reference as the target object');
		st.deepEqual(target, { a: 1, baz: true }, 'returned object has only own properties from both');
		st.end();
	});

	t.test('includes enumerable symbols, after keys', { skip: !hasSymbols }, function (st) {
		var visited = [];
		var obj = {};
		Object.defineProperty(obj, 'a', { enumerable: true, get: function () { visited.push('a'); return 42; } });
		var symbol = Symbol('enumerable');
		Object.defineProperty(obj, symbol, {
			enumerable: true,
			get: function () { visited.push(symbol); return Infinity; }
		});
		var nonEnumSymbol = Symbol('non-enumerable');
		Object.defineProperty(obj, nonEnumSymbol, {
			enumerable: false,
			get: function () { visited.push(nonEnumSymbol); return -Infinity; }
		});
		var target = assign({}, obj);
		st.deepEqual(visited, ['a', symbol], 'key is visited first, then symbol');
		st.equal(target.a, 42, 'target.a is 42');
		st.equal(target[symbol], Infinity, 'target[symbol] is Infinity');
		st.notEqual(target[nonEnumSymbol], -Infinity, 'target[nonEnumSymbol] is not -Infinity');
		st.end();
	});

	t.test('does not fail when symbols are not present', { skip: !Object.isFrozen || Object.isFrozen(Object) }, function (st) {
		st.teardown(mockProperty(Object, 'getOwnPropertySymbols', { 'delete': true }));

		var visited = [];
		var obj = {};
		Object.defineProperty(obj, 'a', { enumerable: true, get: function () { visited.push('a'); return 42; } });
		var keys = ['a'];
		if (hasSymbols) {
			var symbol = Symbol('sym');
			Object.defineProperty(obj, symbol, {
				enumerable: true,
				get: function () { visited.push(symbol); return Infinity; }
			});
			keys.push(symbol);
		}
		var target = assign({}, obj);
		st.deepEqual(visited, keys, 'assign visits expected keys');
		st.equal(target.a, 42, 'target.a is 42');

		if (hasSymbols) {
			st.equal(target[symbol], Infinity);
		}
		st.end();
	});

	t.test('preserves correct property enumeration order', function (st) {
		var str = 'abcdefghijklmnopqrst';
		var letters = {};
		forEach(str.split(''), function (letter) {
			letters[letter] = letter;
		});

		var n = 5;
		st.comment('run the next test ' + n + ' times');
		var object = assign({}, letters);
		var actual = '';
		for (var k in object) {
			actual += k;
		}
		for (var i = 0; i < n; ++i) {
			st.equal(actual, str, 'property enumeration order should be followed');
		}
		st.end();
	});

	t.test('checks enumerability and existence, in case of modification during [[Get]]', { skip: !Object.defineProperty }, function (st) {
		var targetBvalue = {};
		var targetCvalue = {};
		var target = { b: targetBvalue, c: targetCvalue };
		var source = {};
		Object.defineProperty(source, 'a', {
			enumerable: true,
			get: function () {
				delete this.b;
				Object.defineProperty(this, 'c', { enumerable: false });
				return 'a';
			}
		});
		var sourceBvalue = {};
		var sourceCvalue = {};
		source.b = sourceBvalue;
		source.c = sourceCvalue;
		var result = assign(target, source);
		st.equal(result, target, 'sanity check: result is === target');
		st.equal(result.b, targetBvalue, 'target key not overwritten by deleted source key');
		st.equal(result.c, targetCvalue, 'target key not overwritten by non-enumerable source key');

		st.end();
	});
};
