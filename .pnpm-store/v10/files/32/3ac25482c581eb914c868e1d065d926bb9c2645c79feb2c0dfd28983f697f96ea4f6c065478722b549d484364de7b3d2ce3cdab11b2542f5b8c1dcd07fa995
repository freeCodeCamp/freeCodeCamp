/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RawModule = require("./RawModule");
const EntryDependency = require("./dependencies/EntryDependency");

/** @typedef {import("../declarations/plugins/IgnorePlugin").IgnorePluginOptions} IgnorePluginOptions */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./NormalModuleFactory").ResolveData} ResolveData */
/** @typedef {import("./ContextModuleFactory").BeforeContextResolveData} BeforeContextResolveData */

/** @typedef {(resource: string, context: string) => boolean} CheckResourceFn */

const PLUGIN_NAME = "IgnorePlugin";

class IgnorePlugin {
	/**
	 * Creates an instance of IgnorePlugin.
	 * @param {IgnorePluginOptions} options IgnorePlugin options
	 */
	constructor(options) {
		this.options = options;
		this.checkIgnore = this.checkIgnore.bind(this);
	}

	/**
	 * Note that if "contextRegExp" is given, both the "resourceRegExp" and "contextRegExp" have to match.
	 * @param {ResolveData | BeforeContextResolveData} resolveData resolve data
	 * @returns {false | undefined} returns false when the request should be ignored, otherwise undefined
	 */
	checkIgnore(resolveData) {
		if (
			"checkResource" in this.options &&
			this.options.checkResource &&
			this.options.checkResource(resolveData.request, resolveData.context)
		) {
			return false;
		}

		if (
			"resourceRegExp" in this.options &&
			this.options.resourceRegExp &&
			this.options.resourceRegExp.test(resolveData.request)
		) {
			if ("contextRegExp" in this.options && this.options.contextRegExp) {
				// if "contextRegExp" is given,
				// both the "resourceRegExp" and "contextRegExp" have to match.
				if (this.options.contextRegExp.test(resolveData.context)) {
					return false;
				}
			} else {
				return false;
			}
		}
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.validate.tap(PLUGIN_NAME, () => {
			compiler.validate(
				require("../schemas/plugins/IgnorePlugin.json"),
				this.options,
				{
					name: "Ignore Plugin",
					baseDataPath: "options"
				},
				(options) => require("../schemas/plugins/IgnorePlugin.check")(options)
			);
		});

		compiler.hooks.normalModuleFactory.tap(PLUGIN_NAME, (nmf) => {
			nmf.hooks.beforeResolve.tap(PLUGIN_NAME, (resolveData) => {
				const result = this.checkIgnore(resolveData);

				if (
					result === false &&
					resolveData.dependencies.length > 0 &&
					resolveData.dependencies[0] instanceof EntryDependency
				) {
					const module = new RawModule(
						"",
						"ignored-entry-module",
						"(ignored-entry-module)"
					);
					module.factoryMeta = { sideEffectFree: true };

					resolveData.ignoredModule = module;
				}

				return result;
			});
		});
		compiler.hooks.contextModuleFactory.tap(PLUGIN_NAME, (cmf) => {
			cmf.hooks.beforeResolve.tap(PLUGIN_NAME, this.checkIgnore);
		});
	}
}

module.exports = IgnorePlugin;
