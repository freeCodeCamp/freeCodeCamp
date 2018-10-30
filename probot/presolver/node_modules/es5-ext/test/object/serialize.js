"use strict";

module.exports = function (t, a) {
	var fn = function (raz, dwa) {
		return raz + dwa;
	};
	a(t(), "undefined", "Undefined");
	a(t(null), "null", "Null");
	a(t(null), "null", "Null");
	a(t("raz"), "\"raz\"", "String");
	a(t("raz\"ddwa\ntrzy"), "\"raz\\\"ddwa\\ntrzy\"", "String with escape");
	a(t(false), "false", "Booelean");
	a(t(fn), String(fn), "Function");

	a(t(/raz-dwa/g), "/raz-dwa/g", "RegExp");
	a(t(new Date(1234567)), "new Date(1234567)", "Date");
	a(t([]), "[]", "Empty array");
	a(
		t([undefined, false, null, "raz\"ddwa\ntrzy", fn, /raz/g, new Date(1234567), ["foo"]]),
		"[undefined,false,null,\"raz\\\"ddwa\\ntrzy\"," +
			String(fn) +
			",/raz/g,new Date(1234567),[\"foo\"]]",
		"Rich Array"
	);
	a(t({}), "{}", "Empty object");
	a(
		t({
			raz: undefined,
			dwa: false,
			trzy: null,
			cztery: "raz\"ddwa\ntrzy",
			piec: fn,
			szesc: /raz/g,
			siedem: new Date(1234567),
			osiem: ["foo", 32],
			dziewiec: { foo: "bar", dwa: 343 }
		}),
		"{\"raz\":undefined,\"dwa\":false,\"trzy\":null,\"cztery\":\"raz\\\"ddwa\\ntrzy\"," +
			"\"piec\":" +
			String(fn) +
			",\"szesc\":/raz/g,\"siedem\":new Date(1234567),\"osiem\":[\"foo\",32]," +
			"\"dziewiec\":{\"foo\":\"bar\",\"dwa\":343}}",
		"Rich object"
	);
};
