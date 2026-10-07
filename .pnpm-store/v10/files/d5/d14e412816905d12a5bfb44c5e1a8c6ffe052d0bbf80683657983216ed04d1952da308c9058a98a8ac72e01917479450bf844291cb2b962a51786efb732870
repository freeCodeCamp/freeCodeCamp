"use strict";

var ensureObject = require("type/object/ensure")
  , ensure       = require("type/ensure");

var objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function (object) {
	ensure(["object", object, ensureObject]);
	for (var key in object) {
		if (!objPropertyIsEnumerable.call(object, key)) continue;
		delete object[key];
	}
	return object;
};
