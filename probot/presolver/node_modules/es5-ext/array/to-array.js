"use strict";

var from = require("./from")

  , isArray = Array.isArray;

module.exports = function (arrayLike) {
	return isArray(arrayLike) ? arrayLike : from(arrayLike);
};
