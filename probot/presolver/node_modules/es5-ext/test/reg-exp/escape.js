"use strict";

module.exports = function (t, a) {
	var str = "(?:^te|er)s{2}t\\[raz]+$";
	a(RegExp("^" + t(str) + "$").test(str), true);
};
