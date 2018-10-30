/* eslint-env node */

"use strict";

var indexTest = require("tad/lib/utils/index-test")
  , path      = require("path").resolve(__dirname, "../../../reg-exp/#");

module.exports = function (t, a, d) {
	indexTest(
		indexTest.readDir(path).aside(function (data) {
			delete data.sticky;
			delete data.unicode;
		})
	)(t, a, d);
};
