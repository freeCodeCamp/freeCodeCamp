/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const DllEntryPlugin = require("./DllEntryPlugin");
const FlagAllModulesAsUsedPlugin = require("./FlagAllModulesAsUsedPlugin");
const LibManifestPlugin = require("./LibManifestPlugin");

/** @typedef {import("../declarations/plugins/DllPlugin").DllPluginOptions} DllPluginOptions */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./DllEntryPlugin").Entries} Entries */
/** @typedef {import("./DllEntryPlugin").Options} Options */

const PLUGIN_NAME = "DllPlugin";

class DllPlugin {
	/**
	 * Creates an instance of DllPlugin.
	 * @param {DllPluginOptions} options options object
	 */
	constructor(options) {
		/** @type {DllPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.validate.tap(PLUGIN_NAME, () => {
			compiler.validate(
				() => require("../schemas/plugins/DllPlugin.json"),
				this.options,
				{
					name: "Dll Plugin",
					baseDataPath: "options"
				},
				(options) => require("../schemas/plugins/DllPlugin.check")(options)
			);
		});

		const entryOnly = this.options.entryOnly !== false;
		compiler.hooks.entryOption.tap(PLUGIN_NAME, (context, entry) => {
			if (typeof entry !== "function") {
				for (const name of Object.keys(entry)) {
					/** @type {Options} */
					const options = { name };
					new DllEntryPlugin(
						context,
						/** @type {Entries} */
						(entry[name].import),
						options
					).apply(compiler);
				}
			} else {
				throw new Error(
					`${PLUGIN_NAME} doesn't support dynamic entry (function) yet`
				);
			}
			return true;
		});
		new LibManifestPlugin({ ...this.options, entryOnly }).apply(compiler);
		if (!entryOnly) {
			new FlagAllModulesAsUsedPlugin(PLUGIN_NAME).apply(compiler);
		}
	}
}

module.exports = DllPlugin;
