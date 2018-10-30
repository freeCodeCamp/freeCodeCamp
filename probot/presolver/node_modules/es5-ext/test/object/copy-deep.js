"use strict";

var stringify = JSON.stringify;

module.exports = function (t, a) {
	var o = { 1: "raz", 2: "dwa", 3: "trzy" }, no = t(o);

	a.not(no, o, "Return different object");
	a(stringify(no), stringify(o), "Match properties and values");

	o = {
		foo: "bar",
		raz: {
			dwa: "dwa",
			trzy: { cztery: "pięć", sześć: "siedem" },
			osiem: {},
			dziewięć: function () {}
		},
		dziesięć: 10,
		jedenaście: ["raz", ["dwa", "trzy", { elo: "true" }]]
	};
	o.raz.rec = o;

	no = t(o);
	a.not(o.raz, no.raz, "Deep");
	a.not(o.raz.trzy, no.raz.trzy, "Deep #2");
	a(stringify(o.raz.trzy), stringify(no.raz.trzy), "Deep content");
	a(no.raz.rec, no, "Recursive");
	a.not(o.raz.osiem, no.raz.osiem, "Empty object");
	a(o.raz["dziewięć"], no.raz["dziewięć"], "Function");
	a.not(o["jedenaście"], no["jedenaście"]);
	a.not(o["jedenaście"][1], no["jedenaście"][1]);
	a.not(o["jedenaście"][1][2], no["jedenaście"][1][2]);
	a(t(true), true);
};
