"use strict";

exports.Array = ["1", "2", "3"];

exports.Arguments = (function () {
	return arguments;
}("1", "2", "3"));

exports.String = "123";

exports.Object = { 0: "1", 1: "2", 2: "3", 3: "4", length: 3 };
