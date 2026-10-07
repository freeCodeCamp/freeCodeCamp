/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Maksim Nazarjev @acupofspirt
*/

"use strict";

const WebpackError = require("./WebpackError");

module.exports = class ConcurrentCompilationError extends WebpackError {
	constructor() {
		super(
			"You ran Webpack twice. Each instance only supports a single concurrent compilation at a time."
		);

		this.name = "ConcurrentCompilationError";
	}
};
