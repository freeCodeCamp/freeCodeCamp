"use strict";

var toPosInt          = require("../../number/to-pos-integer")
  , eq                = require("../../object/eq")
  , value             = require("../../object/valid-value")
  , objHasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function (other) {
	var i, length;
	value(this);
	value(other);
	length = toPosInt(this.length);
	if (length !== toPosInt(other.length)) return false;
	for (i = 0; i < length; ++i) {
		if (objHasOwnProperty.call(this, i) !== objHasOwnProperty.call(other, i)) {
			return false;
		}
		if (!eq(this[i], other[i])) return false;
	}
	return true;
};
