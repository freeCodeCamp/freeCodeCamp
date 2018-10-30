"use strict";

var isObject = require("../object/is-object")
  , is       = require("./is");

module.exports = function (value) {
	if (is(value) && isObject(value)) return value;
	throw new TypeError(value + " is not an iterable or array-like object");
};
