"use strict";

var setPrototypeOf = require("../object/set-prototype-of")
  , isExtensible   = require("./_is-extensible");

module.exports = (function () {
	var SubArray;

	if (isExtensible) return require("./_sub-array-dummy");

	if (!setPrototypeOf) return null;
	SubArray = function () {
		var arr = Array.apply(this, arguments);
		setPrototypeOf(arr, SubArray.prototype);
		return arr;
	};
	setPrototypeOf(SubArray, Array);
	SubArray.prototype = Object.create(Array.prototype, {
		constructor: { value: SubArray, enumerable: false, writable: true, configurable: true }
	});
	return SubArray;
})();
