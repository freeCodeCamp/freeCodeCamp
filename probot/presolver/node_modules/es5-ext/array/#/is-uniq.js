"use strict";

var indexOf = require("./e-index-of")

  , every = Array.prototype.every
  , isFirst;

isFirst = function (value, index) {
	return indexOf.call(this, value) === index;
};

module.exports = function () {
 return every.call(this, isFirst, this);
};
