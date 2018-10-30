"use strict";

var identity = require("../../../function/identity")
  , SubArray = require("../../_sub-array-dummy-safe");

module.exports = function () {
	return (new SubArray()).map(identity) instanceof SubArray;
};
