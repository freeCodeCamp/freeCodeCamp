"use strict";

module.exports = function (t, a) {
	var fn = function (raz, dwa) {
		return raz + dwa;
	};
	a(t("undefined"), undefined, "Undefined");
	a(t("null"), null, "Null");
	a(t("\"raz\""), "raz", "String");
	a(t("\"raz\\\"ddwa\\ntrzy\""), "raz\"ddwa\ntrzy", "String with escape");
	a(t("false"), false, "Booelean");
	a(String(t(String(fn))), String(fn), "Function");

	a.deep(t("/raz-dwa/g"), /raz-dwa/g, "RegExp");
	a.deep(t("new Date(1234567)"), new Date(1234567), "Date");
	a.deep(t("[]"), [], "Empty array");
	a.deep(
		t("[undefined,false,null,\"raz\\\"ddwa\\ntrzy\",/raz/g,new Date(1234567),[\"foo\"]]"),
		[undefined, false, null, "raz\"ddwa\ntrzy", /raz/g, new Date(1234567), ["foo"]],
		"Rich Array"
	);
	a.deep(t("{}"), {}, "Empty object");
	a.deep(
		t(
			"{\"raz\":undefined,\"dwa\":false,\"trzy\":null,\"cztery\":\"raz\\\"ddwa\\ntrzy\"," +
				"\"szesc\":/raz/g,\"siedem\":new Date(1234567),\"osiem\":[\"foo\",32]," +
				"\"dziewiec\":{\"foo\":\"bar\",\"dwa\":343}}"
		),
		{
			raz: undefined,
			dwa: false,
			trzy: null,
			cztery: "raz\"ddwa\ntrzy",
			szesc: /raz/g,
			siedem: new Date(1234567),
			osiem: ["foo", 32],
			dziewiec: { foo: "bar", dwa: 343 }
		},
		"Rich object"
	);
};
