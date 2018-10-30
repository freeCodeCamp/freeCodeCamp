"use strict";

var forEach = Array.prototype.forEach;

module.exports = function (sep) {
	var result = [];
	forEach.call(this, function (val) {
		result.push(val, sep);
	});
	result.pop();
	return result;
};
