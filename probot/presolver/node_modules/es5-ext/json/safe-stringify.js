"use strict";

var compact   = require("../array/#/compact")
  , isObject  = require("../object/is-object")
  , toArray   = require("../object/to-array")
  , isArray   = Array.isArray
  , stringify = JSON.stringify;

module.exports = function self(value /*, replacer, space*/) {
	var replacer = arguments[1], space = arguments[2];
	try {
		return stringify(value, replacer, space);
	} catch (e) {
		if (!isObject(value)) return null;
		if (typeof value.toJSON === "function") return null;
		if (isArray(value)) {
			return (
				"[" +
				compact.call(
					value.map(function (item) {
						return self(item, replacer, space);
					})
				) +
				"]"
			);
		}
		return (
			"{" +
			compact
				.call(
					toArray(value, function (item, key) {
						item = self(item, replacer, space);
						if (!item) return null;
						return stringify(key) + ":" + item;
					})
				)
				.join(",") +
			"}"
		);
	}
};
