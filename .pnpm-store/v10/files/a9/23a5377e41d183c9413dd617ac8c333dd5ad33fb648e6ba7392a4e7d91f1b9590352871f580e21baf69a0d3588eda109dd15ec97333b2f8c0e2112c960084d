/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const asyncLib = require("neo-async");
const { ConcatSource, RawSource } = require("webpack-sources");
const Compilation = require("./Compilation");
const ModuleFilenameHelpers = require("./ModuleFilenameHelpers");
const ProgressPlugin = require("./ProgressPlugin");
const SourceMapDevToolModuleOptionsPlugin = require("./SourceMapDevToolModuleOptionsPlugin");
const createSchemaValidation = require("./util/create-schema-validation");
const createHash = require("./util/createHash");
const { relative, dirname } = require("./util/fs");
const generateDebugId = require("./util/generateDebugId");
const { makePathsAbsolute } = require("./util/identifier");

/** @typedef {import("webpack-sources").MapOptions} MapOptions */
/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/plugins/SourceMapDevToolPlugin").SourceMapDevToolPluginOptions} SourceMapDevToolPluginOptions */
/** @typedef {import("./Cache").Etag} Etag */
/** @typedef {import("./CacheFacade").ItemCacheFacade} ItemCacheFacade */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./Compilation").Asset} Asset */
/** @typedef {import("./Compilation").AssetInfo} AssetInfo */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./NormalModule").SourceMap} SourceMap */
/** @typedef {import("./TemplatedPathPlugin").TemplatePath} TemplatePath */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/createHash").Algorithm} Algorithm */
/** @typedef {import("./util/fs").OutputFileSystem} OutputFileSystem */

const validate = createSchemaValidation(
	require("../schemas/plugins/SourceMapDevToolPlugin.check.js"),
	() => require("../schemas/plugins/SourceMapDevToolPlugin.json"),
	{
		name: "SourceMap DevTool Plugin",
		baseDataPath: "options"
	}
);
/**
 * @typedef {object} SourceMapTask
 * @property {Source} asset
 * @property {AssetInfo} assetInfo
 * @property {(string | Module)[]} modules
 * @property {string} source
 * @property {string} file
 * @property {SourceMap} sourceMap
 * @property {ItemCacheFacade} cacheItem cache item
 */

const METACHARACTERS_REGEXP = /[-[\]\\/{}()*+?.^$|]/g;
const CONTENT_HASH_DETECT_REGEXP = /\[contenthash(:\w+)?\]/;
const CSS_AND_JS_MODULE_EXTENSIONS_REGEXP = /\.((c|m)?js|css)($|\?)/i;
const CSS_EXTENSION_DETECT_REGEXP = /\.css($|\?)/i;
const MAP_URL_COMMENT_REGEXP = /\[map\]/g;
const URL_COMMENT_REGEXP = /\[url\]/g;
const URL_FORMATTING_REGEXP = /^\n\/\/(.*)$/;

/**
 * Reset's .lastIndex of stateful Regular Expressions
 * For when `test` or `exec` is called on them
 * @param {RegExp} regexp Stateful Regular Expression to be reset
 * @returns {void}
 */
const resetRegexpState = regexp => {
	regexp.lastIndex = -1;
};

/**
 * Escapes regular expression metacharacters
 * @param {string} str String to quote
 * @returns {string} Escaped string
 */
const quoteMeta = str => str.replace(METACHARACTERS_REGEXP, "\\$&");

/**
 * Creating {@link SourceMapTask} for given file
 * @param {string} file current compiled file
 * @param {Source} asset the asset
 * @param {AssetInfo} assetInfo the asset info
 * @param {MapOptions} options source map options
 * @param {Compilation} compilation compilation instance
 * @param {ItemCacheFacade} cacheItem cache item
 * @returns {SourceMapTask | undefined} created task instance or `undefined`
 */
const getTaskForFile = (
	file,
	asset,
	assetInfo,
	options,
	compilation,
	cacheItem
) => {
	let source;
	/** @type {SourceMap} */
	let sourceMap;
	/**
	 * Check if asset can build source map
	 */
	if (asset.sourceAndMap) {
		const sourceAndMap = asset.sourceAndMap(options);
		sourceMap = /** @type {SourceMap} */ (sourceAndMap.map);
		source = sourceAndMap.source;
	} else {
		sourceMap = /** @type {SourceMap} */ (asset.map(options));
		source = asset.source();
	}
	if (!sourceMap || typeof source !== "string") return;
	const context = /** @type {string} */ (compilation.options.context);
	const root = compilation.compiler.root;
	const cachedAbsolutify = makePathsAbsolute.bindContextCache(context, root);
	const modules = sourceMap.sources.map(source => {
		if (!source.startsWith("webpack://")) return source;
		source = cachedAbsolutify(source.slice(10));
		const module = compilation.findModule(source);
		return module || source;
	});

	return {
		file,
		asset,
		source,
		assetInfo,
		sourceMap,
		modules,
		cacheItem
	};
};

