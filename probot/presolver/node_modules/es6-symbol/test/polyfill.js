'use strict';

var d        = require('d')
  , isSymbol = require('../is-symbol')

  , defineProperty = Object.defineProperty;

module.exports = function (T, a) {
	var symbol = T('test'), x = {};
	defineProperty(x, symbol, d('foo'));
	a(x.test, undefined, "Name");
	a(x[symbol], 'foo', "Get");
	a(x instanceof T, false);

	a(isSymbol(symbol), true, "Symbol");
	a(isSymbol(T.iterator), true, "iterator");
	a(isSymbol(T.toStringTag), true, "toStringTag");

	x = {};
	x[symbol] = 'foo';
	if (typeof symbol !== 'symbol') {
		a.deep(Object.getOwnPropertyDescriptor(x, symbol), { configurable: true, enumerable: false,
			value: 'foo', writable: true });
	}
	symbol = T.for('marko');
	a(isSymbol(symbol), true);
	a(T.for('marko'), symbol);
	a(T.keyFor(symbol), 'marko');
};
