/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Authors Ivan Kopeykin @vankop
*/

"use strict";

/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./config/target").PlatformTargetProperties} PlatformTargetProperties */

/**
 * Should be used only for "target === false" or
 * when you want to overwrite platform target properties
 */
class PlatformPlugin {
	/**
	 * @param {Partial<PlatformTargetProperties>} platform target properties
	 */
	constructor(platform) {
		/** @type {Partial<PlatformTargetProperties>} */
		this.platform = platform;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.environment.tap("PlatformPlugin", () => {
			compiler.platform = {
				...compiler.platform,
				...this.platform
			};
		});
	}
}

module.exports = PlatformPlugin;
