"use strict";

class LoadingLoaderError extends Error {
	constructor(message) {
		super(message);
		this.name = "LoaderRunnerError";
		// For old Node.js engines remove it then we drop them support
		// eslint-disable-next-line unicorn/no-useless-error-capture-stack-trace
		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = LoadingLoaderError;
