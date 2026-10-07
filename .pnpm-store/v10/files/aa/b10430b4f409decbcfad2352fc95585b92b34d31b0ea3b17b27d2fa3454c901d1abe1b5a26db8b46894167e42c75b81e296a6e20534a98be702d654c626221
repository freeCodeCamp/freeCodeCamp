"use strict";

var isObject    = require("../object/is")
  , isPrototype = require("../prototype/is");

var getPrototypeOf;
if (typeof Object.getPrototypeOf === "function") {
	getPrototypeOf = Object.getPrototypeOf;
} else if ({}.__proto__ === Object.prototype) {
	getPrototypeOf = function (object) { return object.__proto__; };
}

module.exports = function (value) {
	if (!isObject(value)) return false;
	var prototype;
	if (getPrototypeOf) {
		prototype = getPrototypeOf(value);
	} else {
		try {
			var valueConstructor = value.constructor;
			if (valueConstructor) prototype = valueConstructor.prototype;
		} catch (error) {
			return false;
		}
	}
	if (prototype && !hasOwnProperty.call(prototype, "propertyIsEnumerable")) return false;
	return !isPrototype(value);
};
