"use strict";

var value                   = require("./valid-value")
  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function (obj) {
	var i;
	value(obj);
	for (i in obj) {
		if (objPropertyIsEnumerable.call(obj, i)) return i;
	}
	return null;
};
