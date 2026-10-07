/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

class UnhandledSchemeError extends WebpackError {
	/**
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
		this.name = "UnhandledSchemeError";
	}
}

makeSerializable(
	UnhandledSchemeError,
	"webpack/lib/UnhandledSchemeError",
	"UnhandledSchemeError"
);

module.exports = UnhandledSchemeError;
