'use strict';

var ToUint16 = require('./ToUint16');

// https://262.ecma-international.org/6.0/#sec-toint16

module.exports = function ToInt16(argument) {
	var int16bit = ToUint16(argument);
	return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
};
