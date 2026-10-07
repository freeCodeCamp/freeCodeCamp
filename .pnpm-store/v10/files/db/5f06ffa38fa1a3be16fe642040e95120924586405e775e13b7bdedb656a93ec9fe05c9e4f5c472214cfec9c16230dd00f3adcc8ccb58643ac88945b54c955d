/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

/**
 * Error raised when webpack encounters a resource URI scheme that no installed
 * plugin knows how to read.
 */
class UnhandledSchemeError extends WebpackError {
	/**
	 * Creates an error explaining that the current resource scheme is not
	 * supported by the active plugin set.
	 * @param {string} scheme scheme
	 * @param {string} resource resource
	 */
	constructor(scheme, resource) {
		super(
			`Reading from "${resource}" is not handled by plugins (Unhandled scheme).` +
				'\nWebpack supports "data:" and "file:" URIs by default.' +
				`\nYou may need an additional plugin to handle "${scheme}:" URIs.`
		);
		this.file = resource;
		/** @type {string} */
		this.name = "UnhandledSchemeError";
	}
}

makeSerializable(
	UnhandledSchemeError,
	"webpack/lib/UnhandledSchemeError",
	"UnhandledSchemeError"
);

module.exports = UnhandledSchemeError;
