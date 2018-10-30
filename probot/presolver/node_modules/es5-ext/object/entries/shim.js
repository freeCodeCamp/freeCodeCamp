"use strict";

var ensureValue = require("../valid-value");

module.exports = function (object) {
	ensureValue(object);
	var result = [];
	object = Object(object);
	for (var key in object) {
		if (!propertyIsEnumerable.call(object, key)) continue;
		result.push([key, object[key]]);
	}
	return result;
};
