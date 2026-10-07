"use strict";

var objToString = Object.prototype.toString
  , isFunctionStringTag = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);

module.exports = function (value) {
	return typeof value === "function" && isFunctionStringTag(objToString.call(value));
};
