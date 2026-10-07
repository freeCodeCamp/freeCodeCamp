"use strict";

var value = require("../../object/valid-value");

module.exports = function (search, replace) {
	var index, pos = 0, str = String(value(this)), sl, rl;
	search = String(search);
	replace = String(replace);
	sl = search.length;
	rl = replace.length;
	while ((index = str.indexOf(search, pos)) !== -1) {
		str = str.slice(0, index) + replace + str.slice(index + sl);
		pos = index + rl;
	}
	return str;
};
