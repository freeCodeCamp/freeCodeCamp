"use strict";

var toInteger = require("../../../number/to-integer")
  , value     = require("../../../object/valid-value")
  , isValue   = require("../../../object/is-value")
  , min       = Math.min
  , max       = Math.max;

module.exports = function (searchString /*, endPosition*/) {
	var self, start, endPos;
	self = String(value(this));
	searchString = String(searchString);
	endPos = arguments[1];
	start =
		(isValue(endPos) ? min(max(toInteger(endPos), 0), self.length) : self.length) -
		searchString.length;
	return start < 0 ? false : self.indexOf(searchString, start) === start;
};
