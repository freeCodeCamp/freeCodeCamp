"use strict";

var ArrayIterator = require("es6-iterator/array")

  , slice = Array.prototype.slice;

module.exports = function (t, a) {
	var i = 0, x = ["raz", "dwa", "trzy"], y = {};
	t(x, function () {
		a.deep(slice.call(arguments, 0, 1), [x[i]], "Array " + i + "#");
		a(this, y, "Array: context:  " + i++ + "#");
	}, y);
	i = 0;
	t((function () {
 return arguments;
}("raz", "dwa", "trzy")), function () {
		a.deep(slice.call(arguments, 0, 1), [x[i]], "Arguments" + i + "#");
		a(this, y, "Arguments: context:  " + i++ + "#");
	}, y);
	i = 0;
	t({ 0: "raz", 1: "dwa", 2: "trzy", length: 3 }, function () {
		a.deep(slice.call(arguments, 0, 1), [x[i]], "Array-like" + i + "#");
		a(this, y, "Array-like: context:  " + i++ + "#");
	}, y);
	i = 0;
	t(x = "foo", function () {
		a.deep(slice.call(arguments, 0, 1), [x[i]], "String " + i + "#");
		a(this, y, "Regular String: context:  " + i++ + "#");
	}, y);
	i = 0;
	x = ["r", "💩", "z"];
	t("r💩z", function () {
		a.deep(slice.call(arguments, 0, 1), [x[i]], "String " + i + "#");
		a(this, y, "Unicode String: context:  " + i++ + "#");
	}, y);
	i = 0;
	t(new ArrayIterator(x), function () {
		a.deep(slice.call(arguments, 0, 1), [x[i]], "Iterator " + i + "#");
		a(this, y, "Iterator: context:  " + i++ + "#");
	}, y);

};
