// Implementation credits go to:
// http://wiki.ecmascript.org/doku.php?id=harmony:egal

"use strict";

var numIsNaN = require("../number/is-nan");

module.exports = function (val1, val2) {
	return val1 === val2 ? val1 !== 0 || 1 / val1 === 1 / val2 : numIsNaN(val1) && numIsNaN(val2);
};
