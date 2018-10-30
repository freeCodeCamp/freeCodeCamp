"use strict";

var indexOf = require("./e-index-of")

  , filter = Array.prototype.filter

  , isFirst;

isFirst = function (value, index) {
	return indexOf.call(this, value) === index;
};

module.exports = function () {
 return filter.call(this, isFirst, this);
};
