/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../../declarations/WebpackOptions").ChunkLoadingType} ChunkLoadingType */
/** @typedef {import("../Compiler")} Compiler */

/** @type {WeakMap<Compiler, Set<ChunkLoadingType>>} */
const enabledTypes = new WeakMap();

/**
 * @param {Compiler} compiler compiler
 * @returns {Set<ChunkLoadingType>} enabled types
 */
const getEnabledTypes = compiler => {
	let set = enabledTypes.get(compiler);
	if (set === undefined) {
		set = new Set();
		enabledTypes.set(compiler, set);
	}
	return set;
};

class EnableChunkLoadingPlugin {
	/**
	 * @param {ChunkLoadingType} type library type that should be available
	 */
	constructor(type) {
		this.type = type;
	}

	/**
	 * @param {Compiler} compiler the compiler instance
	 * @param {ChunkLoadingType} type type of library
	 * @returns {void}
	 */
	static setEnabled(compiler, type) {
		getEnabledTypes(compiler).add(type);
	}

	/**
	 * @param {Compiler} compiler the compiler instance
	 * @param {ChunkLoadingType} type type of library
	 * @returns {void}
	 */
	static checkEnabled(compiler, type) {
		if (!getEnabledTypes(compiler).has(type)) {
			throw new Error(
				`Chunk loading type "${type}" is not enabled. ` +
					"EnableChunkLoadingPlugin need to be used to enable this type of chunk loading. " +
					'This usually happens through the "output.enabledChunkLoadingTypes" option. ' +
					'If you are using a function as entry which sets "chunkLoading", you need to add all potential chunk loading types to "output.enabledChunkLoadingTypes". ' +
					`These types are enabled: ${Array.from(
						getEnabledTypes(compiler)
					).join(", ")}`
			);
		}
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const { type } = this;

		// Only enable once
		const enabled = getEnabledTypes(compiler);
		if (enabled.has(type)) return;
		enabled.add(type);

		if (typeof type === "string") {
			switch (type) {
				case "jsonp": {
					const JsonpChunkLoadingPlugin = require("../web/JsonpChunkLoadingPlugin");
					new JsonpChunkLoadingPlugin().apply(compiler);
					break;
				}
				case "import-scripts": {
					const ImportScriptsChunkLoadingPlugin = require("../webworker/ImportScriptsChunkLoadingPlugin");
					new ImportScriptsChunkLoadingPlugin().apply(compiler);
					break;
				}
				case "require": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const CommonJsChunkLoadingPlugin = require("../node/CommonJsChunkLoadingPlugin");
					new CommonJsChunkLoadingPlugin({
						asyncChunkLoading: false
					}).apply(compiler);
					break;
				}
				case "async-node": {
					// @ts-expect-error https://github.com/microsoft/TypeScript/issues/41697
					const CommonJsChunkLoadingPlugin = require("../node/CommonJsChunkLoadingPlugin");
					new CommonJsChunkLoadingPlugin({
						asyncChunkLoading: true
					}).apply(compiler);
					break;
				}
				case "import":
				case "universal": {
					const ModuleChunkLoadingPlugin = require("../esm/ModuleChunkLoadingPlugin");
					new ModuleChunkLoadingPlugin().apply(compiler);
					break;
				}
				default:
					throw new Error(`Unsupported chunk loading type ${type}.
Plugins which provide custom chunk loading types must call EnableChunkLoadingPlugin.setEnabled(compiler, type) to disable this error.`);
			}
		} else {
			// TODO support plugin instances here
			// apply them to the compiler
		}
	}
}

module.exports = EnableChunkLoadingPlugin;
