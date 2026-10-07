'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Get = require('./Get');
var ToLength = require('./ToLength');

// https://262.ecma-international.org/11.0/#sec-lengthofarraylike

module.exports = function LengthOfArrayLike(obj) {
	if (!isObject(obj)) {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}
	return ToLength(Get(obj, 'length'));
};

// TODO: use this all over
