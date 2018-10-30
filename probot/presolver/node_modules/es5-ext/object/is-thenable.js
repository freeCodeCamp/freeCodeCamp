"use strict";

var isCallable = require("./is-callable")
  , isObject   = require("./is-object");

module.exports = function (value) {
	return isObject(value) && isCallable(value.then);
};
