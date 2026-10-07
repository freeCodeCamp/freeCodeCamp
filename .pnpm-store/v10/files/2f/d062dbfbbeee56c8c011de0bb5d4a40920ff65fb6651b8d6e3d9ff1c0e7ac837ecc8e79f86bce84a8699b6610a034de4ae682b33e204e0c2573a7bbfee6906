'use strict';

var test = require('tape');
var Test = require('tape/lib/test');
var inspect = require('object-inspect');
// eslint-disable-next-line global-require
var hasSymbols = require('has-symbols')() || require('has-symbols/shams')();
var hasBigInts = require('has-bigints')();
var forEach = require('for-each');

var getIterator = process.env.TEST_VARIANT === 'node' ? require('../node') : require('../');

Test.prototype.iterate = function (value, expected, message) {
	var i = 0;
	this.test(message, function (t) {
		var iterator = getIterator(value);
		if (!iterator) {
			t.fail(inspect(value) + ' is not iterable');
			return t.end();
		}
		if (typeof iterator.next !== 'function') {
			t.fail('iterator does not have a next function, got ' + inspect(iterator));
			return t.end();
		}
		var result;
		while ((result = iterator.next()) && !result.done) {
			var expectedDebug = typeof expected[i] === 'string' ? expected[i].charCodeAt(0) : expected[i];
			var actualDebug = typeof result.value === 'string' ? result.value.charCodeAt(0) : result.value;
			t.deepEqual(result.value, expected[i], 'index ' + i + ': expected ' + inspect(expectedDebug) + ', got ' + inspect(actualDebug));
			i += 1;
		}
		t.equal(i, expected.length, 'expected ' + expected.length + ' values, got ' + i + ' values');

		t.end();
	});
};

Test.prototype.noIterate = function (value) {
	this.equal(getIterator(value), undefined, inspect(value) + ' is not iterable');
};

Test.prototype.fakeIterator = function (value) {
	this.test(inspect(value) + ' with a fake iterator', { skip: !hasSymbols }, function (t) {
		var fakeValues = ['fake', 'iterator', 'scary'];
		var o = Object(value);
		o[Symbol.iterator] = function () {
			return getIterator(fakeValues);
		};
		t.iterate(o, fakeValues, inspect(o) + ' with an overwritten iterator method, yields those values instead');
		t.end();
	});
};

var getArguments = function () { return arguments; };
var getSloppyArguments = Function('return arguments');

var collect = function createCollection(C, items) {
	var c = new C();
	forEach(items, function (item) {
		if (c.add) {
			c.add(item);
		} else {
			c.set(item[0], item[1]);
		}
	});
	return c;
};

var runTests = function runTests(t) {
	t.test('strings', function (st) {
		st.iterate('', [], '"" yields nothing');
		st.iterate(Object(''), [], inspect(Object('')) + ' yields nothing');
		st.iterate('foo', ['f', 'o', 'o'], '"foo" yields three chars');
		st.iterate(Object('foo'), ['f', 'o', 'o'], inspect(Object('foo')) + ' yields three chars');
		st.iterate('a💩z', ['a', '💩', 'z'], '"a💩z" yields three code points');
		st.iterate(Object('a💩z'), ['a', '💩', 'z'], inspect(Object('a💩z')) + ' yields three code points');
		st.iterate('\ud83dX', ['\ud83d', 'X'], '(lone surrogate followed by "not a lone surrogate ending") yields one code point');

		st.fakeIterator('abc');

		st.end();
	});

	t.test('arrays', function (st) {
		st.iterate([], [], '[] yields nothing');
		st.iterate([1, 2], [1, 2], '[1, 2] yields [1, 2]');
		// eslint-disable-next-line no-sparse-arrays
		st.iterate([1, , 3], [1, undefined, 3], 'sparse array does not skip holes');

		st.fakeIterator([1, 2, 3]);

		st.end();
	});

	t.test('arguments', function (st) {
		st.iterate(getArguments(), [], 'empty arguments object yields nothing');
		st.iterate(getSloppyArguments(), [], 'empty sloppy arguments object yields nothing');
		st.iterate(getArguments(1, 2, 3), [1, 2, 3], 'arguments object yields all args');
		st.iterate(getSloppyArguments(1, 2, 3), [1, 2, 3], 'sloppy arguments object yields all args');

		st.fakeIterator(getArguments(1, 2, 3));
		st.fakeIterator(getSloppyArguments(1, 2, 3));

		st.end();
	});

	t.test('non-iterables', function (st) {
		var numbers = [0, -0, NaN, Infinity, 42];
		var nonIterables = [
			undefined,
			null,
			true,
			false,
			{},
			/a/g,
			function () {}
		];
		if (hasSymbols) {
			nonIterables.push(Symbol.iterator);
		}
		if (hasBigInts) {
			nonIterables.push(BigInt(42), BigInt(0));
		}
		forEach(nonIterables, function (nonIterable) {
			st.noIterate(nonIterable);
			if (nonIterable != null) {
				st.fakeIterator(nonIterable);
			}
		});
		if (hasSymbols && NaN[Symbol.iterator]) {
			st.comment('# SKIP core-js v2 makes numbers iterable, in violation of the spec');
		}
		forEach(numbers, function (number) {
			if (!hasSymbols || !number[Symbol.iterator]) {
				st.noIterate(number);
			}
			st.fakeIterator(number);
		});

		st.end();
	});

	t.test('Map', { skip: typeof Map !== 'function' }, function (st) {
		st.iterate(new Map(), [], 'empty Map yields nothing');
		var entries = [
			[1, 'a'],
			[2, 'b'],
			[3, 'c']
		];
		var m = collect(Map, entries);
		st.iterate(m, entries, inspect(m) + ' yields expected entries');

		st.fakeIterator(collect(Map, entries));

		st.end();
	});

	t.test('Set', { skip: typeof Set !== 'function' }, function (st) {
		st.iterate(new Set(), [], 'empty Set yields nothing');
		var values = [
			1,
			2,
			3
		];
		var s = collect(Set, values);
		st.iterate(s, values, inspect(s) + ' yields expected values');

		st.fakeIterator(collect(Set, values));

		st.end();
	});
};

test((process.env.TEST_VARIANT || 'standard') + ': getIterator tests', function (t) {
	runTests(t);

	t.end();
});
