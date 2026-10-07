"use strict";

var keys = require("./keys");

module.exports = function (obj) {
	var error;
	keys(obj).forEach(function (key) {
		try {
			delete this[key];
		} catch (e) {
			if (!error) error = e;
		}
	}, obj);
	if (error !== undefined) throw error;
	return obj;
};
