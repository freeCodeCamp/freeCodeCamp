"use strict";

module.exports = function (value) {
	return (typeof value === "number") && isFinite(value);
};
