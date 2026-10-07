"use strict";

var toPosInt   = require("es5-ext/number/to-pos-integer")
  , maxTimeout = require("./max-timeout");

module.exports = function (value) {
	value = toPosInt(value);
	if (value > maxTimeout) throw new TypeError(value + " exceeds maximum possible timeout");
	return value;
};
