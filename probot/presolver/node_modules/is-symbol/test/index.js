'use strict';

var test = require('tape');
var isSymbol = require('../index');

var forEach = function (arr, func) {
	var i;
	for (i = 0; i < arr.length; ++i) {
		func(arr[i], i, arr);
	}
};

var hasSymbols = require('has-symbols')();
var inspect = require('object-inspect');
var debug = function (v, m) { return inspect(v) + ' ' + m; };

test('non-symbol values', function (t) {
	var nonSymbols = [
		true,
		false,
		Object(true),
		Object(false),
		null,
		undefined,
		{},
		[],
		/a/g,
		'string',
		42,
		new Date(),
		function () {},
		NaN
	];
	t.plan(nonSymbols.length);
	forEach(nonSymbols, function (nonSymbol) {
		t.equal(false, isSymbol(nonSymbol), debug(nonSymbol, 'is not a symbol'));
	});
	t.end();
});

test('faked symbol values', function (t) {
	t.test('real symbol valueOf', { skip: !hasSymbols }, function (st) {
		var fakeSymbol = { valueOf: function () { return Symbol('foo'); } };
		st.equal(false, isSymbol(fakeSymbol), 'object with valueOf returning a symbol is not a symbol');
		st.end();
	});

	t.test('faked @@toStringTag', { skip: !hasSymbols || !Symbol.toStringTag }, function (st) {
		var fakeSymbol = { valueOf: function () { return Symbol('foo'); } };
		fakeSymbol[Symbol.toStringTag] = 'Symbol';
		st.equal(false, isSymbol(fakeSymbol), 'object with fake Symbol @@toStringTag and valueOf returning a symbol is not a symbol');
		var notSoFakeSymbol = { valueOf: function () { return 42; } };
		notSoFakeSymbol[Symbol.toStringTag] = 'Symbol';
		st.equal(false, isSymbol(notSoFakeSymbol), 'object with fake Symbol @@toStringTag and valueOf not returning a symbol is not a symbol');
		st.end();
	});

	var fakeSymbolString = { toString: function () { return 'Symbol(foo)'; } };
	t.equal(false, isSymbol(fakeSymbolString), 'object with toString returning Symbol(foo) is not a symbol');

	t.end();
});

test('Symbol support', { skip: !hasSymbols }, function (t) {
	t.test('well-known Symbols', function (st) {
		var isWellKnown = function filterer(name) {
			return name !== 'for' && name !== 'keyFor' && !(name in filterer);
		};
		var wellKnownSymbols = Object.getOwnPropertyNames(Symbol).filter(isWellKnown);
		wellKnownSymbols.forEach(function (name) {
			var sym = Symbol[name];
			st.equal(true, isSymbol(sym), debug(sym, ' is a symbol'));
		});
		st.end();
	});

	t.test('user-created symbols', function (st) {
		var symbols = [
			Symbol(),
			Symbol('foo'),
			Symbol['for']('foo'),
			Object(Symbol('object'))
		];
		symbols.forEach(function (sym) {
			st.equal(true, isSymbol(sym), debug(sym, ' is a symbol'));
		});
		st.end();
	});

	t.end();
});

