/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Maksim Nazarjev @acupofspirt
*/

"use strict";

const WebpackError = require("./WebpackError");

module.exports = class ConcurrentCompilationError extends WebpackError {
	constructor() {
		super();

		this.name = "ConcurrentCompilationError";
		this.message =
			"You ran Webpack twice. Each instance only supports a single concurrent compilation at a time.";
	}
};
