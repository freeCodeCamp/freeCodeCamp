'use strict';

var $TypeError = require('es-errors/type');

var inspect = require('object-inspect');

var isPropertyKey = require('../helpers/isPropertyKey');
// var ToObject = require('./ToObject');

// https://262.ecma-international.org/6.0/#sec-getv

module.exports = function GetV(V, P) {
	// 7.3.2.1
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key, got ' + inspect(P));
	}

	// 7.3.2.2-3
	// var O = ToObject(V);

	// 7.3.2.4
	return V[P];
};
