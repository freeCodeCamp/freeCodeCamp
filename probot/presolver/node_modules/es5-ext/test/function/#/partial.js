"use strict";

var toArray = require("../../../array/to-array")

  , f = function () {
 return toArray(arguments);
};

module.exports = function (t, a) {
	a.deep(t.call(f, 1)(2, 3), [1, 2, 3]);
};
