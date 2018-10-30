"use strict";

var isInteger = require("./is-integer");

module.exports = function (num) {
 return isInteger(num) && (num >= 0);
};
