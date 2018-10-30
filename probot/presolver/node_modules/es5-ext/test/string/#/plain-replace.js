"use strict";

module.exports = function (t, a) {
	a(t.call("razdwatrzy", "dwa", "olera"), "razoleratrzy", "Basic");
	a(t.call("razdwatrzy", "dwa", "ole$&a"), "razole$&atrzy", "Inserts");
	a(t.call("razdwa", "ola", "sdfs"), "razdwa", "No replace");
};
