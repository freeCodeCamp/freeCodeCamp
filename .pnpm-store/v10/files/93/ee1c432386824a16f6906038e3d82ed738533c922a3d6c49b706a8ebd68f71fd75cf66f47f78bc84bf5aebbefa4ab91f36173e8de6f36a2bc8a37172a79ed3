'use strict';

/** @type {(t: import('tape').Test) => false | void} */
// eslint-disable-next-line consistent-return
module.exports = function runSymbolTests(t) {
	t.equal(typeof Symbol, 'function', 'global Symbol is a function');

	if (typeof Symbol !== 'function') { return false; }

	t.notEqual(Symbol(), Symbol(), 'two symbols are not equal');

	/*
	t.equal(
		Symbol.prototype.toString.call(Symbol('foo')),
		Symbol.prototype.toString.call(Symbol('foo')),
		'two symbols with the same description stringify the same'
	);
	*/

	/*
	var foo = Symbol('foo');

	t.notEqual(
		String(foo),
		String(Symbol('bar')),
		'two symbols with different descriptions do not stringify the same'
	);
	*/

	t.equal(typeof Symbol.prototype.toString, 'function', 'Symbol#toString is a function');
	// t.equal(String(foo), Symbol.prototype.toString.call(foo), 'Symbol#toString equals String of the same symbol');

	t.equal(typeof Object.getOwnPropertySymbols, 'function', 'Object.getOwnPropertySymbols is a function');

	/** @type {{ [k in symbol]?: unknown }} */
	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	t.notEqual(typeof sym, 'string', 'Symbol is not a string');
	t.equal(Object.prototype.toString.call(sym), '[object Symbol]', 'symbol primitive Object#toStrings properly');
	t.equal(Object.prototype.toString.call(symObj), '[object Symbol]', 'symbol primitive Object#toStrings properly');

	var symVal = 42;
	obj[sym] = symVal;
	// eslint-disable-next-line no-restricted-syntax, no-unused-vars
	for (var _ in obj) { t.fail('symbol property key was found in for..in of object'); }

	t.deepEqual(Object.keys(obj), [], 'no enumerable own keys on symbol-valued object');
	t.deepEqual(Object.getOwnPropertyNames(obj), [], 'no own names on symbol-valued object');
	t.deepEqual(Object.getOwnPropertySymbols(obj), [sym], 'one own symbol on symbol-valued object');
	t.equal(Object.prototype.propertyIsEnumerable.call(obj, sym), true, 'symbol is enumerable');
	t.deepEqual(Object.getOwnPropertyDescriptor(obj, sym), {
		configurable: true,
		enumerable: true,
		value: 42,
		writable: true
	}, 'property descriptor is correct');
};
