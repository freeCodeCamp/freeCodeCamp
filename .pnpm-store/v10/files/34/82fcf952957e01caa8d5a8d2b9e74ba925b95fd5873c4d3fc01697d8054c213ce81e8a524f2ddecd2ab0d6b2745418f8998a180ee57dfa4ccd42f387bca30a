"use strict";

module.exports = function (t, a) {
	a(t(NaN), 0, "NaN");
	a(t(-343), 0, "Negative");
	a(t(232342), 232342, "Positive");
	a.throws(function () {
 t(1e23);
}, TypeError, "Too large");
};
