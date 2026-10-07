/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource, RawSource } = require("webpack-sources");
const ExternalModule = require("./ExternalModule");
const ModuleFilenameHelpers = require("./ModuleFilenameHelpers");
const RuntimeGlobals = require("./RuntimeGlobals");
const JavascriptModulesPlugin = require("./javascript/JavascriptModulesPlugin");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").DevtoolNamespace} DevtoolNamespace */
/** @typedef {import("../declarations/WebpackOptions").DevtoolModuleFilenameTemplate} DevtoolModuleFilenameTemplate */
/** @typedef {import("./Compiler")} Compiler */

/** @type {WeakMap<Source, Source>} */
const cache = new WeakMap();

const devtoolWarning = new RawSource(`/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
`);

/**
 * Defines the eval dev tool module plugin options type used by this module.
 * @typedef {object} EvalDevToolModulePluginOptions
 * @property {DevtoolNamespace=} namespace namespace
 * @property {string=} sourceUrlComment source url comment
 * @property {DevtoolModuleFilenameTemplate=} moduleFilenameTemplate module filename template
 */

const PLUGIN_NAME = "EvalDevToolModulePlugin";

class EvalDevToolModulePlugin {
	/**
	 * Creates an instance of EvalDevToolModulePlugin.
	 * @param {EvalDevToolModulePluginOptions=} options options
	 */
	constructor(options = {}) {
		/** @type {DevtoolNamespace} */
		this.namespace = options.namespace || "";
		/** @type {string} */
		this.sourceUrlComment = options.sourceUrlComment || "\n//# sourceURL=[url]";
		/** @type {DevtoolModuleFilenameTemplate} */
		this.moduleFilenameTemplate =
			options.moduleFilenameTemplate ||
			"webpack://[namespace]/[resourcePath]?[loaders]";
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			const hooks = JavascriptModulesPlugin.getCompilationHooks(compilation);
			hooks.renderModuleContent.tap(
				PLUGIN_NAME,
				(source, module, { chunk, runtimeTemplate, chunkGraph }) => {
					const cacheEntry = cache.get(source);
					if (cacheEntry !== undefined) return cacheEntry;
					if (module instanceof ExternalModule) {
						cache.set(source, source);
						return source;
					}
					const content = source.source();
					const namespace = compilation.getPath(this.namespace, {
						chunk
					});
					const str = ModuleFilenameHelpers.createFilename(
						module,
						{
							moduleFilenameTemplate: this.moduleFilenameTemplate,
							namespace
						},
						{
							requestShortener: runtimeTemplate.requestShortener,
							chunkGraph,
							hashFunction: compilation.outputOptions.hashFunction
						}
					);
					const footer = `\n${this.sourceUrlComment.replace(
						/\[url\]/g,
						encodeURI(str)
							.replace(/%2F/g, "/")
							.replace(/%20/g, "_")
							.replace(/%5E/g, "^")
							.replace(/%5C/g, "\\")
							.replace(/^\//, "")
					)}`;
					const result = new RawSource(
						`eval(${
							compilation.outputOptions.trustedTypes
								? `${RuntimeGlobals.createScript}(${JSON.stringify(
										`{${content + footer}\n}`
									)})`
								: JSON.stringify(`{${content + footer}\n}`)
						});`
					);
					cache.set(source, result);
					return result;
				}
			);
			hooks.inlineInRuntimeBailout.tap(
				PLUGIN_NAME,
				() => "the eval devtool is used."
			);
			hooks.render.tap(
				PLUGIN_NAME,
				(source) => new ConcatSource(devtoolWarning, source)
			);
			hooks.chunkHash.tap(PLUGIN_NAME, (chunk, hash) => {
				hash.update(PLUGIN_NAME);
				hash.update("2");
			});
			if (compilation.outputOptions.trustedTypes) {
				compilation.hooks.additionalModuleRuntimeRequirements.tap(
					PLUGIN_NAME,
					(module, set, _context) => {
						set.add(RuntimeGlobals.createScript);
					}
				);
			}
		});
	}
}

module.exports = EvalDevToolModulePlugin;
