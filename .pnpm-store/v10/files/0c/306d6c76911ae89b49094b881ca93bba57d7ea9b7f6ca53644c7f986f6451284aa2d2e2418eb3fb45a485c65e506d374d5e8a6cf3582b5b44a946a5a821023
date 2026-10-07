"use strict";

var getPrototypeOf = Object.getPrototypeOf
  , prototype = Object.prototype
  , objToString = prototype.toString
  , id = Object().toString();

module.exports = function (value) {
	var proto, valueConstructor;
	if (!value || typeof value !== "object" || objToString.call(value) !== id) {
		return false;
	}
	proto = getPrototypeOf(value);
	if (proto === null) {
		valueConstructor = value.constructor;
		if (typeof valueConstructor !== "function") return true;
		return valueConstructor.prototype !== value;
	}
	return proto === prototype || getPrototypeOf(proto) === null;
};
