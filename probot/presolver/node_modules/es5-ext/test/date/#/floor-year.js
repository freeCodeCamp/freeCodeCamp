"use strict";

module.exports = function (t, a) {
	a(t.call(new Date(2000, 5, 13, 13, 32, 34, 234)).valueOf(),
		new Date(2000, 0, 1).valueOf());
};
