'use strict';

var $SyntaxError = require('es-errors/syntax');
var callBound = require('call-bound');

var $SymbolValueOf = callBound('Symbol.prototype.valueOf', true);

// https://262.ecma-international.org/9.0/#sec-thissymbolvalue

module.exports = function thisSymbolValue(value) {
	if (typeof value === 'symbol') {
		return value;
	}

	if (!$SymbolValueOf) {
		throw new $SyntaxError('Symbols are not supported; thisSymbolValue requires that `value` be a Symbol or a Symbol object');
	}

	return $SymbolValueOf(value);
};
