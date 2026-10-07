/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../Compilation").EntryData} EntryData */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Entrypoint")} Entrypoint */

class RuntimeChunkPlugin {
	/**
	 * @param {{ name?: (entrypoint: { name: string }) => string }} options options
	 */
	constructor(options) {
		this.options = {
			/**
			 * @param {Entrypoint} entrypoint entrypoint name
			 * @returns {string} runtime chunk name
			 */
			name: entrypoint => `runtime~${entrypoint.name}`,
			...options
		};
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap("RuntimeChunkPlugin", compilation => {
			compilation.hooks.addEntry.tap(
				"RuntimeChunkPlugin",
				(_, { name: entryName }) => {
					if (entryName === undefined) return;
					const data =
						/** @type {EntryData} */
						(compilation.entries.get(entryName));
					if (data.options.runtime === undefined && !data.options.dependOn) {
						// Determine runtime chunk name
						let name =
							/** @type {string | ((entrypoint: { name: string }) => string)} */
							(this.options.name);
						if (typeof name === "function") {
							name = name({ name: entryName });
						}
						data.options.runtime = name;
					}
				}
			);
		});
	}
}

module.exports = RuntimeChunkPlugin;
