"use strict";

var replace = String.prototype.replace, re = /([A-Z])/g;

module.exports = function () {
	var str = replace.call(this, re, "-$1").toLowerCase();
	if (str[0] === "-") str = str.slice(1);
	return str;
};
