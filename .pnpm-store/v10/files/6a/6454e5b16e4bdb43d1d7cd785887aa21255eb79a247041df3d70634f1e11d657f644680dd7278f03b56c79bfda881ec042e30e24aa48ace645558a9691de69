/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleFilenameHelpers = require("./ModuleFilenameHelpers");
const NormalModule = require("./NormalModule");

/** @typedef {import("../declarations/plugins/LoaderOptionsPlugin").LoaderOptionsPluginOptions} LoaderOptionsPluginOptions */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./ModuleFilenameHelpers").MatchObject} MatchObject  */

/**
 * Defines the loader context type used by this module.
 * @template T
 * @typedef {import("../declarations/LoaderContext").LoaderContext<T>} LoaderContext
 */

const PLUGIN_NAME = "LoaderOptionsPlugin";

class LoaderOptionsPlugin {
	/**
	 * Creates an instance of LoaderOptionsPlugin.
	 * @param {LoaderOptionsPluginOptions & MatchObject} options options object
	 */
	constructor(options = {}) {
		// If no options are set then generate empty options object
		if (typeof options !== "object") options = {};
		if (!options.test) {
			options.test = () => true;
		}
		/** @type {LoaderOptionsPluginOptions & MatchObject} */
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
				() => require("../schemas/plugins/LoaderOptionsPlugin.json"),
				this.options,
				{
					name: "Loader Options Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../schemas/plugins/LoaderOptionsPlugin.check")(options)
			);
		});

		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			NormalModule.getCompilationHooks(compilation).loader.tap(
				PLUGIN_NAME,
				(context, module) => {
					const resource = module.resource;
					if (!resource) return;
					const i = resource.indexOf("?");
					if (
						ModuleFilenameHelpers.matchObject(
							this.options,
							i < 0 ? resource : resource.slice(0, i)
						)
					) {
						for (const key of Object.keys(this.options)) {
							if (key === "include" || key === "exclude" || key === "test") {
								continue;
							}

							/** @type {LoaderContext<EXPECTED_ANY> & Record<string, EXPECTED_ANY>} */
							(context)[key] = this.options[key];
						}
					}
				}
			);
		});
	}
}

module.exports = LoaderOptionsPlugin;
