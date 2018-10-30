// Inspired by: http://documentcloud.github.com/underscore/#compact

"use strict";

var isValue = require("../../object/is-value");

var filter = Array.prototype.filter;

module.exports = function () {
	return filter.call(this, function (val) {
		return isValue(val);
	});
};
