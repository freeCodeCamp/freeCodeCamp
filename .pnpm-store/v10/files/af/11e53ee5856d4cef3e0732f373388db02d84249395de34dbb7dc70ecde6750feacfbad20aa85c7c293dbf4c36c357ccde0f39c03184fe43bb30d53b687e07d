/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC
} = require("../ModuleTypeConstants");
const { cachedSetProperty } = require("../util/cleverMerge");
const ContextElementDependency = require("./ContextElementDependency");
const RequireContextDependency = require("./RequireContextDependency");
const RequireContextDependencyParserPlugin = require("./RequireContextDependencyParserPlugin");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../../declarations/WebpackOptions").ResolveOptions} ResolveOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../javascript/JavascriptParser")} Parser */

/** @type {ResolveOptions} */
const EMPTY_RESOLVE_OPTIONS = {};

const PLUGIN_NAME = "RequireContextPlugin";

class RequireContextPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { contextModuleFactory, normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					RequireContextDependency,
					contextModuleFactory
				);
				compilation.dependencyTemplates.set(
					RequireContextDependency,
					new RequireContextDependency.Template()
				);

				compilation.dependencyFactories.set(
					ContextElementDependency,
					normalModuleFactory
				);

				/**
				 * @param {Parser} parser parser parser
				 * @param {JavascriptParserOptions} parserOptions parserOptions
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					if (
						parserOptions.requireContext !== undefined &&
						!parserOptions.requireContext
					)
						return;

					new RequireContextDependencyParserPlugin().apply(parser);
				};

				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_AUTO)
					.tap(PLUGIN_NAME, handler);
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_DYNAMIC)
					.tap(PLUGIN_NAME, handler);

				contextModuleFactory.hooks.alternativeRequests.tap(
					PLUGIN_NAME,
					(items, options) => {
						if (items.length === 0) return items;

						const finalResolveOptions = compiler.resolverFactory.get(
							"normal",
							cachedSetProperty(
								options.resolveOptions || EMPTY_RESOLVE_OPTIONS,
								"dependencyType",
								/** @type {string} */ (options.category)
							)
						).options;

						let newItems;
						if (!finalResolveOptions.fullySpecified) {
							newItems = [];
							for (const item of items) {
								const { request, context } = item;
								for (const ext of finalResolveOptions.extensions) {
									if (request.endsWith(ext)) {
										newItems.push({
											context,
											request: request.slice(0, -ext.length)
										});
									}
								}
								if (!finalResolveOptions.enforceExtension) {
									newItems.push(item);
								}
							}
							items = newItems;

							newItems = [];
							for (const obj of items) {
								const { request, context } = obj;
								for (const mainFile of finalResolveOptions.mainFiles) {
									if (request.endsWith(`/${mainFile}`)) {
										newItems.push({
											context,
											request: request.slice(0, -mainFile.length)
										});
										newItems.push({
											context,
											request: request.slice(0, -mainFile.length - 1)
										});
									}
								}
								newItems.push(obj);
							}
							items = newItems;
						}

						newItems = [];
						for (const item of items) {
							let hideOriginal = false;
							for (const modulesItems of finalResolveOptions.modules) {
								if (Array.isArray(modulesItems)) {
									for (const dir of modulesItems) {
										if (item.request.startsWith(`./${dir}/`)) {
											newItems.push({
												context: item.context,
												request: item.request.slice(dir.length + 3)
											});
											hideOriginal = true;
										}
									}
								} else {
									const dir = modulesItems.replace(/\\/g, "/");
									const fullPath =
										item.context.replace(/\\/g, "/") + item.request.slice(1);
									if (fullPath.startsWith(dir)) {
										newItems.push({
											context: item.context,
											request: fullPath.slice(dir.length + 1)
										});
									}
								}
							}
							if (!hideOriginal) {
								newItems.push(item);
							}
						}
						return newItems;
					}
				);
			}
		);
	}
}
module.exports = RequireContextPlugin;
