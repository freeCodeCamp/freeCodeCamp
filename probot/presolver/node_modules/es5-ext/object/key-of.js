"use strict";

var eq   = require("./eq")
  , some = require("./some");

module.exports = function (obj, searchValue) {
	var result;
	return some(obj, function (value, name) {
		if (eq(value, searchValue)) {
			result = name;
			return true;
		}
		return false;
	})
		? result
		: null;
};
