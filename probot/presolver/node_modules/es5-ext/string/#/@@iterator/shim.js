"use strict";

var StringIterator = require("es6-iterator/string")
  , value          = require("../../../object/valid-value");

module.exports = function () {
 return new StringIterator(value(this));
};
