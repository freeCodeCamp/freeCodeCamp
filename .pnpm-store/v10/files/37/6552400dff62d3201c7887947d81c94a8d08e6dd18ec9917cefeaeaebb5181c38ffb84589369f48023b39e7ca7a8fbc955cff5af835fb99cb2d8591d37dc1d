"use strict";

var objToString = Object.prototype.toString, id = objToString.call(new Date());

module.exports = function (value) {
	return (
		(value && !isNaN(value) && (value instanceof Date || objToString.call(value) === id)) ||
		false
	);
};
