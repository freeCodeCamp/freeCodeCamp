'use strict';

var GetIntrinsic = require('get-intrinsic');
var gPO = require('get-proto');
var hasSymbols = require('has-symbols');
var setFunctionName = require('set-function-name');
var defineDataProperty = require('define-data-property');
var $Object = require('es-object-atoms');

var arrayIterProto = GetIntrinsic('%ArrayIteratorPrototype%', true);

var iterProto = arrayIterProto && gPO(arrayIterProto);

var result = (iterProto !== $Object.prototype && iterProto) || {};

if (hasSymbols()) {
	if (!(Symbol.iterator in result)) {
		// needed when result === iterProto, or, node 0.11.15 - 3
		var iter = setFunctionName(function SymbolIterator() {
			return this;
		}, '[Symbol.iterator]', true);

		defineDataProperty(result, Symbol.iterator, iter, true);
	}
}

module.exports = result;
