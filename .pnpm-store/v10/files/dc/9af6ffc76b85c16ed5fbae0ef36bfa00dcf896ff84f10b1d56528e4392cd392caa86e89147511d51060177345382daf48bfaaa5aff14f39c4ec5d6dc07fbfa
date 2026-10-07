"use strict";

var isPlainObject = require("./is-plain-object")
  , forEach       = require("./for-each")
  , process;

process = function self(value, key) {
	if (isPlainObject(value)) forEach(value, self, this);
	else this[key] = value;
};

module.exports = function (obj) {
	var flattened = {};
	forEach(obj, process, flattened);
	return flattened;
};
