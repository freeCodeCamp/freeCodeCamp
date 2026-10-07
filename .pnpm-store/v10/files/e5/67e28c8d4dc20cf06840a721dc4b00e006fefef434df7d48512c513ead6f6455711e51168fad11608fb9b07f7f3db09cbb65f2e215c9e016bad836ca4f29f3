'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var $getProto = require('get-proto');

// https://262.ecma-international.org/7.0/#sec-ordinarygetprototypeof

module.exports = function OrdinaryGetPrototypeOf(O) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!$getProto) {
		throw new $TypeError('This environment does not support fetching prototypes.');
	}
	return $getProto(O);
};
