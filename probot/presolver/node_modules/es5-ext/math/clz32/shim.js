"use strict";

module.exports = function (value) {
	// eslint-disable-next-line no-bitwise
	value >>>= 0;
	return value ? 32 - value.toString(2).length : 32;
};
