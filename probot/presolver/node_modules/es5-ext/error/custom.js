"use strict";

var assign            = require("../object/assign")
  , isObject          = require("../object/is-object")
  , isValue           = require("../object/is-value")
  , captureStackTrace = Error.captureStackTrace;

exports = module.exports = function (message /*, code, ext*/) {
	var err = new Error(message), code = arguments[1], ext = arguments[2];
	if (!isValue(ext)) {
		if (isObject(code)) {
			ext = code;
			code = null;
		}
	}
	if (isValue(ext)) assign(err, ext);
	if (isValue(code)) err.code = code;
	if (captureStackTrace) captureStackTrace(err, exports);
	return err;
};
