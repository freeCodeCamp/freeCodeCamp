"use strict";

var uniq                = require("../array/#/uniq")
  , value               = require("./valid-value")
  , push                = Array.prototype.push
  , getOwnPropertyNames = Object.getOwnPropertyNames
  , getPrototypeOf      = Object.getPrototypeOf;

module.exports = function (obj) {
	var keys;
	obj = Object(value(obj));
	keys = getOwnPropertyNames(obj);
	while ((obj = getPrototypeOf(obj))) {
		push.apply(keys, getOwnPropertyNames(obj));
	}
	return uniq.call(keys);
};
