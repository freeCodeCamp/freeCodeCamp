"use strict";

module.exports = function (t, a) {
	a(t.call("razdwatrzy", "dwa", "olera"), "razoleratrzy", "Basic");
	a(t.call("razdwatrzy", "dwa", "ole$&a"), "razole$&atrzy", "Inserts");
	a(t.call("razdwa", "ola", "sdfs"), "razdwa", "No replace");

	a(t.call("$raz$$dwa$trzy$", "$", "&&"), "&&raz&&&&dwa&&trzy&&", "Multi");
	a(t.call("$raz$$dwa$$$$trzy$", "$$", "&"), "$raz&dwa&&trzy$",
		"Multi many chars");
};
