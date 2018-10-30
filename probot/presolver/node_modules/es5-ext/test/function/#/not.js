"use strict";

var identity = require("../../../function/identity")
  , noop     = require("../../../function/noop");

module.exports = function (t, a) {
	a(t.call(identity)(""), true, "Falsy");
	a(t.call(noop)(), true, "Undefined");
	a(t.call(identity)({}), false, "Any object");
	a(t.call(identity)(true), false, "True");
};
