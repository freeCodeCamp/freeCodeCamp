"use strict";

module.exports = function (t, a) {
	a(t.call("razDwaTRzy4yFoo45My"), "raz-dwa-t-rzy4y-foo45-my");
	a(t.call("razDwaTRzy4yFoo45My-"), "raz-dwa-t-rzy4y-foo45-my-");
	a(t.call("razDwaTRzy4yFoo45My--"), "raz-dwa-t-rzy4y-foo45-my--");
};
