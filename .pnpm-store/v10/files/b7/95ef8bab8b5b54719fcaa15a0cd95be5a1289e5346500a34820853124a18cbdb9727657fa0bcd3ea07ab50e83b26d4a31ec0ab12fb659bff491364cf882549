'use strict';

var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');
var callBound = require('call-bound');

var $slice = callBound('String.prototype.slice');

// https://262.ecma-international.org/12.0/#substring
module.exports = function substring(S, inclusiveStart, exclusiveEnd) {
	if (typeof S !== 'string' || !isInteger(inclusiveStart) || (arguments.length > 2 && !isInteger(exclusiveEnd))) {
		throw new $TypeError('`S` must be a String, and `inclusiveStart` and `exclusiveEnd` must be integers');
	}
	return $slice(S, inclusiveStart, arguments.length > 2 ? exclusiveEnd : S.length);
};
