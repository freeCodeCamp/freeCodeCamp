/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource, RawSource } = require("webpack-sources");
const ModuleFilenameHelpers = require("./ModuleFilenameHelpers");
const NormalModule = require("./NormalModule");
const RuntimeGlobals = require("./RuntimeGlobals");
const SourceMapDevToolModuleOptionsPlugin = require("./SourceMapDevToolModuleOptionsPlugin");
const JavascriptModulesPlugin = require("./javascript/JavascriptModulesPlugin");
const ConcatenatedModule = require("./optimize/ConcatenatedModule");
const generateDebugId = require("./util/generateDebugId");
const { makePathsAbsolute } = require("./util/identifier");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").DevTool} DevToolOptions */
/** @typedef {import("../declarations/plugins/SourceMapDevToolPlugin").SourceMapDevToolPluginOptions} SourceMapDevToolPluginOptions */
/** @typedef {import("./ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./NormalModule").SourceMap} SourceMap */

/** @type {WeakMap<Source, Source>} */
const cache = new WeakMap();

const devtoolWarning = new RawSource(`/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
`);

class EvalSourceMapDevToolPlugin {
	/**
	 * @param {SourceMapDevToolPluginOptions|string} inputOptions Options object
	 */
	constructor(inputOptions) {
		/** @type {SourceMapDevToolPluginOptions} */
		let options;
		if (typeof inputOptions === "string") {
			options = {
				append: inputOptions
			};
		} else {
			options = inputOptions;
		}
		this.sourceMapComment =
			options.append && typeof options.append !== "function"
				? options.append
				: "//# sourceURL=[module]\n//# sourceMappingURL=[url]";
		this.moduleFilenameTemplate =
			options.moduleFilenameTemplate ||
			"webpack://[namespace]/[resource-path]?[hash]";
		this.namespace = options.namespace || "";
		this.options = options;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const options = this.options;
		compiler.hooks.compilation.tap(
			"EvalSourceMapDevToolPlugin",
			compilation => {
				const hooks = JavascriptModulesPlugin.getCompilationHooks(compilation);
				new SourceMapDevToolModuleOptionsPlugin(options).apply(compilation);
				const matchModule = ModuleFilenameHelpers.matchObject.bind(
					ModuleFilenameHelpers,
					options
				);
				hooks.renderModuleContent.tap(
					"EvalSourceMapDevToolPlugin",
					(source, m, { chunk, runtimeTemplate, chunkGraph }) => {
						const cachedSource = cache.get(source);
						if (cachedSource !== undefined) {
							return cachedSource;
						}

						/**
						 * @param {Source} r result
						 * @returns {Source} result
						 */
						const result = r => {
							cache.set(source, r);
							return r;
						};

						if (m instanceof NormalModule) {
							const module = /** @type {NormalModule} */ (m);
							if (!matchModule(module.resource)) {
								return result(source);
							}
						} else if (m instanceof ConcatenatedModule) {
							const concatModule = /** @type {ConcatenatedModule} */ (m);
							if (concatModule.rootModule instanceof NormalModule) {
								const module = /** @type {NormalModule} */ (
									concatModule.rootModule
								);
								if (!matchModule(module.resource)) {
									return result(source);
								}
							} else {
								return result(source);
							}
						} else {
							return result(source);
						}

						const namespace = compilation.getPath(this.namespace, {
							chunk
						});
						/** @type {SourceMap} */
						let sourceMap;
						let content;
						if (source.sourceAndMap) {
							const sourceAndMap = source.sourceAndMap(options);
							sourceMap = /** @type {SourceMap} */ (sourceAndMap.map);
							content = sourceAndMap.source;
						} else {
							sourceMap = /** @type {SourceMap} */ (source.map(options));
							content = source.source();
						}
						if (!sourceMap) {
							return result(source);
						}

						// Clone (flat) the sourcemap to ensure that the mutations below do not persist.
						sourceMap = { ...sourceMap };
						const context = /** @type {string} */ (compiler.options.context);
						const root = compiler.root;
						const modules = sourceMap.sources.map(source => {
							if (!source.startsWith("webpack://")) return source;
							source = makePathsAbsolute(context, source.slice(10), root);
							const module = compilation.findModule(source);
							return module || source;
						});
						let moduleFilenames = modules.map(module =>
							ModuleFilenameHelpers.createFilename(
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
							)
						);
						moduleFilenames = ModuleFilenameHelpers.replaceDuplicates(
							moduleFilenames,
							(filename, i, n) => {
								for (let j = 0; j < n; j++) filename += "*";
								return filename;
							}
						);
						sourceMap.sources = moduleFilenames;
						if (options.noSources) {
							sourceMap.sourcesContent = undefined;
						}
						sourceMap.sourceRoot = options.sourceRoot || "";
						const moduleId =
							/** @type {ModuleId} */
							(chunkGraph.getModuleId(m));
						sourceMap.file =
							typeof moduleId === "number" ? `${moduleId}.js` : moduleId;

						if (options.debugIds) {
							sourceMap.debugId = generateDebugId(content, sourceMap.file);
						}

						const footer = `${this.sourceMapComment.replace(
							/\[url\]/g,
							`data:application/json;charset=utf-8;base64,${Buffer.from(
								JSON.stringify(sourceMap),
								"utf8"
							).toString("base64")}`
						)}\n//# sourceURL=webpack-internal:///${moduleId}\n`; // workaround for chrome bug

						return result(
							new RawSource(
								`eval(${
									compilation.outputOptions.trustedTypes
										? `${RuntimeGlobals.createScript}(${JSON.stringify(
												content + footer
											)})`
										: JSON.stringify(content + footer)
								});`
							)
						);
					}
				);
				hooks.inlineInRuntimeBailout.tap(
					"EvalDevToolModulePlugin",
					() => "the eval-source-map devtool is used."
				);
				hooks.render.tap(
					"EvalSourceMapDevToolPlugin",
					source => new ConcatSource(devtoolWarning, source)
				);
				hooks.chunkHash.tap("EvalSourceMapDevToolPlugin", (chunk, hash) => {
					hash.update("EvalSourceMapDevToolPlugin");
					hash.update("2");
				});
				if (compilation.outputOptions.trustedTypes) {
					compilation.hooks.additionalModuleRuntimeRequirements.tap(
						"EvalSourceMapDevToolPlugin",
						(module, set, context) => {
							set.add(RuntimeGlobals.createScript);
						}
					);
				}
			}
		);
	}
}

module.exports = EvalSourceMapDevToolPlugin;
