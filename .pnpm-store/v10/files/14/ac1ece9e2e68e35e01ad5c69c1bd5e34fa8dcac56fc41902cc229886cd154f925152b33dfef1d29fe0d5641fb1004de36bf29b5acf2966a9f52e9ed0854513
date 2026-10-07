"use strict";

var findIndex = require("../find-index/shim");

// eslint-disable-next-line no-unused-vars
module.exports = function (predicate /*, thisArg*/) {
	var index = findIndex.apply(this, arguments);
	return index === -1 ? undefined : this[index];
};
