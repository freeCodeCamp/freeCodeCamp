"use strict";

module.exports = function (t, a) {
	a(t({}), true, "Empty");
	a(t({ 1: 1 }), false, "Not empty");
};
