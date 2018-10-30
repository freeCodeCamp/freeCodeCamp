/* global Float32Array */

// Credit: https://github.com/paulmillr/es6-shim/blob/master/es6-shim.js

"use strict";

var toFloat32;

if (typeof Float32Array === "undefined") {
	toFloat32 = (function () {
		var pack   = require("../_pack-ieee754")
		  , unpack = require("../_unpack-ieee754");

		return function (value) {
			return unpack(pack(value, 8, 23), 8, 23);
		};
	}());
} else {
	toFloat32 = (function () {
		var float32Array = new Float32Array(1);
		return function (num) {
			float32Array[0] = num;
			return float32Array[0];
		};
	}());
}

module.exports = function (value) {
	if (isNaN(value)) return NaN;
	value = Number(value);
	if (value === 0) return value;
	if (!isFinite(value)) return value;

	return toFloat32(value);
};
