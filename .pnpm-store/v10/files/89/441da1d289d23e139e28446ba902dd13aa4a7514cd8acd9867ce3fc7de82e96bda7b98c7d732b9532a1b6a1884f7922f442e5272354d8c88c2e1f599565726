'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBound = require('call-bound');

var $SyntaxError = require('es-errors/syntax');
var getGlobalSymbolDescription = GetIntrinsic('%Symbol.keyFor%', true);
/** @type {undefined | ((thisArg: symbol | Symbol) => symbol)} */
var thisSymbolValue = callBound('%Symbol.prototype.valueOf%', true);
/** @type {undefined | ((thisArg: symbol | Symbol) => string)} */
var symToStr = callBound('Symbol.prototype.toString', true);
/** @type {(thisArg: string, start?: number, end?: number) => string} */
var $strSlice = callBound('String.prototype.slice');

var getInferredName = require('./getInferredName');

/** @type {import('.')} */
/* eslint-disable consistent-return */
module.exports = callBound('%Symbol.prototype.description%', true) || function getSymbolDescription(symbol) {
	if (!thisSymbolValue) {
		throw new $SyntaxError('Symbols are not supported in this environment');
	}

	// will throw if not a symbol primitive or wrapper object
	var sym = thisSymbolValue(symbol);

	if (getInferredName) {
		var name = getInferredName(sym);
		if (name === '') {
			return;
		}
		return name.slice(1, -1); // name.slice('['.length, -']'.length);
	}

	var desc;
	if (getGlobalSymbolDescription) {
		desc = getGlobalSymbolDescription(sym);
		if (typeof desc === 'string') {
			return desc;
		}
	}

	// eslint-disable-next-line no-extra-parens
	desc = $strSlice(/** @type {NonNullable<typeof symToStr>} */ (symToStr)(sym), 7, -1); // str.slice('Symbol('.length, -')'.length);
	if (desc) {
		return desc;
	}
};
