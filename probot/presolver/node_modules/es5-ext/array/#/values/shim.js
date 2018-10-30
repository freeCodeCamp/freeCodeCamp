"use strict";

var ArrayIterator = require("es6-iterator/array");
module.exports = function () {
 return new ArrayIterator(this, "value");
};
