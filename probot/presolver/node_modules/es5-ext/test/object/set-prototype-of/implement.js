"use strict";

var create        = require("../../../object/create")
  , isImplemented = require("../../../object/set-prototype-of/is-implemented");

module.exports = function (a) {
 a(isImplemented(create), true);
};
