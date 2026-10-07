'use strict';

var whichBoxedPrimitive = require('which-boxed-primitive');
var callBound = require('call-bound');
var hasSymbols = require('has-symbols')();
var hasBigInts = require('has-bigints')();

var stringToString = callBound('String.prototype.toString');
var numberValueOf = callBound('Number.prototype.valueOf');
var booleanValueOf = callBound('Boolean.prototype.valueOf');
var symbolValueOf = hasSymbols && callBound('Symbol.prototype.valueOf');
var bigIntValueOf = hasBigInts && callBound('BigInt.prototype.valueOf');

/** @type {import('.')} */
module.exports = function unboxPrimitive(value) {
	var which = whichBoxedPrimitive(value);
	if (typeof which !== 'string') {
		throw new TypeError(which === null ? 'value is an unboxed primitive' : 'value is a non-boxed-primitive object');
	}

	if (which === 'String') {
		return stringToString(value);
	}
	if (which === 'Number') {
		return numberValueOf(value);
	}
	if (which === 'Boolean') {
		return booleanValueOf(value);
	}
	if (which === 'Symbol') {
		if (!hasSymbols) {
			throw new EvalError('somehow this environment does not have Symbols, but you have a boxed Symbol value. Please report this!');
		}
		// eslint-disable-next-line no-extra-parens
		return /** @type {Exclude<typeof symbolValueOf, false>} */ (symbolValueOf)(value);
	}
	if (which === 'BigInt') {
		// eslint-disable-next-line no-extra-parens
		return /** @type {Exclude<typeof bigIntValueOf, false>} */ (bigIntValueOf)(value);
	}
	throw new RangeError('unknown boxed primitive found: ' + which);
};
