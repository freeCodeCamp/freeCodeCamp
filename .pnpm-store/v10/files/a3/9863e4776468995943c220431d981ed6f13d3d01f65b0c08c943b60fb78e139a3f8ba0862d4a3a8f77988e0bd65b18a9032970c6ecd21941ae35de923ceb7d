"use strict";

var pad      = require("../../string/#/pad")
  , toPosInt = require("../to-pos-integer")
  , toFixed  = Number.prototype.toFixed;

module.exports = function (length /*, precision*/) {
	var precision;
	length = toPosInt(length);
	precision = toPosInt(arguments[1]);

	return pad.call(
		precision ? toFixed.call(this, precision) : this, "0",
		length + (precision ? 1 + precision : 0)
	);
};
