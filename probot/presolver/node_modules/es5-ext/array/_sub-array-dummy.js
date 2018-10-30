"use strict";

var setPrototypeOf = require("../object/set-prototype-of");

module.exports = (function () {
	var SubArray;

	if (!setPrototypeOf) return null;
	SubArray = function () {
 Array.apply(this, arguments);
};
	setPrototypeOf(SubArray, Array);
	SubArray.prototype = Object.create(Array.prototype, {
		constructor: { value: SubArray,
enumerable: false,
writable: true,
			configurable: true }
	});
	return SubArray;
}());
