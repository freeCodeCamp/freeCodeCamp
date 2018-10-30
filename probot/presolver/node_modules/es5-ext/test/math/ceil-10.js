"use strict";

module.exports = function (t, a) {
	a(t(55.51, -1), 55.6);
	a(t(51, 1), 60);
	a(t(-55.59, -1), -55.5);
	a(t(-59, 1), -50);
};
