/*! https://mths.be/includes v2.0.0 by @mathias */

'use strict';

var callBound = require('call-bind/callBound');
var RequireObjectCoercible = require('es-abstract/2024/RequireObjectCoercible');
var ToString = require('es-abstract/2024/ToString');
var ToIntegerOrInfinity = require('es-abstract/2024/ToIntegerOrInfinity');
var IsRegExp = require('es-abstract/2024/IsRegExp');

var min = Math.min;
var max = Math.max;
var indexOf = callBound('String.prototype.indexOf');

module.exports = function includes(searchString) {
	var O = RequireObjectCoercible(this);
	var S = ToString(O);
	if (IsRegExp(searchString)) {
		throw new TypeError('Argument to String.prototype.includes cannot be a RegExp');
	}
	var searchStr = String(searchString);
	var searchLength = searchStr.length;
	var position = arguments.length > 1 ? arguments[1] : undefined;
	var pos = ToIntegerOrInfinity(position);
	var len = S.length;
	var start = min(max(pos, 0), len);
	// Avoid the `indexOf` call if no match is possible
	if (searchLength + start > len) {
		return false;
	}
	return indexOf(S, searchStr, pos) !== -1;
};
