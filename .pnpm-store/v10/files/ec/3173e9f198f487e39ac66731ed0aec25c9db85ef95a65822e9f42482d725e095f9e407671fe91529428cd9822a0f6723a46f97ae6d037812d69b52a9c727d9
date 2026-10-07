'use strict';

var define = require('define-properties');
var hasSymbols = require('has-symbols')();
var gOPD = require('gopd');

var getPolyfill = require('./polyfill');
var regexpMatchAllPolyfill = require('./polyfill-regexp-matchall');

var defineP = Object.defineProperty;

module.exports = function shimMatchAll() {
	var polyfill = getPolyfill();
	define(
		String.prototype,
		{ matchAll: polyfill },
		{ matchAll: function () { return String.prototype.matchAll !== polyfill; } }
	);
	if (hasSymbols) {
		// eslint-disable-next-line no-restricted-properties
		var symbol = Symbol.matchAll || (Symbol['for'] ? Symbol['for']('Symbol.matchAll') : Symbol('Symbol.matchAll'));
		define(
			Symbol,
			{ matchAll: symbol },
			{ matchAll: function () { return Symbol.matchAll !== symbol; } }
		);

		if (defineP && gOPD) {
			var desc = gOPD(Symbol, symbol);
			if (!desc || desc.configurable) {
				defineP(Symbol, symbol, {
					configurable: false,
					enumerable: false,
					value: symbol,
					writable: false
				});
			}
		}

		var regexpMatchAll = regexpMatchAllPolyfill();
		var func = {};
		func[symbol] = regexpMatchAll;
		var predicate = {};
		predicate[symbol] = function () {
			return RegExp.prototype[symbol] !== regexpMatchAll;
		};
		define(RegExp.prototype, func, predicate);
	}
	return polyfill;
};
