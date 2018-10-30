"use strict";

var eq            = require("./eq")
  , isPlainObject = require("./is-plain-object")
  , value         = require("./valid-value");

var isArray = Array.isArray
  , keys = Object.keys
  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable
  , objHasOwnProperty = Object.prototype.hasOwnProperty
  , eqArr
  , eqVal
  , eqObj;

eqArr = function (arr1, arr2, recMap) {
	var i, length = arr1.length;
	if (length !== arr2.length) return false;
	for (i = 0; i < length; ++i) {
		if (objHasOwnProperty.call(arr1, i) !== objHasOwnProperty.call(arr2, i)) return false;
		if (!eqVal(arr1[i], arr2[i], recMap)) return false;
	}
	return true;
};

eqObj = function (obj1, obj2, recMap) {
	var k1 = keys(obj1), k2 = keys(obj2);
	if (k1.length !== k2.length) return false;
	return k1.every(function (key) {
		if (!objPropertyIsEnumerable.call(obj2, key)) return false;
		return eqVal(obj1[key], obj2[key], recMap);
	});
};

eqVal = function (val1, val2, recMap) {
	var i, eqX, c1, c2;
	if (eq(val1, val2)) return true;
	if (isPlainObject(val1)) {
		if (!isPlainObject(val2)) return false;
		eqX = eqObj;
	} else if (isArray(val1) && isArray(val2)) {
		eqX = eqArr;
	} else {
		return false;
	}
	c1 = recMap[0];
	c2 = recMap[1];
	i = c1.indexOf(val1);
	if (i === -1) {
		i = c1.push(val1) - 1;
		c2[i] = [];
	} else if (c2[i].indexOf(val2) !== -1) return true;
	c2[i].push(val2);
	return eqX(val1, val2, recMap);
};

module.exports = function (val1, val2) {
	if (eq(value(val1), value(val2))) return true;
	return eqVal(Object(val1), Object(val2), [[], []]);
};
