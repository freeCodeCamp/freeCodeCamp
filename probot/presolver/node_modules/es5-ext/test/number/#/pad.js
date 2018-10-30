"use strict";

module.exports = function (t, a) {
	a(t.call(78, 4), "0078");
	a(t.call(65.12323, 4, 3), "0065.123", "Precision");
	a(t.call(65, 4, 3), "0065.000", "Precision integer");
};
