'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Number = GetIntrinsic('%Number%');

var isPrimitive = require('../helpers/isPrimitive');

var ToPrimitive = require('./ToPrimitive');
var ToNumber = require('./ToNumber');

// https://262.ecma-international.org/11.0/#sec-tonumeric

module.exports = function ToNumeric(argument) {
	var primValue = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof primValue === 'bigint') {
		return primValue;
	}
	return ToNumber(primValue);
};
