"use strict";

var ensureValue   = require("./valid-value")
  , stringifiable = require("./validate-stringifiable");

module.exports = function (value) {
	return stringifiable(ensureValue(value));
};
