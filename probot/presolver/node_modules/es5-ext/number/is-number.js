"use strict";

var objToString = Object.prototype.toString, id = objToString.call(1);

module.exports = function (value) {
	return (
		typeof value === "number" ||
		(value instanceof Number || (typeof value === "object" && objToString.call(value) === id))
	);
};
