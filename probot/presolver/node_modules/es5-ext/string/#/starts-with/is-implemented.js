"use strict";

var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.startsWith !== "function") return false;
	return (str.startsWith("trzy") === false) &&
		(str.startsWith("raz") === true);
};
