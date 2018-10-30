"use strict";

var eq                      = require("./eq")
  , value                   = require("./valid-value")
  , keys                    = Object.keys
  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function (val1, val2) {
	var k1, k2;

	if (eq(value(val1), value(val2))) return true;

	val1 = Object(val1);
	val2 = Object(val2);

	k1 = keys(val1);
	k2 = keys(val2);
	if (k1.length !== k2.length) return false;
	return k1.every(function (key) {
		if (!objPropertyIsEnumerable.call(val2, key)) return false;
		return eq(val1[key], val2[key]);
	});
};
