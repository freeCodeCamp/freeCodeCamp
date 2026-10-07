'use strict';

var test = require('tape');
var forEach = require('for-each');
var v = require('es-value-fixtures');

var isSymbol = require('../index');

var hasSymbols = require('has-symbols')();
var hasToStringTag = require('has-tostringtag/shams')();
var inspect = require('object-inspect');

test('non-symbol values', function (t) {
	var nonSymbols = v.nonSymbolPrimitives.concat(
		Object(true),
		Object(false),
		// @ts-expect-error TS sucks with concat
		{},
		[],
		/a/g,
		new Date(),
		function () {},
		NaN
	);
	t.plan(nonSymbols.length);
	forEach(nonSymbols, function (nonSymbol) {
		t.equal(isSymbol(nonSymbol), false, inspect(nonSymbol) + ' is not a symbol');
	});
	t.end();
});

test('faked symbol values', function (t) {
	t.test('real symbol valueOf', { skip: !hasSymbols }, function (st) {
		var fakeSymbol = { valueOf: function () { return Symbol('foo'); } };
		st.equal(isSymbol(fakeSymbol), false, 'object with valueOf returning a symbol is not a symbol');
		st.end();
	});

	t.test('faked @@toStringTag', { skip: !hasToStringTag }, function (st) {
		/** @type {{ valueOf(): unknown; [Symbol.toStringTag]?: unknown }} */
		var fakeSymbol = { valueOf: function () { return Symbol('foo'); } };
		fakeSymbol[Symbol.toStringTag] = 'Symbol';
		st.equal(isSymbol(fakeSymbol), false, 'object with fake Symbol @@toStringTag and valueOf returning a symbol is not a symbol');

		/** @type {{ valueOf(): unknown; [Symbol.toStringTag]?: unknown }} */
		var notSoFakeSymbol = { valueOf: function () { return 42; } };
		notSoFakeSymbol[Symbol.toStringTag] = 'Symbol';
		st.equal(isSymbol(notSoFakeSymbol), false, 'object with fake Symbol @@toStringTag and valueOf not returning a symbol is not a symbol');
		st.end();
	});

	var fakeSymbolString = { toString: function () { return 'Symbol(foo)'; } };
	t.equal(isSymbol(fakeSymbolString), false, 'object with toString returning Symbol(foo) is not a symbol');

	t.end();
});

test('Symbol support', { skip: !hasSymbols }, function (t) {
	t.test('well-known Symbols', function (st) {
		/** @type {(name: string) => name is Exclude<keyof SymbolConstructor, 'for' | 'keyFor'>} */
		var isWellKnown = function filterer(name) {
			return name !== 'for' && name !== 'keyFor' && !(name in filterer);
		};
		var wellKnownSymbols = Object.getOwnPropertyNames(Symbol).filter(isWellKnown);
		wellKnownSymbols.forEach(function (name) {
			// eslint-disable-next-line no-extra-parens
			var sym = Symbol[/** @type {keyof SymbolConstructor} */ (name)];
			st.equal(isSymbol(sym), true, inspect(sym) + ' is a symbol');
		});
		st.end();
	});

	t.test('user-created symbols', function (st) {
		var symbols = v.symbols.concat(
			Symbol(),
			Symbol('foo'),
			Symbol['for']('foo'),
			Object(Symbol('object'))
		);
		symbols.forEach(function (sym) {
			st.equal(isSymbol(sym), true, inspect(sym) + ' is a symbol');
		});
		st.end();
	});

	t.end();
});

