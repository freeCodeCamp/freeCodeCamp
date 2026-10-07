'use strict';

var $TypeError = require('es-errors/type');

var inspect = require('object-inspect');

var isPropertyKey = require('../helpers/isPropertyKey');

var isObject = require('es-object-atoms/isObject');

// https://262.ecma-international.org/6.0/#sec-get-o-p

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};
