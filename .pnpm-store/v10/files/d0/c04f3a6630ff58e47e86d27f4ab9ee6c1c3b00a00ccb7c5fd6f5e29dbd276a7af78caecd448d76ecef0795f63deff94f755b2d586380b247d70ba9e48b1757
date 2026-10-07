/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sean Larkin @thelarkinn
*/

"use strict";

const { formatSize } = require("../SizeFormatHelpers");
const WebpackError = require("../WebpackError");

/** @typedef {import("./SizeLimitsPlugin").EntrypointDetails} EntrypointDetails */

class EntrypointsOverSizeLimitWarning extends WebpackError {
	/**
	 * Creates an instance of EntrypointsOverSizeLimitWarning.
	 * @param {EntrypointDetails[]} entrypoints the entrypoints
	 * @param {number} entrypointLimit the size limit
	 */
	constructor(entrypoints, entrypointLimit) {
		const entrypointList = entrypoints
			.map(
				(entrypoint) =>
					`\n  ${entrypoint.name} (${formatSize(
						entrypoint.size
					)})\n${entrypoint.files.map((asset) => `      ${asset}`).join("\n")}`
			)
			.join("");
		super(`entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (${formatSize(
			entrypointLimit
		)}). This can impact web performance.
Entrypoints:${entrypointList}\n`);

		/** @type {string} */
		this.name = "EntrypointsOverSizeLimitWarning";
		/** @type {EntrypointDetails[]} */
		this.entrypoints = entrypoints;
	}
}

/** @type {typeof EntrypointsOverSizeLimitWarning} */
module.exports = EntrypointsOverSizeLimitWarning;
