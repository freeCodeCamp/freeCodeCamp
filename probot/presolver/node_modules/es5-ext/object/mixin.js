"use strict";

var value = require("./valid-value")

  , defineProperty = Object.defineProperty
  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  , getOwnPropertyNames = Object.getOwnPropertyNames
  , getOwnPropertySymbols = Object.getOwnPropertySymbols;

module.exports = function (target, source) {
	var error, sourceObject = Object(value(source));
	target = Object(value(target));
	getOwnPropertyNames(sourceObject).forEach(function (name) {
		try {
			defineProperty(target, name, getOwnPropertyDescriptor(source, name));
		} catch (e) {
 error = e;
}
	});
	if (typeof getOwnPropertySymbols === "function") {
		getOwnPropertySymbols(sourceObject).forEach(function (symbol) {
			try {
				defineProperty(target, symbol, getOwnPropertyDescriptor(source, symbol));
			} catch (e) {
 error = e;
}
		});
	}
	if (error !== undefined) throw error;
	return target;
};
