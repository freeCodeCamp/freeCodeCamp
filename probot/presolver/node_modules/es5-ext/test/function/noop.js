"use strict";

module.exports = function (t, a) {
	a(typeof t(1, 2, 3), "undefined");
};
