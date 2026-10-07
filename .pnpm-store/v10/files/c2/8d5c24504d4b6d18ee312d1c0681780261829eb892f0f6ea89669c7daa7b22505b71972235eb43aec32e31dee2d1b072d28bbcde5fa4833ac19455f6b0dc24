'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = require('es-errors/type');
var $Number = GetIntrinsic('%Number%');
var isPrimitive = require('../helpers/isPrimitive');

var ToPrimitive = require('./ToPrimitive');
var StringToNumber = require('./StringToNumber');

// https://262.ecma-international.org/13.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'bigint') {
		throw new $TypeError('Conversion from \'BigInt\' to \'number\' is not allowed.');
	}
	if (typeof value === 'string') {
		return StringToNumber(value);
	}
	return +value;
};
