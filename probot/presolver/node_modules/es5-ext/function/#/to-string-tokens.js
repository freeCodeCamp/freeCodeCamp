"use strict";

var validFunction = require("../valid-function");

var re1 = /^\s*function[\0-')-\uffff]*\(([\0-(*-\uffff]*)\)\s*\{([\0-\uffff]*)\}\s*$/
  , re2 = /^\s*\(?([\0-'*-\uffff]*)\)?\s*=>\s*(\{?[\0-\uffff]*\}?)\s*$/;

module.exports = function () {
	var str = String(validFunction(this)), data = str.match(re1);
	if (!data) {
		data = str.match(re2);
		if (!data) throw new Error("Unrecognized string format");
		data[1] = data[1].trim();
		if (data[2][0] === "{") data[2] = data[2].trim().slice(1, -1);
	}
	return { args: data[1], body: data[2] };
};
