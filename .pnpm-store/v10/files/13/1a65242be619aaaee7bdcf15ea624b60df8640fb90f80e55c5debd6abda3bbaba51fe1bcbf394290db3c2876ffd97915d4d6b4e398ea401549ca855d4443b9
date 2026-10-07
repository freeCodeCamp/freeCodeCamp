'use strict';

var GetIntrinsic = require('get-intrinsic');

var $String = GetIntrinsic('%String%');

var ToPrimitive = require('./ToPrimitive');
var ToString = require('./ToString');

// https://262.ecma-international.org/6.0/#sec-topropertykey

module.exports = function ToPropertyKey(argument) {
	var key = ToPrimitive(argument, $String);
	return typeof key === 'symbol' ? key : ToString(key);
};
