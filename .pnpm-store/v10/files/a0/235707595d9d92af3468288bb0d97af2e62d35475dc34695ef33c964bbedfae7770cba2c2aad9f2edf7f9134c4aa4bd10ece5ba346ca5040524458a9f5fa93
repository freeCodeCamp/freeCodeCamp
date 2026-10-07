"use strict";

var ensureValue = require("type/value/ensure");

var objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function (object) {
	object = Object(ensureValue(object));
	var result = [];
	for (var key in object) {
		if (!objPropertyIsEnumerable.call(object, key)) continue;
		result.push([key, object[key]]);
	}
	return result;
};
