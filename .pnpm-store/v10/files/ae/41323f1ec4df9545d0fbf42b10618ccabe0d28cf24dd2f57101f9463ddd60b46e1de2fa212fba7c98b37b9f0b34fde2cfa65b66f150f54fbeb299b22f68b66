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

/** @typedef {import("webpack-sources").RawSourceMap} RawSourceMap */
/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").DevtoolNamespace} DevtoolNamespace */
/** @typedef {import("../declarations/WebpackOptions").DevtoolModuleFilenameTemplate} DevtoolModuleFilenameTemplate */
/** @typedef {import("../declarations/plugins/SourceMapDevToolPlugin").SourceMapDevToolPluginOptions} SourceMapDevToolPluginOptions */
/** @typedef {import("../declarations/plugins/SourceMapDevToolPlugin").Rules} Rules */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("./TemplatedPathPlugin").TemplatePath} TemplatePath */

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

const PLUGIN_NAME = "EvalSourceMapDevToolPlugin";

class EvalSourceMapDevToolPlugin {
	/**
	 * Creates an instance of EvalSourceMapDevToolPlugin.
	 * @param {SourceMapDevToolPluginOptions | string=} inputOptions Options object
	 */
	constructor(inputOptions = {}) {
		/** @type {SourceMapDevToolPluginOptions} */
		let options;
		if (typeof inputOptions === "string") {
			options = {
				append: inputOptions
			};
		} else {
			options = inputOptions;
		}
		/** @type {string} */
		this.sourceMapComment =
			options.append && typeof options.append !== "function"
				? options.append
				: "//# sourceURL=[module]\n//# sourceMappingURL=[url]";
		/** @type {DevtoolModuleFilenameTemplate} */
		this.moduleFilenameTemplate =
			options.moduleFilenameTemplate ||
			"webpack://[namespace]/[resource-path]?[hash]";
		/** @type {DevtoolNamespace} */
		this.namespace = options.namespace || "";
		/** @type {SourceMapDevToolPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const options = this.options;
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			const hooks = JavascriptModulesPlugin.getCompilationHooks(compilation);
			new SourceMapDevToolModuleOptionsPlugin(options).apply(compilation);
			const matchModule = ModuleFilenameHelpers.matchObject.bind(
				ModuleFilenameHelpers,
				options
			);
			hooks.renderModuleContent.tap(
				PLUGIN_NAME,
				(source, m, { chunk, runtimeTemplate, chunkGraph }) => {
					const cachedSource = cache.get(source);
					if (cachedSource !== undefined) {
						return cachedSource;
					}

					/**
					 * Returns result.
					 * @param {Source} r result
					 * @returns {Source} result
					 */
					const result = (r) => {
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
					/** @type {RawSourceMap} */
					let sourceMap;
					/** @type {string | Buffer} */
					let content;
					if (source.sourceAndMap) {
						const sourceAndMap = source.sourceAndMap(options);
						sourceMap = /** @type {RawSourceMap} */ (sourceAndMap.map);
						content = sourceAndMap.source;
					} else {
						sourceMap = /** @type {RawSourceMap} */ (source.map(options));
						content = source.source();
					}
					if (!sourceMap) {
						return result(source);
					}

					// Clone (flat) the sourcemap to ensure that the mutations below do not persist.
					sourceMap = { ...sourceMap };
					const context = compiler.context;
					const root = compiler.root;
					const modules = sourceMap.sources.map((source) => {
						if (!source.startsWith("webpack://")) return source;
						source = makePathsAbsolute(context, source.slice(10), root);
						const module = compilation.findModule(source);
						return module || source;
					});
					let moduleFilenames = modules.map((module) =>
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
					if (options.ignoreList) {
						const ignoreList = sourceMap.sources.reduce(
							/** @type {(acc: number[], sourceName: string, idx: number) => number[]} */ (
								(acc, sourceName, idx) => {
									const rule = /** @type {Rules} */ (options.ignoreList);
									if (ModuleFilenameHelpers.matchPart(sourceName, rule)) {
										acc.push(idx);
									}
									return acc;
								}
							),
							[]
						);
						if (ignoreList.length > 0) {
							sourceMap.ignoreList = ignoreList;
						}
					}

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
											`{${content + footer}\n}`
										)})`
									: JSON.stringify(`{${content + footer}\n}`)
							});`
						)
					);
				}
			);
			hooks.inlineInRuntimeBailout.tap(
				PLUGIN_NAME,
				() => "the eval-source-map devtool is used."
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
					(module, set, context) => {
						set.add(RuntimeGlobals.createScript);
					}
				);
			}
		});
	}
}

module.exports = EvalSourceMapDevToolPlugin;
