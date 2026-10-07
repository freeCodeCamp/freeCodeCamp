/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { dirname, join } = require("./util/fs");

/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./NormalModuleFactory").ResolveData} ResolveData */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */

/** @typedef {(resolveData: ResolveData) => void} ModuleReplacer */

const PLUGIN_NAME = "NormalModuleReplacementPlugin";

class NormalModuleReplacementPlugin {
	/**
	 * Create an instance of the plugin
	 * @param {RegExp} resourceRegExp the resource matcher
	 * @param {string | ModuleReplacer} newResource the resource replacement
	 */
	constructor(resourceRegExp, newResource) {
		this.resourceRegExp = resourceRegExp;
		this.newResource = newResource;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const resourceRegExp = this.resourceRegExp;
		const newResource = this.newResource;
		compiler.hooks.normalModuleFactory.tap(PLUGIN_NAME, (nmf) => {
			nmf.hooks.beforeResolve.tap(PLUGIN_NAME, (result) => {
				if (resourceRegExp.test(result.request)) {
					if (typeof newResource === "function") {
						newResource(result);
					} else {
						result.request = newResource;
					}
				}
			});
			nmf.hooks.afterResolve.tap(PLUGIN_NAME, (result) => {
				const createData = result.createData;
				if (resourceRegExp.test(/** @type {string} */ (createData.resource))) {
					if (typeof newResource === "function") {
						newResource(result);
					} else {
						const fs =
							/** @type {InputFileSystem} */
							(compiler.inputFileSystem);
						if (
							newResource.startsWith("/") ||
							(newResource.length > 1 && newResource[1] === ":")
						) {
							createData.resource = newResource;
						} else {
							createData.resource = join(
								fs,
								dirname(fs, /** @type {string} */ (createData.resource)),
								newResource
							);
						}
					}
				}
			});
		});
	}
}

module.exports = NormalModuleReplacementPlugin;
