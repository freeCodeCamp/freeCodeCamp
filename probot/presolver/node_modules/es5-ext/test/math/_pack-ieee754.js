"use strict";

module.exports = function (t, a) {
	a.deep(t(1.337, 8, 23), [63, 171, 34, 209]);
};
