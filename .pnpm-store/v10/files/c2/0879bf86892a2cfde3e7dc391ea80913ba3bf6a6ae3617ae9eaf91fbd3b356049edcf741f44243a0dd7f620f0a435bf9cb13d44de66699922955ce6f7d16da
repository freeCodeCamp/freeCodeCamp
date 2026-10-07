"use strict";

var findKey = require("./find-key")
  , isValue = require("./is-value");

// eslint-disable-next-line no-unused-vars
module.exports = function (obj, cb /*, thisArg, compareFn*/) {
	var key = findKey.apply(this, arguments);
	return isValue(key) ? obj[key] : key;
};
