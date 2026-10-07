/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../Compilation").EntryData} EntryData */
/** @typedef {import("../Compiler")} Compiler */

const PLUGIN_NAME = "RuntimeChunkPlugin";

/** @typedef {(entrypoint: { name: string }) => string} RuntimeChunkFunction */

class RuntimeChunkPlugin {
	/**
	 * Creates an instance of RuntimeChunkPlugin.
	 * @param {{ name?: RuntimeChunkFunction }=} options options
	 */
	constructor(options = {}) {
		/** @type {{ name: string | RuntimeChunkFunction }} */
		this.options = {
			name: (entrypoint) => `runtime~${entrypoint.name}`,
			...options
		};
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.addEntry.tap(PLUGIN_NAME, (_, { name: entryName }) => {
				if (entryName === undefined) return;
				const data =
					/** @type {EntryData} */
					(compilation.entries.get(entryName));
				if (data.options.runtime === undefined && !data.options.dependOn) {
					// Determine runtime chunk name
					let name = this.options.name;
					if (typeof name === "function") {
						name = name({ name: entryName });
					}
					data.options.runtime = name;
				}
			});
		});
	}
}

module.exports = RuntimeChunkPlugin;