class SourceMapDevToolPlugin {
	/**
	 * @param {SourceMapDevToolPluginOptions} [options] options object
	 * @throws {Error} throws error, if got more than 1 arguments
	 */
	constructor(options = {}) {
		validate(options);

		this.sourceMapFilename = /** @type {string | false} */ (options.filename);
		/** @type {false | TemplatePath}} */
		this.sourceMappingURLComment =
			options.append === false
				? false
				: // eslint-disable-next-line no-useless-concat
					options.append || "\n//# source" + "MappingURL=[url]";
		/** @type {string | Function} */
		this.moduleFilenameTemplate =
			options.moduleFilenameTemplate || "webpack://[namespace]/[resourcePath]";
		/** @type {string | Function} */
		this.fallbackModuleFilenameTemplate =
			options.fallbackModuleFilenameTemplate ||
			"webpack://[namespace]/[resourcePath]?[hash]";
		/** @type {string} */
		this.namespace = options.namespace || "";
		/** @type {SourceMapDevToolPluginOptions} */
		this.options = options;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const outputFs = /** @type {OutputFileSystem} */ (
			compiler.outputFileSystem
		);
		const sourceMapFilename = this.sourceMapFilename;
		const sourceMappingURLComment = this.sourceMappingURLComment;
		const moduleFilenameTemplate = this.moduleFilenameTemplate;
		const namespace = this.namespace;
		const fallbackModuleFilenameTemplate = this.fallbackModuleFilenameTemplate;
		const requestShortener = compiler.requestShortener;
		const options = this.options;
		options.test = options.test || CSS_AND_JS_MODULE_EXTENSIONS_REGEXP;

		const matchObject = ModuleFilenameHelpers.matchObject.bind(
			undefined,
			options
		);

		compiler.hooks.compilation.tap("SourceMapDevToolPlugin", compilation => {
			new SourceMapDevToolModuleOptionsPlugin(options).apply(compilation);

			compilation.hooks.processAssets.tapAsync(
				{
					name: "SourceMapDevToolPlugin",
					stage: Compilation.PROCESS_ASSETS_STAGE_DEV_TOOLING,
					additionalAssets: true
				},
				(assets, callback) => {
					const chunkGraph = compilation.chunkGraph;
					const cache = compilation.getCache("SourceMapDevToolPlugin");
					/** @type {Map<string | Module, string>} */
					const moduleToSourceNameMapping = new Map();
					/**
					 * @type {Function}
					 * @returns {void}
					 */
					const reportProgress =
						ProgressPlugin.getReporter(compilation.compiler) || (() => {});

					/** @type {Map<string, Chunk>} */
					const fileToChunk = new Map();
					for (const chunk of compilation.chunks) {
						for (const file of chunk.files) {
							fileToChunk.set(file, chunk);
						}
						for (const file of chunk.auxiliaryFiles) {
							fileToChunk.set(file, chunk);
						}
					}

					/** @type {string[]} */
					const files = [];
					for (const file of Object.keys(assets)) {
						if (matchObject(file)) {
							files.push(file);
						}
					}

					reportProgress(0);
					/** @type {SourceMapTask[]} */
					const tasks = [];
					let fileIndex = 0;

					asyncLib.each(
						files,
						(file, callback) => {
							const asset =
								/** @type {Readonly<Asset>} */
								(compilation.getAsset(file));
							if (asset.info.related && asset.info.related.sourceMap) {
								fileIndex++;
								return callback();
							}

							const chunk = fileToChunk.get(file);
							const sourceMapNamespace = compilation.getPath(this.namespace, {
								chunk
							});

							const cacheItem = cache.getItemCache(
								file,
								cache.mergeEtags(
									cache.getLazyHashedEtag(asset.source),
									sourceMapNamespace
								)
							);

							cacheItem.get((err, cacheEntry) => {
								if (err) {
									return callback(err);
								}
								/**
								 * If presented in cache, reassigns assets. Cache assets already have source maps.
								 */
								if (cacheEntry) {
									const { assets, assetsInfo } = cacheEntry;
									for (const cachedFile of Object.keys(assets)) {
										if (cachedFile === file) {
											compilation.updateAsset(
												cachedFile,
												assets[cachedFile],
												assetsInfo[cachedFile]
											);
										} else {
											compilation.emitAsset(
												cachedFile,
												assets[cachedFile],
												assetsInfo[cachedFile]
											);
										}
										/**
										 * Add file to chunk, if not presented there
										 */
										if (cachedFile !== file && chunk !== undefined)
											chunk.auxiliaryFiles.add(cachedFile);
									}

									reportProgress(
										(0.5 * ++fileIndex) / files.length,
										file,
										"restored cached SourceMap"
									);

									return callback();
								}

								reportProgress(
									(0.5 * fileIndex) / files.length,
									file,
									"generate SourceMap"
								);

								/** @type {SourceMapTask | undefined} */
								const task = getTaskForFile(
									file,
									asset.source,
									asset.info,
									{
										module: options.module,
										columns: options.columns
									},
									compilation,
									cacheItem
								);

								if (task) {
									const modules = task.modules;

									for (let idx = 0; idx < modules.length; idx++) {
										const module = modules[idx];

										if (
											typeof module === "string" &&
											/^(data|https?):/.test(module)
										) {
											moduleToSourceNameMapping.set(module, module);
											continue;
										}

										if (!moduleToSourceNameMapping.get(module)) {
											moduleToSourceNameMapping.set(
												module,
												ModuleFilenameHelpers.createFilename(
													module,
													{
														moduleFilenameTemplate,
														namespace: sourceMapNamespace
													},
													{
														requestShortener,
														chunkGraph,
														hashFunction: compilation.outputOptions.hashFunction
													}
												)
											);
										}
									}

									tasks.push(task);
								}

								reportProgress(
									(0.5 * ++fileIndex) / files.length,
									file,
									"generated SourceMap"
								);

								callback();
							});
						},
						err => {
							if (err) {
								return callback(err);
							}

							reportProgress(0.5, "resolve sources");
							/** @type {Set<string>} */
							const usedNamesSet = new Set(moduleToSourceNameMapping.values());
							/** @type {Set<string>} */
							const conflictDetectionSet = new Set();

							/**
							 * all modules in defined order (longest identifier first)
							 * @type {Array<string | Module>}
							 */
							const allModules = Array.from(
								moduleToSourceNameMapping.keys()
							).sort((a, b) => {
								const ai = typeof a === "string" ? a : a.identifier();
								const bi = typeof b === "string" ? b : b.identifier();
								return ai.length - bi.length;
							});

							// find modules with conflicting source names
							for (let idx = 0; idx < allModules.length; idx++) {
								const module = allModules[idx];
								let sourceName =
									/** @type {string} */
									(moduleToSourceNameMapping.get(module));
								let hasName = conflictDetectionSet.has(sourceName);
								if (!hasName) {
									conflictDetectionSet.add(sourceName);
									continue;
								}

								// try the fallback name first
								sourceName = ModuleFilenameHelpers.createFilename(
									module,
									{
										moduleFilenameTemplate: fallbackModuleFilenameTemplate,
										namespace
									},
									{
										requestShortener,
										chunkGraph,
										hashFunction: compilation.outputOptions.hashFunction
									}
								);
								hasName = usedNamesSet.has(sourceName);
								if (!hasName) {
									moduleToSourceNameMapping.set(module, sourceName);
									usedNamesSet.add(sourceName);
									continue;
								}

								// otherwise just append stars until we have a valid name
								while (hasName) {
									sourceName += "*";
									hasName = usedNamesSet.has(sourceName);
								}
								moduleToSourceNameMapping.set(module, sourceName);
								usedNamesSet.add(sourceName);
							}

							let taskIndex = 0;

							asyncLib.each(
								tasks,
								(task, callback) => {
									const assets = Object.create(null);
									const assetsInfo = Object.create(null);
									const file = task.file;
									const chunk = fileToChunk.get(file);
									const sourceMap = task.sourceMap;
									const source = task.source;
									const modules = task.modules;

									reportProgress(
										0.5 + (0.5 * taskIndex) / tasks.length,
										file,
										"attach SourceMap"
									);

									const moduleFilenames = modules.map(m =>
										moduleToSourceNameMapping.get(m)
									);
									sourceMap.sources = /** @type {string[]} */ (moduleFilenames);
									if (options.noSources) {
										sourceMap.sourcesContent = undefined;
									}
									sourceMap.sourceRoot = options.sourceRoot || "";
									sourceMap.file = file;
									const usesContentHash =
										sourceMapFilename &&
										CONTENT_HASH_DETECT_REGEXP.test(sourceMapFilename);

									resetRegexpState(CONTENT_HASH_DETECT_REGEXP);

									// If SourceMap and asset uses contenthash, avoid a circular dependency by hiding hash in `file`
									if (usesContentHash && task.assetInfo.contenthash) {
										const contenthash = task.assetInfo.contenthash;
										const pattern = Array.isArray(contenthash)
											? contenthash.map(quoteMeta).join("|")
											: quoteMeta(contenthash);
										sourceMap.file = sourceMap.file.replace(
											new RegExp(pattern, "g"),
											m => "x".repeat(m.length)
										);
									}

									/** @type {false | TemplatePath} */
									let currentSourceMappingURLComment = sourceMappingURLComment;
									const cssExtensionDetected =
										CSS_EXTENSION_DETECT_REGEXP.test(file);
									resetRegexpState(CSS_EXTENSION_DETECT_REGEXP);
									if (
										currentSourceMappingURLComment !== false &&
										typeof currentSourceMappingURLComment !== "function" &&
										cssExtensionDetected
									) {
										currentSourceMappingURLComment =
											currentSourceMappingURLComment.replace(
												URL_FORMATTING_REGEXP,
												"\n/*$1*/"
											);
									}

									if (options.debugIds) {
										const debugId = generateDebugId(source, sourceMap.file);
										sourceMap.debugId = debugId;
										currentSourceMappingURLComment = `\n//# debugId=${debugId}${currentSourceMappingURLComment}`;
									}

									const sourceMapString = JSON.stringify(sourceMap);
									if (sourceMapFilename) {
										const filename = file;
										const sourceMapContentHash =
											/** @type {string} */
											(
												usesContentHash &&
													createHash(
														/** @type {Algorithm} */
														(compilation.outputOptions.hashFunction)
													)
														.update(sourceMapString)
														.digest("hex")
											);
										const pathParams = {
											chunk,
											filename: options.fileContext
												? relative(
														outputFs,
														`/${options.fileContext}`,
														`/${filename}`
													)
												: filename,
											contentHash: sourceMapContentHash
										};
										const { path: sourceMapFile, info: sourceMapInfo } =
											compilation.getPathWithInfo(
												sourceMapFilename,
												pathParams
											);
										const sourceMapUrl = options.publicPath
											? options.publicPath + sourceMapFile
											: relative(
													outputFs,
													dirname(outputFs, `/${file}`),
													`/${sourceMapFile}`
												);
										/** @type {Source} */
										let asset = new RawSource(source);
										if (currentSourceMappingURLComment !== false) {
											// Add source map url to compilation asset, if currentSourceMappingURLComment is set
											asset = new ConcatSource(
												asset,
												compilation.getPath(currentSourceMappingURLComment, {
													url: sourceMapUrl,
													...pathParams
												})
											);
										}
										const assetInfo = {
											related: { sourceMap: sourceMapFile }
										};
										assets[file] = asset;
										assetsInfo[file] = assetInfo;
										compilation.updateAsset(file, asset, assetInfo);
										// Add source map file to compilation assets and chunk files
										const sourceMapAsset = new RawSource(sourceMapString);
										const sourceMapAssetInfo = {
											...sourceMapInfo,
											development: true
										};
										assets[sourceMapFile] = sourceMapAsset;
										assetsInfo[sourceMapFile] = sourceMapAssetInfo;
										compilation.emitAsset(
											sourceMapFile,
											sourceMapAsset,
											sourceMapAssetInfo
										);
										if (chunk !== undefined)
											chunk.auxiliaryFiles.add(sourceMapFile);
									} else {
										if (currentSourceMappingURLComment === false) {
											throw new Error(
												"SourceMapDevToolPlugin: append can't be false when no filename is provided"
											);
										}
										if (typeof currentSourceMappingURLComment === "function") {
											throw new Error(
												"SourceMapDevToolPlugin: append can't be a function when no filename is provided"
											);
										}
										/**
										 * Add source map as data url to asset
										 */
										const asset = new ConcatSource(
											new RawSource(source),
											currentSourceMappingURLComment
												.replace(MAP_URL_COMMENT_REGEXP, () => sourceMapString)
												.replace(
													URL_COMMENT_REGEXP,
													() =>
														`data:application/json;charset=utf-8;base64,${Buffer.from(
															sourceMapString,
															"utf-8"
														).toString("base64")}`
												)
										);
										assets[file] = asset;
										assetsInfo[file] = undefined;
										compilation.updateAsset(file, asset);
									}

									task.cacheItem.store({ assets, assetsInfo }, err => {
										reportProgress(
											0.5 + (0.5 * ++taskIndex) / tasks.length,
											task.file,
											"attached SourceMap"
										);

										if (err) {
											return callback(err);
										}
										callback();
									});
								},
								err => {
									reportProgress(1);
									callback(err);
								}
							);
						}
					);
				}
			);
		});
	}
}

module.exports = SourceMapDevToolPlugin;
