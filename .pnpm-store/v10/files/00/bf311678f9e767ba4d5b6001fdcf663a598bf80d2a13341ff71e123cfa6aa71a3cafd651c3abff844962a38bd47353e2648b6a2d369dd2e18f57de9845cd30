/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Gengkun He @ahabhgk
*/

"use strict";

const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./Module")} Module */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {"asyncWebAssembly" | "topLevelAwait" | "external promise" | "external script" | "external import" | "external module"} Feature */

class EnvironmentNotSupportAsyncWarning extends WebpackError {
	/**
	 * Creates an instance of EnvironmentNotSupportAsyncWarning.
	 * @param {Module} module module
	 * @param {Feature} feature feature
	 */
	constructor(module, feature) {
		const message = `The generated code contains 'async/await' because this module is using "${feature}".
However, your target environment does not appear to support 'async/await'.
As a result, the code may not run as expected or may cause runtime errors.`;
		super(message);

		/** @type {string} */
		this.name = "EnvironmentNotSupportAsyncWarning";
		/** @type {Module} */
		this.module = module;
	}

	/**
	 * Creates an instance of EnvironmentNotSupportAsyncWarning.
	 * @param {Module} module module
	 * @param {RuntimeTemplate} runtimeTemplate compilation
	 * @param {Feature} feature feature
	 */
	static check(module, runtimeTemplate, feature) {
		if (!runtimeTemplate.supportsAsyncFunction()) {
			module.addWarning(new EnvironmentNotSupportAsyncWarning(module, feature));
		}
	}
}

makeSerializable(
	EnvironmentNotSupportAsyncWarning,
	"webpack/lib/EnvironmentNotSupportAsyncWarning"
);

module.exports = EnvironmentNotSupportAsyncWarning;
