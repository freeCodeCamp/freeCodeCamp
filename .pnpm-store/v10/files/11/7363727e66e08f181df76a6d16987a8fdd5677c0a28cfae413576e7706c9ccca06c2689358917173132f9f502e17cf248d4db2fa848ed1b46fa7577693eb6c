"use strict";

var objToString = Object.prototype.toString, id = objToString.call(true);

module.exports = function (value) {
	return (
		typeof value === "boolean" ||
		(typeof value === "object" && (value instanceof Boolean || objToString.call(value) === id))
	);
};
