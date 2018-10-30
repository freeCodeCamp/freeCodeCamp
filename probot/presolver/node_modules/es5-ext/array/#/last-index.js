"use strict";

var toPosInt          = require("../../number/to-pos-integer")
  , value             = require("../../object/valid-value")
  , objHasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function () {
	var i, length;
	if (!(length = toPosInt(value(this).length))) return null;
	i = length - 1;
	while (!objHasOwnProperty.call(this, i)) {
		if (--i === -1) return null;
	}
	return i;
};
