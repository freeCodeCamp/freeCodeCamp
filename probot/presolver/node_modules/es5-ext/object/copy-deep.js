"use strict";

var forEach       = require("./for-each")
  , isPlainObject = require("./is-plain-object")
  , ensureValue   = require("./valid-value")
  , isArray       = Array.isArray;

var copyValue = function (value, ancestors, ancestorsCopy) {
	var mode;
	if (isPlainObject(value)) mode = "object";
	else if (isArray(value)) mode = "array";
	if (!mode) return value;

	var copy = ancestorsCopy[ancestors.indexOf(value)];
	if (copy) return copy;
	copy = mode === "object" ? {} : [];

	ancestors.push(value);
	ancestorsCopy.push(copy);
	if (mode === "object") {
		forEach(value, function (item, key) {
			copy[key] = copyValue(item, ancestors, ancestorsCopy);
		});
	} else {
		value.forEach(function (item, index) {
			copy[index] = copyValue(item, ancestors, ancestorsCopy);
		});
	}
	ancestors.pop();
	ancestorsCopy.pop();

	return copy;
};

module.exports = function (source) {
	return copyValue(ensureValue(source), [], []);
};
