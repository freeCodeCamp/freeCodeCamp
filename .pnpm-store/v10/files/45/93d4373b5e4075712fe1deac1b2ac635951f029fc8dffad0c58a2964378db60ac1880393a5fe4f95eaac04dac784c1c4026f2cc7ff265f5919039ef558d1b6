'use strict';

var isObject = require('es-object-atoms/isObject');

var KeyForSymbol = require('./KeyForSymbol');

// https://262.ecma-international.org/14.0/#sec-canbeheldweakly

module.exports = function CanBeHeldWeakly(v) {
	if (isObject(v)) {
		return true; // step 1
	}
	if (typeof v === 'symbol' && typeof KeyForSymbol(v) === 'undefined') {
		return true; // step 2
	}
	return false; // step 3
};
