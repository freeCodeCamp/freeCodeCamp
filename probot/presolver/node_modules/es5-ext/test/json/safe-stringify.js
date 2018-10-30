"use strict";

module.exports = function (t, a) {
	a(t({ foo: "bar" }), JSON.stringify({ foo: "bar" }));
	a(t({ foo: { elo: 12 } }), "{\"foo\":{\"elo\":12}}");
	a(t({ foo: { elo: 12,
mel: {
		toJSON: function () {
 throw new Error("Nu nu!");
}
	} } }), "{\"foo\":{\"elo\":12}}");
	a(t({ foo: { elo: 12 },
mel: {
		toJSON: function () {
 throw new Error("Nu nu!");
}
	} }), "{\"foo\":{\"elo\":12}}");
	a(t({ foo: { elo: 12 },
mel: [
"raz", {
		toJSON: function () {
 throw new Error("Nu nu!");
}
	}, 0, 2
] }), "{\"foo\":{\"elo\":12},\"mel\":[\"raz\",0,2]}");
};
