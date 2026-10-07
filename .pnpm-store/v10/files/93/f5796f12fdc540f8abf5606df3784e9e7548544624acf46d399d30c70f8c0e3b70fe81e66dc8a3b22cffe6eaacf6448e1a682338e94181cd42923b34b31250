'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');

var $keyFor = callBound('Symbol.keyFor', true);

// https://262.ecma-international.org/14.0/#sec-keyforsymbol

module.exports = function KeyForSymbol(sym) {
	if (typeof sym !== 'symbol') {
		throw new $TypeError('Assertion failed: `sym` must be a Symbol');
	}
	return $keyFor(sym);
};
