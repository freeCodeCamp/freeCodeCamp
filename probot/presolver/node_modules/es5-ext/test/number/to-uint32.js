"use strict";

module.exports = function (t, a) {
	a(t({}), 0, "Not numeric");
	a(t(-4), 4294967292, "Negative");
	a(t(133432), 133432, "Positive");
	a(t(8589934592), 0, "Greater than maximum");
};
