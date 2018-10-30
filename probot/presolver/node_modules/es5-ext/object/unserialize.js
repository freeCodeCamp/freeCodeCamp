"use strict";

var value = require("./valid-value");

module.exports = exports = function (code) {
	// eslint-disable-next-line no-new-func
	return new Function("return " + value(code))();
};
