"use strict";

module.exports = function (t, a) {
	a(t.call("raz", ""), true, "Empty");
	a(t.call("", ""), true, "Both Empty");
	a(t.call("raz", "raz"), true, "Same");
	a(t.call("razdwa", "raz"), true, "Starts with");
	a(t.call("razdwa", "dwa"), true, "Ends with");
	a(t.call("razdwa", "zdw"), true, "In middle");
	a(t.call("", "raz"), false, "Something in empty");
	a(t.call("az", "raz"), false, "Longer");
	a(t.call("azasdfasdf", "azff"), false, "Not found");
	a(t.call("razdwa", "raz", 1), false, "Position");
};
