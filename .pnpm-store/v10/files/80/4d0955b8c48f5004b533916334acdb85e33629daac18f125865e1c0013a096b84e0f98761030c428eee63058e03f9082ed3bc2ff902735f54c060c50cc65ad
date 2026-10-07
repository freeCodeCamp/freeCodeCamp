/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const DllEntryPlugin = require("./DllEntryPlugin");
const FlagAllModulesAsUsedPlugin = require("./FlagAllModulesAsUsedPlugin");
const LibManifestPlugin = require("./LibManifestPlugin");
const createSchemaValidation = require("./util/create-schema-validation");

/** @typedef {import("../declarations/plugins/DllPlugin").DllPluginOptions} DllPluginOptions */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./DllEntryPlugin").Entries} Entries */
/** @typedef {import("./DllEntryPlugin").Options} Options */

const validate = createSchemaValidation(
	require("../schemas/plugins/DllPlugin.check.js"),
	() => require("../schemas/plugins/DllPlugin.json"),
	{
		name: "Dll Plugin",
		baseDataPath: "options"
	}
);

class DllPlugin {
	/**
	 * @param {DllPluginOptions} options options object
	 */
	constructor(options) {
		validate(options);
		this.options = {
			...options,
			entryOnly: options.entryOnly !== false
		};
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.entryOption.tap("DllPlugin", (context, entry) => {
			if (typeof entry !== "function") {
				for (const name of Object.keys(entry)) {
					/** @type {Options} */
					const options = { name, filename: entry.filename };
					new DllEntryPlugin(
						context,
						/** @type {Entries} */ (entry[name].import),
						options
					).apply(compiler);
				}
			} else {
				throw new Error(
					"DllPlugin doesn't support dynamic entry (function) yet"
				);
			}
			return true;
		});
		new LibManifestPlugin(this.options).apply(compiler);
		if (!this.options.entryOnly) {
			new FlagAllModulesAsUsedPlugin("DllPlugin").apply(compiler);
		}
	}
}

module.exports = DllPlugin;
