"use strict";

var isArray = Array.isArray;

module.exports = function (t) {
	t(t === null || isArray(t.prototype), true);
};
