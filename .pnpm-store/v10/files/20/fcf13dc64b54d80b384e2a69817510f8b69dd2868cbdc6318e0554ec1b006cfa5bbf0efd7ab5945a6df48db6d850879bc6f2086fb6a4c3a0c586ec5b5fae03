/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const WebpackError = require("../WebpackError");

module.exports = class UnsupportedWebAssemblyFeatureError extends WebpackError {
	/** @param {string} message Error message */
	constructor(message) {
		super(message);
		this.name = "UnsupportedWebAssemblyFeatureError";
		this.hideStack = true;
	}
};
