'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var isPropertyKey = require('../helpers/isPropertyKey');

// https://262.ecma-international.org/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};
